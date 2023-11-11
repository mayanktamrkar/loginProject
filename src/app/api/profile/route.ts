import { NextResponse } from "next/server";

export async function GET() {
  // res.json(data);
  return NextResponse.json({
    body: {
      message: { name: "mayank" },
      status: 200,
    },
  });
}
