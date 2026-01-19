import { db } from "@/lib/db";
import { signToken } from "@/lib/auth";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { identifier, password } = await req.json();

  console.log(identifier,password,"sjslfsjlfjslfjslfj");

  const [rows]: any = await db.query(
    "SELECT * FROM users WHERE email = ? OR mobile_no = ?",
    [identifier, identifier]
  );

  if (!rows.length) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const user = rows[0];
  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = signToken({ userId: user.id });

  const res = NextResponse.json({ message: "Login success" },{status:201});
  res.cookies.set("token", token, {
    httpOnly: true,
    path: "/",
  });

  return res;
}
