"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-[#EFEBE2]/95 backdrop-blur-sm border-b border-[#c69c4d]"
          : "bg-transparent border-b border-transparent"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div
        className={`flex items-center justify-between px-6 lg:px-12 ${
          scrolled ? "py-3" : "py-5"
        } transition-all duration-300`}
      >
        <nav className="flex items-center space-x-4 flex-1">
          <button className="relative w-8 h-6 group focus:outline-none flex flex-col justify-between cursor-pointer">
            <span className="sr-only">Open Menu</span>
            <span
              className={`block h-0.5 w-full transition-all duration-300 group-hover:w-3/4 ${
                scrolled ? "bg-[#c69c4d]" : "bg-[#f4efe8]"
              }`}
            ></span>
            <span
              className={`block h-0.5 w-3/4 transition-all duration-300 group-hover:w-full ${
                scrolled ? "bg-[#c69c4d]" : "bg-[#f4efe8]"
              }`}
            ></span>
            <span
              className={`block h-0.5 w-1/2 transition-all duration-300 group-hover:w-3/4 ${
                scrolled ? "bg-[#c69c4d]" : "bg-[#f4efe8]"
              }`}
            ></span>
          </button>

          <ul className="hidden sm:flex space-x-9 text-[15px] font-medium tracking-wide ml-5">
            <li>
              <Link
                href="/rooms"
                className={`hover:text-[#c69c4d] transition-colors text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-sm ${
                  scrolled ? "text-[#c69c4d]" : "text-white"
                }`}
              >
                Villas
              </Link>
            </li>
            <li>
              <Link
                href="https://riversidespabyulaman.com/"
                className={`hover:text-[#c69c4d] transition-colors sm:text-[9px] md:text-[10px] lg:text-xs xl:text-sm ${
                  scrolled ? "text-[#c69c4d]" : "text-white"
                }`}
              >
                Spa
              </Link>
            </li>
            <li>
              <Link
                href="https://earthbyulaman.com/"
                className={`hover:text-[#c69c4d] transition-colors sm:text-[9px] md:text-[10px] lg:text-xs xl:text-sm ${
                  scrolled ? "text-[#c69c4d]" : "text-white"
                }`}
              >
                Dine
              </Link>
            </li>
            <li>
              <Link
                href="/retreats"
                className={`hover:text-[#c69c4d] transition-colors sm:text-[9px] md:text-[10px] lg:text-xs xl:text-sm ${
                  scrolled ? "text-[#c69c4d]" : "text-white"
                }`}
              >
                Retreats
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex justify-center flex-1 h-[100px]">
          <Link href="/">
            <div
              className={`transition-all duration-300 h-full ${
                scrolled
                  ? "w-11 sm:w-[88px] lg:w-[120px]"
                  : "w-[71px] sm:w-[94px] lg:w-40"
              }`}
            >
              <Image
                src="/ulaman.png"
                alt="Ulaman Logo"
                width={160}
                height={100}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </Link>
        </div>

        <div className="flex md:hidden items-center space-x-8 flex-1 justify-end">
          <Link
            href="/book"
            className={`px-8 py-3 rounded-tl-lg rounded-br-lg text-sm transition-all duration-300 hover:bg-[#c69c4d] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-sm ${
              scrolled
                ? "border border-[#c69c4d] text-[#c69c4d]"
                : "border border-white text-white"
            }`}
          >
            Book
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8 flex-1 justify-end">
          <Link
            href="/contact"
            className={`px-8 py-3 rounded-tl-lg rounded-br-lg text-sm transition-all duration-300 hover:bg-[#c69c4d] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-sm ${
              scrolled
                ? "border border-[#c69c4d] text-[#c69c4d]"
                : "border border-white text-white"
            }`}
          >
            Stay with us
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
