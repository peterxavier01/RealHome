"use client";

import Image from "next/image";
import React from "react";

import { SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import Slider from "./Slider";
import { slides } from "@/config/data";

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <Slider
        options={{
          type: "loop",
          gap: "1rem",
          autoplay: true,
          arrows: false,
          pauseOnHover: false,
          resetProgress: false,
          pagination: false,
          height: "100vh",
        }}
        className="left-2/4 top-[45%] translate-x-[-50%] translate-y-[-45%]"
      >
        {slides.map((slide) => (
          <SplideSlide key={slide.id}>
            <Image
              src={slide.src}
              alt={slide.title}
              fill
              priority
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
      </Slider>
    </div>
  );
};

export default Hero;
