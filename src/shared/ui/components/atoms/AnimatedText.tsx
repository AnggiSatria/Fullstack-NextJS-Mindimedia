"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface AnimatedTextProps {
  text: string;
}

export default function AnimatedText({ text }: AnimatedTextProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "end 40%"],
  });

  const words = text.split(" ");

  return (
    <div ref={containerRef} className="relative overflow-hidden text-center">
      {words.map((word, i) => {
        const start = i / (words.length * 1.5);
        const end = start + 1 / (words.length * 1.5);

        const opacity: MotionValue<number> = useTransform(
          scrollYProgress,
          [start, end],
          [0, 1]
        );

        return (
          <motion.span
            key={i}
            style={{ opacity }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="inline-block mx-1 text-3xl sm:text-base md:text-xl lg:text-3xl xl:text-4xl font-americana text-[#c69c4d]"
          >
            {word}
          </motion.span>
        );
      })}
    </div>
  );
}
