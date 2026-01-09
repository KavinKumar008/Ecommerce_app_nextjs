import { getUserId } from "@/lib/getUser";
import { NextResponse } from "next/server";

export async function GET() {
  const userId = await getUserId();

  if (!userId) {
    return NextResponse.json({ isLoggedIn: false });
  }

  return NextResponse.json({
    isLoggedIn: true,
    userId,
  },{status:200});
}
