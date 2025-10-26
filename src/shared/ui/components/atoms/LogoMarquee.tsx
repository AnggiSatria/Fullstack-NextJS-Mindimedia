"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  "https://images.prismic.io/ulaman/ZtB8YUaF0TcGJhMu_award.png?auto=format,compress",
  "https://images.prismic.io/ulaman/ZtB9TEaF0TcGJhOP_deluxe.png?auto=format,compress",
  "https://images.prismic.io/ulaman/ZtB8rkaF0TcGJhNW_kohler.png?auto=format,compress",
  "https://images.prismic.io/ulaman/ZtB82EaF0TcGJhNj_unesco.png?auto=format,compress",
  "https://images.prismic.io/ulaman/ZtB9AUaF0TcGJhNw_loop.png?auto=format,compress",
  "https://images.prismic.io/ulaman/Z9vWIDiBA97GisV6_…atured_experiences_white.png?auto=format,compress",
];

export default function LogoMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-6 mt-20">
      <motion.div
        className="flex gap-16 items-center"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          ease: "linear",
          duration: 20,
          repeat: Infinity,
        }}
      >
        {[...logos, ...logos].map((logo, idx) => (
          <div
            key={idx}
            className="shrink-0 w-auto h-11 lg:h-14 xl:h-16 opacity-90"
          >
            <Image
              src={logo}
              alt={`Logo ${idx}`}
              width={200}
              height={80}
              className="w-full! h-auto object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
