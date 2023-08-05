import BreadCrumb from "@/components/BreadCrumb";
import CustomTabs from "@/components/CustomTabs";
import Paginate from "@/components/Paginate";
import React from "react";

const Property = () => {
  return (
    <main>
      <section className="flex flex-col items-center mt-12 px-4">
        <BreadCrumb href="/" routeOne="Home" routeTwo="Property" />
        <h1 className="text-3xl md:text-[45px] leading-[50px] mt-2 text-[#3c3c3c] font-light text-center">
          Property <span className="font-medium">Catalog</span>
        </h1>
        <div className="my-14">
          <CustomTabs />
        </div>

        <div className="mb-24">
          <Paginate total={30} />
        </div>
      </section>
    </main>
  );
};

export default Property;
