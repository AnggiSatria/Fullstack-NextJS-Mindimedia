// "use client";

// import { motion, useMotionValue, useTransform } from "framer-motion";
// import { useRef, useState, useEffect, Children } from "react";

// interface SliderCarouselSwipeProps {
//   children: React.ReactNode;
//   gap?: number;
//   className?: string;
//   visibleCards?: number;
// }

// export default function SliderCarouselSwipe({
//   children,
//   gap = 24,
//   className = "",
//   visibleCards = 1,
// }: SliderCarouselSwipeProps) {
//   const carouselRef = useRef<HTMLDivElement>(null);
//   const [width, setWidth] = useState(0);

//   const x = useMotionValue(0);
//   const transformX = useTransform(x, (latest) => latest);

//   useEffect(() => {
//     if (carouselRef.current) {
//       const scrollWidth = carouselRef.current.scrollWidth;
//       const offsetWidth = carouselRef.current.offsetWidth;
//       setWidth(scrollWidth - offsetWidth);
//     }
//   }, [children]);

//   const total = Children.count(children);
//   const childWidth = `${100 / visibleCards}%`;

//   return (
//     <div className={`overflow-hidden w-full ${className}`}>
//       <motion.div
//         ref={carouselRef}
//         className="flex cursor-grab active:cursor-grabbing"
//         drag="x"
//         dragConstraints={{ right: 0, left: -width }}
//         style={{ x: transformX, gap }}
//         transition={{ type: "spring", stiffness: 300, damping: 30 }}
//       >
//         {Children.map(children, (child) => (
//           <div className="shrink-0" style={{ width: childWidth }}>
//             {child}
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// }

"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState, useEffect, Children } from "react";

interface SliderCarouselSwipeProps {
  children: React.ReactNode;
  gap?: number;
  className?: string;
  visibleCards?: number;
}

export default function SliderCarouselSwipe({
  children,
  gap = 24,
  className = "",
  visibleCards = 1,
}: SliderCarouselSwipeProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  const x = useMotionValue(0);
  const transformX = useTransform(x, (latest) => latest);

  useEffect(() => {
    const measure = () => {
      if (innerRef.current && carouselRef.current) {
        const scrollWidth = innerRef.current.scrollWidth;
        const offsetWidth = carouselRef.current.offsetWidth;
        setWidth(scrollWidth - offsetWidth);
      }
    };

    measure();
    // tambahkan listener resize agar width update kalau viewport berubah
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [children]);

  const childWidth = `${100 / visibleCards}%`;

  return (
    <div ref={carouselRef} className={`overflow-hidden w-full ${className}`}>
      <motion.div
        ref={innerRef}
        className="flex cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        style={{ x: transformX, gap }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {Children.map(children, (child) => (
          <div className="shrink-0" style={{ width: childWidth }}>
            {child}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
