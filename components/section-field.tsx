"use client";

import { useEffect, useRef } from "react";

export type SectionFieldKind = "profile" | "projects" | "focus" | "goals";

type SectionFieldProps = {
  kind: SectionFieldKind;
};

function randomPoint(radius: number) {
  const theta = Math.random() * Math.PI * 2;
  const phi = Math.acos(2 * Math.random() - 1);

  return [
    radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.sin(phi) * Math.sin(theta),
    radius * Math.cos(phi),
  ];
}

export function SectionField({ kind }: SectionFieldProps) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) {
      return;
    }
    const target = host;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches || window.innerWidth < 861) {
      host.dataset.state = "disabled";
      return;
    }

    let disposed = false;
    let frame = 0;
    let inView = true;
    let pageVisible = !document.hidden;
    let cleanup = () => {};
    const pointer = { x: 0, y: 0 };

    async function mount() {
      const THREE = await import("three");
      if (disposed) {
        return;
      }

      const probe = document.createElement("canvas");
      if (!probe.getContext("webgl2") && !probe.getContext("webgl")) {
        target.dataset.state = "disabled";
        return;
      }

      let renderer: InstanceType<typeof THREE.WebGLRenderer>;
      try {
        renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true,
          powerPreference: "low-power",
        });
      } catch {
        target.dataset.state = "disabled";
        return;
      }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));
      renderer.setClearColor(0x000000, 0);
      target.replaceChildren(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 24);
      camera.position.set(0, 0, 5.8);

      const group = new THREE.Group();
      scene.add(group);

      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x1f716b,
        transparent: true,
        opacity: 0.5,
      });
      const paleMaterial = new THREE.LineBasicMaterial({
        color: 0x7ea6a2,
        transparent: true,
        opacity: 0.34,
      });
      const pointMaterial = new THREE.PointsMaterial({
        color: 0x1f716b,
        size: 0.046,
        transparent: true,
        opacity: 0.8,
      });

      let updateVariant: (time: number) => void = () => {};

      if (kind === "profile") {
        const grid = new THREE.GridHelper(3.3, 6, 0x7ea6a2, 0xa8bfbd);
        grid.position.y = -0.56;
        grid.rotation.x = 0.55;
        group.add(grid);

        const orbitPoints = Array.from({ length: 90 }, (_, index) => {
          const angle = (index / 90) * Math.PI * 2;
          return new THREE.Vector3(Math.cos(angle) * 1.16, Math.sin(angle) * 0.46, Math.sin(angle) * 0.26);
        });
        const orbit = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(orbitPoints), lineMaterial);
        orbit.rotation.x = 0.55;
        group.add(orbit);

        const nodes = new Float32Array(42 * 3);
        for (let index = 0; index < 42; index += 1) {
          const [x, y, z] = randomPoint(0.44 + Math.random() * 1.04);
          nodes[index * 3] = x;
          nodes[index * 3 + 1] = y;
          nodes[index * 3 + 2] = z * 0.42;
        }
        const nodeGeometry = new THREE.BufferGeometry();
        nodeGeometry.setAttribute("position", new THREE.BufferAttribute(nodes, 3));
        const nodeCloud = new THREE.Points(nodeGeometry, pointMaterial);
        group.add(nodeCloud);

        const signalGeometry = new THREE.BufferGeometry();
        signalGeometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array([1.16, 0, 0]), 3));
        const signal = new THREE.Points(
          signalGeometry,
          new THREE.PointsMaterial({ color: 0x1f716b, size: 0.085, transparent: true, opacity: 0.92 }),
        );
        group.add(signal);

        updateVariant = (time) => {
          orbit.rotation.z += 0.003;
          nodeCloud.rotation.y -= 0.002;
          const progress = time * 0.00016;
          const signalPosition = signalGeometry.getAttribute("position");
          signalPosition.setXYZ(0, Math.cos(progress) * 1.16, Math.sin(progress) * 0.46, Math.sin(progress * 2) * 0.26);
          signalPosition.needsUpdate = true;
        };
      }

      if (kind === "projects") {
        const cardGeometry = new THREE.WireframeGeometry(new THREE.BoxGeometry(0.7, 0.46, 0.06));
        const cardPositions = [
          new THREE.Vector3(-0.7, 0.46, 0.02),
          new THREE.Vector3(0.7, 0.46, -0.08),
          new THREE.Vector3(-0.7, -0.46, -0.08),
          new THREE.Vector3(0.7, -0.46, 0.02),
        ];
        const cards = cardPositions.map((position, index) => {
          const card = new THREE.LineSegments(cardGeometry.clone(), index === 0 ? lineMaterial : paleMaterial);
          card.position.copy(position);
          card.rotation.set(position.y * 0.32, -position.x * 0.24, (index - 1.5) * 0.1);
          group.add(card);
          return card;
        });

        const route = new THREE.CatmullRomCurve3([
          cardPositions[0].clone(),
          cardPositions[1].clone(),
          cardPositions[3].clone(),
          cardPositions[2].clone(),
          cardPositions[0].clone(),
        ]);
        const routeLine = new THREE.Line(
          new THREE.BufferGeometry().setFromPoints(route.getPoints(72)),
          new THREE.LineBasicMaterial({ color: 0x7ea6a2, transparent: true, opacity: 0.28 }),
        );
        group.add(routeLine);

        const cursorGeometry = new THREE.BufferGeometry();
        cursorGeometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(3), 3));
        const cursor = new THREE.Points(
          cursorGeometry,
          new THREE.PointsMaterial({ color: 0x1f716b, size: 0.075, transparent: true, opacity: 0.95 }),
        );
        group.add(cursor);

        updateVariant = (time) => {
          group.rotation.x += (pointer.y - group.rotation.x) * 0.035;
          group.rotation.y += (pointer.x - group.rotation.y) * 0.035;
          cards.forEach((card, index) => {
            card.rotation.z += (index % 2 === 0 ? 1 : -1) * 0.00055;
          });
          const cursorPosition = cursorGeometry.getAttribute("position");
          const position = route.getPointAt((time * 0.000075) % 1);
          cursorPosition.setXYZ(0, position.x, position.y, position.z + 0.08);
          cursorPosition.needsUpdate = true;
        };
      }

      if (kind === "focus") {
        const core = new THREE.LineSegments(
          new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(1.08, 2)),
          lineMaterial,
        );
        group.add(core);

        const orbitPoints = Array.from({ length: 84 }, (_, index) => {
          const angle = (index / 84) * Math.PI * 2;
          return new THREE.Vector3(Math.cos(angle) * 1.72, Math.sin(angle) * 0.52, Math.sin(angle) * 0.3);
        });
        const orbit = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(orbitPoints), paleMaterial);
        orbit.rotation.x = 0.45;
        group.add(orbit);

        const particles = new Float32Array(38 * 3);
        for (let index = 0; index < 38; index += 1) {
          const [x, y, z] = randomPoint(1.15 + Math.random() * 0.68);
          particles[index * 3] = x;
          particles[index * 3 + 1] = y;
          particles[index * 3 + 2] = z * 0.55;
        }
        const particleGeometry = new THREE.BufferGeometry();
        particleGeometry.setAttribute("position", new THREE.BufferAttribute(particles, 3));
        const particleCloud = new THREE.Points(particleGeometry, pointMaterial);
        group.add(particleCloud);

        const focusNodePositions = Array.from({ length: 7 }, (_, index) => {
          const angle = (index / 7) * Math.PI * 2 - Math.PI / 2;
          return new THREE.Vector3(Math.cos(angle) * 1.48, Math.sin(angle) * 0.86, Math.sin(angle * 2) * 0.12);
        });
        const spokePoints = focusNodePositions.flatMap((position) => [new THREE.Vector3(0, 0, 0), position]);
        const spokes = new THREE.LineSegments(
          new THREE.BufferGeometry().setFromPoints(spokePoints),
          new THREE.LineBasicMaterial({ color: 0x7ea6a2, transparent: true, opacity: 0.18 }),
        );
        group.add(spokes);
        const focusNodeGeometry = new THREE.BufferGeometry().setFromPoints(focusNodePositions);
        const focusNodes = new THREE.Points(
          focusNodeGeometry,
          new THREE.PointsMaterial({ color: 0x1f716b, size: 0.055, transparent: true, opacity: 0.76 }),
        );
        group.add(focusNodes);

        updateVariant = (time) => {
          core.rotation.x += (pointer.y * 0.72 - core.rotation.x) * 0.025;
          core.rotation.y += 0.003;
          core.rotation.z += (pointer.x * 0.52 - core.rotation.z) * 0.025;
          orbit.rotation.z -= 0.002;
          particleCloud.rotation.y -= 0.0015;
          spokes.rotation.z += 0.0009;
          focusNodes.rotation.z += 0.0009;
          const pulse = 1 + Math.sin(time * 0.002) * 0.08;
          focusNodes.scale.setScalar(pulse);
        };
      }

      if (kind === "goals") {
        const curve = new THREE.CatmullRomCurve3([
          new THREE.Vector3(-1.72, -0.94, 0),
          new THREE.Vector3(-0.9, -0.1, 0.16),
          new THREE.Vector3(-0.16, -0.54, 0.04),
          new THREE.Vector3(0.62, 0.72, -0.04),
          new THREE.Vector3(1.66, 1.02, 0),
        ]);
        const path = new THREE.Line(new THREE.BufferGeometry().setFromPoints(curve.getPoints(80)), lineMaterial);
        group.add(path);

        const travelerCount = 18;
        const travelerPositions = new Float32Array(travelerCount * 3);
        const travelerGeometry = new THREE.BufferGeometry();
        travelerGeometry.setAttribute("position", new THREE.BufferAttribute(travelerPositions, 3));
        const travelers = new THREE.Points(travelerGeometry, pointMaterial);
        group.add(travelers);

        const milestones = [0.22, 0.54, 0.84].map((progress) => curve.getPointAt(progress));
        const milestoneGeometry = new THREE.BufferGeometry().setFromPoints(milestones);
        const milestonePoints = new THREE.Points(
          milestoneGeometry,
          new THREE.PointsMaterial({ color: 0x7ea6a2, size: 0.07, transparent: true, opacity: 0.82 }),
        );
        group.add(milestonePoints);

        const destination = curve.getPointAt(1);
        const destinationRing = new THREE.LineLoop(
          new THREE.BufferGeometry().setFromPoints(
            Array.from({ length: 36 }, (_, index) => {
              const angle = (index / 35) * Math.PI * 2;
              return new THREE.Vector3(destination.x + Math.cos(angle) * 0.15, destination.y + Math.sin(angle) * 0.15, destination.z);
            }),
          ),
          new THREE.LineBasicMaterial({ color: 0x1f716b, transparent: true, opacity: 0.55 }),
        );
        group.add(destinationRing);

        updateVariant = (time) => {
          const position = travelerGeometry.getAttribute("position");
          if (!position) {
            return;
          }
          for (let index = 0; index < travelerCount; index += 1) {
            const point = curve.getPointAt((time * 0.000045 + index / travelerCount) % 1);
            position.setXYZ(index, point.x, point.y, point.z + 0.04);
          }
          position.needsUpdate = true;
          group.rotation.y += (pointer.x * 0.24 - group.rotation.y) * 0.02;
          group.rotation.x += (pointer.y * 0.16 - group.rotation.x) * 0.02;
          destinationRing.rotation.z += 0.002;
          const destinationPulse = 1 + Math.sin(time * 0.003) * 0.1;
          destinationRing.scale.setScalar(destinationPulse);
        };
      }

      function resize() {
        const width = target.clientWidth;
        const height = target.clientHeight;
        if (width < 24 || height < 24) {
          return;
        }
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }

      function render(time: number) {
        frame = 0;
        if (!inView || !pageVisible) {
          return;
        }
        updateVariant(time);
        renderer.render(scene, camera);
        frame = window.requestAnimationFrame(render);
      }

      function syncAnimation() {
        if (inView && pageVisible && !frame) {
          frame = window.requestAnimationFrame(render);
        }
        if ((!inView || !pageVisible) && frame) {
          window.cancelAnimationFrame(frame);
          frame = 0;
        }
      }

      function onPointerMove(event: PointerEvent) {
        const bounds = target.getBoundingClientRect();
        pointer.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 0.72;
        pointer.y = ((event.clientY - bounds.top) / bounds.height - 0.5) * -0.52;
      }

      function onPointerLeave() {
        pointer.x = 0;
        pointer.y = 0;
      }

      const resizeObserver = new ResizeObserver(resize);
      const intersectionObserver = new IntersectionObserver(
        ([entry]) => {
          inView = entry.isIntersecting;
          syncAnimation();
        },
        { threshold: 0.05 },
      );
      const onVisibilityChange = () => {
        pageVisible = !document.hidden;
        syncAnimation();
      };

      resize();
      resizeObserver.observe(target);
      intersectionObserver.observe(target);
      target.addEventListener("pointermove", onPointerMove, { passive: true });
      target.addEventListener("pointerleave", onPointerLeave, { passive: true });
      document.addEventListener("visibilitychange", onVisibilityChange);
      syncAnimation();
      target.dataset.state = "active";

      cleanup = () => {
        if (frame) {
          window.cancelAnimationFrame(frame);
        }
        resizeObserver.disconnect();
        intersectionObserver.disconnect();
        target.removeEventListener("pointermove", onPointerMove);
        target.removeEventListener("pointerleave", onPointerLeave);
        document.removeEventListener("visibilitychange", onVisibilityChange);
        scene.traverse((object) => {
          const renderable = object as typeof object & {
            geometry?: { dispose: () => void };
            material?: { dispose: () => void } | Array<{ dispose: () => void }>;
          };
          renderable.geometry?.dispose();
          if (Array.isArray(renderable.material)) {
            renderable.material.forEach((material) => material.dispose());
          } else {
            renderable.material?.dispose();
          }
        });
        renderer.dispose();
        renderer.domElement.remove();
      };
    }

    void mount();

    return () => {
      disposed = true;
      cleanup();
    };
  }, [kind]);

  return <div ref={hostRef} className={`sectionField sectionField--${kind}`} aria-hidden="true" />;
}
