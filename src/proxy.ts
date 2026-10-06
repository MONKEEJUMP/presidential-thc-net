import { NextRequest, NextResponse } from "next/server";

// Retired pages answer 410 Gone so search engines drop them instead of retrying a 404.
// Mirrors the 410 handling in MONKEEJUMP/presidential-official src/proxy.ts.
const gonePaths = new Set(["/states/florida"]);

export function proxy(request: NextRequest) {
  if (gonePaths.has(request.nextUrl.pathname)) {
    return new NextResponse("Gone", {
      status: 410,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-Robots-Tag": "noindex, nofollow",
        "Cache-Control": "public, max-age=0, s-maxage=86400",
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/states/florida"],
};
