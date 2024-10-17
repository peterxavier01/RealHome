import Image from "next/image";
import Link from "next/link";

import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Agents from "@/components/Agents";
import Button from "@/components/Button";
import Testimonials from "@/components/Testimonials";

import { clients } from "@/config/data";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-24 gap-12 wrapper">
        <div className="flex flex-col md:items-end gap-4">
          <h1 className="text-4xl text-primary text-left md:text-right leading-heading font-medium font-raleway">
            We are Offering the Best Estate Deals
          </h1>
          <span className="bg-primary h-[3px] w-12 inline-block" />
        </div>

        <div className="lg:col-span-2">
          <p className="text-gray-3000 text-base leading-paragraph font-playfair-display">
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

      <div className="bg-gray-1000 font-raleway">
        <div className="wrapper py-11 flex items-center justify-between gap-4 flex-wrap">
          <p
            className={`text-primary text-3xl md:text-4xl leading-heading font-light`}
          >
            Get Started on Buying Your
            <span className="font-bold ml-3">New Home</span>
          </p>
          <Link href="/about">
            <Button>more about us</Button>
          </Link>
        </div>
      </div>

      <Testimonials />

      <div className="flex items-center justify-between px-4 py-24 flex-wrap gap-10 wrapper">
        <p className="text-primary text-[28px] leading-heading font-light">
          Our <span className="font-medium font-raleway">Partners</span>
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
