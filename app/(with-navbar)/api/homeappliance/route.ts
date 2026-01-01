import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const [rows]= await db.query("SELECT * FROM PRODUCTS WHERE CATEGORY_ID = 5");
        console.log(rows,"rowsssshome");

        return NextResponse.json({data:rows},{status:200});
    } catch (error) {
        console.log(error);
        return NextResponse.json({error:"failed to get homeappliance"},{status:500});
    }
}