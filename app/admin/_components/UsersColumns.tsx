"use client";

import Image from "next/image";
import { User } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import UserSheet from "./UserSheet";

import { truncateText } from "@/lib/utils";

export const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        className="text-white"
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        className="text-white"
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    header: "Image",
    accessorKey: "image",
    cell: ({ row }) => {
      const image: string = row.getValue("image");

      if (!image) return;

      return <Image src={image} alt="" width={50} height={50} />;
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Password",
    accessorKey: "password",
    cell: ({ row }) => {
      const password: string = row.getValue("password");
      const truncatedPassword = truncateText(password, 10);
      return <span className="truncate">{truncatedPassword}</span>;
    },
  },
  {
    header: "Email Verified",
    accessorKey: "emailVerified",
    cell: ({ row }) => {
      const emailVerified: string = row.getValue("emailVerified");

      if (emailVerified === null) {
        return <span></span>; // return an empty span if the data is null
      }

      const newDate = new Date(emailVerified);
      const formattedDate = format(newDate, "dd/MM/yyyy");

      return <span>{formattedDate}</span>;
    },
  },
  { header: "Role", accessorKey: "role" },
  {
    header: "Bio",
    accessorKey: "bio",
    cell: ({ row }) => {
      const bio: string = row.getValue("bio");

      return <span className="line-clamp-1">{bio}</span>;
    },
  },
  {
    header: "CreatedAt",
    accessorKey: "createdAt",
    cell: ({ row }) => {
      const createdAt: string = row.getValue("createdAt");

      if (createdAt === null) {
        return <span></span>; // return an empty span if the data is null
      }

      const newDate = new Date(createdAt);
      const formattedDate = format(newDate, "dd/MM/yyyy");

      return <span>{formattedDate}</span>;
    },
  },
  {
    header: "UpdatedAt",
    accessorKey: "updatedAt",
    cell: ({ row }) => {
      const updatedAt: string = row.getValue("updatedAt");

      if (updatedAt === null) {
        return <span></span>; // return an empty span if the data is null
      }

      const newDate = new Date(updatedAt);
      const formattedDate = format(newDate, "dd/MM/yyyy");

      return <span>{formattedDate}</span>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(user.id),
                  toast("User ID copied successfully");
              }}
            >
              Copy user ID
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <UserSheet user={user} />
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
