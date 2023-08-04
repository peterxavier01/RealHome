import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Agents from "@/components/Agents";
import Button from "@/components/Button";
import Testimonials from "@/components/Testimonials";
import { clients } from "@/config/data";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto">
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

      <Agents />

      <div className="bg-[#f3f2f2] py-11 flex items-center justify-between gap-4 px-4 flex-wrap">
        <p
          className={`text-[#3c3c3c] text-3xl md:text-4xl leading-[50px] font-light`}
        >
          Get Started on Buying Your
          <span className="font-bold ml-3">New Home</span>
        </p>
        <Link href="/about">
          <Button>more about us</Button>
        </Link>
      </div>

      <Testimonials />

      <div className="flex items-center justify-between px-4 py-24 flex-wrap gap-10">
        <p className="text-[#3c3c3c] text-[28px] leading-[50px] font-light">
          Our <span className="font-medium">Partners</span>
        </p>

        {clients.map((client) => (
          <div key={client.id}>
            <Image
              src={client.src}
              alt="realhome client logo"
              width={120}
              height={120}
              style={{ width: "auto", height: "auto" }}
              sizes="(max-width: 768px) 100vw, 100vw"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
