import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

import Heading from "./Heading";
import PostForm from "./PostForm";

interface MutationArgs {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };

  const resetForm = () => {
    setValue({
      name: "",
      email: "",
      message: "",
    });
  };

  const mutation = useMutation({
    mutationFn: (data: MutationArgs) => {
      return axios.post("/api/message", data);
    },

    onSuccess: () => {
      toast.success("Message Sent Successfully");
      resetForm();
    },

    onError: () => {
      toast.error("Something went wrong. Please try again");
    },
  });

  const { isPending } = mutation;

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    mutation.mutate({
      ...value,
    });
  }

  return (
    <div className="md:col-span-7 lg:col-span-8">
      <Heading isSubHeader subHeader="Leave a Comment" />

      <PostForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        resetForm={resetForm}
        value={value}
        isPending={isPending}
      />
    </div>
  );
};

export default ContactForm;
