import { db } from "@/lib/db";
import { getUserId } from "@/lib/getUser";
import { NextResponse } from "next/server";

export async function POST(request:Request){
    try {

        const userId = await getUserId();

        if(!userId){
            return NextResponse.json({error:"Unauthorized"},{status:401})
        }
        const {form} = await request.json();

        const {address,city,fname,lname,mail,mobileno,postalcode,state} = {...form}
        console.log(address,city,fname,lname,mail,mobileno,postalcode,state,"formdataaaaaaaaa");

        const [orderId] : any = await db.query(`
            SELECT id
            FROM orders
            WHERE 
            `)

        const [shippingRows] = await db.query(`
            INSERT INTO shippingdetails(order_id,user_id,mail_id,fname,lname,address_line1,city,postal_code,phone)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            `)

        return NextResponse.json({data:shippingRows},{status:200})
    } catch (error) {
        return NextResponse.json({error:"Unable to store the shipping details in db"},{status:500})
    }
}