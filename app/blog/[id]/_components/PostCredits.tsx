import Link from "next/link";
import {format} from "date-fns"

import { Post } from "@/types";

interface PostCreditsProps {
  post: Post;
}

const PostCredits = ({ post }: PostCreditsProps) => {
  return post ? (
    <section className="flex flex-wrap items-center gap-6 py-6 uppercase font-medium font-raleway my-8 border-y-2 border-gray-6000 text-gray-3000 text-xs leading-6">
      <p>{format(post.lastUpdatedAt, "MMMM dd, yyyy")}</p>
      <span>/</span>
      <p>
        by <span className="text-red-1000">{post.author?.name}</span>
      </p>
      <span>/</span>
      <p>
        in <span className="text-red-1000">Category</span>
      </p>
      <span>/</span>
      <p className="text-red-1000">
        {!post.comments?.length ? 0 : post.comments?.length} comments
      </p>
      <span>/</span>
      <Link href={post.permalink} className="text-red-1000">
        permalink
      </Link>
    </section>
  ) : null;
};

export default PostCredits;
