import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function DELETE(request: Request){
    try {
        const {cartItemId} = await request.json();
        console.log(cartItemId,"deleteproductiddddd");
        const [deleteRow] = await db.query("DELETE FROM CART_ITEMS WHERE ID = ?",[cartItemId]);

        return NextResponse.json({data:deleteRow,res:"Item Deleted Successfully"},{status:200})
    } catch (error) {
        return NextResponse.json({error:"Unable to delete the item"},{status:500})
    }
}