import { db } from "@/lib/db";
import { getUserId } from "@/lib/getUser";
import { NextResponse } from "next/server";


export async function GET(){
    try {

      const userId =await getUserId();

      if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

        const [cartRows]=await db.query(`SELECT 
          CI.ID AS CART_ITEM_ID,
          CI.CART_ID,
          CI.PRODUCT_ID,CI.QUANTITY,
          CI.PRICE,CI.TOTAL_PRICE,
          P.BRAND_NAME,
          P.THUMBNAIL 
          FROM CART_ITEMS AS CI 
          JOIN CARTS AS C ON CI.CART_ID = C.ID 
          JOIN PRODUCTS AS P ON CI.PRODUCT_ID = P.ID 
          WHERE C.USER_ID = ? AND C.STATUS = 'active'`,
          [userId])

        return NextResponse.json({data:cartRows},{status:200});
    } catch (error) {
        console.log(error);
        return NextResponse.json({error:"Unable to get the cart items"},{status:500})
    }
}

