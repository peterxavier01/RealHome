import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button";

import { Post } from "@/types";
import useParsedMarkedDown from "@/hooks/useParsedMarkdown";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  const sanitizedContent = useParsedMarkedDown(post.description);

  return post ? (
    <div
      key={post.id}
      className="flex flex-col gap-8 mb-12 items-start border-b border-[#f0f4f5] pb-12"
    >
      <h2 className="text-4xl md:text-[45px] text-primary leading-heading font-raleway">
        {post.title}
      </h2>

      <Link className="relative w-full" href={`/blog/${post.id}`}>
        <Image
          src={post.image}
          alt={post.title}
          width={700}
          height={500}
          className="w-full h-auto object-contain"
        />
      </Link>

      <div
        className="text-base text-gray-3000 line-clamp-4 leading-paragraph font-normal font-playfair-display"
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      />

      <Link href={`/blog/${post.id}`}>
        <Button className="capitalize">Read more</Button>
      </Link>
    </div>
  ) : null;
};

export default PostCard;
