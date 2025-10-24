"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CardCarouselProps {
  items: { id: number; title: string; description: string }[];
  visibleCount?: number;
}

export default function CardCarousel({
  items,
  visibleCount = 3,
}: CardCarouselProps) {
  const [index, setIndex] = useState(0);
  const totalSlides = Math.ceil(items.length / visibleCount);

  const nextSlide = () => setIndex((prev) => (prev + 1) % totalSlides);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

  const start = index * visibleCount;
  const end = start + visibleCount;
  const visibleItems = items.slice(start, end);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Carousel track */}
      <div className="flex justify-center gap-4">
        <AnimatePresence mode="popLayout">
          {visibleItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="bg-white shadow-md rounded-2xl p-6 w-[300px]"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Customizable buttons */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center">
        <button
          onClick={prevSlide}
          className="bg-black/60 text-white p-2 rounded-full hover:bg-black transition"
        >
          ◀
        </button>
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center">
        <button
          onClick={nextSlide}
          className="bg-black/60 text-white p-2 rounded-full hover:bg-black transition"
        >
          ▶
        </button>
      </div>
    </div>
  );
}
