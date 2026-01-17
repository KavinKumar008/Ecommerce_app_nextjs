"use client";

import { allProductsType } from "@/types/Product";
import { createContext, useContext, useEffect, useState } from "react";

type ProductContextType = {
  // createContext: allProductsType[];
  allProducts: allProductsType[];
};

const ProductContext = createContext<ProductContextType>({ allProducts: [] });

const apiURL = process.env.NEXT_PUBLIC_API_URL;
const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
  const [allProducts, setAllProducts] = useState<allProductsType[]>([]);

  useEffect(() => {
    const getProductsApi = async () => {
      try {
        const res = await fetch(`${apiURL}/allproducts`);
        const data = await res.json();

        if (res.status === 200) {
          console.log(data, "skjqowqowiqwiqpwiqpwi");
          setAllProducts(data?.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProductsApi();
  }, []);

  return (
    <ProductContext.Provider value={{ allProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductsProvider;

export const useProducts = () => useContext(ProductContext);
