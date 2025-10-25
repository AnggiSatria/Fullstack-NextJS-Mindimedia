import Link from "next/link";
import ReusableText from "../atoms/ReusabledText";

export default function SectionTextBook() {
  return (
    <div className="w-full relative">
      <ReusableText className="w-1/3">
        Reconnect With Yourself In Luxurious Comfort.
      </ReusableText>

      <Link href="/" className="flex mt-3 mx-auto w-full justify-center">
        <span className="text-[8px] md:text-xs lg:text-sm text-center font-americana text-[#c69c4d] underline hover:no-underline">
          Book Your Stay
        </span>
      </Link>

      <p className="mt-20 w-full flex items-center justify-center md:text-xs lg:text-sm text-center font-americana text-[#c69c4d]">
        @ulamanbali
      </p>
    </div>
  );
}
