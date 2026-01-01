import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const [productsRows] = await db.query("SELECT ID,THUMBNAIL,CATALOG,CATEGORY_ID FROM PRODUCTS WHERE IS_PRODUCTS = TRUE");

        return NextResponse.json({data:productsRows},{status:200});
    } catch (error) {
        return NextResponse.json({error:"Unable to get the products data"},{status:500});
    }
}