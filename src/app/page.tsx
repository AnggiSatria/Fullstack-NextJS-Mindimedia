import Header from "@/components/Header";
import InformationText from "@/shared/ui/components/molecules/InformationText";
import VideoBackground from "@/shared/ui/components/atoms/VideoBackground";
import CarouselDemo from "@/shared/ui/components/organism/CarouselDemo";
import DescriptionSection from "@/shared/ui/components/organism/DescriptionSection";
import SectionRevealBackground from "@/shared/ui/components/templates/SectionRevealBackground";
import CarouselSpecialPrice from "@/shared/ui/components/organism/CarouselSpecialPrice";
import WellnessSection from "@/shared/ui/components/molecules/WellnessSection";
import VideoPlayer from "@/shared/ui/components/atoms/VideoPlayer";
import SectionPhotoInfo from "@/shared/ui/components/organism/SectionPhotoInfo";
import TestimonialsSlider from "@/shared/ui/components/organism/TestimonialSlider";
import DiscoverUlamanMap from "@/shared/ui/components/organism/DiscoverUlamanMap";

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
          <CarouselSpecialPrice />
          <WellnessSection />
          <VideoPlayer />
          <SectionPhotoInfo />
          <DiscoverUlamanMap />
          <TestimonialsSlider />
        </div>
      </main>
    </>
  );
}
