import React from "react";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface FormTextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  hasLabel?: boolean;
  labelName?: string;
}

const FormTextArea = React.forwardRef<HTMLTextAreaElement, FormTextAreaProps>(
  ({ placeholder, id, error, hasLabel = false, labelName, ...props }, ref) => {
    return (
      <div className="grid w-full gap-4">
        {hasLabel ? (
          <Label htmlFor={id} className="capitalize">
            {labelName}
          </Label>
        ) : null}

        <Textarea placeholder={placeholder} ref={ref} id={id} {...props} />

        {error ? (
          <p className="text-sm text-red-500 font-inter font-medium">{error}</p>
        ) : null}
      </div>
    );
  }
);

FormTextArea.displayName = "FormTextArea";

export default FormTextArea;
