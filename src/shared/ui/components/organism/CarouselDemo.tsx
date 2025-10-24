import Link from "next/link";
import ImageCarousel from "../atoms/ImageCarousel";
import SliderCarousel from "../molecules/SliderCarousel";

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
    <div className="relative flex flex-col py-20 bg-[#f4efe8] sm:items-end">
      <h2 className="w-1/2 text-center text-2xl sm:text-sm md:text-base lg:text-lg xl:text-2xl font-americana text-[#b59453] mb-8 mx-auto">
        Discover cozy elegance, where tranquility meets Bali’s serene beauty.
      </h2>

      <div className="w-11/12 relative">
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
    </div>
  );
}
