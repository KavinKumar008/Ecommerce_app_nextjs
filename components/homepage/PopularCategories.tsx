"use client";
// import { PopularCategoriesArray } from "@/staticarray/homepage/PopularCategories";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type popularCategoriesProps = {
  ID?: number;
  THUMBNAIL: string;
  CATALOG: string;
  CATEGORY_ID: number;
};

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const PopularCategories = () => {
  const [popularCategories, setPopularCategories] = useState<
    popularCategoriesProps[]
  >([]);

  const router = useRouter();
  const popularCategoriesApi = async () => {
    try {
      const res = await fetch(`${apiUrl}/home/popularcategories`);
      const data = await res.json();
      if (res.status === 200) {
        setPopularCategories(data.data);
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    popularCategoriesApi();
  }, []);

  console.log(popularCategories);
  return (
    <section className="lg:pl-28 lg:pr-28 lg:p-10 md:p-8 p-8">
      <h1 className="text-3xl font-bold">Popular Categories</h1>
      <div className="lg:grid lg:grid-cols-2 lg:grid-rows-3 md:grid md:grid-cols-2 md:grid-rows-3 grid gap-10 lg:p-10 md:p-10 lg:mt-8 md:mt-3 mt-5">
        {popularCategories.map((product) => (
          <div
            key={product.ID}
            className="flex items-center gap-10 bg-gray-50 p-4 rounded-md cursor-pointer shadow-sm active:scale-125 transition duration-300"
            onClick={() => router.push(`solopage/${product.CATEGORY_ID}`)}
          >
            <div>
              <Image
                src={product.THUMBNAIL}
                width={10}
                height={10}
                alt="brandimage"
                className="w-12 h-16 bg-white"
              />
            </div>
            <div className="space-y-1">
              <h1 className="lg:text-xl md:text-lg font-extrabold">
                {product.CATALOG}
              </h1>
              {/* <p className="text-sm text-gray-600">{product.totalProducts}</p> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;
