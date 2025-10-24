import Header from "@/components/Header";
import InformationText from "@/shared/ui/components/molecules/InformationText";
import VideoBackground from "@/shared/ui/components/atoms/VideoBackground";
import CarouselDemo from "@/shared/ui/components/organism/CarouselDemo";
import DescriptionSection from "@/shared/ui/components/organism/DescriptionSection";
import SectionRevealBackground from "@/shared/ui/components/templates/SectionRevealBackground";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <VideoBackground />
        <div className="inline-flex w-full absolute top-[550px] bg-[#f4efe8] gap-[50px] flex-col items-center">
          <InformationText />
          <DescriptionSection />
          <CarouselDemo />
          <SectionRevealBackground />
        </div>
      </main>
    </>
  );
}
