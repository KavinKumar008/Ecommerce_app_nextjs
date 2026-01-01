import { cookies } from "next/headers";
import { verifyToken } from "./auth";

export async function getUserId(){
  const cookieStore = await cookies();

  const token=cookieStore.get("token")?.value;

    if(!token) return null;

    try {
         const decoded =verifyToken(token);
    return decoded.userId;
    } catch (error) {
        return null ;
    }
   
}