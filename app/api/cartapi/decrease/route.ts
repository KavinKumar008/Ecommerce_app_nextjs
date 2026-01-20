import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(request:Request){
    try {

        const {cartItemId} = await request.json();
        const [decreaseRow] = await db.query("UPDATE cart_items SET quantity = quantity - 1, total_price = price * quantity WHERE id = ? AND quantity > 1",[cartItemId])

        return NextResponse.json({data:decreaseRow,res:"successfully decreased the quantitiy"},{status:200});
    } catch (error) {
        return NextResponse.json({error:"Unable to decrease the quantity"},{status:500})
    }
}