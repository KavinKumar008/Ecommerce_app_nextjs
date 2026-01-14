"use client";
import { usePathname, useRouter } from "next/navigation";
import { allProductsType } from "@/types/Product";
import Image from "next/image";
import FilterBars from "../filterbars/FilterBars";
import { FaRupeeSign } from "react-icons/fa";
import { useState, useMemo } from "react";

type HomeApplianceProps = {
  homeApp: allProductsType[];
};

const HomeApplianceSection = ({ homeApp }: HomeApplianceProps) => {
  const router = useRouter();
  const pathName = usePathname();

  const [appliedBrands, setAppliedBrands] = useState<string[]>([]);
  const [minimumPrice, setMinimumPrice] = useState("");
  const [maximumPrice, setMaximumPrice] = useState("");
  const [showDiscountOnly, setShowDiscountOnly] = useState<number | null>(null);

  const filterBrandNames = [...new Set(homeApp.map((item) => item.sname))];

  const filteredProducts = useMemo(() => {
    return homeApp.filter((item) => {
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
  }, [appliedBrands, minimumPrice, maximumPrice, showDiscountOnly]);
  return (
    <div className="lg:mt-0 md:mt-0 mt-5">
      <div className="lg:w-full md:w-full lg:p-0 md:p-0 p-5">
        <p className="border border-gray-200"></p>
      </div>
      <div className="lg:p-3 md:p-3 flex lg:ml-32 md:ml-5 ml-5 gap-4 font-semibold text-sm">
        {pathName.slice(1).toUpperCase()}
      </div>
      <div className="lg:w-full md:w-full lg:p-0 md:p-0 p-5">
        <p className="border border-gray-200"></p>
      </div>
      <section className="lg:pr-32 lg:pl-32 lg:p-10 md:p-8 p-5">
        <div className="flex justify-between lg:flex-row md:flex-row flex-col">
          <div className="lg:w-[25%] md:w-[35%]">
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

          <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:place-items-start md:place-items-start place-items-center md:gap-8  gap-5 lg:mt-0 md:mt-0 mt-5">
            {filteredProducts.map((item) => (
              <div key={item.id} className="rounded-lg w-[220px]">
                <div className="flex justify-center p-5 bg-gray-100 rounded-lg">
                  {item.thumbnail ? (
                    <Image
                      src={item.thumbnail}
                      alt=""
                      width={150}
                      height={150}
                      className="cursor-pointer w-28 h-36 bg-gray-200 active:scale-90"
                      onClick={() =>
                        router.push(`/productdetailspage/${item.id}`)
                      }
                    />
                  ) : null}
                </div>
                <div className="text-sm font-semibold text-gray-400 mt-2">
                  {item.sname}
                </div>
                <div className="flex flex-col gap-3">
                  <h1
                    title={item.brand_name}
                    className="text-[12px] font-bold line-clamp-2 text-center mt-2"
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
                    <p className="text-sm text-orange-500">{item.offer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeApplianceSection;
