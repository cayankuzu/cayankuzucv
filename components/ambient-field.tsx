"use client";

import { useEffect, useRef } from "react";

export type AmbientFieldVariant = "constellation" | "orbit" | "flow";

type AmbientFieldProps = {
  variant?: AmbientFieldVariant;
};

function getOrbitPoint(index: number, total: number, variant: AmbientFieldVariant) {
  const progress = index / total;
  const angle = progress * Math.PI * 2;

  if (variant === "flow") {
    return [
      -1.9 + progress * 3.8,
      Math.sin(progress * Math.PI * 4) * 0.44,
      Math.cos(progress * Math.PI * 2) * 0.18,
    ];
  }

  const verticalRadius = variant === "orbit" ? 0.88 : 0.72;
  return [Math.cos(angle) * 2.02, Math.sin(angle) * verticalRadius, Math.sin(angle) * 0.18];
}

export function AmbientField({ variant = "constellation" }: AmbientFieldProps) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) {
      return;
    }

    const target = host;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches || window.innerWidth < 861) {
      target.dataset.state = "disabled";
      return;
    }

    let disposed = false;
    let frame = 0;
    let inView = true;
    let pageVisible = !document.hidden;
    let cleanup = () => {};

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

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.2));
      renderer.setClearColor(0x000000, 0);
      target.replaceChildren(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 24);
      camera.position.set(0, 0, 5.8);

      const group = new THREE.Group();
      group.scale.setScalar(variant === "flow" ? 0.96 : 1.04);
      scene.add(group);

      const colors = {
        constellation: { primary: 0x9bd8d2, secondary: 0xd7fffb, points: 0xbff5ef },
        orbit: { primary: 0xa9e5df, secondary: 0x78c5bf, points: 0xd9fffa },
        flow: { primary: 0x8dd6d0, secondary: 0xb8ebe6, points: 0xcffcf7 },
      } as const;
      const palette = colors[variant];

      const coreGeometry =
        variant === "constellation"
          ? new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(1.16, 2))
          : variant === "orbit"
            ? new THREE.WireframeGeometry(new THREE.SphereGeometry(1.08, 14, 10))
            : new THREE.WireframeGeometry(new THREE.TorusKnotGeometry(0.76, 0.16, 96, 8));
      const core = new THREE.LineSegments(
        coreGeometry,
        new THREE.LineBasicMaterial({ color: palette.primary, transparent: true, opacity: 0.31 }),
      );
      group.add(core);

      const accentGeometry =
        variant === "orbit"
          ? new THREE.WireframeGeometry(new THREE.TorusGeometry(0.92, 0.11, 8, 40))
          : new THREE.WireframeGeometry(new THREE.TorusKnotGeometry(0.86, 0.18, 96, 8));
      const accent = new THREE.LineSegments(
        accentGeometry,
        new THREE.LineBasicMaterial({ color: palette.secondary, transparent: true, opacity: 0.15 }),
      );
      accent.rotation.set(0.58, 0.18, variant === "flow" ? 0.72 : -0.28);
      group.add(accent);

      const particleCount = variant === "constellation" ? 82 : 54;
      const particlePositions = new Float32Array(particleCount * 3);
      for (let index = 0; index < particleCount; index += 1) {
        const radius = 1.08 + Math.random() * (variant === "flow" ? 1.08 : 1.28);
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        particlePositions[index * 3] = radius * Math.sin(phi) * Math.cos(theta);
        particlePositions[index * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.84;
        particlePositions[index * 3 + 2] = radius * Math.cos(phi) * 0.48;
      }
      const particleGeometry = new THREE.BufferGeometry();
      particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
      const points = new THREE.Points(
        particleGeometry,
        new THREE.PointsMaterial({ color: palette.points, size: 0.03, transparent: true, opacity: 0.48 }),
      );
      group.add(points);

      const fieldCount = variant === "constellation" ? 44 : 30;
      const fieldPositions = new Float32Array(fieldCount * 3);
      for (let index = 0; index < fieldCount; index += 1) {
        fieldPositions[index * 3] = (Math.random() - 0.5) * 4.15;
        fieldPositions[index * 3 + 1] = (Math.random() - 0.5) * 4.9;
        fieldPositions[index * 3 + 2] = -0.8 - Math.random() * 0.9;
      }
      const fieldGeometry = new THREE.BufferGeometry();
      fieldGeometry.setAttribute("position", new THREE.BufferAttribute(fieldPositions, 3));
      const field = new THREE.Points(
        fieldGeometry,
        new THREE.PointsMaterial({ color: palette.primary, size: 0.016, transparent: true, opacity: 0.25 }),
      );
      group.add(field);

      const orbitPoints = Array.from({ length: 96 }, (_, index) => {
        const [x, y, z] = getOrbitPoint(index, 95, variant);
        return new THREE.Vector3(x, y, z);
      });
      const orbit =
        variant === "flow"
          ? new THREE.Line(
              new THREE.BufferGeometry().setFromPoints(orbitPoints),
              new THREE.LineBasicMaterial({ color: palette.primary, transparent: true, opacity: 0.3 }),
            )
          : new THREE.LineLoop(
              new THREE.BufferGeometry().setFromPoints(orbitPoints),
              new THREE.LineBasicMaterial({ color: palette.primary, transparent: true, opacity: 0.24 }),
            );
      orbit.rotation.x = variant === "flow" ? 0.08 : 0.3;
      group.add(orbit);

      function resize() {
        const width = target.clientWidth;
        const height = target.clientHeight;
        if (width < 40 || height < 40) {
          return;
        }
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }

      function render() {
        frame = 0;
        if (!inView || !pageVisible) {
          return;
        }

        if (variant === "constellation") {
          group.rotation.y += 0.0021;
          core.rotation.x += 0.0009;
          accent.rotation.y -= 0.0014;
          accent.rotation.z += 0.0007;
          points.rotation.y -= 0.0008;
        } else if (variant === "orbit") {
          group.rotation.y -= 0.00155;
          group.rotation.z += 0.0006;
          accent.rotation.x += 0.0014;
          orbit.rotation.z -= 0.0021;
          points.rotation.y += 0.0006;
        } else {
          group.rotation.y += 0.00115;
          core.rotation.z += 0.0013;
          accent.rotation.x -= 0.0011;
          orbit.rotation.z += 0.0009;
          points.rotation.y += 0.001;
        }

        field.rotation.y += 0.00045;
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
      document.addEventListener("visibilitychange", onVisibilityChange);
      target.dataset.state = "active";
      syncAnimation();

      cleanup = () => {
        if (frame) {
          window.cancelAnimationFrame(frame);
        }
        resizeObserver.disconnect();
        intersectionObserver.disconnect();
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
        target.replaceChildren();
      };
    }

    void mount();

    return () => {
      disposed = true;
      cleanup();
    };
  }, [variant]);

  return <div ref={hostRef} className={`ambientField ambientField--${variant}`} aria-hidden="true" />;
}
