"use client";

import * as Tabs from "@radix-ui/react-tabs";

import PropertyCard from "./PropertyCard";

import { tabContent, tabs } from "@/config/data";
import { Property } from "@/types";

interface CustomTabsProps {
  properties: Property[];
  isLoading: boolean;
}

const CustomTabs = ({ properties, isLoading }: CustomTabsProps) => {
  return (
    <Tabs.Root
      className="flex flex-col w-full lg:w-[900px] flex-wrap"
      defaultValue="tab1"
    >
      <Tabs.List
        className="shrink-0 flex flex-wrap mb-14"
        aria-label="Manage your account"
      >
        {tabs.map((tab) => (
          <Tabs.Trigger
            key={tab.id}
            className="bg-white uppercase px-5 h-[45px] flex-1 flex items-center justify-center text-xs md:text-base leading-none text-primary select-none hover:text-gray-3000 data-[state=active]:border-b-[2px] data-[state=active]:border-red-1000 data-[state=active]:focus:relative outline-none cursor-default"
            value={tab.value}
          >
            {tab.title}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {tabContent.map((content) => {
        return isLoading ? (
          <div className="flex items-center gap-6">
            <div className="animate-pulse bg-gray-400 h-14 w-56"></div>
            <div className="animate-pulse bg-gray-400 h-14 w-56"></div>
            <div className="animate-pulse bg-gray-400 h-14 w-56"></div>
            <div className="animate-pulse bg-gray-400 h-14 w-56"></div>
          </div>
        ) : (
          <Tabs.Content key={content.id} value={content.value}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-12">
              {properties
                ? properties
                    .filter((propertyFilter: Property) => {
                      const regex = new RegExp(`${content.regex}`, "gi");
                      return regex.exec(propertyFilter.location.city);
                    })
                    .map((property: Property) => (
                      <PropertyCard key={property.id} property={property} />
                    ))
                : null}
            </div>
          </Tabs.Content>
        );
      })}
    </Tabs.Root>
  );
};

export default CustomTabs;
