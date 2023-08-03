"use client";

import { twMerge } from "tailwind-merge";

interface HeadingProps {
  titleTextOne: string;
  titleTextTwo?: string;
  className?: string;
  titleStyle?: string;
}

const Heading: React.FC<HeadingProps> = ({
  titleTextOne,
  titleTextTwo,
  className,
  titleStyle,
}) => {
  return (
    <div className={twMerge(`flex flex-col gap-6 mb-8`, className)}>
      <h2
        className={twMerge(
          `text-[#3c3c3c] leading-[50px] text-3xl md:text-[45px]`,
          titleStyle
        )}
      >
        <span className={`font-light ${!titleTextTwo && "font-medium"} mr-2`}>
          {titleTextOne}
        </span>
        <span className="font-medium">{titleTextTwo}</span>
      </h2>
      <span className="h-[3px] w-28 bg-[#e2574c] rounded-sm inline-block" />
    </div>
  );
};

export default Heading;
