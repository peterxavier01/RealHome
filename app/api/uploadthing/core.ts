import { currentUser } from "@/data/currentUser";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const handleAuth = async () => {
  const user = await currentUser();

  if (!user) throw new UploadThingError("Unauthorized");

  return { userId: user.id };
};

export const myFileRouter = {
  profilePicture: f({ image: { maxFileSize: "4MB" } })
    .middleware(async () => await handleAuth())
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);

      console.log("file url", file.url);

      return { uploadedBy: metadata.userId };
    }),
  propertyImage: f({ image: { maxFileSize: "8MB" } })
    .middleware(async () => handleAuth())
    .onUploadComplete(() => {}),
} satisfies FileRouter;

export type MyFileRouter = typeof myFileRouter;
