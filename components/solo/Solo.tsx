"use client";

import { UseProducts } from "@/providers/ProductsProvider";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { FaRupeeSign } from "react-icons/fa";
import FilterBars from "../filterbars/FilterBars";
import { useMemo, useState } from "react";

const Solo = () => {
  const params = useParams();
  const id = Number(params.id);

  const products = UseProducts();

  const router = useRouter();

  // const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [appliedBrands, setAppliedBrands] = useState<string[]>([]);
  const [minimumPrice, setMinimumPrice] = useState("");
  const [maximumPrice, setMaximumPrice] = useState("");
  const [showDiscountOnly, setShowDiscountOnly] = useState<number | null>(null);
  //   console.log(typeof id, "dsldlkdlkd");

  // const filteredSoloProducts = products.allProducts.filter((item) => {
  //   const categoryMatch = item.category_id === id;

  //   const branchMatch =
  //     selectedBrands.length === 0 || selectedBrands.includes(item.sname);

  //   return categoryMatch && branchMatch;
  // });

  // const filterShoeNames = filteredSoloProducts.map((item) => item.sname);
  // console.log(filterShoeNames, "dwjdiwjdi");

  const categoryProducts = products.allProducts.filter(
    (item) => item.category_id === id,
  );

  const filterBrandNames = [
    ...new Set(categoryProducts.map((item) => item.sname)),
  ];

  const filteredProducts = useMemo(() => {
    return categoryProducts.filter((item) => {
      const brandMatch =
        appliedBrands.length === 0 || appliedBrands.includes(item.sname);

      const price = Number(item.original_price);

      const minMatch = minimumPrice === "" || price >= Number(minimumPrice);

      const maxMatch = maximumPrice === "" || price <= Number(maximumPrice);

      const discountValue = Number(item.offer.replace(/\D/g, ""));

      const discountMatch =
        showDiscountOnly === null || discountValue >= showDiscountOnly;

      const passed = brandMatch && minMatch && maxMatch && discountMatch;

      return passed;
    });
  }, [
    categoryProducts,
    appliedBrands,
    minimumPrice,
    maximumPrice,
    showDiscountOnly,
  ]);

  return (
    <main className="lg:flex lg:flex-row md:flex md:flex-row flex-col lg:pl-32 lg:pr-32 lg:p-10 md:p-8 md:gap-10 gap-8 lg:mt-0 md:mt-0 mt-10">
      <div className="lg:w-[25%] md:w-[35%] lg:p-0 md:p-0 p-7">
        <FilterBars
          filterBarShoes={filterBrandNames}
          appliedBrands={appliedBrands}
          setAppliedBrands={setAppliedBrands}
          minimumPrice={minimumPrice}
          setMinimumPrice={setMinimumPrice}
          maximumPrice={maximumPrice}
          setMaximumPrice={setMaximumPrice}
          showDiscountOnly={showDiscountOnly}
          setShowDiscountOnly={setShowDiscountOnly}
        />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-10 md:gap-10 lg:place-items-start md:place-items-start place-items-center">
        {filteredProducts.map((product) => (
          <div key={product.id} className="rounded-lg w-[220px]">
            <div className="flex justify-center p-5 bg-gray-100 rounded-lg">
              <Image
                src={product.thumbnail}
                alt=""
                width={150}
                height={150}
                className="cursor-pointer w-28 h-36 bg-gray-200 active:scale-150 transition duration-300"
                onClick={() => router.push(`/productdetailspage/${product.id}`)}
              />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold text-gray-400 mt-2">
                {product.sname}
              </p>

              <h1
                title={product.brand_name}
                className="text-[12px] font-bold line-clamp-2 text-center"
              >
                {product.brand_name}
              </h1>
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <p className="text-sm font-bold flex items-center">
                    <FaRupeeSign /> {product.original_price}
                  </p>
                  <p className="text-sm font-semibold text-gray-400 line-through flex items-center">
                    <FaRupeeSign /> {product.offer_price}
                  </p>
                </div>
                <p className="text-sm text-orange-500">{product.offer}</p>
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
    </main>
  );
};

export default Solo;
