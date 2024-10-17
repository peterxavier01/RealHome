"use client";

import { Property } from "@prisma/client";

import PageHeader from "../../_components/PageHeader";

import { exportToCSV } from "@/lib/utils";

import useCreatePropertyModal from "@/hooks/useCreatePropertyModal";

type PageComponentProps = {
  properties: Property[];
};

export default function PageComponent({ properties }: PageComponentProps) {
  const onOpen = useCreatePropertyModal((state) => state.onOpen);

  return (
    <PageHeader
      title="Properties"
      buttonText="Add Property"
      showActionBtns
      onExport={() => exportToCSV(properties, "properties")}
      onClick={onOpen}
    />
  );
}
