"use client";

import { twMerge } from "tailwind-merge";

interface HeadingProps {
  titleTextOne?: string;
  titleTextTwo?: string;
  className?: string;
  titleStyle?: string;
  isSubHeader?: boolean;
  subHeader?: string;
}

const Heading: React.FC<HeadingProps> = ({
  titleTextOne,
  titleTextTwo,
  className,
  titleStyle,
  isSubHeader,
  subHeader,
}) => {
  if (isSubHeader) {
    return (
      <h4 className="text-[37px] text-primary leading-[65px] font-medium font-raleway mb-4">
        {subHeader}
      </h4>
    );
  }

  return (
    <div
      className={twMerge(`flex flex-col gap-6 mb-8 font-raleway`, className)}
    >
      <h2
        className={twMerge(
          `text-primary leading-heading text-3xl md:text-[45px]`,
          titleStyle
        )}
      >
        <span className={`font-light ${!titleTextTwo && "font-medium"} mr-2`}>
          {titleTextOne}
        </span>
        <span className="font-medium">{titleTextTwo}</span>
      </h2>
      <span className="h-[3px] w-28 bg-red-1000 rounded-sm inline-block" />
    </div>
  );
};

export default Heading;
