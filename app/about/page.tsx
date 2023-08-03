import BreadCrumb from "@/components/BreadCrumb";
import Features from "@/components/Features";
import Newsletter from "@/components/Newsletter";
import Team from "@/components/Team";
import { aboutParagraphOne, aboutParagraphTwo, team } from "@/config/data";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <main className="max-w-[1440px] mx-auto">
      <section className="my-12 px-4">
        <BreadCrumb routeOne="Home" routeTwo="About us" />
        <h1 className="font-light text-[#3c3c3c] text-4xl md:text-[45px] leading-[50px] mt-2">
          About <span className="font-medium"> Our Company</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div>
            <Image
              src="/images/about.png"
              alt="About RealHome"
              width={500}
              className="w-full h-[320px] md:h-auto"
              height={300}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
            />
          </div>

          <div className="flex flex-col gap-4 text-base leading-7 font-normal text-[#797979]">
            <p>{aboutParagraphOne}</p>
            <p>{aboutParagraphTwo}</p>
          </div>
        </div>
      </section>

      <Features />

      <Team />

      <Newsletter />
    </main>
  );
};

export default About;
