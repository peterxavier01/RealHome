import Skeleton from "@/components/Skeleton";

const Loader = () => {
  return (
    <section className="grid md:grid-cols-12 gap-8 my-12 wrapper w-full">
      <div className="md:col-span-8">
        <Skeleton className="w-20 h-4 mb-6" />
        <Skeleton className="max-w-[320px] h-8 mb-6" />

        <div className="mb-4 space-y-2">
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
        </div>

        <Skeleton className="w-full h-[400px] mb-4" />

        <div className="mb-4 space-y-2">
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
        </div>
      </div>

      <div className="md:col-span-4">
        <div className="mb-12">
          <Skeleton className="w-12 h-6 mb-8" />
          <Skeleton className="w-40 h-4 mb-4" />
          <Skeleton className="w-40 h-4 mb-4" />
          <Skeleton className="w-40 h-4 mb-4" />
          <Skeleton className="w-40 h-4 mb-4" />
        </div>

        <div>
          <Skeleton className="w-12 h-6 mb-8" />
          <Skeleton className="w-40 h-4 mb-4" />
          <Skeleton className="w-40 h-4 mb-4" />
          <Skeleton className="w-40 h-4 mb-4" />
          <Skeleton className="w-40 h-4 mb-4" />
        </div>
      </div>
    </section>
  );
};

export default Loader;
