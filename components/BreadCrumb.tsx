"use client";

import Image from "next/image";
import React from "react";

interface BreadCrumbProps {
  routeOne: string;
  routeTwo: string;
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ routeOne, routeTwo }) => {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[#e2574c] text-sm leading-[50px]">{routeOne}</span>
      <span>
        <Image
          src="images/arrow.svg"
          alt="arrow-forward"
          width={9}
          height={5}
          className="text-red-500"
        />
      </span>
      <span className="text-[#3c3c3c] text-sm leading-[50px] capitalize">
        {routeTwo}
      </span>
    </div>
  );
};

export default BreadCrumb;
