import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Number(searchParams.get("page")) ?? 1;

    const limit = 20; // set pagination limit

    // paginate database query result
    const result = await prisma.property.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json("Internal Error", { status: 500 });
  }
}
