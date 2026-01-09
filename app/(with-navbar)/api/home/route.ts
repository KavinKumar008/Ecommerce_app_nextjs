import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const [heroRows] = await db.query("SELECT P.ID, P.SNAME,JSON_ARRAYAGG(PI.IMAGE_URL) AS IMAGES FROM PRODUCTS AS P JOIN PRODUCT_IMAGES AS PI ON P.ID = PI.PRODUCT_ID WHERE P.ID = 55 GROUP BY P.ID,P.SNAME");
        
        const [products] = await db.query(`
  SELECT ID,THUMBNAIL,CATALOG,CATEGORY_ID FROM PRODUCTS WHERE IS_PRODUCTS = 1
`);

const [promotions] = await db.query(`
  SELECT ID,THUMBNAIL,OFFER,SNAME,TYPE,FEATURES FROM PRODUCTS WHERE IS_PROMOTIONS = 1
`);

const [popular] = await db.query(`
  SELECT THUMBNAIL,CATALOG,ID,CATEGORY_ID FROM PRODUCTS WHERE IS_POPULAR_CATEGORIES = 1
`);

const [popularProducts] = await db.query(`SELECT ID,THUMBNAIL,BRAND_NAME,OFFER_PRICE FROM PRODUCTS WHERE IS_POPULAR_PRODUCT = 1`)

            return NextResponse.json({data:heroRows,products,promotions,popular,popularProducts},{status:200});
    } catch (error) {
        console.log(error);
        return NextResponse.json({error:"unable to get homepage datas"},{status:500});
    }
}