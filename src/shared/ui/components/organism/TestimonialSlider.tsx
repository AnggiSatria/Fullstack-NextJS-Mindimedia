"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ReusableText from "../atoms/ReusabledText";

interface Testimonial {
  name: string;
  date: string;
  title: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Alsana Trawally",
    date: "June 2024",
    title: "Best Experience In Bali.",
    content:
      "Best experience I had in Bali out of all the resorts I've been to too, customer service was impeccable and the staff were so kind, Mr. Komang made sure we had accommodations and did the best of his ability to make sure we had a warming welcoming, it's unbelievable that everything is made of bamboo.",
  },
  {
    name: "Maya Sutanto",
    date: "July 2024",
    title: "Unforgettable Stay.",
    content:
      "Everything was simply perfect — from the warm hospitality to the stunning architecture. A true hidden gem in Bali!",
  },
  {
    name: "John Peterson",
    date: "August 2024",
    title: "Absolutely Wonderful.",
    content:
      "The best eco-friendly resort I've ever stayed at. Loved every detail and the staff were amazing.",
  },
];

export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[index];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12 text-[#5e5a4b]">
      <div className="flex flex-col gap-2 mb-8 items-start">
        <ReusableText className="text-left! flex items-start mx-0!">
          What Our Guests Have To Say About Us
        </ReusableText>
        <div className="flex gap-8 text-sm text-[#c69c4d] font-light">
          <p>4.8 ★ / 295 Tripadvisor Reviews</p>
          <p>4.7 ★ / 742 Google Reviews</p>
        </div>
      </div>

      <hr className="border-[#d4c5a3] mb-10" />

      <div className="flex flex-col md:flex-row items-start justify-between gap-8">
        <div className="flex flex-col items-start min-w-[150px]">
          <span className="bg-[#1e40af] text-white px-2 py-0.5 text-sm font-semibold leading-tight">
            {current.name.split(" ")[0]}
          </span>
          <span className="bg-[#1e40af] text-white px-2 py-0.5 text-sm font-semibold leading-tight mb-1">
            {current.name.split(" ")[1]}
          </span>
          <p className="text-xs text-[#5e5a4b] mt-1">{current.date}</p>
        </div>

        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-3"
            >
              <p className="text-2xl font-serif text-[#47533b]">
                "{current.title}"
              </p>
              <p className="text-[#5e5a4b] text-sm leading-relaxed italic">
                "{current.content}"
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-2 self-center md:self-start">
          <button
            onClick={prev}
            className="p-2 border border-[#c69c4d] text-[#c69c4d] rounded-md hover:bg-[#c69c4d]/10 transition cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="p-2 border border-[#c69c4d] text-[#c69c4d] rounded-md hover:bg-[#c69c4d]/10 transition cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
