import { NextResponse } from "next/server";
import { razorpay } from "@/lib/razorpay";
import { getUserId } from "@/lib/getUser";
import { db } from "@/lib/db";

export async function POST(request:Request){
  try {

    const userId = await getUserId();

     if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const {cartId} = await request.json();

    console.log(cartId,"createordercartidddddd");

    const [cartItems]: any = await db.query(
      `SELECT price, quantity 
       FROM cart_items 
       WHERE cart_id = ?`,
      [cartId]
    );


    if (cartItems.length === 0) {
      return NextResponse.json(
        { error: "Cart is empty" },
        { status: 400 }
      );
    }

    const totalAmount = cartItems.reduce((sum:number,item:any)=> sum+item.price * item.quantity,0);

  const razorpayOrder = await razorpay.orders.create({
    amount:totalAmount *100,
    currency:"INR",
    receipt:`receipt_${Date.now()}`
  })

      // Insert order (pending)

      await db.query(`INSERT INTO orders 
        (user_id,cart_id,razorpay_order_id,total_amount,payment_status)
        values (?, ?, ?, ?, 'pending')
        `,[userId,cartId,razorpayOrder.id,totalAmount])

    return NextResponse.json({id:razorpayOrder.id,amount:razorpayOrder.amount,currency:razorpayOrder.currency,cartId:cartId})
  } catch (error) {
    return NextResponse.json({error:"Failed to create order"},{status:500});
  }
}