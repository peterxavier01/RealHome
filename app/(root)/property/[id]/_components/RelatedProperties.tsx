"use client";

import Heading from "@/components/Heading";
import Card from "./Card";

import { Property } from "@/types";

const RelatedProperties = ({ properties }: { properties: Property[] }) => {
  return properties ? (
    <section className="border-t-2 border-gray-6000 pt-8 w-full md:col-span-8">
      <Heading titleTextOne="Related" titleTextTwo="Properties" />
      <div className="flex flex-wrap items-center gap-4 md:gap-8">
        {properties.map((property) => (
          <Card key={property.id} property={property} />
        ))}
      </div>
    </section>
  ) : null;
};

export default RelatedProperties;
