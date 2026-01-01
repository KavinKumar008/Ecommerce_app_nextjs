"use client";

// import { ProductsArray } from "@/staticarray/homepage/ProductArray";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

type productsprops = {
  ID: number;
  THUMBNAIL: string;
  CATALOG: string;
  CATEGORY_ID: number;
};

const Products = () => {
  const [productsData, setProductsData] = useState<productsprops[]>([]);
  const router = useRouter();

  const ProductsDataApi = async () => {
    try {
      const res = await fetch(`${apiUrl}/home/products`);
      const data = await res.json();

      if (res.status === 200) {
        setProductsData(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(productsData);
  useEffect(() => {
    ProductsDataApi();
  }, []);
  return (
    <>
      <div className="lg:pl-32 lg:pr-32 lg:p-12 md:p-6 lg:flex md:flex justify-evenly lg:gap-10 md:gap-10 gap-6 grid grid-rows-2 grid-cols-3 place-items-center">
        {productsData.map((product) => (
          <div
            className="lg:flex lg:flex-col lg:items-center md:flex md:flex-col md:items-center grid place-items-center gap-4"
            key={product.ID}
          >
            <Image
              src={product.THUMBNAIL}
              alt="AppleMobile"
              width={48}
              height={48}
              className="w-12 h-16 cursor-pointer active:scale-110 transition duration-300"
              onClick={() => router.push(`solopage/${product.CATEGORY_ID}`)}
            />
            <p className="text-[12px] font-semibold">{product.CATALOG}</p>
          </div>
        ))}
      </div>
      <div className="lg:pl-32 lg:pr-32 md:pl-10 md:pr-10 p-10">
        <p className="border border-gray-200"></p>
      </div>
    </>
  );
};

export default Products;
