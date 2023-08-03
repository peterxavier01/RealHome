import React from "react";
import Button from "./Button";
import Input from "./Input";

const Newsletter = () => {
  return (
    <section className="flex items-center justify-between bg-[#f3f2f2] py-12 px-4 flex-wrap gap-3">
      <div>
        <h4 className="text-[37px] leading-[50px] text-[#3c3c3c] font-light">
          Subscribe To <span className="font-medium">Our Newsletter</span>
        </h4>
      </div>
      <div className="flex items-center gap-4 flex-wrap">
        <Input placeholder="Your email..." type="email" />
        <Button className="h-[54px]">SUBSCRIBE</Button>
      </div>
    </section>
  );
};

export default Newsletter;
