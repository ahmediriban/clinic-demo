import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

export function proxy(request: NextRequest): NextResponse {
  return intlMiddleware(request) as NextResponse;
}

export const config = {
  matcher: [
    "/((?!_next|_vercel|.*\\..*).*)",
    "/(ar|en)/:path*",
  ],
};
