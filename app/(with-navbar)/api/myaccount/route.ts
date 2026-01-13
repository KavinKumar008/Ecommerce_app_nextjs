import { db } from "@/lib/db";
import { getUserId } from "@/lib/getUser";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const userId = await getUserId();

        const [accountRows] = await db.query(`
            SELECT id,email,mobile_no,name,avatar_url
            FROM users
            where id = ? 
            `,[userId])

            return NextResponse.json({data:accountRows},{status:200})
    } catch (error) {
        return NextResponse.json({error:"Unable to get the account page details"},{status:500})
    }
}