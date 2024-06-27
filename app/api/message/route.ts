import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  let userResponse, messageResponse;

  // Check if user is already in DB
  const userExists = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (userExists) {
    // Save message to DB if user exists
    messageResponse = await prisma.messages.create({
      data: {
        name,
        email,
        message,
      },
    });
  }

  if (!userExists) {
    // Create a user and save message to DB if new user
    userResponse = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    // Save message to DB
    messageResponse = await prisma.messages.create({
      data: {
        name,
        email,
        message,
      },
    });
  }

  return NextResponse.json({ userResponse, messageResponse }, { status: 201 });
}
