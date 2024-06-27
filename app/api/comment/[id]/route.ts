import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { content, email, name, replyContent, parentId } =
      await request.json();

    let parentComment, replyComment;

    if (replyContent && parentId) {
      replyComment = await prisma.comment.create({
        data: {
          content: replyContent,
          user: {
            connectOrCreate: {
              where: { email },
              create: { email, name },
            },
          },
          post: {
            connect: { id: params.id },
          },
          parent: {
            connect: { id: parentId },
          },
        },
      });
    }

    if (!replyContent) {
      // Create the parent comment without a reply
      parentComment = await prisma.comment.create({
        data: {
          content,
          user: {
            connectOrCreate: {
              where: { email },
              create: { email, name },
            },
          },
          post: {
            connect: { id: params.id }, // connect comment to a post
          },
        },
      });
    }

    revalidatePath(`/blog/${params.id}`);

    return NextResponse.json({ parentComment, replyComment }, { status: 201 });
  } catch (error) {
    return NextResponse.json("Internal error", { status: 500 });
  }
}
