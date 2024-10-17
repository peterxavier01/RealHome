import { Menu } from "lucide-react";

import NavItems from "./NavItems";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pt-12 bg-neutral-700">
        <NavItems />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
