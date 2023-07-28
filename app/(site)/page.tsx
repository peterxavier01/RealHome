import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-24 gap-12 px-4">
        <div className="flex flex-col md:items-end gap-4">
          <h1 className="text-4xl text-[#3c3c3c] text-left md:text-right leading-[50px] font-medium">
            We are Offering the Best Estate Deals
          </h1>
          <span className="bg-[#3c3c3c] h-[3px] w-12 inline-block" />
        </div>

        <div className="lg:col-span-2">
          <p className="text-[#797979] text-base leading-[27px]">
            Quisque diam lorem interdum vitaapibus ac scelerisque vitae pede.
            Donec eget tellus non erat lacinia fertum. Donec in velit vel ipsum
            auctovinar. Proin umcorper urna et felisstibulum iaculis lacinia
            est. Proin dictum elem entum velit fusce euismod. Aenean commodo
            ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consec
            tetuer adipis elit, aliquam eget nibh etlibura. Lorem ipsum dolor
            sitamet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et.
          </p>
        </div>
      </section>

      <Features />

      <Gallery />
    </main>
  );
}
