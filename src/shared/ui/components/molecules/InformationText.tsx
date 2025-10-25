"use client";

import AnimatedText from "../atoms/AnimatedText";

export default function InformationText() {
  return (
    <div className="flex w-full pt-[100px] justify-center relative">
      <div className="w-1/2 h-fit">
        <AnimatedText text="Nestled among the rice fields and coconut trees of Tabanan, Ulaman is only 20 minutes away from the vibrant town of Canggu" />
      </div>
    </div>
  );
}
