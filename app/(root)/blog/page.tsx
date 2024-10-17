import React from "react";

import PageComponent from "./_components/PageComponent";
import BreadCrumb from "@/components/BreadCrumb";

interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

const BlogPage = ({ searchParams }: BlogPageProps) => {
  const currentPage = Number(searchParams?.page ?? 1);

  return (
    <main className="blog wrapper">
      <section className="my-12 px-4">
        <BreadCrumb
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "#" },
          ]}
        />

        <PageComponent page={currentPage} />
      </section>
    </main>
  );
};

export default BlogPage;
