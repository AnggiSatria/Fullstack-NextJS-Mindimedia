"use client";

import Link from "next/link";
import SliderCarousel from "../molecules/SliderCarousel";
import CardItem from "../atoms/CardItem";

export default function CarouselSpecialPrice() {
  const cards = [
    {
      title: "The Avatar Experience",
      image:
        "https://images.prismic.io/ulaman/Zjrn-kMTzAJOCn4c_eco-luxury-hotel-bali.jpg?auto=format,compress",
      duration: "3 Days / 2 Nights",
    },
    {
      title: "The Ultimate Honeymoon",
      image:
        "https://images.prismic.io/ulaman/ZjebwkMTzAJOCiml_Ulaman-eco-retreat.jpg?auto=format,compress",
      duration: "3 Days / 2 Nights",
    },
  ];

  return (
    <div className="relative flex flex-col py-20 bg-[#f4efe8] items-center">
      <h2 className="w-1/2 text-center text-2xl sm:text-sm md:text-base lg:text-lg xl:text-2xl font-americana text-[#b59453] mb-8 mx-auto">
        Book one of our special packages for a getaway you’ll never forget.
      </h2>

      <div className="w-11/12 relative">
        <SliderCarousel
          items={cards.map((card, i) => (
            <CardItem
              key={i}
              title={card.title}
              image={card.image}
              duration={card.duration}
            />
          ))}
          visibleCards={2}
          gap={50}
        />
      </div>
    </div>
  );
}
