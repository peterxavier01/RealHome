import React from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  hasLabel?: boolean;
  labelName?: string;
}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  (
    { id, className, type, error, hasLabel = false, labelName, ...props },
    ref
  ) => {
    return (
      <div className="grid items-center gap-4 font-inter">
        {hasLabel ? (
          <Label htmlFor={id} className="capitalize">
            {labelName}
          </Label>
        ) : null}
        <Input type={type} id={id} ref={ref} className={className} {...props} />
        {error ? (
          <p className="text-sm text-red-500 font-inter font-medium">{error}</p>
        ) : null}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";

export default FormInput;
