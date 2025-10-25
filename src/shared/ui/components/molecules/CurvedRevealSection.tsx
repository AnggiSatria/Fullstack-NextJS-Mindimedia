"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CurvedRevealSection() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const borderRadius = useTransform(
    scrollYProgress,
    [0, 1],
    ["60% 60% 0 0", "0%"]
  );

  const translateY = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{
          borderTopLeftRadius: borderRadius,
          borderTopRightRadius: borderRadius,
          translateY,
          scale,
          backgroundImage:
            "url('https://images.prismic.io/ulaman/ZpZPRh5LeNNTxMAj_ulaman.jpg?auto=format,compress')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute bottom-0 w-full h-screen"
      />
    </section>
  );
}
