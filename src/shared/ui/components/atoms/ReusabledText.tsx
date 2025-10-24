"use client";

import React from "react";

interface ReusableTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function ReusableText({
  children,
  className = "",
}: ReusableTextProps) {
  return (
    <h2
      className={`w-1/2 text-2xl sm:text-sm md:text-base lg:text-lg xl:text-2xl font-americana text-[#b59453] mb-8 mx-auto text-center ${className}`}
    >
      {children}
    </h2>
  );
}
