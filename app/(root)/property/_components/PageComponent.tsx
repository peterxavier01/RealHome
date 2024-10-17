"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

import CustomTabs from "@/components/CustomTabs";
import Paginate from "@/components/Paginate";

import { Property } from "@/types";
import { getProperties } from "@/lib/getProperties";
import usePaginationDataStore from "@/store/usePaginationDataStore";

interface PageComponentProps {
  page: number;
}

const PageComponent = ({ page }: PageComponentProps) => {
  const setPaginationData = usePaginationDataStore(
    (state) => state.setPaginationData
  );

  const { data: properties, isLoading } = useQuery({
    queryKey: ["property", page],
    queryFn: () => getProperties(page),
  });

  const pagiantionIdArray = properties?.map((item: Property) => {
    return item.id;
  });

  useEffect(() => {
    setPaginationData(pagiantionIdArray);
  }, [pagiantionIdArray, setPaginationData]);

  return (
    <>
      <h1 className="text-3xl md:text-[45px] leading-heading mt-2 text-primary font-raleway font-light text-center">
        Property <span className="font-medium">Catalog</span>
      </h1>
      <div className="my-14">
        <CustomTabs properties={properties} isLoading={isLoading} />
      </div>

      <div className="mb-24">
        <Paginate total={properties?.length} />
      </div>
    </>
  );
};

export default PageComponent;
