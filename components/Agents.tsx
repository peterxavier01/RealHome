"use client";

import Image from "next/image";
import React from "react";

import { SplideSlide } from "@splidejs/react-splide";

import { agents } from "@/config/data";
import Heading from "./Heading";
import Slider from "./Slider";

const Agents: React.FC = () => {
  return (
    <div className="agents">
      <Slider
        options={{
          type: "loop",
          gap: "1rem",
          autoplay: false,
          arrows: false,
          pauseOnHover: false,
          resetProgress: false,
          pagination: false,
          height: "100%",
        }}
        className="top-[53%] left-[50%] translate-x-[-50%] translate-y-[-53%]"
      >
        {agents.map((agent) => (
          <SplideSlide key={agent.id}>
            <div className="grid grid-cols-1 sm:grid-cols-3 sm:place-items-center md:place-items-end gap-2 lg:gap-8 px-4 pt-24">
              <div className="w-full h-full relative pt-[100%]">
                <Image
                  src={agent.src}
                  alt={agent.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                  className="left-0 bottom-0 object-contain"
                />
              </div>

              <div className="sm:col-span-2 flex flex-col pb-24">
                <div className="relative">
                  <Heading titleTextOne="Our" titleTextTwo="Agents" />
                </div>
                <p className="text-[#3c3c3c] font-bold mb-8 text-[25px] leading-[27px]">
                  {agent.title}
                </p>
                <p className="text-base leading-[27px] text-[#797979]">
                  {agent.description}
                </p>

                <div className="flex items-center gap-4 md:gap-12 mt-8 flex-wrap">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/images/telephone.svg"
                      alt="telephone icon"
                      width={14}
                      height={14}
                      className="text-[#797979]"
                      style={{ width: "auto", height: "auto" }}
                    />
                    <p className="text-[#3c3c3c] text-base leading-[27px]">
                      {agent.tel}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/images/envelope.svg"
                      alt="email icon"
                      width={14}
                      height={14}
                      className="text-[#797979]"
                      style={{ width: "auto", height: "auto" }}
                    />
                    <p className="text-[#e2574c] underline text-base leading-[27px] cursor-pointer">
                      {agent.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Slider>
    </div>
  );
};

export default Agents;
