"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { team } from "@/config/data";

const Team = () => {
  return (
    <section className="px-4 py-24 wrapper">
      <div className="flex flex-wrap items-center justify-between">
        <h4 className="text-gray-2000 text-4xl leading-[65px] font-light font-raleway">
          Our <span className="font-medium">Team</span>
        </h4>
        <Link
          href="#"
          className="text-xl text-red-1000 font-normal underline leading-[65px] font-playfair-display"
        >
          Want to be a part of this team?
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-7">
        {team.map((member) => (
          <div
            key={member.id}
            className=" border border-gray-4000 rounded-[3px]"
          >
            <div>
              <Image
                src={member.src}
                alt={member.name}
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="my-6">
              <p className="text-[#000000] text-xl font-medium text-center mb-1 font-raleway">
                {member.name}
              </p>
              <p className="text-sm text-gray-3000 text-center font-normal font-playfair-display">
                {member.postion}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
