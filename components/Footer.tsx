"use client";

import Image from "next/image";
import Link from "next/link";

import SocialIcons from "./SocialIcons";
import LinkGroup from "./LinkGroup";

import { clientLinks, links } from "@/config/data";

const Footer = () => {
  return (
    <footer className="bg-dark-gray">
      <div className="wrapper min-h-[384px] w-full text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-12 md:py-24 items-start gap-8">
        <div className="flex flex-col items-start gap-6">
          <Link href="/">
            <Image
              src="/images/logo-dark.svg"
              alt="RealHome Logo"
              width={173}
              height={45}
            />
          </Link>

          <SocialIcons className="bg-white" containerStyle="ml-0" />
        </div>

        <LinkGroup groupTitle="Navigation" linkArray={links} />

        <LinkGroup groupTitle="For clients" linkArray={clientLinks} />

        <div>
          <p className="text-[28px] text-white font-light leading-heading mb-4 font-raleway">
            Contact us
          </p>
          <p className="mb-2 font-playfair-display">
            240 Central Park, London OR 10019
          </p>
          <div className="text-[15px] leading-[30px] mb-2 font-playfair-display">
            <p>Freephone: +1 800 559 6580</p>
            <p>Telephone: +1 959 603 6035</p>
            <p>FAX: +1 873 393 2929</p>
          </div>
          <p className="leading-[23px] text-[15px] text-red-1000 font-playfair-display">
            info@realhome.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
