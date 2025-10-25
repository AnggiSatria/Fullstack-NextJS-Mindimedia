import Link from "next/link";
import ImageCarousel from "../atoms/ImageCarousel";
import SliderCarousel from "../molecules/SliderCarousel";
import SliderCarouselSwipe from "../molecules/SliderCarouselSwipe";
import ReusableText from "../atoms/ReusabledText";

export default function CarouselDemo() {
  const cards = [
    {
      title: "Avatar Tree House",
      images: [
        "https://images.prismic.io/ulaman/Zpcs2R5LeNNTxOAv_ulaman.jpg?auto=format,compress",
        "https://images.prismic.io/ulaman/ZotMNx5LeNNTw4r1_ulaman.jpg?auto=format,compress",
        "https://images.prismic.io/ulaman/ZjNFm0MTzAJOCfDW_best-spa-bali.jpg?auto=format,compress",
      ],
      desc: "Experience luxury in an avatar-inspired sky villa.",
    },
    {
      title: "Grand Lagoon Private Pool",
      images: [
        "https://images.prismic.io/ulaman/Zpcs2R5LeNNTxOAv_ulaman.jpg?auto=format,compress",
        "https://images.prismic.io/ulaman/ZotMNx5LeNNTw4r1_ulaman.jpg?auto=format,compress",
        "https://images.prismic.io/ulaman/ZjNFm0MTzAJOCfDW_best-spa-bali.jpg?auto=format,compress",
      ],
      desc: "Indulge in an exclusive riverside villa with jungle views.",
    },
    {
      title: "Jungle Garden Pool",
      images: [
        "https://images.prismic.io/ulaman/Zpcs2R5LeNNTxOAv_ulaman.jpg?auto=format,compress",
        "https://images.prismic.io/ulaman/ZotMNx5LeNNTw4r1_ulaman.jpg?auto=format,compress",
        "https://images.prismic.io/ulaman/ZjNFm0MTzAJOCfDW_best-spa-bali.jpg?auto=format,compress",
      ],
      desc: "An ultimate private pool retreat at Ulaman.",
    },
    {
      title: "Ulin Poolside",
      images: [
        "https://images.prismic.io/ulaman/Zpcs2R5LeNNTxOAv_ulaman.jpg?auto=format,compress",
        "https://images.prismic.io/ulaman/ZotMNx5LeNNTw4r1_ulaman.jpg?auto=format,compress",
        "https://images.prismic.io/ulaman/ZjNFm0MTzAJOCfDW_best-spa-bali.jpg?auto=format,compress",
      ],
      desc: "A luxurious jungle ground-floor oasis.",
    },
    {
      title: "Jungle Garden Pool 2",
      images: [
        "https://images.prismic.io/ulaman/Zpcs2R5LeNNTxOAv_ulaman.jpg?auto=format,compress",
        "https://images.prismic.io/ulaman/ZotMNx5LeNNTw4r1_ulaman.jpg?auto=format,compress",
        "https://images.prismic.io/ulaman/ZjNFm0MTzAJOCfDW_best-spa-bali.jpg?auto=format,compress",
      ],
      desc: "Repeat sample card.",
    },
    {
      title: "Ulin Poolside 2",
      images: [
        "https://images.prismic.io/ulaman/Zpcs2R5LeNNTxOAv_ulaman.jpg?auto=format,compress",
        "https://images.prismic.io/ulaman/ZotMNx5LeNNTw4r1_ulaman.jpg?auto=format,compress",
        "https://images.prismic.io/ulaman/ZjNFm0MTzAJOCfDW_best-spa-bali.jpg?auto=format,compress",
      ],
      desc: "Repeat sample card.",
    },
  ];

  return (
    <div className="relative flex flex-col py-20 bg-[#f4efe8] sm:items-end w-full">
      <ReusableText>
        Discover cozy elegance, where tranquility meets Bali’s serene beauty.
      </ReusableText>

      <div className="hidden sm:inline-flex relative w-11/12">
        <SliderCarousel
          items={cards.map((card, i) => (
            <div key={i} className="flex flex-col">
              <ImageCarousel images={card.images} className="mb-4" />
              <div className="space-y-4">
                <div className="space-y-2.5 lg:space-y-3.5">
                  <h3 className="text-[#b59453] font-americana text-lg mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600">{card.desc}</p>
                </div>
                <Link href="/" className="flex ">
                  <span className="text-[8px] md:text-xs lg:text-sm  font-americana text-[#c69c4d] underline hover:no-underline">
                    Discover
                  </span>
                </Link>
              </div>
            </div>
          ))}
          visibleCards={2}
          gap={20}
        />
      </div>

      <div className="sm:hidden inline-flex relative w-11/12">
        <SliderCarouselSwipe gap={16} visibleCards={2}>
          {cards.map((card, i) => (
            <div key={i} className="flex flex-col">
              <ImageCarousel images={card.images} className="mb-4" />
              <div className="space-y-4">
                <div className="space-y-2.5 lg:space-y-3.5">
                  <h3 className="text-[#b59453] font-americana text-lg mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600">{card.desc}</p>
                </div>
                <Link href="/" className="flex ">
                  <span className="text-[8px] md:text-xs lg:text-sm  font-americana text-[#c69c4d] underline hover:no-underline">
                    Discover
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </SliderCarouselSwipe>
      </div>
    </div>
  );
}
