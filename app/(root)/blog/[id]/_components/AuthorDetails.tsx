import Image from "next/image";

import { Author } from "@/types";

interface AuthorDetailsProps {
  author: Author;
}

const AuthorDetails = ({ author }: AuthorDetailsProps) => {
  return (
    <div className="flex items-center gap-8 bg-gray-5500 rounded-sm min-h-[214px] p-4 md:p-8 my-8">
      <div className="relative">
        <Image
          src={author.image ?? "/images/avatar.png"}
          height={500}
          width={500}
          alt="author name"
          className="w-[100px] h-[100px] rounded-[5px] object-contain"
        />
      </div>

      <div className="space-y-4">
        <h4 className="text-[23px] leading-[34px] font-medium font-raleway text-gray-2000">
          Written by {author.name}
        </h4>
        <p className="text-sm leading-6 font-playfair-display text-gray-3000">
          {author.name} has more than 10 years experience in the communication.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
          consequuntur.
        </p>
        <p className="uppercase text-xs leading-7 text-gray-2000 font-raleway font-medium">
          view all posts by:{" "}
          <span className="text-blue-1000">{author.name}</span>
        </p>
      </div>
    </div>
  );
};

export default AuthorDetails;
