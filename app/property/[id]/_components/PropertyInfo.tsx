import { Property } from "@/types";
import { MdBookmark, MdTag } from "react-icons/md";

interface PropertyInfoProps {
  property: Property;
}

const PropertyInfo = ({ property }: PropertyInfoProps) => {
  return (
    <div className="border-b border-gray-1000 flex items-center gap-8 pb-4">
      <div className="flex items-center gap-3">
        <MdBookmark className="text-gray-4000" />
        <p className="capitalize text-base leading-[30px] text-gray-5000 font-medium font-raleway">
          In{" "}
          <span className="font-bold text-red-1000">{property.category}</span>
        </p>
      </div>

      <div className="flex items-center gap-2">
        <MdTag className="text-gray-4000" />
        <p className="text-base leading-[30px] text-red-1000 font-bold font-raleway">
          {property.location.city}, {property.location.state}
        </p>
      </div>
    </div>
  );
};

export default PropertyInfo;
