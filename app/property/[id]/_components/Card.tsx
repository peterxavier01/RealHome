import Image from "next/image";
import Link from "next/link";

import { Property } from "@/types";

const Card = ({ property }: { property: Property }) => {
  return property ? (
    <Link href={`/property/${property.id}`}>
      <div className="relative w-[232px] h-[134px] rounded-[3px]">
        <Image alt="alt" src={property.image} fill className="object-cover" />
      </div>

      <h2 className="text-xl leading-heading text-primary font-medium font-raleway">
        {property.name}
      </h2>

      <p className="text-[15px] text-gray-3000 leading-heading font-normal -mt-6 font-playfair-display flex items-center gap-1">
        <span>{property.location.city}</span>
        <span>/</span>
        <span>{property.location.state}</span>
      </p>
    </Link>
  ) : null;
};

export default Card;
