"use client";

import { motion } from "framer-motion";

export default function FooterMarquee() {
  const items = [
    "The Avatar Experience | 3 days 2 nights",
    "The Ultimate Honeymoon | 3 days 2 nights",
    "The Avatar Experience | 3 days 2 nights",
    "The Ultimate Honeymoon | 3 days 2 nights",
  ];

  return (
    <div className="w-full bg-[#efebe2] h-7 flex items-center overflow-hidden relative">
      <motion.div
        className="flex whitespace-nowrap gap-6 text-[#4b564c] text-sm font-light leading-none"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          ease: "linear",
          duration: 20,
          repeat: Infinity,
        }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#4b564c] rounded-full" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
