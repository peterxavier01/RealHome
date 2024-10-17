"use server";

import * as z from "zod";
import { revalidatePath } from "next/cache";

import { UserSchema } from "@/lib/schema";
import prisma from "@/lib/prisma";

export async function updateUser(
  values: z.infer<typeof UserSchema>,
  id: string
) {
  const validatedFields = UserSchema.safeParse(values);

  // Throw an error if the Zod schema validation fails
  if (!validatedFields.success) throw new Error("Invalid fields");

  const { name, email, bio, role } = validatedFields.data;

  try {
    await prisma.user.update({
      where: {
        id,
      },
      data: {
        name,
        email,
        bio,
        role,
      },
    });

    revalidatePath("/admin/users");
  } catch (error) {
    throw new Error("Something went wrong.");
  }
}

export async function deleteUserById(id: string) {
  try {
    // Get all comments made by the user
    const userComments = await prisma.comment.findMany({
      where: { userId: id },
      select: { id: true }, // Select only the 'id' field
    });

    // Extract the IDs of the user's comments
    const userCommentIds = userComments.map((comment) => comment.id);

    // Delete all comments that are replies to the user's comments
    await prisma.comment.deleteMany({
      where: {
        parentId: {
          in: userCommentIds, // This checks if a comment's parentId is 'in' the userCommentsIds array. If it is, then it is a reply. This is because a comment will only have a parentId if it has a child comment (i.e a reply).
        },
      },
    });

    // Finally, delete the user. This will respect the NoAction referential action on the CommentToComment relation and not throw an error
    await prisma.user.delete({
      where: { id },
    });

    revalidatePath("/admin/users");
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong.");
  }
}
