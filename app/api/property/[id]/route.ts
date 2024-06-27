import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const result = await prisma.property.findUnique({
      where: {
        id: params.id,
      },
      include: {
        relatedProperties: true,
      },
    });

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json("Internal error", { status: 500 });
  }
}
