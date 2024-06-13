import Image from "next/image";

import Button from "@/components/Button";

interface IBlogPost {
  id: number;
  title: string;
  src: string;
  body: string;
}

interface PostCardProps {
  post: IBlogPost;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div
      key={post.id}
      className="flex flex-col gap-8 mb-12 items-start border-b border-[#f0f4f5] pb-12"
    >
      <h2 className="text-[45px] text-primary leading-heading font-raleway">
        {post.title}
      </h2>
      <Image
        src={post.src}
        alt={post.title}
        width={300}
        height={300}
        className="w-full h-auto object-contain"
      />
      <p className="text-base text-gray-3000 leading-paragraph font-normal font-playfair-display">
        {post.body}
      </p>
      <Button className="capitalize">Read more</Button>
    </div>
  );
};

export default PostCard;
