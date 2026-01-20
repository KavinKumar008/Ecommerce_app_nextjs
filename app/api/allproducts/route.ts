// export const runtime = "nodejs";

import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const [rows] = await db.query("SELECT * FROM products");

        // console.log(rows,"allproductsrowssss");

        return NextResponse.json({data:rows},{status:200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({error : "Failed to get allproducts"},{status:500})
    }
}