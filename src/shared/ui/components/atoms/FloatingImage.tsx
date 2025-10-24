"use client";

import Image from "next/image";

interface FloatingImageProps {
  src: string;
  alt?: string;
  className?: string;
  floatSpeed?: string;
  floatRange?: number;
}

export default function FloatingImage({
  src,
  alt = "",
  className = "",
  floatSpeed = "3s",
  floatRange = 10,
}: FloatingImageProps) {
  return (
    <div
      className={`inline-block ${className}`}
      style={{
        animation: `float ${floatSpeed} ease-in-out infinite`,
        ["--float-range" as any]: `${floatRange}px`,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={300}
        height={300}
        className="object-cover rounded-xl shadow-md"
      />
    </div>
  );
}
