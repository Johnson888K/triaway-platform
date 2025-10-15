import { NextRequest, NextResponse } from "next/server";

/**
 * Safest possible middleware:
 * - Never throws
 * - Never reads request body (unsupported in middleware)
 * - Never uses Node APIs (fs, path, crypto randomBytes, etc.)
 * - Guards redirects to avoid loops
 */
export function middleware(req: NextRequest) {
  try {
    const { pathname } = req.nextUrl;

    // 1) Hard block infinite-loop cases: if we're already on an auth path, do nothing
    if (
      pathname.startsWith("/signin") ||
      pathname.startsWith("/signup") ||
      pathname.startsWith("/api/auth")   // e.g. NextAuth/Supabase callbacks
    ) {
      return NextResponse.next();
    }

    // 2) Example auth-gate (OPTIONAL): redirect unauthenticated to /signin
    // Add your real check here (cookie/token header). Keep it guarded.
    // const isAuthed = Boolean(getCookieOrHeaderSafely(req));
    // if (!isAuthed) {
    //   const url = req.nextUrl.clone();
    //   url.pathname = "/signin";
    //   return NextResponse.redirect(url);
    // }

    // 3) Default pass-through
    return NextResponse.next();
  } catch (err) {
    // Never let errors bubble — log and pass through
    console.error("middleware error:", err);
    return NextResponse.next();
  }
}

/**
 * IMPORTANT: Restrict matcher so middleware only runs where needed.
 * Exclude static assets and images to reduce surface area & failures.
 */
export const config = {
  matcher: [
    // Run on everything EXCEPT these:
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|api/public).*)",
  ],
};