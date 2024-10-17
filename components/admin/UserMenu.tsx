import { redirect } from "next/navigation";
import { CircleUser } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

import { auth, signOut } from "@/lib/auth";

const UserMenu = async () => {
  const session = await auth();

  return session ? (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="rounded-full">
          <AvatarImage src={session?.user.image as string} />
          <AvatarFallback>
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuSeparator />
        <form
          action={async () => {
            "use server";
            await signOut();
            redirect("/auth/login");
          }}
        >
          <Button
            type="submit"
            variant="ghost"
            className="p-0 w-full font-normal flex items-center justify-start h-fit cursor-default"
          >
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </Button>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : null;
};

export default UserMenu;
