import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getUserId } from "@/lib/getUser";

export async function POST(request:Request){
   try {
    const userId = await getUserId();

    if(!userId){
        return NextResponse.json({message:"Unauthorized"},{status:401})
    }

    const {avatarUrl} = await request.json();
     if (!avatarUrl) {
      return NextResponse.json(
        { message: "Avatar URL missing" },
        { status: 400 }
      );
    }

    await db.query(`
        UPDATE users
        SET avatar_url = ?
        WHERE id = ?
        `,[avatarUrl,userId])

        return NextResponse.json({message:"success"},{status:200})
   } catch (error) {
      return NextResponse.json({message:"Failed to save avatar"},{status:500})
   }
}