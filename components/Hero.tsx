"use client";

import Image from "next/image";
import React from "react";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { slides } from "@/config/data";

export const Hero: React.FC = () => {
  const options = {
    type: "loop",
    gap: "1rem",
    autoplay: true,
    arrows: false,
    pauseOnHover: false,
    resetProgress: false,
    height: "100vh",
  };

  return (
    <div>
      <Splide tag="section" options={options} hasTrack={false}>
        <div style={{ position: "relative" }}>
          <SplideTrack>
            {slides.map((slide) => (
              <SplideSlide key={slide.id}>
                <Image
                  src={slide.src}
                  alt={slide.title}
                  fill
                  className="object-cover"
                />

                <div className="w-full absolute left-2/4 top-3/4 translate-x-[-50%] translate-y-[-75%] z-10">
                  <p className="text-white text-center font-bold text-3xl md:text-5xl leading-[56px] md:mb-6">
                    {slide.title}
                  </p>
                  <div className="flex justify-center gap-8 items-center">
                    <p className="text-white text-2xl md:text-4xl text-center font-light leading-[60px]">
                      {slide.subtext}
                    </p>
                    <button className="text-white flex justify-center items-center leading-[60px] font-bold text-base outline-none bg-neutral-50/20 hover:bg-neutral-50/50 duration-200 transition rounded-[3px] w-28 h-9 border-none">
                      More Info
                    </button>
                  </div>
                </div>

                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[0.502]" />
              </SplideSlide>
            ))}
          </SplideTrack>
        </div>

        {/* <div className="splide__progress">
          <div className="splide__progress__bar" />
        </div> */}
      </Splide>
    </div>
  );
};

export default Hero;
