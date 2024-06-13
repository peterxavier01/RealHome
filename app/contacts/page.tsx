"use client";

import React from "react";
import BreadCrumb from "@/components/BreadCrumb";
import dynamic from "next/dynamic";
import ContactForm from "@/components/ContactForm";

const Map = dynamic(() => import("../../components/Map"), { ssr: false });

const Contact = () => {
  return (
    <div className="wrapper my-8">
      <BreadCrumb routeOne={"home"} routeTwo={"About us"} href={"/"} />
      <h1 className="font-light text-primary text-3xl md:text-[45px] leading-heading mt-2 mb-12">
        Our <span className="font-medium">Contacts</span>
      </h1>

      <section className="aspect-[3/1] bg-black/5">
        <Map />
      </section>

      <ContactForm />
    </div>
  );
};

export default React.memo(Contact);
