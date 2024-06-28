"use client";

import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import BreadCrumb from "@/components/BreadCrumb";
import Button from "@/components/Button";
import PropertyInfo from "./PropertyInfo";
import ClientInfo from "./ClientInfo";
import PropertyHero from "./PropertyHero";

import { getPropertyById } from "@/lib/getPropertyById";
import usePaginationDataStore from "@/store/usePaginationDataStore";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const RelatedProperties = dynamic(() => import("./RelatedProperties"), {
  ssr: false,
});

interface PageComponentProps {
  propertyId: string;
}

const PageComponent = ({ propertyId }: PageComponentProps) => {
  const router = useRouter();

  const paginationData = usePaginationDataStore(
    (state) => state.paginationData
  );

  const position = paginationData?.indexOf(propertyId);

  const handlePrev = () => {
    if (position > 0) {
      const newId = paginationData[position - 1]; // get id before current position
      router.push(newId);
    }
  };

  const handleNext = () => {
    if (position < paginationData.length - 1) {
      const newId = paginationData[position + 1]; // get id after current position
      router.push(newId);
    }
  };

  const {
    data: property,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["property_details", propertyId],
    queryFn: () => getPropertyById(propertyId),
  });

  const paginationStyles =
    "text-sm md:text-[19px] leading-[26px] uppercase text-red-1000 font-bold font-raleway bg-transparent p-0";

  if (isLoading) {
    return (
      <div className="min-h-screen text-slate-800 font-medium flex items-center justify-center">
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
    <section className="wrapper my-8">
      <BreadCrumb
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Property", href: "/property" },
          { name: property.name ?? "", href: "#" },
        ]}
      />

      {property ? (
        <div className="grid md:grid-cols-12 gap-6 md:gap-y-2 md:gap-x-8 lg:gap-x-12">
          <div className="md:col-span-8">
            <PropertyHero property={property} />

            <div className="w-full flex items-center justify-between mb-2 max-sm:border-b-2 max-sm:border-gray-6000">
              <Button className={paginationStyles} onClick={handlePrev}>
                Previous object
              </Button>
              <Button className={paginationStyles} onClick={handleNext}>
                Next object
              </Button>
            </div>
          </div>

          <div className="md:col-span-4">
            <PropertyInfo property={property} />

            <ClientInfo property={property} />

            <p className="text-sm leading-6 font-normal text-gray-3000 font-playfair-display border-t-2 border-gray-1000 pt-4">
              {property.description}
            </p>

            <Button className="mt-6">Buy this property</Button>
          </div>

          <Suspense fallback={<div className="loader border-primary" />}>
            {property?.relatedProperties.length > 0 ? (
              <RelatedProperties properties={property?.relatedProperties} />
            ) : null}
          </Suspense>
        </div>
      ) : null}
    </section>
  );
};

export default PageComponent;
