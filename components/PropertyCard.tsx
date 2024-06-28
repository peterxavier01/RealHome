"use client";

import { Property } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <>
      {property ? (
        <Link
          href={`/property/${property.id}`}
          className="bg-white border border-gray-4000 flex flex-col items-center justify-center pb-3"
        >
          <div style={{ width: "100%", height: 250, position: "relative" }}>
            <Image
              src={property.image}
              alt={property.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="pt-6">
            <p className="text-[22px] text-primary font-medium text-center mb-1 font-raleway">
              {property.name}
            </p>
            <p className="text-[15px] text-gray-3000 text-center font-playfair-display">
              {property.location.state} / {property.location.city}
            </p>
            <p className="text-base text-red-1000 text-center my-4">
              ${property.price}
            </p>
          </div>

          <div className="bg-gray-4000 h-[1px] w-full my-2" />

          <div className="text-[13px] text-gray-3000 flex items-center justify-center mt-2 gap-2 md:gap-3">
            <p>{property.size} Sq Ft</p>
            <span className="bg-[#c0c0c0] w-1 h-1 rounded-full" />
            <p>
              {property.numberOfBedrooms} Bedroom
              {property.numberOfBedrooms > 1 ? "s" : ""}
            </p>
            <span className="bg-[#c0c0c0] w-1 h-1 rounded-full" />
            <p>
              {property.numberOfBathrooms} Bathroom
              {property.numberOfBathrooms > 1 ? "s" : ""}
            </p>
          </div>
        </Link>
      ) : null}
    </>
  );
};

export default PropertyCard;
