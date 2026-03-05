import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "./i18n";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Skip static files and api routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") // static files like .svg, .png, etc.
  ) {
    return;
  }

  // Detect locale from Accept-Language header
  const acceptLanguage = request.headers.get("accept-language") ?? "";
  let detectedLocale = defaultLocale;

  for (const locale of locales) {
    if (acceptLanguage.includes(locale) || acceptLanguage.includes(locale.split("-")[0])) {
      // Prefer zh-TW if Chinese is detected
      if (locale === "zh-TW" && (acceptLanguage.includes("zh") || acceptLanguage.includes("zh-TW"))) {
        detectedLocale = "zh-TW";
        break;
      }
    }
  }

  // Check cookie override
  const cookieLocale = request.cookies.get("locale")?.value;
  if (cookieLocale && locales.includes(cookieLocale as typeof detectedLocale)) {
    detectedLocale = cookieLocale as typeof detectedLocale;
  }

  // Redirect to locale-prefixed path
  request.nextUrl.pathname = `/${detectedLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
