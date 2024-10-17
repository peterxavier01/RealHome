import { DataTable } from "../_components/DataTable";
import PageComponent from "./_components/PageComponent";
import { columns } from "../_components/PropertiesColumns";

import { getAllProperties } from "@/data/properties";

export default async function Properties() {
  const properties = await getAllProperties();

  return properties ? (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <PageComponent properties={properties} />

      <DataTable
        columns={columns}
        data={properties}
        isSearchBarVisible={false}
      />
    </main>
  ) : null;
}
