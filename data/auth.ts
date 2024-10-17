import { signIn } from "next-auth/react";

import { DEFAULT_LOGIN_REDIRECT } from "@/lib/routes";

export function signInWithGitHub() {
  signIn("github", {
    callbackUrl: DEFAULT_LOGIN_REDIRECT,
  });
}

export function signInWithGoogle() {
  signIn("google", {
    callbackUrl: DEFAULT_LOGIN_REDIRECT,
  });
}
