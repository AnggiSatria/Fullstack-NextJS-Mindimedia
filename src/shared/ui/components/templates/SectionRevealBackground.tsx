import Link from "next/link";
import CurvedRevealSection from "../molecules/CurvedRevealSection";

export default function SectionRevealBackground() {
  return (
    <>
      <div className="flex w-full items-center gap-3 flex-col">
        <h2 className="w-1/2 text-center text-2xl sm:text-sm md:text-base lg:text-lg xl:text-2xl font-americana text-[#b59453] mb-8">
          Experience a blend of nature, comfort and luxury like never before.
        </h2>
        <Link href="/" className="flex ">
          <span className="text-[8px] md:text-xs lg:text-sm  font-americana text-[#c69c4d] underline hover:no-underline">
            Book Your Stay
          </span>
        </Link>
      </div>
      <CurvedRevealSection />
    </>
  );
}
