"use client";

import Image from "next/image";
import React from "react";

import { team } from "@/config/data";

const Team = () => {
  return (
    <section className="px-4 py-24">
      <div className="flex flex-wrap items-center justify-between">
        <h4 className="text-[#242424] text-4xl leading-[65px] font-light">
          Our <span className="font-medium">Team</span>
        </h4>
        <p className="text-xl text-[#e2574c] font-normal underline leading-[65px]">
          Want to be a part of this team?
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-7">
        {team.map((member) => (
          <div
            key={member.id}
            className=" border border-[#e6e6e6] rounded-[3px]"
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
              <p className="text-[#000000] text-xl font-medium text-center mb-1">
                {member.name}
              </p>
              <p className="text-sm text-[#797979] text-center font-normal">
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
