// "use client";

// import Image from "next/image";
// import { useRef, useEffect } from "react";

// interface ParallaxImageProps {
//   src: string;
//   alt?: string;
//   className?: string; // untuk container
//   imgClassName?: string; // untuk image
//   height?: number | string;
//   maxTranslate?: number; // seberapa jauh isi foto bergerak (px)
//   priority?: boolean;
// }

// export default function ParallaxImage({
//   src,
//   alt = "",
//   className = "",
//   imgClassName = "",
//   height = 400,
//   maxTranslate = 40,
//   priority = false,
// }: ParallaxImageProps) {
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const imgRef = useRef<HTMLDivElement | null>(null); // next/image dibungkus span -> pakai div wrapper
//   const rafRef = useRef<number | null>(null);
//   const ticking = useRef(false);

//   useEffect(() => {
//     const container = containerRef.current;
//     const img = imgRef.current;
//     if (!container || !img) return;

//     img.style.willChange = "transform";
//     img.style.transform = "translateY(0px)";

//     const update = () => {
//       const rect = container.getBoundingClientRect();
//       const vh = window.innerHeight || document.documentElement.clientHeight;

//       // progress dari 0 (di atas viewport) ke 1 (di bawah viewport)
//       const progress = Math.min(
//         Math.max((vh - rect.top) / (vh + rect.height), 0),
//         1
//       );

//       const translate = (progress - 0.5) * 2 * maxTranslate;
//       img.style.transform = `translateY(${translate}px)`;

//       ticking.current = false;
//       rafRef.current = null;
//     };

//     const onScroll = () => {
//       if (ticking.current) return;
//       ticking.current = true;
//       rafRef.current = requestAnimationFrame(update);
//     };

//     update(); // initial
//     window.addEventListener("scroll", onScroll, { passive: true });
//     window.addEventListener("resize", onScroll);

//     return () => {
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//       window.removeEventListener("scroll", onScroll);
//       window.removeEventListener("resize", onScroll);
//     };
//   }, [maxTranslate]);

//   const heightStyle =
//     typeof height === "number" ? `${height}px` : (height as string);

//   return (
//     <div
//       ref={containerRef}
//       className={`relative overflow-hidden ${className}`}
//       style={{ height: heightStyle }}
//     >
//       <div ref={imgRef} className="absolute inset-0">
//         <Image
//           src={src}
//           alt={alt}
//           fill
//           priority={priority}
//           sizes="100vw"
//           className={`object-cover ${imgClassName}`}
//         />
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

interface ParallaxImageProps {
  src: string;
  alt?: string;
  className?: string; // untuk container
  imgClassName?: string; // untuk image
  height?: number | string;
  maxTranslate?: number; // seberapa jauh isi foto bergerak (px)
  priority?: boolean;
}

export default function ParallaxImage({
  src,
  alt = "",
  className = "",
  imgClassName = "",
  height = 400,
  maxTranslate = 40,
  priority = false,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imgWrapperRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const ticking = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    const imgWrapper = imgWrapperRef.current;
    if (!container || !imgWrapper) return;

    imgWrapper.style.willChange = "transform";
    imgWrapper.style.transform = "translateY(0px)";

    const update = () => {
      const rect = container.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;

      // progress dari 0 (di atas viewport) ke 1 (di bawah viewport)
      const progress = Math.min(
        Math.max((vh - rect.top) / (vh + rect.height), 0),
        1
      );

      const translate = (progress - 0.5) * 2 * maxTranslate;
      imgWrapper.style.transform = `translateY(${translate}px)`;

      ticking.current = false;
      rafRef.current = null;
    };

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      rafRef.current = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [maxTranslate]);

  const heightStyle =
    typeof height === "number" ? `${height}px` : (height as string);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ height: heightStyle }}
    >
      <div
        ref={imgWrapperRef}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          unoptimized // ⚠️ penting untuk efek scroll
          className={`object-cover ${imgClassName}`}
        />
      </div>
    </div>
  );
}
