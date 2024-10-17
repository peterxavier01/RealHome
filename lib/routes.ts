/**
 * These array of routes are protected.
 * These routes require authentication
 * @type (string[])
 */

export const protectedRoutes = ["/admin"];

/**
 * These are array of routes used for authentication
 * These routes will redirect logged in users to /admin
 * @type (string[])
 */

export const authRoutes = ["/auth/login", "/auth/register", "/auth/error"];

/**
 * The prefix for API authentication routes.
 * Routes that have this prefix are used for API authentication purposes.
 * @type (string)
 */

export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in.
 * @type (string)
 */

export const DEFAULT_LOGIN_REDIRECT = "/admin";
