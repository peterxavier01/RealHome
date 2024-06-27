import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Number(searchParams.get("page")) ?? 1;

    const limit = 3; // set pagination limit

    // paginate database query result
    const result = await prisma.post.findMany({
      skip: (page - 1) * limit,
      take: limit,

      include: {
        author: true,
        postCategories: true,
        comments: true,
      },
    });

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json("Internal error", { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = await prisma.post.create({
      data: {
        ...body,
      },
    });

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    return NextResponse.json("Internal error", { status: 500 });
  }
}
