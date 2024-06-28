import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Breadcrumb {
  name: string;
  href: string;
}

interface BreadCrumbProps {
  breadcrumbs: Breadcrumb[];
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ breadcrumbs }) => {
  return (
    <ol className="flex items-center gap-3 font-raleway">
      {breadcrumbs.map((breadcrumb, index) => {
        const isLast = index === breadcrumbs.length - 1;

        return (
          <React.Fragment key={index}>
            <li className="text-primary text-sm leading-heading capitalize">
              {isLast ? (
                <span className="line-clamp-1">{breadcrumb.name}</span>
              ) : (
                <Link
                  href={breadcrumb.href}
                  className="text-red-1000 text-sm capitalize leading-heading"
                >
                  {breadcrumb.name}
                </Link>
              )}
            </li>
            {!isLast ? (
              <span>
                <Image
                  src="/images/arrow.svg"
                  alt="arrow-forward"
                  width={9}
                  height={5}
                  className="text-red-500"
                />
              </span>
            ) : null}
          </React.Fragment>
        );
      })}
    </ol>
  );
};

export default BreadCrumb;
