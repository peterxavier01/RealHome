"use server";

import * as z from "zod";
import { revalidatePath } from "next/cache";

import { PropertySchema } from "@/lib/schema";
import prisma from "@/lib/prisma";

export const createProperty = async (
  values: z.infer<typeof PropertySchema> | null
) => {
  try {
    const validatedFields = PropertySchema.safeParse(values);

    if (!validatedFields.success) throw new Error("Invalid fields");

    const {
      name,
      image,
      client,
      info,
      category,
      price,
      size,
      numberOfBathrooms,
      numberOfBedrooms,
      location: { city, state },
    } = validatedFields.data;
    if (
      !name ||
      !image ||
      !client ||
      !info ||
      !category ||
      !price ||
      !size ||
      !numberOfBathrooms ||
      !numberOfBedrooms ||
      !city ||
      !state
    )
      throw new Error("Field is required");

    if (!values) return;

    await prisma.property.create({
      data: {
        ...values,
      },
    });

    revalidatePath("/admin/properties");
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

export const updatePropertyById = async (
  values: z.infer<typeof PropertySchema>,
  id: string
) => {
  try {
    await prisma.property.update({
      where: {
        id,
      },
      data: {
        ...values,
      },
    });

    revalidatePath("/admin/properties");
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong.");
  }
};

export async function deletePropertyById(propertyId: string) {
  try {
    await prisma.property.delete({
      where: { id: propertyId },
    });

    revalidatePath("/admin/properties");
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong.");
  }
}
