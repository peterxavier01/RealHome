"use server";

import * as z from "zod";
import { AuthError } from "next-auth";

import { signIn } from "@/lib/auth";
import { LoginSchema } from "@/lib/schema";
import { DEFAULT_LOGIN_REDIRECT } from "@/lib/routes";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    throw new Error("Invalid fields");
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          throw new Error("Invalid credentials");
        default:
          throw new Error("Something went wrong");
      }
    }

    throw error;
  }
};
