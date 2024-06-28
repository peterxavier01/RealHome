"use client";

import React from "react";
import Image from "next/image";
import { SplideSlide } from "@splidejs/react-splide";

import Slider from "./Slider";
import Heading from "./Heading";

import { testimonials } from "@/config/data";

const Testimonials = () => {
  return (
    <div className="testimonials relative">
      <div className="relative z-10 top-28">
        <Heading
          titleTextOne="Testimonials"
          titleStyle="text-white"
          className="items-center mb-10"
          isBordered
        />
      </div>

      <Image
        src="/images/testimonial-01.png"
        alt="testimonial"
        fill
        sizes="100vw"
        priority
        className="object-cover"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[0.502]" />

      <Slider
        options={{
          type: "loop",
          gap: "1rem",
          autoplay: true,
          arrows: true,
          pauseOnHover: false,
          resetProgress: false,
          height: "80vh",
        }}
      >
        {testimonials.map((testimonial) => (
          <SplideSlide key={testimonial.id}>
            <div className="w-full absolute left-2/4 top-[30%] translate-x-[-50%] translate-y-[-30%] z-10 px-4">
              <p className="text-white text-xl font-raleway md:text-2xl leading-[30px] md:leading-[35px] mx-auto text-center max-w-[755px] mb-4">
                {testimonial.text}
              </p>
              <p
                className={`text-base md:text-xl font-normal font-playfair-display leading-paragraph text-white text-center`}
              >
                {testimonial.author},{" "}
                <span className="font-medium">{testimonial.company}</span>
              </p>
            </div>
          </SplideSlide>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
