import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const [heroRows] = await db.query("SELECT P.ID, P.SNAME,JSON_ARRAYAGG(PI.IMAGE_URL) AS IMAGES FROM PRODUCTS AS P JOIN PRODUCT_IMAGES AS PI ON P.ID = PI.PRODUCT_ID WHERE P.ID = 55 GROUP BY P.ID,P.SNAME");

        return NextResponse.json({data:heroRows},{status:200});
    } catch (error) {
        return NextResponse.json({error:"Unable to get the hero section data"},{status:500})
    }
}