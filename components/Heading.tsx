"use client";

import { cn } from "@/lib/utils";

interface HeadingProps {
  titleTextOne?: string;
  titleTextTwo?: string;
  className?: string;
  titleStyle?: string;
  isSubHeader?: boolean;
  subHeader?: string;
  isBordered?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
  titleTextOne,
  titleTextTwo,
  className,
  titleStyle,
  isSubHeader,
  subHeader,
  isBordered,
}) => {
  if (isSubHeader) {
    return (
      <h4 className="text-heading-2 text-primary leading-large font-medium font-raleway mb-4">
        {subHeader}
      </h4>
    );
  }

  return (
    <div className={cn(`flex flex-col gap-6 mb-8 font-raleway`, className)}>
      <h2
        className={cn(
          `text-primary leading-heading text-3xl md:text-[45px]`,
          titleStyle
        )}
      >
        <span className={`font-light ${!titleTextTwo && "font-medium"} mr-2`}>
          {titleTextOne}
        </span>
        <span className="font-medium">{titleTextTwo}</span>
      </h2>
      {isBordered ? (
        <span className="h-[3px] w-28 bg-red-1000 rounded-sm inline-block" />
      ) : null}
    </div>
  );
};

export default Heading;
