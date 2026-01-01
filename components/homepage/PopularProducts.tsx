"use client";

import BorderLine from "../borderline/BorderLine";
import { useProducts } from "@/providers/ProductsProvider";
import { allProductsType } from "@/types/Product";
import { useRouter } from "next/navigation";
import { FaRupeeSign } from "react-icons/fa";

const PopularProducts = () => {
  const productsctx = useProducts();
  const router = useRouter();

  const allProducts = productsctx?.allProducts ?? [];

  console.log(productsctx, "contextttttttt");

  // const allProducts = productsctx.

  const filtered = allProducts.filter(
    (item: allProductsType) => item.category_id === 6
  );

  // console.log(filtered, "sdkjdlaksjda");

  return (
    <>
      <section className="lg:pl-28 lg:pr-28 lg:p-10  md:p-10 p-8">
        <div>
          <h1 className="text-3xl font-bold">Popular Products</h1>
        </div>
        <div className="lg:flex md:flex lg:justify-between md:justify-between mt-10">
          {filtered.map((products) => (
            <div
              key={products.id}
              className="lg:w-56 md:w-38 h-auto flex flex-col  gap-3"
            >
              <div className="flex items-center justify-center bg-gray-100 p-4 rounded-lg">
                {products.thumbnail ? (
                  <img
                    src={products.thumbnail}
                    alt="brandImage"
                    className="h-64 w-92 lg:mt-0 md:mt-0 mt-10 cursor-pointer active:scale-125 transition duration-300"
                    onClick={() =>
                      router.push(`/productdetailspage/${products.id}`)
                    }
                  />
                ) : null}
              </div>
              <div>
                <p className="lg:text-sm md:text-[12px] font-semibold line-clamp-2 text-center">
                  {products.brand_name}
                </p>
              </div>
              <div className="flex justify-between items-center">
                {/* <div className="flex items-center gap-1">
                  <p className="lg:text-[11px] md:text-[11px] font-semibold">
                    {products.rating}
                  </p>
                  <p className="lg:text-[11px] md:text-[11px] font-semibold text-gray-500">
                    {products.review}
                  </p>
                </div> */}
                <p className="lg:text-[13px] md:text-[11px] font-extrabold flex items-center justify-center">
                  <FaRupeeSign />
                  {products.offer_price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <BorderLine />
    </>
  );
};

export default PopularProducts;
