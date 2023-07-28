import Image from "next/image";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

const icons = [
  { id: 1, src: "/images/facebook.svg", name: "facebook logo" },
  { id: 2, src: "/images/pinterest.svg", name: "pinterest logo" },
  { id: 3, src: "/images/instagram.svg", name: "instagram logo" },
  { id: 4, src: "/images/google.svg", name: "google logo" },
];

interface SocialIconsProps {
  className?: string;
  containerStyle?: string;
}

const SocialIcons: React.FC<SocialIconsProps> = ({
  className,
  containerStyle,
}) => {
  return (
    <div
      className={twMerge(
        `flex lg:flex max-sm:ml-0 items-center gap-4`,
        containerStyle
      )}
    >
      {icons.map((icon) => (
        <Link
          href=""
          key={icon.id}
          className={twMerge(
            `transition rounded-full flex items-center justify-center w-10 h-10 hover:scale-110`,
            className
          )}
        >
          <Image src={icon.src} alt={icon.name} width={32} height={32} />
        </Link>
      ))}
    </div>
  );
};

export default SocialIcons;
