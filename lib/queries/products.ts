import { db } from "../db";
import { RowDataPacket } from "mysql2";

export interface Product {
    id:number,
    brand_name:string,
    original_price:number,
    offer_price:number,
    offer:string,
    thumbnail:string,
    description?:string,
    category_id:number,
    sname:string
}

export async function getProductsByCategory(categoryId:number): Promise<Product[]> {
    try {
        const [rows] = await db.query<RowDataPacket[]>(
        "SELECT * FROM products WHERE category_id  = ?",[categoryId]
    );

        return rows as Product[];
    } catch (error) {
        console.error("Database query failed:", error);
    throw new Error("Failed to fetch products");
    }
    
}
