"use client";

import React from "react";
import Pagination from "rc-pagination";
import Button from "./Button";
import "../index.scss";

const itemRender = (
  current: number,
  type: "page" | "prev" | "next" | "jump-prev" | "jump-next",
  element: React.ReactNode
) => {
  if (type === "prev") {
    return <Button className="text-sm md:text-base">Previous</Button>;
  }
  if (type === "next") {
    return <Button className="text-sm md:text-base">Next</Button>;
  }
  return element;
};

const Paginate = () => (
  <>
    <Pagination total={30} itemRender={itemRender} />
  </>
);

export default Paginate;
