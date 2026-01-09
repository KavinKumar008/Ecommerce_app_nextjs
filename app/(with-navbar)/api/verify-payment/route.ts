import { NextResponse } from "next/server";
import crypto from "crypto";
import { getUserId } from "@/lib/getUser";
import { db } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const userId = await getUserId();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      cartId,
    } = await request.json();

    console.log(razorpay_order_id,razorpay_payment_id,razorpay_signature,"sdlksdjlasdjsalkd");


    // 🔐 Verify signature
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(body)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
     await db.query(`UPDATE orders
        SET payment_status = "failed"
        where razorpay_order_id = ?
        `,[razorpay_order_id])

         return NextResponse.json(
        { success: false, message: "Invalid signature" },
        { status: 400 }
      );
    }

    // get order

    const [orders] : any = await db.query(`
         SELECT id FROM orders
         WHERE razorpay_order_id = ? AND user_id = ?
        `,[razorpay_order_id,userId])

    if (orders.length === 0) {
      return NextResponse.json(
        { error: "Order not found" },
        { status: 404 }
      );
    }

    const orderId = orders[0].id;

    
    // 🛒 Get cart items
    const [cartItems]: any = await db.query(
      `SELECT product_id, price, quantity 
       FROM cart_items 
       WHERE cart_id = ?`,
      [cartId]
    );

    console.log(cartItems,"cartitemstableeee",cartId);
    
    // 📦 Insert order items
    for (const item of cartItems) {
      await db.query(
        `INSERT INTO order_items 
        (order_id, product_id, price, quantity, total_price)
        VALUES (?, ?, ?, ?, ?)`,
        [
          orderId,
          item.product_id,
          item.price,
          item.quantity,
          item.price * item.quantity,
        ]
      );
    }

    await db.query(`
        UPDATE orders 
        SET razorpay_payment_id = ?,
        razorpay_signature = ?,
        payment_status = 'paid'
        WHERE id = ?
        `,[razorpay_payment_id,razorpay_signature,orderId])

         // 🧹 Optional: clear cart
    // await db.query(`DELETE FROM cart_items WHERE cart_id = ?`, [cartId]);

    return NextResponse.json({ success: true, orderId });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
