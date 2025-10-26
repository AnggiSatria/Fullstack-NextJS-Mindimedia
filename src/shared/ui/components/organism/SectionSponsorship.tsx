"use client";

import { Minus, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ReusableText from "../atoms/ReusabledText";
import LogoMarquee from "../atoms/LogoMarquee";

export default function SectionSponsorship() {
  const [adult, setAdult] = useState<number>(2);

  const handleDecrease = () => {
    if (adult > 1) setAdult(adult - 1);
  };

  const handleIncrease = () => {
    setAdult(adult + 1);
  };

  return (
    <div className="bg-[#606d61] w-full min-h-screen text-white">
      <div className="py-20 xl:py-16">
        <div className="flex xl:px-32 lg:px-16 mx-auto px-1.5 flex-col">
          {/* Section Ratings */}
          <section className="pt-20">
            <div className="flex flex-col items-center justify-center">
              <ul className="flex flex-col gap-y-3 items-center">
                <li>
                  <a
                    href="https://www.google.com/travel/search?q=ulaman%20bali"
                    className="flex gap-1.5"
                  >
                    <span className="flex items-center"></span>
                    <span className="flex gap-1.5">
                      4.7{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-star-icon fill-current stroke-none aspect-square w-3.5"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    </span>
                    <span>/</span>
                    <span className="opacity-50">742 Google Reviews</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://tripadvisor.com/Hotel_Review-g608496-d21058098-Reviews-Ulaman_Eco_Luxury_Retreat-Tabanan_Bali.html"
                    className="flex gap-1.5"
                  >
                    <span className="flex items-center">
                      4.8 &nbsp;
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-star-icon fill-current stroke-none aspect-square w-3.5"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    </span>
                    <span>/</span>
                    <span className="opacity-50">295 TripAdvisor Reviews</span>
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* Section Search */}
          <div className="py-20">
            <div className="w-full flex flex-col max-w-3xl space-y-8 sm:flex-row sm:justify-center md:space-y-0 md:px-0 md:mx-auto sm:items-center">
              <div className="flex flex-col max-w-3xl sm:flex-row sm:justify-between md:px-0 md:mx-auto">
                <div className="flex border-r border-white items-center justify-between sm:w-1/2 px-4 py-4">
                  <div className="text-xs sm:text-sm cursor-pointer">
                    Check In
                  </div>
                  <div className="h-px bg-white w-8 sm:w-12 mx-3" />
                  <div className="text-xs sm:text-sm cursor-pointer">
                    Check Out
                  </div>
                </div>

                <div className="flex items-center justify-between sm:w-1/2 px-4 py-4">
                  <div className="flex items-center gap-4">
                    <label htmlFor="adult" className="text-xs sm:text-sm">
                      Adult
                    </label>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={handleDecrease}
                        disabled={adult <= 1}
                        className="border border-white rounded-full aspect-square w-7 flex items-center justify-center hover:bg-[#c69c4d] disabled:opacity-60"
                      >
                        <Minus className="w-4" strokeWidth={1} />
                      </button>
                      <span className="text-xs sm:text-sm w-4 text-center">
                        {adult}
                      </span>
                      <button
                        onClick={handleIncrease}
                        className="border border-white rounded-full aspect-square w-7 flex items-center justify-center hover:bg-[#c69c4d]"
                      >
                        <Plus className="w-4" strokeWidth={1} />
                      </button>
                    </div>
                  </div>
                  <Link
                    target="_blank"
                    href={`https://www.book-secure.com/index.php?s=results&property=idbal31691&adults1=${adult}`}
                    className="px-6 py-2 border border-white text-xs sm:text-sm rounded-tl-lg rounded-br-lg hover:bg-[#c69c4d] transition"
                  >
                    Search
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <section className="flex flex-col items-center justify-between sm:gap-x-5 sm:flex-row-reverse">
            <div className="flex w-full aspect-11/10 h-80 items-center sm:w-auto overflow-hidden border-none lg:h-96 xl:items-start xl:w-164 xl:h-auto">
              <img
                src="https://images.prismic.io/ulaman/ZpDw3R5LeNNTxF2w_ulaman-bali.jpg?auto=format,compress"
                alt="ulaman bali map"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="space-y-4 pt-7 text-smallest prose:p:pr-10 sm:w-64 lg:w-1/3">
              <ReusableText className="text-left w-2/3 text-white mx-0!">
                Tucked Within Majestic Balinese Nature.
              </ReusableText>
              <p className="font-BasisGrotesqueArabicProLight text-[8px] md:text-xs w-2/3">
                Strategically located near popular areas like Canggu and Ubud,
                experience tranquil nature and luxury. With endless activities,
                you'll never want to leave Ulaman.
              </p>
            </div>
          </section>

          {/* Footer Section */}
          <section className="pt-24">
            <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start">
              {/* Newsletter */}
              <div className="py-2.5">
                <div className="max-w-lg">
                  <ReusableText
                    size="text-sm"
                    className="text-left w-fit text-white mx-0!"
                  >
                    Get Notified On Our Offers
                  </ReusableText>
                  <form
                    className="sm:flex-col space-y-7"
                    name="newsletter-signup"
                  >
                    <input
                      type="hidden"
                      name="form-name"
                      value="newsletter-signup"
                    />
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name*"
                        required
                        autoComplete="name"
                        className="input-field"
                      />
                    </div>
                    <div className="relative">
                      <input
                        className="input-field"
                        placeholder="Your Email*"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                      />
                    </div>
                    <button
                      type="submit"
                      className="ui-underline-anim reverse text-light disabled:opacity-50 disabled:hover:before:scale-x-100 cursor-pointer"
                      disabled
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>

              {/* Explore */}
              <nav className="pt-20 xl:pt-0">
                <ReusableText
                  size="text-sm"
                  className="text-left! mx-0! text-white"
                >
                  Explore
                </ReusableText>
                <ul className="grid grid-cols-2 pt-7 gap-x-12 gap-y-5">
                  {[
                    "Home",
                    "Villas",
                    "Dining",
                    "Spa",
                    "Retreats",
                    "Experiences",
                    "Facilities",
                    "Ulaman Map",
                    "About",
                    "Articles",
                    "Contact",
                    "Video Testimonials",
                  ].map((item) => (
                    <li key={item}>
                      <a href="#" className="ui-underline-anim">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Connect */}
              <nav className="pt-16 xl:pt-0">
                <ReusableText
                  size="text-sm"
                  className="text-left! text-white mx-0!"
                >
                  Connect
                </ReusableText>
                <ul className="grid grid-cols-2 pt-7 gap-x-12 gap-y-5">
                  <li>
                    <a
                      href="https://wa.me/6281227142854"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ui-underline-anim"
                    >
                      Whatsapp
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/maps"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ui-underline-anim"
                    >
                      Directions
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.tripadvisor.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ui-underline-anim"
                    >
                      TripAdvisor
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/ulamanbali"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ui-underline-anim"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/UlamanBali/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ui-underline-anim"
                    >
                      Facebook
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </section>
        </div>
        <LogoMarquee />
        <div className="pt-20 app-container text-white">
          <nav>
            <ul className="flex flex-row flex-wrap gap-x-1 gap-y-4 justify-between px-3">
              <li>
                <a
                  href="/legal/terms"
                  className="text-smallest ui-underline-anim text-white text-[8px] md:text-xs"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="/legal/privacy-policy"
                  className="text-smallest ui-underline-anim text-white text-[8px] md:text-xs"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="/contact/ulaman-bookings"
                  className="text-smallest ui-underline-anim text-white text-[8px] md:text-xs"
                >
                  Ulaman Bookings
                </a>
              </li>

              <li>
                <span className="text-smallest text-white text-[8px] md:text-xs">
                  Kids under 6 are not advised.
                </span>
              </li>

              <li>
                <span className="text-smallest text-white text-[8px] md:text-xs">
                  © 2024-2025 Two Moons Studio for ulamanbali.com. All Rights
                  Reserved
                </span>
              </li>

              <li className="order-3">
                <a
                  href="https://www.twomoonsstudio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-smallest no-heart-color ui-underline-anim text-white text-[8px] md:text-xs"
                >
                  Made With ❤︎ By{" "}
                  <span className="opacity-100 text-white">
                    Two Moons Studio
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
