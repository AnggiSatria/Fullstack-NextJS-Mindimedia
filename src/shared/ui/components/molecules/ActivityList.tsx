// "use client";

// export default function BookingList() {
//   const images = [
//     "https://images.prismic.io/ulaman/Z5ibs5bqstJ997Bg_DSC09379.jpg?auto=format,compress",
//     "https://images.prismic.io/ulaman/ZlbB0KWtHYXtT4Fc_bali-hotels.jpg?auto=format,compress",
//     "https://images.prismic.io/ulaman/Z5ibxKbqstJ997Bg_DSC09458.jpg?auto=format,compress",
//     "https://images.prismic.io/ulaman/Z5ibyKbqstJ997Bg_DSC09479.jpg?auto=format,compress",
//     "https://images.prismic.io/ulaman/Z5ibzLbqstJ997Bg_DSC09505.jpg?auto=format,compress",
//     "https://images.prismic.io/ulaman/Z5ib0MbqstJ997Bg_DSC09529.jpg?auto=format,compress",
//   ];

//   return (
//     <section className="py-10">
//       <div className="space-y-5 sm:space-y-2.5 lg:space-y-7 xl:space-y-5">
//         <figure className="columns-2 gap-1.5 space-y-2 md:columns-3 md:gap-2 xl:columns-3">
//           {images.map((url, index) => (
//             <div
//               key={index}
//               className="aspect-10/14 sm:aspect-10/19 lg:aspect-10/14 xl:aspect-[10/12.5] mb-2 break-inside-avoid"
//             >
//               <div className="relative rounded-md overflow-hidden w-full h-full">
//                 <article className="block rounded-md cursor-pointer overflow-hidden w-full h-full transition-opacity duration-1000 opacity-100">
//                   <img
//                     src={url}
//                     alt={`Booking ${index + 1}`}
//                     className="w-full h-full object-cover"
//                   />
//                 </article>
//               </div>
//             </div>
//           ))}
//         </figure>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ActivitiesList() {
  const images = [
    "https://images.prismic.io/ulaman/Z5ibs5bqstJ997Bg_DSC09379.jpg?auto=format,compress",
    "https://images.prismic.io/ulaman/ZlbB0KWtHYXtT4Fc_bali-hotels.jpg?auto=format,compress",
    "https://images.prismic.io/ulaman/Z5mgK5bqstJ99-Jc_DSC09345.jpg?auto=format,compress",
    "https://images.prismic.io/ulaman/ZpIRih5LeNNTxIQ__weddings-bali.jpg?auto=format,compress",
    "https://images.prismic.io/ulaman/ZoZc3h5LeNNTwyC-_luxury-resort-bali.jpg?auto=format,compress",
    "https://images.prismic.io/ulaman/ZlbDa6WtHYXtT4F-_eco-hotel-bali.jpg?auto=format,compress",
  ];

  return (
    <section className="gap-10 flex flex-col">
      <div className="space-y-5 sm:space-y-2.5 lg:space-y-7 xl:space-y-5">
        <figure className="columns-2 sm:columns-3 gap-2 space-y-2">
          {images.map((url, index) => (
            <motion.div
              key={index}
              className="aspect-10/14 break-inside-avoid rounded-md overflow-hidden"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <img
                src={url}
                alt={`Booking ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </figure>
      </div>

      <Link href="/" className="flex mx-auto">
        <span className="text-[8px] md:text-xs lg:text-sm  font-americana text-[#c69c4d] underline hover:no-underline">
          Discover All Experiences
        </span>
      </Link>
    </section>
  );
}
