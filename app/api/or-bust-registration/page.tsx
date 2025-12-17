import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  // TODO: Replace this with email or DB write.
  // For now it will appear in your terminal (npm run dev).
  console.log("OR BUST REGISTRATION:", JSON.stringify(data, null, 2));

  return NextResponse.json({ ok: true });
}
