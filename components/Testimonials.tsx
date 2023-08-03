"use client";

import React from "react";
import { SplideSlide } from "@splidejs/react-splide";

import Slider from "./Slider";
import Heading from "./Heading";
import { testimonials } from "@/config/data";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="testimonials">
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
            <Image
              src={testimonial.src}
              alt={`testimonial by ${testimonial.author}`}
              fill
              priority
              className="object-cover"
            />

            <div className="w-full absolute left-2/4 top-[30%] translate-x-[-50%] translate-y-[-30%] z-10 px-4">
              <Heading
                titleTextOne="Testimonials"
                titleStyle="text-white"
                className="items-center mb-10"
              />

              <p className="text-white text-xl md:text-2xl leading-[30px] md:leading-[35px] mx-auto text-center max-w-[755px] mb-4">
                {testimonial.text}
              </p>
              <p
                className={`text-base md:text-xl font-normal leading-[27px] text-white text-center`}
              >
                {testimonial.author},{" "}
                <span className="font-medium">{testimonial.company}</span>
              </p>
            </div>

            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[0.502]" />
          </SplideSlide>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
