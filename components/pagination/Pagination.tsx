"use client";
import Image from "next/image";
import { allProductsType } from "@/types/Product";
import { usePathname, useRouter } from "next/navigation";
// import FilterBars from "../filterbars/FilterBars";
import { FaRupeeSign } from "react-icons/fa";

type PaginationProps = {
  products: allProductsType[];
  page: number;
  total: number;
};

const Pagination = ({ products, page, total }: PaginationProps) => {
  const pathName = usePathname();
  const router = useRouter();
  const limit = 10;
  const totalPages = Math.ceil(total / limit);

  console.log(products, "productssss");

  const changePage = (page: number) => {
    router.push(`?page=${page}`);
  };

  return (
    <>
      <div className="lg:w-full md:w-full lg:p-0 md:p-0 p-5 lg:mt-0 md:mt-0 mt-5">
        <p className="border border-gray-200"></p>
      </div>
      <div className="lg:p-3 md:p-3 p-3 flex lg:ml-32 md:ml-5 ml-5 gap-4 font-semibold text-sm">
        {pathName.slice(1).toUpperCase()}
      </div>
      <div className="lg:w-full md:w-full lg:p-0 md:p-0 p-5">
        <p className="border border-gray-200"></p>
      </div>
      <section className="lg:pr-32 lg:pl-32 lg:p-10 md:p-8 p-5">
        <div className="flex justify-between lg:flex-row md:flex-row flex-col">
          {/* <div className="lg:w-[25%] md:w-[35%]">
            <FilterBars />
          </div> */}
          {/* {currentItems.map((item, index) => (
        <div key={index}>{item.brand_name}</div>
      ))} */}
          <div className="grid lg:grid-cols-4 lg:gap-12 md:grid-cols-3 place-items-center md:gap-8  gap-5 lg:mt-0 md:mt-0 mt-5">
            {products &&
              products?.map((item: any) => (
                <div key={item.id} className="rounded-lg w-[220px]">
                  <div className="flex justify-center p-5 bg-gray-100 rounded-lg">
                    <Image
                      src={item.thumbnail}
                      alt=""
                      width={150}
                      height={150}
                      className="cursor-pointer w-28 h-36 bg-gray-200"
                      onClick={() =>
                        router.push(`/productdetailspage/${item.id}`)
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="text-sm font-semibold text-gray-400 mt-2">
                      {item.sname}
                    </p>

                    <h1
                      title={item.brand_name}
                      className="text-[12px] font-bold line-clamp-2 text-center"
                    >
                      {item.brand_name}
                    </h1>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-bold flex items-center">
                        <FaRupeeSign /> {item.original_price}
                      </p>
                      <p className="text-sm font-semibold text-gray-400 line-through flex items-center">
                        <FaRupeeSign /> {item.offer_price}
                      </p>
                    </div>
                  </div>
                  {/* <div className="flex flex-col gap-4">
                <button className="bg-orange-400 rounded-full cursor-pointer p-2 text-white font-semibold outline-0">
                  Buy Now
                </button>
                <button className="bg-blue-900 rounded-full cursor-pointer p-2 text-white font-semibold outline-0">
                  Add to cart
                </button>
              </div> */}
                </div>
              ))}
          </div>
        </div>

        <div className="lg:flex justify-center lg:flex-row md:flex md:flex-row flex flex-col gap-5 mt-10 lg:p-0 md:p-0 p-6">
          {/* <button onClick={() => changePage(1)} className="cursor-pointer">
          First
        </button> */}
          <button
            disabled={page === 1}
            onClick={() => changePage(page - 1)}
            className={`cursor-pointer border border-pink-500 rounded-md p-2 ${
              page === 1 ? "opacity-30 cursor-not-allowed" : ""
            }`}
          >
            Previous
          </button>
          <div className="lg:flex lg:gap-5 md:flex md:gap-5 flex gap-10 flex-wrap">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => changePage(index + 1)}
                className={`p-2 w-10 h-10 border rounded cursor-pointer ${
                  page === index + 1 ? "bg-blue-500 text-white" : ""
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button
            disabled={page === totalPages}
            onClick={() => changePage(page + 1)}
            className={`cursor-pointer border border-pink-500 rounded-md p-2 ${
              page === totalPages ? "opacity-30 cursor-not-allowed" : ""
            }`}
          >
            Next
          </button>
          {/* <button
          onClick={() => changePage(totalPages)}
          className="cursor-pointer"
        >
          Last
        </button> */}
        </div>
      </section>
    </>
  );
};

export default Pagination;
