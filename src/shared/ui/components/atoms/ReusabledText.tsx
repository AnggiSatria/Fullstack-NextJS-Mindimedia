"use client";

import React from "react";

interface ReusableTextProps {
  children: React.ReactNode;
  className?: string;
  size?: string;
}

export default function ReusableText({
  children,
  className = "",
  size = "",
}: ReusableTextProps) {
  return (
    <h2
      className={`w-1/2 ${
        size === "" ? "text-2xl" : size
      } sm:text-sm md:text-base lg:text-lg xl:text-2xl font-americana text-[#b59453] mb-8 mx-auto text-center ${className}`}
    >
      {children}
    </h2>
  );
}
