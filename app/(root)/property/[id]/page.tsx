import PageComponent from "./_components/PageComponent";

interface PropertyPageProps {
  params: {
    id: string;
  };
}

export default function PropertyPage({ params: { id } }: PropertyPageProps) {
  return (
    <main>
      <PageComponent propertyId={id} />
    </main>
  );
}
