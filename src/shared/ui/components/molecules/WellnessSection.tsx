"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReusableText from "../atoms/ReusabledText";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollRevealImages() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftImgRef = useRef<HTMLDivElement>(null);
  const rightImgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftImgRef.current,
        { yPercent: 60, opacity: 0 },
        {
          yPercent: -40,
          opacity: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        rightImgRef.current,
        { yPercent: -60, opacity: 0 },
        {
          yPercent: 40,
          opacity: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center bg-[#f4efe8] py-48 overflow-hidden"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12">
        <div
          ref={leftImgRef}
          className="relative w-64 h-96 lg:w-80 lg:h-112 rounded-md overflow-hidden shadow-lg"
        >
          <Image
            src="https://images.prismic.io/ulaman/ZiPZhfPdc1huKp0x_eco-retreat.jpg?auto=format,compress"
            alt="Eco Retreat"
            fill
            className="object-cover"
          />
        </div>

        <div className="max-w-xl text-center px-4">
          <ReusableText>
            Discover your path to wellness and growth.
          </ReusableText>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
            At Ulaman we redefine luxury as an experience that not only pampers
            the senses but also nurtures the soul. Nestled in pristine nature,
            our eco-luxury retreat offers a sanctuary for healing and
            transformation.
            <br />
            <br />
            <em>Your transformative journey begins here.</em>
          </p>
        </div>

        <div
          ref={rightImgRef}
          className="relative w-64 h-96 lg:w-80 lg:h-112 rounded-md overflow-hidden shadow-lg"
        >
          <Image
            src="https://images.prismic.io/ulaman/ZlQ_cik0V36pXpWM_ulaman-eco-resort.jpg?auto=format,compress"
            alt="Eco Resort"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
