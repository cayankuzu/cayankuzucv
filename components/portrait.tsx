"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useRef } from "react";

type PortraitProps = {
  src: string;
  alt: string;
  openLabel: string;
  closeLabel: string;
};

export function Portrait({ src, alt, openLabel, closeLabel }: PortraitProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        className="portraitButton"
        onClick={() => dialogRef.current?.showModal()}
        aria-haspopup="dialog"
        aria-label={openLabel}
      >
        <Image src={src} alt={alt} fill preload sizes="(max-width: 767px) 72px, 128px" />
      </button>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label={alt}
        onClick={(event) => {
          // Görselin dışına (arka plana) tıklanınca kapanır.
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
      >
        <figure className="lightboxFigure">
          <Image src={src} alt={alt} width={1080} height={1920} sizes="(max-width: 767px) 90vw, 480px" />
        </figure>
        <form method="dialog">
          <button className="lightboxClose" type="submit" aria-label={closeLabel} autoFocus>
            <X aria-hidden="true" size={18} strokeWidth={2} />
          </button>
        </form>
      </dialog>
    </>
  );
}
