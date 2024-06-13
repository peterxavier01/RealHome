import { forwardRef } from "react";

import { cn } from "@/lib/utils";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isTextArea?: boolean;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    { className, children, disabled, placeholder, type, isTextArea, ...props },
    ref
  ) => {
    const commonProps = { placeholder, disabled };

    if (isTextArea) {
      return (
        <textarea
          cols={30}
          className={cn(
            "rounded-[3px] bg-white border-2 border-gray-4000 font-raleway placeholder p-4 h-[138px] w-full input-outline",
            className
          )}
          {...commonProps}
        ></textarea>
      );
    }

    return (
      <label className="w-full">
        <input
          type={type}
          className={cn(
            "rounded-[3px] bg-white border-2 border-gray-4000 font-raleway placeholder h-[58px] w-full px-4 py-2 input-outline",
            className
          )}
          ref={ref}
          {...props}
          {...commonProps}
        />
      </label>
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;
