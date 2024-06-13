import React from "react";

import BreadCrumb from "@/components/BreadCrumb";
import Paginate from "@/components/Paginate";

import { posts } from "@/config/data";
import Sidebar from "@/components/Sidebar";
import PostCard from "./_components/PostCard";

const Blog = () => {
  return (
    <main className="blog wrapper">
      <section className="my-12 px-4">
        <BreadCrumb href="/" routeOne="Home" routeTwo="Blog" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-7">
          <div className="col-span-2 border-b-2 md:border-b-0 md:border-r-2 border-gray-1000 md:pr-10">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}

            <div className="mb-12 md:mb-0">
              <Paginate total={40} />
            </div>
          </div>

          <Sidebar />
        </div>
      </section>
    </main>
  );
};

export default Blog;
