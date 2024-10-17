import PageComponent from "./_components/PageComponent";

interface BlogDetailsPageProps {
  params: {
    id: string;
  };
}

export default function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  return (
    <main>
      <PageComponent id={params.id} />
    </main>
  );
}
