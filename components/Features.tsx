"use client";

import Image from "next/image";

import { features } from "@/config/data";

const Features = () => {
  return (
    <section className="bg-[#f3f3f3] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 py-24 px-4">
      {features.map((feature) => (
        <div
          key={feature.id}
          className="flex flex-col justify-center items-center"
        >
          <Image
            src={feature.icon}
            alt={feature.text}
            width={26}
            height={26}
            className="text-[#3c3c3c] mb-4 hover:scale-110 hover:rotate-[360deg] duration-500 transition"
          />
          <p className="text-xl text-[#3c3c3c] leading-[50px] text-center font-medium">
            {feature.text}
          </p>
          <p className="text-sm text-[#797979] leading-6 text-center">
            {feature.subtext}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Features;
