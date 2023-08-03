"use client";

import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, disabled, ...props }, ref) => {
    return (
      <input
        type={type}
        disabled={disabled}
        className={twMerge(
          ` h-[58px] w-full md:w-[387px] px-2 text-[#3c3c3c] bg-white border-[2px] border-[#e6e6e6] rounded-[3px] outline-none`,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
