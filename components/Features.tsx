"use client";

import Image from "next/image";

import { features } from "@/config/data";

const Features = () => {
  return (
    <section className="bg-[#f3f3f3]">
      <div className="wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 py-24">
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
              style={{ width: "auto", height: "auto" }}
              className="text-primary mb-4 hover:scale-110 hover:rotate-[360deg] duration-500 transition"
            />
            <p className="text-xl text-primary leading-heading text-center font-medium font-raleway">
              {feature.text}
            </p>
            <p className="text-sm text-gray-3000 leading-6 text-center font-playfair-display">
              {feature.subtext}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
