import React from "react";
import Button from "./Button";
import Input from "./Input";

const Newsletter = () => {
  return (
    <section className="bg-gray-1000">
      <div className="wrapper flex items-center justify-between py-12 flex-wrap gap-3">
        <div>
          <h4 className="text-[37px] leading-heading text-primary font-light">
            Subscribe To <span className="font-medium">Our Newsletter</span>
          </h4>
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          <Input placeholder="Your email..." type="email" />
          <Button className="h-[54px]">SUBSCRIBE</Button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
