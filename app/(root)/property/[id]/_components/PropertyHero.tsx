import Image from "next/image";

import { Property } from "@/types";

interface PropertyHeroProps {
  property: Property;
}

const PropertyHero = ({ property }: PropertyHeroProps) => {
  return (
    <>
      <h1 className="font-light mb-8 text-primary text-3xl md:text-[45px] leading-heading mt-2 font-raleway">
        {property.name}
      </h1>
      <div className="relative h-[350px] md:h-[510px] mb-4">
        <Image
          src={property.image}
          alt={property.name}
          fill
          sizes="80vw"
          className="w-full h-auto object-cover"
        />
      </div>
    </>
  );
};

export default PropertyHero;
