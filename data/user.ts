import prisma from "@/lib/prisma";

export async function getUserByEmail(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  } catch (error) {
    return null;
  }
}

export async function getUserById(id: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  } catch (error) {
    return null;
  }
}

export async function getAllUsers() {
  try {
    const users = await prisma.user.findMany({ include: { comments: true } });

    return users;
  } catch (error) {
    return null;
  }
}