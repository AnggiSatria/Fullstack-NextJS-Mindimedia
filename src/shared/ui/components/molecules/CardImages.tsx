"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface CardImageProps {
  id: string;
  title: string;
  image: string;
}

export default function CardImages({ id, title, image }: CardImageProps) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/booking/${id}`)}
      className="relative cursor-pointer overflow-hidden rounded-2xl group"
    >
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white py-2 px-3 text-sm md:text-base backdrop-blur-sm">
        {title}
      </div>
    </div>
  );
}
