import dynamic from "next/dynamic";
import { Suspense } from "react";

import { Post } from "@/types";

const Comment = dynamic(() => import("./Comment"), { ssr: false });

interface CommentsProps {
  post: Post;
  id: string;
}

const Comments = ({ post, id }: CommentsProps) => {
  return (
    <section>
      <p className="text-xl leading-large font-bold font-raleway text-gray-3000 capitalize">
        {post.comments.length} response
        <span>{post.comments.length === 1 ? "" : "s"}</span>
      </p>

      <Suspense fallback={<div className="loader border-primary" />}>
        {post.comments
          .filter((commentFilter) => commentFilter.parentId === null)
          .map((comment) => (
            <div key={comment.id}>
              <Comment comment={comment} id={id} />

              {comment.replies // Comment Replies
                ? comment.replies.map((reply) => (
                    <div key={reply.id} className="ml-10">
                      <Comment comment={reply} id={id} />
                    </div>
                  ))
                : null}
            </div>
          ))}
      </Suspense>
    </section>
  );
};

export default Comments;
