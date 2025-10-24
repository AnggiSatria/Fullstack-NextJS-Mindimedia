import Link from "next/link";
import ImageCarousel from "../atoms/ImageCarousel";

export default function DescriptionSection() {
  const imageList = [
    "https://images.prismic.io/ulaman/Zpcs2R5LeNNTxOAv_ulaman.jpg?auto=format,compress",
    "https://images.prismic.io/ulaman/ZotMNx5LeNNTw4r1_ulaman.jpg?auto=format,compress",
    "https://images.prismic.io/ulaman/ZjNFm0MTzAJOCfDW_best-spa-bali.jpg?auto=format,compress",
  ];

  return (
    <div className="flex w-10/12 min-h-[450px] gap-10 flex-col md:flex-row">
      <div className="flex w-full md:w-5/12">
        <ImageCarousel
          images={imageList}
          className="w-full h-[450px] max-w-md"
        />
      </div>
      <div className="flex w-full md:flex-1 lg:self-stretch gap justify-center gap-5 flex-col">
        <h4 className="inline-flex items-center mx-1 text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl font-americana text-[#c69c4d] h-fit">
          An award-winning eco-luxury resort offering a unique hideaway
          experience. Embrace authenticity, balance, and harmony with nature in
          a healing, luxurious environment.
        </h4>
        <p className="inline-block text-[8px] md:text-xs lg:text-sm  leading-4 font-light translate-x-0 translate-y-0 rotate-0 scale-100 opacity-100 text-[#343E35]! font-BasisGrotesqueArabicProLight">
          We believe nature and luxury can coexist. Ulaman Eco Luxury Resort
          offers
          <em className="translate-x-0 translate-y-0 rotate-0 scale-100 opacity-100">
            a secluded, lush haven with luxurious amenities and impeccable
            service
          </em>
          . Immerse yourself in traditional Balinese culture and leave feeling
          renewed, all while minimizing your ecological footprint. Recharge your
          mind, body, and soul in this unique holistic retreat.
        </p>
        <Link
          href=""
          className="text-[8px] md:text-xs lg:text-sm  font-americana text-[#c69c4d] underline hover:no-underline"
        >
          ABOUT US
        </Link>
      </div>
    </div>
  );
}
