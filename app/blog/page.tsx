import Link from "next/link";
import Image from "next/image";
import React from "react";

import BreadCrumb from "@/components/BreadCrumb";
import Button from "@/components/Button";
import Paginate from "@/components/Paginate";

import { archives, categories, posts } from "@/config/data";

const Blog = () => {
  return (
    <main className="blog">
      <section className="my-12 px-4">
        <BreadCrumb href="/" routeOne="Home" routeTwo="Blog" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-7">
          <div className="col-span-2 border-b-2 md:border-b-0 md:border-r-2 border-[#f3f2f2] md:pr-10">
            {posts.map((post) => (
              <div
                key={post.id}
                className="flex flex-col gap-8 mb-12 items-start border-b border-[#f0f4f5] pb-12"
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

            <div className="mb-12 md:mb-0">
              <Paginate total={40} />
            </div>
          </div>

          <aside>
            <section className="mb-12">
              <h4 className="text-xl mb-2 text-[#3c3c3c] leading-[50px] font-medium">
                Categories
              </h4>
              {categories.map((category) => (
                <div key={category.id}>
                  <Link
                    href=""
                    className="text-base leading-[35px] text-[#797979] font-medium capitalize"
                  >
                    {category.category}
                  </Link>
                </div>
              ))}
            </section>

            <section className="mb-12">
              <h4 className="text-xl mb-2 text-[#3c3c3c] leading-[50px] font-medium">
                Archives
              </h4>
              {archives.map((archive) => (
                <div key={archive.id}>
                  <Link
                    href=""
                    className="text-base leading-[35px] text-[#797979] font-medium capitalize"
                  >
                    {archive.text}
                  </Link>
                </div>
              ))}
            </section>

            <section>
              <h4 className="text-xl mb-2 text-[#3c3c3c] leading-[50px] font-medium capitalize">
                Recent posts
              </h4>
              {posts.slice(0, 2).map((post) => (
                <div key={post.id} className="mb-8">
                  <Link
                    href=""
                    className="text-base leading-[35px] text-[#3c3c3c] font-medium capitalize hover:underline transition"
                  >
                    {post.title}
                  </Link>
                  <p className="text-[#797979] text-sm leading-6 font-normal mt-1">
                    {post.body}
                  </p>
                </div>
              ))}
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default Blog;
