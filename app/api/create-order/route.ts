import { NextResponse } from "next/server";
// import { razorpay } from "@/lib/razorpay";
import { getUserId } from "@/lib/getUser";
import { db } from "@/lib/db";
import Razorpay from "razorpay";


export async function POST(request:Request){
  try {

    
    const userId = await getUserId();
    
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const {cartId,form} = await request.json();
    
    const {address,city,fname,lname,mail,mobileno,postalcode,state} = {...form}
    
    const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
  });
    console.log(cartId,"createordercartidddddd",address,city);
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

    // Insert order (pending)

    const [orderResults] :any = await db.query(`
        INSERT INTO orders 
        (user_id, cart_id, total_amount, payment_status)
        values (?, ?, ?, 'pending')
        `,[userId,cartId,totalAmount])

        const orderId = orderResults.insertId;

        console.log(orderId,"orderiddddd");

         const [shippingRows] = await db.query(`
            INSERT INTO shippingdetails (order_id, user_id, mail_id, fname, lname, address_line1, address_line2, city, postal_code, phone, state)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `,[orderId,userId,mail,fname,lname,address,address,city,postalcode,mobileno,state])


  const razorpayOrder = await razorpay.orders.create({
    amount:totalAmount *100,
    currency:"INR",
    receipt:`order_${orderId}`
  })

      console.log(razorpayOrder,"updateorderrowssssssss");


   // 5️⃣ Save Razorpay order id

  const [updateRows] = await db.query(`
    UPDATE orders SET razorpay_order_id = ? WHERE id = ?
    `,[razorpayOrder.id,orderId]);


    return NextResponse.json({orderId,razorpayOrderId:razorpayOrder.id,amount:razorpayOrder.amount,currency:razorpayOrder.currency,cartId:cartId},{status:200})
  } catch (error) {
    console.log(error,"erroetttrtrtrtrtr")
    return NextResponse.json({error:"Failed to create order"},{status:500});
  }
}