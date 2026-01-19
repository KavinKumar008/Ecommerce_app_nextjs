import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(request:Request){
    try {

        const {cartItemId} = await request.json();
        const [decreaseRow] = await db.query("UPDATE CART_ITEMS SET QUANTITY = QUANTITY - 1, TOTAL_PRICE = PRICE * QUANTITY WHERE ID = ? AND QUANTITY > 1",[cartItemId])

        return NextResponse.json({data:decreaseRow,res:"successfully decreased the quantitiy"},{status:200});
    } catch (error) {
        return NextResponse.json({error:"Unable to decrease the quantity"},{status:500})
    }
}