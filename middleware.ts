import { NextResponse, NextRequest } from "next/server";
import * as locales from "date-fns/locale";

const langs = Object.keys(locales).map((k) => `${locales[k].code}`);
const match = new RegExp(`/(${langs.join("|")}){1}`);

export function middleware(
  request: NextRequest,
): NextResponse | Promise<NextResponse> {
  // 获取请求头中的Accept-Language字段
  const parseAcceptLanguage = request.headers
    .get("accept-language")
    ?.split(",")
    .map((i) => i.split(";"))
    ?.reduce(
      (ac: { code: string; priority: string }[], lang) => [
        ...ac,
        { code: lang[0], priority: lang[1] || 0 },
      ],
      [],
    )
    ?.sort((a, b) => (a.priority > b.priority ? -1 : 1))
    .map((i) => i.code);

  console.log("----parseAcceptLanguage", parseAcceptLanguage);

  const fallbackPath =
    parseAcceptLanguage?.find((i) => match.test(`/${i}`)) || locales.enUS.code;
  const path = request.nextUrl.pathname;
  console.log("----path", path);

  // both start with / and another illegal path redirect to fullback
  if (path === "/" || !match.test(path)) {
    request.nextUrl.pathname = `/${fallbackPath}`;
    return NextResponse.redirect(request.nextUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|icons|images|favicon\.ico|robots\.txt).*)",
  ],
};
