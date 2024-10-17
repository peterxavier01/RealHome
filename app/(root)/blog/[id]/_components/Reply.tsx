"use client";

import axios from "axios";
import React, { FormEvent, useCallback, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import PostForm from "@/components/PostForm";

import { cn } from "@/lib/utils";
import { Comment } from "@/types";

interface ReplyProps {
  id: string;
  showReply: boolean;
  setShowReply: (showReply: boolean) => void;
  comment: Comment;
}

interface MutationArgs {
  email: string;
  name: string;
  replyContent: string;
  parentId: string;
}

const Reply = ({ id, showReply, comment, setShowReply }: ReplyProps) => {
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
      setShowReply(false);
    },

    onError: () => {
      toast.error("Something went wrong. Please try again");
    },

    onSettled: () => {
      router.refresh();
    },
  });

  const { isPending } = mutation;

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    mutation.mutate({
      email: value.email,
      name: value.name,
      replyContent: value.message,
      parentId: comment.id,
    });
  }

  return (
    <div
      className={cn(
        "md:col-span-7 lg:col-span-8 transition duration-300",
        showReply
          ? "visible opacity-100 h-full"
          : "invisible opacity-0 h-0 -mt-8"
      )}
    >
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

export default Reply;
