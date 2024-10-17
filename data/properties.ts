import prisma from "@/lib/prisma";

export async function getAllProperties() {
  try {
    const properties = await prisma.property.findMany({
      include: { relatedProperties: true },
    });

    return properties;
  } catch (error) {
    return null;
  }
}
