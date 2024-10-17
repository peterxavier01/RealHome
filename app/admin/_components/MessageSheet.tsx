"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { Messages } from "@prisma/client";
import { Trash } from "lucide-react";

import CustomSheet from "./CustomSheet";
import FormInput from "./FormInput";
import { Button } from "@/components/ui/button";
import { SheetClose, SheetFooter } from "@/components/ui/sheet";

import { deleteMessageById, updateMessage } from "@/actions/message";

export default function MessageSheet({ message }: { message: Messages }) {
  const [data, setData] = useState({
    name: message.name,
    email: message.email,
    message: message.message ?? "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  // Action to update a user's message details by its ID
  const { mutate: server_update_message } = useMutation({
    mutationKey: ["update-message"],
    mutationFn: (formData: FormData) => {
      return updateMessage({ ...data }, message.id);
    },
    onError: () => {
      toast("Something went wrong. Please try again");
    },
    onSuccess: () => {
      toast("Updated", {
        description: "Message details updated successfully",
      });
    },
  });

  // Action to delete a user message by its ID
  const { mutate: server_delete_message } = useMutation({
    mutationKey: ["delete-message"],
    mutationFn: () => {
      return deleteMessageById(message.id);
    },
    onError: () => {
      toast("Something went wrong. Please try again");
    },
    onSuccess: () => {
      toast("Deleted", {
        description: "Message deleted successfully",
      });
    },
  });

  return (
    <CustomSheet
      title="Message Details"
      description="View or edit message details."
      buttonText="View message details"
    >
      <form action={server_update_message} className="grid gap-4 py-8">
        <FormInput
          name="name"
          value={data.name}
          id="name"
          hasLabel
          labelName="Name"
          onChange={handleChange}
        />
        <FormInput
          name="email"
          value={data.email}
          id="email"
          hasLabel
          labelName="Email"
          type="email"
          onChange={handleChange}
        />
        <FormInput
          name="message"
          value={data.message ?? ""}
          id="bio"
          hasLabel
          labelName="Message"
          onChange={handleChange}
        />

        <SheetFooter>
          <SheetClose asChild>
            <Button
              type="button"
              variant="destructive"
              className="text-white p-4 ml-auto"
              onClick={() => server_delete_message()}
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
