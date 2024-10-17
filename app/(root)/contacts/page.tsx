"use client";

import React from "react";
import BreadCrumb from "@/components/BreadCrumb";
import dynamic from "next/dynamic";
import ContactFormSection from "@/components/ContactFormSection";

const Map = dynamic(() => import("@/components/Map"), { ssr: false });

const Contact = () => {
  return (
    <div className="wrapper my-8">
      <BreadCrumb
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "#" },
        ]}
      />
      <h1 className="font-light text-primary text-3xl md:text-[45px] leading-heading mt-2 mb-12">
        Our <span className="font-medium">Contacts</span>
      </h1>

      <section className="aspect-[3/1] bg-black/5">
        <Map />
      </section>

      <ContactFormSection />
    </div>
  );
};

export default React.memo(Contact);
