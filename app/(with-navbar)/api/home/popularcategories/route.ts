import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const [popularCategories] = await db.query("SELECT THUMBNAIL,CATALOG,ID,CATEGORY_ID FROM PRODUCTS WHERE IS_POPULAR_CATEGORIES = TRUE");

        return NextResponse.json({data:popularCategories},{status:200});
    } catch (error) {
        return NextResponse.json({error:"Unable to get the popular categories"},{status:500});
    }
}