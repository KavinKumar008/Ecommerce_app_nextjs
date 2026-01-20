import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(request:Request){
    try {

        const {cartItemId} = await request.json();
        const [increaseRow] = await db.query("UPDATE cart_items SET quantity = quantity + 1,total_price = price * quantity + 1 WHERE id = ?",[cartItemId])

        return NextResponse.json({data:increaseRow},{status:200});
    } catch (error) {
        return NextResponse.json({error:"Unable to increase the quantity"},{status:500})
    }
}