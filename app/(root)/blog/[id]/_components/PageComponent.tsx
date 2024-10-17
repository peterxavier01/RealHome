"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { useQuery } from "@tanstack/react-query";

import BreadCrumb from "@/components/BreadCrumb";
import Heading from "@/components/Heading";
import Sidebar from "@/components/Sidebar";
import Loader from "./Loader";
import PostCredits from "./PostCredits";
import CTA from "./CTA";

import { cn } from "@/lib/utils";
import { getPostById } from "@/lib/getPostById";
import useParsedMarkedDown from "@/hooks/useParsedMarkdown";

const AuthorDetails = dynamic(() => import("./AuthorDetails"), { ssr: false });
const CommentForm = dynamic(() => import("./CommentForm"), { ssr: false });
const Comments = dynamic(() => import("./Comments"), { ssr: false });

interface PageComponentProps {
  id: string;
}

const PageComponent = ({ id }: PageComponentProps) => {
  const { data: post, isLoading } = useQuery({
    queryKey: ["post-details", id],
    queryFn: () => getPostById(id),
  });

  const sanitizedContent = useParsedMarkedDown(post?.content);

  if (isLoading) return <Loader />;

  return post ? (
    <div className="grid md:grid-cols-12 gap-8 my-12 wrapper">
      <section className="md:col-span-8 border-b-2 md:border-b-0 md:border-r-2 border-gray-1000 md:pr-10">
        <BreadCrumb
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: post.title, href: "#" },
          ]}
        />

        <Heading
          isSubHeader
          subHeader={post.title}
          className={cn("text-heading-1 leading-heading")}
        />

        <div
          className="prose lg:prose-lg text-base leading-paragraph text-gray-3000 font-playfair-display prose-h2:font-raleway prose-h2:text-primary prose-h2:text-xl prose-h2:leading-heading"
          dangerouslySetInnerHTML={{ __html: sanitizedContent }}
        />

        <PostCredits post={post} />

        <CTA />

        <Suspense fallback={<div className="loader border-primary" />}>
          <AuthorDetails author={post.author} />
        </Suspense>

        <Suspense fallback={<div className="loader border-primary" />}>
          <Comments post={post} id={id} />
        </Suspense>

        <Suspense fallback={<div className="loader border-primary" />}>
          <CommentForm id={id} />
        </Suspense>
      </section>

      <div className="md:col-span-4">
        <Sidebar />
      </div>
    </div>
  ) : null;
};

export default PageComponent;
