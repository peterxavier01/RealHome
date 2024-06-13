"use client";

import Link from "next/link";
import Button from "./Button";
import Heading from "./Heading";
import PropertyCard from "./PropertyCard";

import { cards } from "@/config/data";

const Gallery = () => {
  return (
    <section className="py-24 bg-[#f6f6f6]">
      <div className="wrapper">
        <Heading
          titleTextOne="Featured"
          titleTextTwo="Properties"
          className="items-center"
        />
        <p className="text-base leading-7 text-gray-3000 font-playfair-display text-center font-normal max-w-[559px] m-auto mb-12">
          Quisque diam lorem interdum vitaapibus vitae pede. Donec eget tellus
          non erat lacinia fertum. Donec in velit vel ipsum auctovinar.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {cards.map((card) => (
            <PropertyCard key={card.id} card={card} />
          ))}
        </div>

        <div className="flex justify-center items-center">
          <Link href="/property">
            <Button>All properties</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
