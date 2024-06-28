"use client";

import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Pagination from "rc-pagination";

import Button from "./Button";

import "../styles/index.scss";

const createItemRender = (createPageURL: (current: number) => void) => {
  const ItemRender = (
    current: number,
    type: "page" | "prev" | "next" | "jump-prev" | "jump-next",
    element: React.ReactNode
  ) => {
    if (type === "prev") {
      return (
        <Button
          className="text-sm md:text-base"
          onClick={() => createPageURL(current)}
        >
          Previous
        </Button>
      );
    }

    if (type === "next") {
      return (
        <Button
          className="text-sm md:text-base"
          onClick={() => createPageURL(current)}
        >
          Next
        </Button>
      );
    }

    if (type === "page") {
      return (
        <a rel="no-follow" onClick={() => createPageURL(current)}>
          {current}
        </a>
      );
    }
    return element;
  };

  ItemRender.displayName = "ItemRender";

  return ItemRender;
};

const Paginate = ({ total }: { total: number }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const createPageURL = (pageNumber: number | string) => {
    const paramsObj = Array.from(searchParams).reduce(
      (acc, [key, value]) => ({ ...acc, [key]: value }),
      {}
    );

    const params = new URLSearchParams(paramsObj);
    params.set("page", pageNumber.toString());
    return router.push(`${pathname}?${params.toString()}`);
  };

  const itemRender = createItemRender(createPageURL);

  return <Pagination total={total} itemRender={itemRender} />;
};

export default Paginate;
