import { NextResponse, type NextRequest } from "next/server";

const localeCookie = "cv-locale";

/** Kök adresi, son seçilen dile ya da tarayıcı diline göre /tr veya /en'e yönlendirir. */
export function proxy(request: NextRequest) {
  const stored = request.cookies.get(localeCookie)?.value;
  const preferred =
    stored === "tr" || stored === "en"
      ? stored
      : /^\s*en\b/i.test(request.headers.get("accept-language") ?? "")
        ? "en"
        : "tr";

  return NextResponse.redirect(new URL(`/${preferred}`, request.url));
}

export const config = {
  matcher: "/",
};
