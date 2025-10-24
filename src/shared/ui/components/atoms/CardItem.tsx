// import Image from "next/image";
// import Link from "next/link";

// interface CardItemProps {
//   title: string;
//   image: string;
//   duration?: string;
// }

// export default function CardItem({ title, image, duration }: CardItemProps) {
//   return (
//     <div className="flex flex-col bg-transparent">
//       <div className="relative w-full aspect-4/3 rounded-md overflow-hidden">
//         <Image
//           src={image}
//           alt={title}
//           fill
//           className="object-cover transition-transform duration-700 ease-in-out hover:scale-105"
//         />
//       </div>

//       <div className="mt-3 space-y-3">
//         <p className="text-xs md:text-sm text-gray-600">{duration}</p>
//         <h3 className="text-[#b59453] font-americana text-lg">{title}</h3>
//         <Link href="/" className="inline-block">
//           <span className="text-[10px] md:text-xs lg:text-sm font-americana text-[#c69c4d] underline hover:no-underline">
//             Discover
//           </span>
//         </Link>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import Link from "next/link";

interface CardItemProps {
  title: string;
  image: string;
  duration?: string;
}

export default function CardItem({ title, image, duration }: CardItemProps) {
  return (
    <div className="flex flex-col bg-transparent relative">
      <div
        className="absolute -top-2 -left-2 w-[219px] h-64 rounded-md"
        style={{
          backgroundColor: "rgba(195, 145, 50, 0.4)",
          zIndex: 0,
        }}
      />

      <div className="relative w-full aspect-4/3 rounded-md overflow-hidden z-10">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-in-out hover:scale-105"
        />
      </div>

      <div className="mt-3 space-y-3 z-10">
        {duration && (
          <p className="text-xs md:text-sm text-gray-600">{duration}</p>
        )}
        <h3 className="text-[#b59453] font-americana text-lg">{title}</h3>
        <Link href="/" className="inline-block">
          <span className="text-[10px] md:text-xs lg:text-sm font-americana text-[#c69c4d] underline hover:no-underline">
            Discover
          </span>
        </Link>
      </div>
    </div>
  );
}
