import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const [promotionRows]=await db.query("SELECT ID,THUMBNAIL,OFFER,SNAME,TYPE,FEATURES FROM  PRODUCTS WHERE IS_PROMOTIONS = TRUE AND SHOW_ON_HOME = TRUE");

        return NextResponse.json({data:promotionRows},{status:200});
    } catch (error) {
        console.log(error);
        return NextResponse.json({error:"Unable to get the promotions data"},{status:500});
    }
}