import { NextResponse } from "next/server";

let locales = ["id", "en"];

export function middleware(request) {
  // get current url without hostname
  let desiredSubstring = request.nextUrl.pathname + request.nextUrl.search;

  const excludePaths = ["/sitemap.xml", "/google-merchant.xml", "/robots.txt"];

  function checkDesiredSubstring() {
    if (excludePaths.includes(desiredSubstring)) {
      return false;
    }

    if (
      locales.every(
        (locale) =>
          !desiredSubstring.startsWith(`/${locale}/`) &&
          !desiredSubstring.startsWith(`/${locale}?`) &&
          desiredSubstring !== `/${locale}`
      )
    ) {
      return true;
    }

    return false;
  }

  const pathnameDontHaveLocale = checkDesiredSubstring();

  // Redirect if there is no locale
  if (pathnameDontHaveLocale) {
    const locale = request?.headers?.get("accept-language")
      ? request?.headers.get("accept-language").slice(0, 2)
      : "id";

    let resultString =
      desiredSubstring.length > 1
        ? `/${locale === "en" ? "en" : "id"}${desiredSubstring}`
        : `/${locale === "en" ? "en" : "id"}`;

    return NextResponse.redirect(new URL(resultString, request.url));
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (api, _next/static, _next/image, favicon.ico, images)
    "/((?!api|_next/static|_next/image|favicon.ico|images).*)",
    // "/",
  ],
};
