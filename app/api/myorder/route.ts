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
            p.id as pid,
            p.brand_name,
            p.thumbnail
            FROM order_items AS oi
            JOIN orders AS o ON o.id = oi.order_id
            JOIN products AS p ON p.id = oi.product_id
            WHERE o.payment_status = 'paid' AND o.user_id = ?
            ORDER BY o.created_at DESC
            `,[userId])

        // const [orderId] : any =    await db.query(`
        //         SELECT id
        //         FROM orders
        //         where user_id = ?
        //         `,[userId])

        // const [shippingRows] = await db.query(`
        //     SELECT id, fname, lname, address_line1, city, postal_code, phone, state
        //     FROM shippingdetails
        //     WHERE id = ? AND order_id = ?
        //     `,[userId,orderId])

            return NextResponse.json({data:orderRows},{status:200})
    } catch (error) {
        console.log(error,"shippingerrors")
        return NextResponse.json({error:"Unable to get the orders"},{status:500});
    }
}