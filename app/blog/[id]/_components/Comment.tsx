import { useState } from "react";
import Image from "next/image";
import { format } from "date-fns";

import Reply from "./Reply";

import { Comment as UserComment } from "@/types";
import { cn } from "@/lib/utils";

interface CommentProps {
  comment: UserComment;
  id: string;
}

const Comment = ({ comment, id }: CommentProps) => {
  const [showReply, setShowReply] = useState(false);
  const isReply = comment.parentId !== null;

  return comment ? (
    <>
      <div className="flex items-center gap-8 bg-gray-5500 rounded-sm min-h-[214px] p-4 md:p-8 my-8">
        <div className="relative flex flex-col items-center justify-center gap-2">
          <Image
            src={comment.user?.image ?? "/images/avatar.png"}
            height={500}
            width={500}
            alt="author name"
            className="w-[100px] h-[100px] rounded-[5px] object-contain"
          />

          <p className="text-xs leading-7 text-blue-1000 uppercase font-raleway font-medium">
            {comment.user?.name}
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-sm leading-6 font-playfair-display text-gray-3000">
            {comment.content}
          </p>

          <div className="text-sm leading-7 uppercase font-raleway font-normal flex items-center gap-4">
            <p className=" text-gray-2000">
              {format(comment.publishedAt, "MMMM dd, yyyy")}
            </p>
            <p className={cn("text-gray-2000", isReply ? "hidden" : "block")}>
              /
            </p>
            <p
              className={cn(
                "text-blue-1000 cursor-pointer select-none",
                isReply ? "hidden" : "block"
              )}
              onClick={() => setShowReply(!showReply)}
            >
              reply
            </p>
          </div>
        </div>
      </div>

      <Reply
        id={id}
        comment={comment}
        showReply={showReply}
        setShowReply={setShowReply}
      />
    </>
  ) : null;
};

export default Comment;
