"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { $Enums, User } from "@prisma/client";
import { Trash } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CustomSheet from "./CustomSheet";
import FormInput from "./FormInput";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { SheetClose, SheetFooter } from "@/components/ui/sheet";

import { updateUser } from "@/actions/user";
import { deleteUserById } from "@/actions/user";

export default function UserSheet({ user }: { user: User }) {
  const [data, setData] = useState({
    name: user.name,
    email: user.email,
    bio: user.bio ?? "",
  });
  const [role, setRole] = useState(user.role);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSelect = (role: $Enums.UserRole) => {
    setRole(role);
  };

  // Action to update a user's details by its ID
  const { mutate: server_update_user } = useMutation({
    mutationKey: ["update-user"],
    mutationFn: (formData: FormData) => {
      return updateUser({ ...data, role: role }, user.id);
    },
    onError: () => {
      toast("Something went wrong. Please try again");
    },
    onSuccess: () => {
      toast("Updated", {
        description: "User details updated successfully",
      });
    },
  });

  // Action to delete a single user by its ID
  const { mutate: server_delete_user } = useMutation({
    mutationKey: ["delete-user"],
    mutationFn: () => {
      return deleteUserById(user.id);
    },
    onError: () => {
      toast("Something went wrong. Please try again");
    },
    onSuccess: () => {
      toast("Deleted", {
        description: "User deleted successfully",
      });
    },
  });

  return (
    <CustomSheet
      title="User Details"
      description="View or edit user details."
      buttonText="View user details"
    >
      <form action={server_update_user} className="grid gap-4 py-8">
        <FormInput
          name="name"
          value={data.name}
          hasLabel
          id="name"
          labelName="Name"
          onChange={handleChange}
        />
        <FormInput
          name="email"
          type="email"
          value={data.email}
          hasLabel
          id="email"
          labelName="Email"
          onChange={handleChange}
        />
        <FormInput
          name="bio"
          value={data.bio ?? ""}
          hasLabel
          id="bio"
          labelName="Bio"
          onChange={handleChange}
        />

        <Label htmlFor="roles">Role</Label>
        <Select defaultValue={role} onValueChange={handleSelect}>
          <SelectTrigger id="roles" className="w-full">
            <SelectValue placeholder="Select user role" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Roles</SelectLabel>
              <SelectItem value="USER">USER</SelectItem>
              <SelectItem value="EDITOR">EDITOR</SelectItem>
              <SelectItem value="ADMIN">ADMIN</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <SheetFooter>
          <SheetClose asChild>
            <Button
              type="button"
              variant="destructive"
              className="text-white p-4 ml-auto"
              onClick={() => server_delete_user()}
            >
              <Trash />
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button type="submit" className="text-white max-w-[150px] w-full">
              Save changes
            </Button>
          </SheetClose>
        </SheetFooter>
      </form>
    </CustomSheet>
  );
}
