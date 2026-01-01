import { NextResponse } from "next/server";
import {db} from "@/lib/db";

export async function GET(request:Request){
   try {
      // console.log(request,"reqqqqqqq");
      const {searchParams} = new URL(request.url);

      const page = parseInt(searchParams.get("page") || "1");
      const limit =parseInt(searchParams.get("limit") || "10");
      const offset = (page-1)*limit;

      const [rows]=await db.query("SELECT * FROM PRODUCTS LIMIT ? OFFSET ?",[limit,offset]);
    
      const [countRows] : any= await db.query("SELECT COUNT(*) AS count FROM PRODUCTS");
      const total = countRows[0].count;
   //  console.log(rows,"rowssssss");
    return NextResponse.json({data:rows,total,limit,offset},{status:200});
   } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
   }
}