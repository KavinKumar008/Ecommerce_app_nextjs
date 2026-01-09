import { db } from "@/lib/db";
import { getUserId } from "@/lib/getUser";
import { NextResponse } from "next/server";

export async function GET(){
    try {

        const userId = await getUserId();

        const [orderRows] = await db.query(`
            SELECT 
            oi.id, 
            oi.total_price,
            oi.quantity,
            p.brand_name,
            p.thumbnail
            FROM order_items AS oi
            JOIN orders AS o ON o.id = oi.order_id
            JOIN products AS p ON p.id = oi.product_id
            WHERE o.payment_status = 'paid' AND o.user_id = ?
            ORDER BY o.created_at DESC
            `,[userId])

            return NextResponse.json({data:orderRows},{status:200})
    } catch (error) {
        return NextResponse.json({error:"Unable to get the orders"},{status:500});
    }
}