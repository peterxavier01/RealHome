import Link from "next/link";
import Image from "next/image";
import { Bell } from "lucide-react";

import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
      <Link href="/" className="relative flex items-center gap-2 font-semibold">
        <Image
          alt="RealHome logo"
          src="/images/logo-dark.svg"
          width={130}
          height={45}
          className="h-auto w-[130px] lg:w-auto block"
        />
      </Link>
      <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
        <Bell className="h-4 w-4" />
        <span className="sr-only">Toggle notifications</span>
      </Button>
    </div>
  );
};

export default Header;
