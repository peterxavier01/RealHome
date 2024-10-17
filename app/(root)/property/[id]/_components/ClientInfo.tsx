import { format } from "date-fns";

import ClientInfoItem from "./ClientInfoItem";

import { Property } from "@/types";

interface ClientInfoProps {
  property: Property;
}

const ClientInfo = ({ property }: ClientInfoProps) => {
  return (
    <div className="py-4">
      <ClientInfoItem title="Client" value={property.client} />
      <ClientInfoItem title="Date" value={format(property.lastUpdated, "dd/MM/yyyy")} />
      <ClientInfoItem title="Info" value={property.info} />
    </div>
  );
};

export default ClientInfo;
