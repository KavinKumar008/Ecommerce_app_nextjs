import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(request:Request){
    try {

        const {cartItemId} = await request.json();
        const [increaseRow] = await db.query("UPDATE CART_ITEMS SET QUANTITY = QUANTITY + 1,TOTAL_PRICE = PRICE * QUANTITY + 1 WHERE ID = ?",[cartItemId])

        return NextResponse.json({data:increaseRow},{status:200});
    } catch (error) {
        return NextResponse.json({error:"Unable to increase the quantity"},{status:500})
    }
}