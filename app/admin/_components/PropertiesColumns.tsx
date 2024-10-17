"use client";

import { Property } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import PropertySheet from "./PropertySheet";

export const columns: ColumnDef<Property>[] = [
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

      return <Image src={image} alt="" width={150} height={150} />;
    },
  },
  { header: "Name", accessorKey: "name" },
  { header: "Client", accessorKey: "client" },
  { header: "Category", accessorKey: "category" },
  { header: "Property Info", accessorKey: "info" },
  {
    header: "Description",
    accessorKey: "description",
    cell: ({ row }) => {
      const desc: string = row.getValue("description");
      return <span className="line-clamp-1">{desc}</span>;
    },
  },
  { header: "Price", accessorKey: "price" },
  { header: "Property Size", accessorKey: "size" },
  { header: "Bedrooms", accessorKey: "numberOfBedrooms" },
  { header: "Bathrooms", accessorKey: "numberOfBathrooms" },
  {
    header: "UpdatedAt",
    accessorKey: "lastUpdated",
    cell: ({ row }) => {
      const date: string = row.getValue("lastUpdated");
      const newDate = new Date(date);
      return <span>{format(newDate, "dd/MM/yyyy")}</span>;
    },
  },
  { header: "City", accessorKey: "location.city" },
  { header: "State", accessorKey: "location.state" },
  {
    id: "actions",
    cell: ({ row }) => {
      const property = row.original;

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
                navigator.clipboard.writeText(property.id);
                toast("Property ID copied successfully");
              }}
            >
              Copy property ID
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <PropertySheet property={property} />
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
