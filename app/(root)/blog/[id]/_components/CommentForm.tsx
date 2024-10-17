"use client";

import React, { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";

import Heading from "@/components/Heading";
import PostForm from "@/components/PostForm";

interface CommentFormProps {
  id: string;
}

interface MutationArgs {
  content: string;
  email: string;
  name: string;
}

const CommentForm = ({ id }: CommentFormProps) => {
  const router = useRouter();

  const [value, setValue] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue({
        ...value,
        [event.target.name]: event.target.value,
      });
    },
    [value]
  );

  const resetForm = () => {
    setValue({
      name: "",
      email: "",
      message: "",
    });
  };

  const mutation = useMutation({
    mutationFn: (data: MutationArgs) => {
      return axios.post(`/api/comment/${id}`, data);
    },

    onSuccess: () => {
      toast.success("Message Sent Successfully");
      resetForm();
    },

    onError: () => {
      toast.error("Something went wrong. Please try again");
    },

    onSettled: () => {
      router.refresh();
    },
  });

  const { isPending } = mutation;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    mutation.mutate({
      name: value.name,
      email: value.email,
      content: value.message,
    });

    resetForm();
  };

  return (
    <div className="md:col-span-7 lg:col-span-8 mt-8">
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

export default CommentForm;
