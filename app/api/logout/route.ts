import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  const deleteCookies= await cookies();

  deleteCookies.delete("token");

  return NextResponse.json({
    message: "Logged out successfully",
  });
}
