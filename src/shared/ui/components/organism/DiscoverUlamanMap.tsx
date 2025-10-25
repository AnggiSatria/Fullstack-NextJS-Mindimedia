"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { X } from "lucide-react";
import ReusableText from "../atoms/ReusabledText";
import useWindowWidth from "@/shared/helpers/useWindowWidth";

interface Position {
  top: string;
  left: string;
}

interface MapIcon {
  id: string;
  icon: string;
  label: string;
  position: {
    desktop: Position;
    tablet: Position;
    mobile: Position;
  };
  image: string;
  title: string;
  description: string;
}

const mapIcons: MapIcon[] = [
  {
    id: "tennis",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm_oxZm069VX1y9A_Group6120.svg?auto=compress,format",
    label: "Tennis Court",
    position: {
      desktop: { top: "27%", left: "57%" },
      tablet: { top: "27%", left: "57%" },
      mobile: { top: "50%", left: "57%" },
    },
    image:
      "https://images.prismic.io/ulaman/Zm_oSZm069VX1y8s_tennis-court.jpg?auto=format,compress",
    title: "Tennis Court",
    description:
      "Located just across the resort amidst the rice fields, our Tennis Court invites you for an enjoyable game. Private lessons are available for a rewarding and engaging experience.",
  },
  {
    id: "spa",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm5NpJm069VX1x-K_Group5932.svg?auto=compress,format",
    label: "Grand Lagoon Private Pool",
    position: {
      desktop: { top: "40%", left: "12%" },
      tablet: { top: "40%", left: "12%" },
      mobile: { top: "58%", left: "12%" },
    },
    image:
      "https://images.prismic.io/ulaman/Zj16T0MTzAJOCrGZ_eco-luxury-retreat-bali.jpg?auto=format,compress",
    title: "Grand Lagoon Private Pool",
    description:
      "This beautifully designed, exclusive villa offers the best views in the entire resort - a breath­ taking 180-degree panorama of Ulaman's jungle, lagoon river, rice fields and terraces, surrounded by rich wildlife and untouched natural beauty. Inside, you'll find expansive dining and living areas, a private saltwater pool, a sundeck with lounge seating and a hammock - all thoughtfully arranged to create an effortless indoor-outdoor flow.",
  },
];

export default function DiscoverUlamanMap() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const width = useWindowWidth();
  const isMobile = width !== null && width < 768;

  return (
    <section className="relative w-full bg-[#f6f1e7] py-20">
      <div className="mx-auto w-10/12 text-start mb-10">
        <ReusableText className="mx-0! text-left! w-3/12">
          Discover Ulaman From Above
        </ReusableText>
        <div className="inline-flex items-center gap-2 bg-[#b59453] text-white px-6 py-3 rounded-full">
          <span className="text-sm">● Tap on an icon</span>
        </div>
      </div>

      <div className="flex w-full mx-auto">
        <div className="inline-flex w-full">
          <Image
            src="https://ulamanbali.com/_nuxt/ulaman.B-iYsIcw.jpg"
            alt="Ulaman Map"
            width={1200}
            height={800}
            className="rounded-lg w-full"
          />
        </div>

        {mapIcons.map((icon) => (
          <Popover key={icon.id} open={activeId === icon.id}>
            <PopoverTrigger asChild>
              <button
                onClick={() =>
                  setActiveId(activeId === icon.id ? null : icon.id)
                }
                className={`absolute z-10 bg-[#f4efe8] text-white w-5 h-5 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:scale-105 transition-transform cursor-pointer`}
                style={{
                  top: isMobile
                    ? icon.position.mobile.top
                    : icon.position.desktop.top,
                  left: isMobile
                    ? icon.position.mobile.left
                    : icon.position.desktop.left,
                  transform: "translate(-50%, -50%)",
                }}
                aria-label={icon.label}
              >
                <div className="flex w-3 h-3 sm:w-5 sm:h-5">
                  <Image
                    src={icon.icon}
                    alt={icon.label}
                    width={20}
                    height={20}
                    className="w-full h-full"
                  />
                </div>
              </button>
            </PopoverTrigger>

            <PopoverContent
              side="top"
              align="center"
              className="flex w-[400px] bg-[#f6f1e7] border border-[#d4c5a3] shadow-lg overflow-hidden"
            >
              <div className="w-1/2 relative">
                <Image
                  src={icon.image}
                  alt={icon.title}
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4 flex-1">
                <div className="flex justify-between items-start">
                  <p className="text-sm text-[#5e5a4b] mb-1">Facilities</p>
                  <button
                    onClick={() => setActiveId(null)}
                    className="text-[#b59453] hover:text-[#8d743e]"
                  >
                    <X size={18} />
                  </button>
                </div>
                <h3 className="text-2xl font-serif text-[#b59453] mb-2">
                  {icon.title}
                </h3>
                <p className="text-[#5e5a4b] text-sm leading-relaxed">
                  {icon.description}
                </p>
                <button className="mt-3 underline text-[#b59453] text-sm font-medium">
                  ENQUIRE
                </button>
              </div>
            </PopoverContent>
          </Popover>
        ))}
      </div>
    </section>
  );
}
