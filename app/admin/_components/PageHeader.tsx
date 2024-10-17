"use client";

import { File, PlusCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

interface PageHeaderTitle {
  title: string;
  onClick?: () => void;
  onExport?: () => void;
  showActionBtns?: boolean;
  buttonText?: string;
}

const PageHeader = ({
  title,
  onClick,
  onExport,
  showActionBtns = false,
  buttonText = "Add Product",
}: PageHeaderTitle) => {
  return (
    <div className="flex items-center">
      <h1 className="leading-heading text-primary text-heading-2 font-inter font-medium">
        {title}
      </h1>

      {showActionBtns ? (
        <div className="ml-auto flex items-center gap-2">
          <Button size="sm" variant="outline" className="h-8 gap-1">
            <File className="h-3.5 w-3.5" />
            <span
              className="sr-only sm:not-sr-only sm:whitespace-nowrap"
              onClick={onExport}
            >
              Export
            </span>
          </Button>
          <Button size="sm" className="h-8 gap-1 text-white" onClick={onClick}>
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              {buttonText}
            </span>
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default PageHeader;
