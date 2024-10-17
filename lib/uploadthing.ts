import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";

import type { MyFileRouter } from "@/app/api/uploadthing/core";

export const UploadButton = generateUploadButton<MyFileRouter>();
export const UploadDropZone = generateUploadDropzone<MyFileRouter>();
