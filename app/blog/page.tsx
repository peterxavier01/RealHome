import Image from "next/image";
import React from "react";

import BreadCrumb from "@/components/BreadCrumb";
import Button from "@/components/Button";

import { posts } from "@/config/data";

const Blog = () => {
  return (
    <main>
      <section className="my-12 px-4">
        <BreadCrumb href="/" routeOne="Home" routeTwo="Blog" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-7">
          <div className="col-span-2">
            {posts.map((post) => (
              <div
                key={post.id}
                className="flex flex-col gap-8 mb-12 items-start"
              >
                <h2 className="text-[45px] text-[#3c3c3c] leading-[50px]">
                  {post.title}
                </h2>
                <Image
                  src={post.src}
                  alt={post.title}
                  width={300}
                  height={300}
                  className="w-full h-auto object-contain"
                />
                <p className="text-base text-[#797979] leading-[27px] font-normal">
                  {post.body}
                </p>
                <Button className="capitalize">Read more</Button>
              </div>
            ))}
          </div>
          <div className=""></div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
