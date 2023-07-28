"use client";

import { Card } from "@/types";
import Image from "next/image";

interface PropertyCardProps {
  card: Card;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ card }) => {
  return (
    <div className="bg-white border border-[#e6e6e6] flex flex-col items-center justify-center pb-3">
      <div style={{ width: "100%", height: 250, position: "relative" }}>
        <Image src={card.src} alt={card.title} fill objectFit="cover" />
      </div>

      <div className="pt-6">
        <p className="text-[22px] text-[#3c3c3c] font-medium text-center mb-1">
          {card.title}
        </p>
        <p className="text-[15px] text-[#797979] text-center">
          {card.state} / {card.city}
        </p>
        <p className="text-base text-[#e2574c] text-center my-4">
          {card.price}
        </p>
      </div>

      <div className="bg-[#e6e6e6] h-[1px] w-full my-2" />

      <div className="text-[13px] text-[#797979] flex items-center justify-center mt-2 gap-2 md:gap-3">
        <p>{card.size} Sq Ft</p>
        <span className="bg-[#c0c0c0] w-1 h-1 rounded-full" />
        <p>
          {card.numberOfBedrooms} Bedroom{card.numberOfBedrooms > 1 ? "s" : ""}
        </p>
        <span className="bg-[#c0c0c0] w-1 h-1 rounded-full" />
        <p>
          {card.numberOfBathrooms} Bathroom
          {card.numberOfBathrooms > 1 ? "s" : ""}
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
