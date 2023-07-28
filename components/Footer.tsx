"use client";

import Image from "next/image";

import SocialIcons from "./SocialIcons";
import { links } from "./Navbar";

const clientLinks = [
  { id: 1, href: "/sign-in", name: "Sign in" },
  { id: 2, href: "/forums", name: "Forums" },
  { id: 3, href: "/promotions", name: "Promotions" },
  { id: 4, href: "/news", name: "News" },
];

const Footer = () => {
  return (
    <div className="bg-dark-gray min-h-[384px] w-full text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 py-12 md:py-24 items-start max-w-[1440px] gap-8">
      <div className="flex flex-col items-start gap-6">
        <Image
          src="/images/logo-dark.svg"
          alt="RealHome Logo"
          width={173}
          height={45}
        />
        <SocialIcons className="bg-white" containerStyle="ml-0" />
      </div>

      <div>
        <p className="text-[28px] text-white font-light leading-[50px] mb-4">
          Navigation
        </p>
        <ul>
          {links.map((link) => (
            <li key={link.id} className="text-[15px] leading-[30px]">
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-[28px] text-white font-light leading-[50px] mb-4">
          For clients
        </p>
        <ul>
          {clientLinks.map((link) => (
            <li key={link.id} className="text-[15px] leading-[30px]">
              <a href="#">{link.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-[28px] text-white font-light leading-[50px] mb-4">
          Contact us
        </p>
        <p className="mb-2">240 Central Park, London OR 10019</p>
        <div className="text-[15px] leading-[30px] mb-2">
          <p>Freephone: +1 800 559 6580</p>
          <p>Telephone: +1 959 603 6035</p>
          <p>FAX: +1 873 393 2929</p>
        </div>
        <p className="leading-[23px] text-[15px] text-[#e2574c]">
          info@realhome.com
        </p>
      </div>
    </div>
  );
};

export default Footer;
