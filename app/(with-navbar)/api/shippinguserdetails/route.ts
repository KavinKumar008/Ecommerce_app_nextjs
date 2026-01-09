import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request:Request){
    try {
        
    } catch (error) {
        return NextResponse.json({error:"Unable to store user shipping details"},{status:500})
    }
}