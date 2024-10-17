"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { sidebarItems } from "@/config/data";
import { cn } from "@/lib/utils";

const NavItems = () => {
  const pathname = usePathname();

  return (
    <div className="flex-1 font-inter">
      <nav className="grid items-start px-2 space-y-2 text-sm font-medium lg:px-4">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.id}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-3 text-gray-300 transition-all hover:text-gray-300 hover:bg-white/10",
                isActive ? "bg-white/10" : ""
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default NavItems;
