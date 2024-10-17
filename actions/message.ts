"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { MessageSchema } from "@/lib/schema";
import prisma from "@/lib/prisma";

export async function updateMessage(
  values: z.infer<typeof MessageSchema>,
  messageId: string
) {
  const validatedFields = MessageSchema.safeParse(values);

  if (!validatedFields.success) throw new Error("Invalid fields");

  try {
    await prisma.messages.update({
      where: {
        id: messageId,
      },
      data: {
        ...values,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong.");
  }

  revalidatePath("/admin/messages");
}

export async function deleteMessageById(messageId: string) {
  try {
    await prisma.messages.delete({
      where: { id: messageId },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong.");
  }

  revalidatePath("/admin/messages");
}
