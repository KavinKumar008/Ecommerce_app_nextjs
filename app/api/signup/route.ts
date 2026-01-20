import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { signToken } from "@/lib/auth";
import bcrypt from "bcryptjs";

export async function POST(request:Request){
    try {
        const {name,identifier,pass} = await request.json();

      console.log(name,identifier,pass,"signupdataaaaaaaa");

      if(!identifier){
        return NextResponse.json({error:"Email or Mobile no required"},{status:400});
      }

      const [existing] : any  = await db.query("SELECT id FROM users WHERE email = ? OR mobile_no = ? ",[identifier,identifier]);

      if(existing.length > 0){
        return NextResponse.json({error:"User Already Exist"},{status:409});
      }

      const hashedPassword = await bcrypt.hash(pass,10);

        const [result] : any = await db.query("INSERT INTO users (name,email,mobile_no,password) VALUES (?, ?, ?, ?)",[name,identifier,identifier,hashedPassword]);

        // 5️⃣ OPTIONAL: Auto-login after signup
    const token = signToken({ userId: result.insertId });

        const res = NextResponse.json({message:"SignUp Successfull"},{status:201});

        res.cookies.set("token",token,{
            httpOnly:true,
            path:"/"
        })

        return res;
    } catch (error) {
        return NextResponse.json({error:"Signup Failed"},{status:500});
    }
}