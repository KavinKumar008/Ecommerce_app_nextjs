import { db } from "@/lib/db";
import { getUserId } from "@/lib/getUser";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
  try {

    const userId= await getUserId();

    if(!userId){
      return NextResponse.json({error:"Unauthorized"},{status:401});
    }

    const {productId,offer_price} = await request.json();

    // find or create carts if cart is there one cart per user
    const [cartRows] :any = await db.query("SELECT ID AS cartId FROM CARTS WHERE USER_ID = ? AND STATUS = 'active' LIMIT 1",[userId])

    console.log("Cart rows:", cartRows);


// if no cart exist create new one
    let cartId : number // replace with real cart logic later

    if(!cartRows.length){
         const [result] : any = await db.query("INSERT into carts (user_id) values (?)",[userId]);
         cartId = result.insertId;
    } else {
      cartId = cartRows[0].cartId;
    }

    console.log(cartId,"sdlsjdlsjdlsjdlsjd");

    if(!cartId){
      throw new Error("CartId is null");
    }

    // check id product already presents

    const [itemRows] : any = await db.query("SELECT id from cart_items where cart_id = ? AND product_id = ?",[cartId,productId])

      if (itemRows.length) {
      return NextResponse.json(
        { message: "Product already in cart" },
        { status: 200 }
      );
    }


  //  insert or update cart item 
    await db.query(
      "INSERT INTO cart_items (cart_id, product_id, quantity, price) VALUES (?, ?, ?, ?)",
      [cartId, productId, 1, Number(offer_price)]
    );

    return NextResponse.json({ message: "Added to cart" }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to add to cart" }, { status: 500 });
  }
}



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
    }
}

