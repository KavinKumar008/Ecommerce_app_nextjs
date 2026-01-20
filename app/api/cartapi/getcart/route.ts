import { db } from "@/lib/db";
import { getUserId } from "@/lib/getUser";
import { NextResponse } from "next/server";


export async function GET(){
    try {

      const userId =await getUserId();

      if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

        const [cartRows]=await db.query(`
          SELECT 
          CI.id AS cart_item_id,
          CI.cart_id,
          CI.product_id,CI.quantity,
          CI.price,CI.total_price,
          P.brand_name,
          P.thumbnail 
          FROM cart_items AS CI 
          JOIN carts AS C ON CI.cart_id = C.id 
          JOIN products AS P ON CI.product_id = P.id 
          WHERE C.user_id = ? AND C.status = 'active'`,
          [userId])

        return NextResponse.json({data:cartRows},{status:200});
    } catch (error) {
        console.log(error);
        return NextResponse.json({error:"Unable to get the cart items"},{status:500})
    }
}

