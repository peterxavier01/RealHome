"use client";

import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import Sidebar from "@/components/Sidebar";
import Paginate from "@/components/Paginate";
import PostCard from "./PostCard";

import { getPosts } from "@/lib/getPosts";
import { Post } from "@/types";

interface PageComponentProps {
  page: number;
}

const PageComponent = ({ page }: PageComponentProps) => {
  const router = useRouter();

  const {
    data: posts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["posts", page],
    queryFn: () => getPosts(page),
  });

  // Redirect blog route to use pagination param
  useEffect(() => {
    const redirectPage = () => {
      const url = window.location.href;
      if (!url.includes("page")) router.push("/blog?page=1");
    };

    redirectPage();
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loader border-primary" />
      </div>
    );
  }

  if (isError) {
    return (
      <h1 className="text-3xl text-slate-800 font-medium flex items-center justify-center">
        Something went wrong
      </h1>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-7">
      <div className="col-span-2 border-b-2 md:border-b-0 md:border-r-2 border-gray-1000 md:pr-10">
        {posts
          ? posts.map((post: Post) => <PostCard key={post.id} post={post} />)
          : null}

        <div className="mb-12 md:mb-0">
          <Paginate total={40} />
        </div>
      </div>

      <Sidebar />
    </div>
  );
};

export default PageComponent;
