"use client";

// import Image from "next/image";
import Pagination from "../pagination/Pagination";
// import { allProducts } from "@/types/Product";
// import { useState } from "react";

// export const getAllProducts = async () => {
//   try {
//     const res = await fetch(`/api`);
//     const resData = await res.json();
//     if (res.status === 200) {
//       // setAllProducts(resData?.data);
//     }
//     console.log(resData.data, "resdataaaaaaa");
//   } catch (error) {
//     console.log(error);
//   }
// };

const AllProductsSection = () => {
  // const [allProducts, setAllProducts] = useState<allProducts[]>([]);

  // console.log(products, "productsss");

  // useEffect(() => {
  //   getAllProducts();
  // }, []);
  return (
    <>
      {/* <div className="grid lg:grid-cols-3 md:grid-cols-3 lg:gap-20 md:gap-8 md:p-8 p-5 gap-5 lg:pr-32 lg:pl-32 lg:p-10">
        {products &&
          products?.map((item: any) => (
            <div
              key={item.id}
              className="space-y-4 bg-gray-200 p-2 rounded-lg h-auto shadow-lg"
            >
              <div className="flex justify-center">
                <Image
                  src={item.thumbnail}
                  alt=""
                  width={150}
                  height={150}
                  className="cursor-pointer h-64 w-28 object-contain"
                />
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-sm font-semibold text-gray-400">
                  {item.sname}
                </p>

                <h1 title={item.brand_name} className="text-sm font-bold">
                  {item.brand_name}
                </h1>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold">
                    $ {item.original_price}
                  </p>
                  <p className="text-sm font-semibold text-gray-400 line-through">
                    $ {item.offer_price}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <button className="bg-orange-400 rounded-full cursor-pointer p-2 text-white font-semibold outline-0">
                  Buy Now
                </button>
                <button className="bg-blue-900 rounded-full cursor-pointer p-2 text-white font-semibold outline-0">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
      </div> */}
      <div className="flex justify-end">{/* <Pagination /> */}</div>
    </>
  );
};

export default AllProductsSection;
