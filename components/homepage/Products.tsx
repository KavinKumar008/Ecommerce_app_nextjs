"use client";

import { UseHome } from "@/providers/HomePageProvider";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Products = () => {
  const router = useRouter();

  const { products } = UseHome();

  return (
    <>
      <div className="lg:pl-32 lg:pr-32 lg:p-12 md:p-6 lg:flex md:flex justify-evenly lg:gap-10 md:gap-10 gap-6 grid grid-rows-2 grid-cols-3 place-items-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="lg:flex lg:flex-col lg:items-center md:flex md:flex-col md:items-center grid place-items-center gap-4"
          >
            <Image
              src={product.thumbnail}
              alt="AppleMobile"
              width={48}
              height={48}
              className="w-12 h-16 cursor-pointer active:scale-110 transition duration-300"
              onClick={() => router.push(`solopage/${product.category_id}`)}
            />
            <p className="text-[12px] font-semibold">{product.catalog}</p>
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
