"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

import SocialIcons from "./SocialIcons";

export const links = [
  { id: 1, href: "/", name: "Home" },
  { id: 2, href: "/about", name: "About Us" },
  { id: 3, href: "/property", name: "Property" },
  { id: 4, href: "/blog", name: "Our Blog" },
  { id: 5, href: "/contacts", name: "Contacts" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const isMobile = screenWidth <= 767;

  const NavToggle = isOpen ? MdClose : HiOutlineMenuAlt1;

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    }
  }, [isMobile]);

  const handleCloseNavbar = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="hidden max-sm:block absolute top-7 right-6 z-20 text-gray-600"
      >
        <NavToggle size={30} />
      </button>
      <nav className="flex z-[5] justify-between max-w-[1440px] w-full h-[90px] lg:px-6 px-4 bg-white drop-shadow-custom mx-auto">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.svg"
            alt="Realhome Logo"
            width={173}
            height={45}
            priority
          />
        </Link>

        <ul
          className={`flex h-[90px] bg-white max-sm:px-3 max-sm:fixed max-sm:inset-y-0 max-sm:right-0 max-sm:left-[30%] max-sm:flex-col max-sm:h-full max-sm:pt-[6em] max-sm:items-start max-sm:gap-6 transition ${
            isOpen ? "max-sm:translate-x-[0%]" : "max-sm:translate-x-[100%]"
          } max-sm:drop-shadow-md gap-2 z-[10]`}
        >
          {links.map((link) => {
            const isActive =
              pathname === link.href ||
              (pathname.startsWith(link.href) && link.href !== "/");

            return (
              <li
                key={link.id}
                className="max-sm:ml-0 text-base lg:text-md xl:text-lg max-sm:px:4 max-sm:py-2 flex items-center md:justify-center max-sm:w-full md:px-4 max-sm:pl-2 hover:bg-light-gray transition"
                style={{
                  backgroundColor: isActive ? "rgb(0 0 0 / 0.051)" : "",
                }}
                onClick={handleCloseNavbar}
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            );
          })}

          <SocialIcons
            className="border border-[#f2f2f2] hover:border-gray-400"
            containerStyle="ml-6 lg:ml-8 md-lg:hidden"
          />
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
