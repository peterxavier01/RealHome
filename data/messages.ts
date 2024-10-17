import prisma from "@/lib/prisma";

export async function getAllMessages() {
  try {
    const messages = await prisma.messages.findMany();

    return messages;
  } catch (error) {
    return null;
  }
}
