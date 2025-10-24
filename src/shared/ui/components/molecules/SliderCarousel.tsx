// "use client";

// import { useState, useRef } from "react";
// import { motion } from "framer-motion";

// interface CarouselProps {
//   items: React.ReactNode[];
//   visibleCards?: number;
//   gap?: number;
// }

// export default function SliderCarousel({
//   items,
//   visibleCards = 3,
//   gap = 20,
// }: CarouselProps) {
//   const [index, setIndex] = useState(0);
//   const containerRef = useRef<HTMLDivElement>(null);

//   const maxIndex = Math.max(0, items.length - visibleCards);

//   const next = () => {
//     setIndex((prev) => Math.min(prev + 1, maxIndex));
//   };

//   const prev = () => {
//     setIndex((prev) => Math.max(prev - 1, 0));
//   };

//   const cardWidthPercent = 100 / visibleCards;

//   return (
//     <div className="relative w-full overflow-hidden">
//       <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-3 p-2">
//         <button
//           onClick={prev}
//           disabled={index === 0}
//           className="w-10 h-10 border border-[#b59453] text-[#b59453] rounded-sm flex items-center justify-center hover:bg-[#b59453] hover:text-white transition disabled:opacity-40 cursor-pointer"
//           aria-label="Previous"
//         >
//           ←
//         </button>
//         <button
//           onClick={next}
//           disabled={index === maxIndex}
//           className="w-10 h-10 border border-[#b59453] text-[#b59453] rounded-sm flex items-center justify-center hover:bg-[#b59453] hover:text-white transition disabled:opacity-40 cursor-pointer"
//           aria-label="Next"
//         >
//           →
//         </button>
//       </div>

//       <motion.div
//         ref={containerRef}
//         className="flex items-stretch"
//         style={{ gap: `${gap}px`, padding: `0 ${208}px` }}
//         animate={{
//           x: `calc(-${index * cardWidthPercent}% - ${index * gap}px)`,
//         }}
//         transition={{ type: "spring", stiffness: 120, damping: 20 }}
//       >
//         {items.map((item, i) => (
//           <motion.div
//             key={i}
//             className="shrink-0"
//             style={{ width: `${cardWidthPercent}%` }}
//           >
//             <div className="mx-0 rounded-lg overflow-hidden shadow-sm bg-white border border-black">
//               {item}
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// }

"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

interface CarouselProps {
  items: React.ReactNode[];
  visibleCards?: number;
  gap?: number;
}

export default function SliderCarousel({
  items,
  visibleCards = 3,
  gap = 20,
}: CarouselProps) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const maxIndex = Math.max(0, items.length - visibleCards);

  const next = () => setIndex((prev) => Math.min(prev + 1, maxIndex));
  const prev = () => setIndex((prev) => Math.max(prev - 1, 0));

  const cardWidthPercent = 100 / visibleCards;

  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-3 p-2">
        <button
          onClick={prev}
          disabled={index === 0}
          className="w-10 h-10 border border-[#b59453] text-[#b59453] rounded-sm flex items-center justify-center hover:bg-[#b59453] hover:text-white transition disabled:opacity-40 cursor-pointer"
          aria-label="Previous"
        >
          ←
        </button>
        <button
          onClick={next}
          disabled={index === maxIndex}
          className="w-10 h-10 border border-[#b59453] text-[#b59453] rounded-sm flex items-center justify-center hover:bg-[#b59453] hover:text-white transition disabled:opacity-40 cursor-pointer"
          aria-label="Next"
        >
          →
        </button>
      </div>

      <motion.div
        ref={containerRef}
        className="flex items-stretch px-5 sm:px-9 lg:px-20 2xl:px-52"
        style={{ gap: `${gap}px` }}
        animate={{
          x: `calc(-${index * cardWidthPercent}% - ${index * gap}px)`,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      >
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="shrink-0"
            style={{ width: `${cardWidthPercent}%` }}
          >
            <div>{item}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
