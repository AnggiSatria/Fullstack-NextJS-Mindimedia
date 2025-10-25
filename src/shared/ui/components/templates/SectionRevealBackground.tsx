import Link from "next/link";
import CurvedRevealSection from "../molecules/CurvedRevealSection";
import ReusableText from "../atoms/ReusabledText";

export default function SectionRevealBackground() {
  return (
    <>
      <div className="flex w-full items-center gap-3 flex-col">
        <ReusableText>
          Experience a blend of nature, comfort and luxury like never before.
        </ReusableText>
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
