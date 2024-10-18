import authConfig from "./lib/auth.config";
import NextAuth from "next-auth";

import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  protectedRoutes,
} from "@/lib/routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const adminEmail = req.auth?.user.email === process.env.ADMIN_EMAIL;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isProtectedRoute = protectedRoutes.some((route) =>
    nextUrl.pathname.startsWith(route)
  );

  // Allow user to visit any auth route whether logged in or not
  if (isApiAuthRoute) {
    return;
  }

  // Redirect user from any auth route to dashboard page if logged in
  if (isAuthRoute) {
    if (isLoggedIn && !adminEmail) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return;
  }

  // Protect any route that is not a public route and redirect user to login page
  if (!isLoggedIn && isProtectedRoute) {
    return Response.redirect(new URL("/auth/login", nextUrl));
  }

  return; // Exclude every other route from authentication
});

// Stop Middleware from running on static files
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
