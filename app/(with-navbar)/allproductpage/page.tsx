// export const dynamic = "force-dynamic";

import Pagination from "@/components/pagination/Pagination";
import { db } from "@/lib/db";
import { RowDataPacket } from "mysql2";
import { allProductsType } from "@/types/Product";

type functionProps = {
  searchParams: Promise<{ page?: string }>;
};

// const apiURL = process.env.NEXT_PUBLIC_API_URL;
const page = async ({ searchParams }: functionProps) => {
  // console.log(searchParams, "searchparamsssss");

  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const limit = 10;
  const offset = (currentPage - 1) * limit;

  try {
    const [rows] = await db.query<RowDataPacket[]>(
      "SELECT * FROM products LIMIT ? OFFSET ?",
      [limit, offset],
    );

    const products = rows as allProductsType[];

    const [countRows] = await db.query<RowDataPacket[]>(
      "SELECT COUNT(*) AS count FROM products",
    );
    const total = countRows[0].count;

    return (
      <div>
        <Pagination products={products} total={total} page={currentPage} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold text-red-600">
          Error loading products
        </h2>
        <p className="text-gray-600 mt-2">
          Unable to load products. Please try again.
        </p>
      </div>
    );
  }
};

export default page;
