import { toast } from "sonner";

import type { MyFileRouter } from "@/app/api/uploadthing/core";
import { UploadDropZone } from "@/lib/uploadthing";

interface FileUploadProps {
  endpoint: keyof MyFileRouter;
  onChange: (url: string) => void;
}

export default function FileUpload({ endpoint, onChange }: FileUploadProps) {
  return (
    <UploadDropZone
      endpoint={endpoint}
      onClientUploadComplete={(res) => onChange(res[0].url)}
      onUploadError={(error) => {
        toast(`${error.message}`);
      }}
    />
  );
}
