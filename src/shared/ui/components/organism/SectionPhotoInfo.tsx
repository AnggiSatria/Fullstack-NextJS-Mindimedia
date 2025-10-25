"use client";

import Link from "next/link";
import ReusableText from "../atoms/ReusabledText";
import ParallaxImage from "../atoms/ParallaxImage";
import SliderCarouselSwipe from "../molecules/SliderCarouselSwipe";

export default function SectionPhotoInfo() {
  const cards = [
    "https://images.prismic.io/ulaman/ZoDNNB5LeNNTwp4J_earth.jpg?auto=format,compress",
    "https://images.prismic.io/ulaman/ZpDtFx5LeNNTxF0v_Screenshot-2024-07-12-at-13.03.20.jpg?auto=format,compress",
    "https://images.prismic.io/ulaman/ZoTULB5LeNNTwvNW_ulaman.jpg?auto=format,compress,compress",
  ];

  return (
    <div className="w-full flex gap-20 flex-col">
      <div className="flex w-full items-center gap-1.5 flex-col">
        <ReusableText>
          A world-class gastronomic journey where nature’s finest ingredients
          meet culinary craftsmanship.
        </ReusableText>

        <Link href="/" className="flex ">
          <span className="text-[8px] md:text-xs lg:text-sm  font-americana text-[#c69c4d] underline hover:no-underline">
            Visit The Website
          </span>
        </Link>
      </div>

      <div className="sm:hidden inline-flex px-1.5 gap-1.5 sm:px-6 lg:px-9 lg:gap-3.5 xl:gap-5 xl:px-5">
        <SliderCarouselSwipe gap={16} visibleCards={2}>
          {cards.map((card, i) => (
            <ParallaxImage
              src={card}
              alt="Restaurant"
              height={450}
              maxTranslate={50}
              className="flex-1 mx-auto rounded-lg shadow-lg"
            />
          ))}
        </SliderCarouselSwipe>
      </div>

      <div className="hidden sm:flex items-center justify-center min-h-screen bg-[#f4efe8] px-1.5 gap-1.5 sm:px-6 lg:px-9 lg:gap-3.5 xl:gap-5 xl:px-5">
        <ParallaxImage
          src="https://images.prismic.io/ulaman/ZoDNNB5LeNNTwp4J_earth.jpg?auto=format,compress"
          alt="Restaurant"
          height={450}
          maxTranslate={50}
          className="flex-1 mx-auto rounded-lg shadow-lg"
        />

        <ParallaxImage
          src="https://images.prismic.io/ulaman/ZpDtFx5LeNNTxF0v_Screenshot-2024-07-12-at-13.03.20.jpg?auto=format,compress"
          alt="Restaurant"
          height={450}
          maxTranslate={50}
          className="flex-1 mx-auto rounded-lg shadow-lg"
        />

        <ParallaxImage
          src="https://images.prismic.io/ulaman/ZoTULB5LeNNTwvNW_ulaman.jpg?auto=format,compress,compress"
          alt="E.A.R.T.H Restaurant"
          height={450}
          maxTranslate={50}
          className="flex-1 mx-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
