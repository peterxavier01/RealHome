"use client";

import React from "react";
import * as Tabs from "@radix-ui/react-tabs";

import { cards } from "@/config/data";
import PropertyCard from "./PropertyCard";

const tabs = [
  { id: 1, title: "Chicago", value: "tab1" },
  { id: 2, title: "Kansas City", value: "tab2" },
  { id: 3, title: "Denver", value: "tab3" },
  { id: 4, title: "New-York", value: "tab4" },
  { id: 5, title: "London", value: "tab5" },
];

const tabContent = [
  { id: 1, value: "tab1", regex: "chicago" },
  { id: 2, value: "tab2", regex: "kansas" },
  { id: 3, value: "tab3", regex: "denver" },
  { id: 4, value: "tab4", regex: "new-york" },
  { id: 5, value: "tab5", regex: "london" },
];

const CustomTabs = () => (
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
    {tabContent.map((content) => (
      <Tabs.Content key={content.id} className="" value={content.value}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-12">
          {cards
            .filter((cardFilter) => {
              const regex = new RegExp(`${content.regex}`, "gi");
              return regex.exec(cardFilter.city);
            })
            .map((card) => (
              <PropertyCard key={card.id} card={card} />
            ))}
        </div>
      </Tabs.Content>
    ))}
  </Tabs.Root>
);

export default CustomTabs;
