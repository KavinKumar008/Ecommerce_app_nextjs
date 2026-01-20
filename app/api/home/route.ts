import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const [heroRows] = await db.query("SELECT P.id, P.sname,JSON_ARRAYAGG(PI.image_url) AS images FROM products AS P JOIN product_images AS PI ON P.id = PI.product_id WHERE P.id = 55 GROUP BY P.id,P.sname");
        
        const [products] = await db.query(`
  SELECT id,thumbnail,catalog,category_id FROM products WHERE is_products = 1
`);

const [promotions] = await db.query(`
  SELECT id,thumbnail,offer,sname,type,features FROM products WHERE is_promotions = 1
`);

const [popular] = await db.query(`
  SELECT thumbnail,catalog,id,category_id FROM products WHERE is_popular_categories = 1
`);

const [popularProducts] = await db.query(`SELECT id,thumbnail,brand_name,offer_price FROM products WHERE is_popular_product = 1`)

            return NextResponse.json({data:heroRows,products,promotions,popular,popularProducts},{status:200});
    } catch (error) {
        console.log(error);
        return NextResponse.json({error:"unable to get homepage datas"},{status:500});
    }
}