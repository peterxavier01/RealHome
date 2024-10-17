import BreadCrumb from "@/components/BreadCrumb";
import PageComponent from "./_components/PageComponent";

interface PropertyProps {
  searchParams: { page?: string };
}

const Property = ({ searchParams }: PropertyProps) => {
  const currentPage = Number(searchParams?.page ?? 1);

  return (
    <main>
      <section className="flex flex-col items-center mt-12 px-4">
        <BreadCrumb
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Property", href: "#" },
          ]}
        />

        <PageComponent page={currentPage} />
      </section>
    </main>
  );
};

export default Property;
