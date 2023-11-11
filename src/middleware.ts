import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// this is for authencation part 

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  console.log("✌️path --->", path);

  const isPublicPath = path === "/signup";

  const token = request.cookies.get("token")?.value || "";

  if (isPublicPath && token) {
    console.log("enter in 1");

    return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
  }

  if (!isPublicPath && !token) {
    console.log("enter in 2");

    return NextResponse.redirect(new URL("/signin", request.nextUrl));
  }
}


// if you add any page name then you need token to see this page 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/dashboard", "/profile", "/login", "/verifyemail"],
};
