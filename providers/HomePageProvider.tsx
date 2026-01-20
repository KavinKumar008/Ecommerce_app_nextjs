"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type HeroData = {
  id: number;
  images: string[];
  sname: string;
};

type PopularProduct = {
  catalog: string;
  category_id: number;
  id: number;
  thumbnail: string;
};

type Product = {
  catalog: string;
  category_id: number;
  id: number;
  thumbnail: string;
};

type Promotion = {
  features: string;
  id: number;
  offer: string;
  sname: string;
  thumbnail: string;
  type: string;
};

type PopularProducts = {
  id: number;
  thumbnail: string;
  brand_name: string;
  offer_price: string;
};

type HomePageApiResponse = {
  data: HeroData[];
  popular: PopularProduct[];
  products: Product[];
  promotions: Promotion[];
  popularProducts: PopularProducts[];
};

type HomePageContextValue = {
  hero: HeroData[];
  products: Product[];
  promotions: Promotion[];
  popularCategories: PopularProduct[];
  popularProducts: PopularProducts[];
};

const homePageContext = createContext<HomePageContextValue | undefined>(
  undefined,
);

const HomePageProvider = ({ children }: { children: React.ReactNode }) => {
  const [homePageData, setHomePageData] = useState<HomePageApiResponse>({
    data: [],
    popular: [],
    products: [],
    promotions: [],
    popularProducts: [],
  });

  useEffect(() => {
    // const apiUrl = process.env.NEXT_PUBLIC_RAILWAY_API_URL;

    // if (!apiUrl) {
    //   console.warn("NEXT_PUBLIC_RAILWAY_API_URL is not defined");
    //   return;
    // }

    const homePageApis = async () => {
      try {
        const res = await fetch("/api/home");
        const data = await res.json();

        if (res.status === 200) {
          setHomePageData(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    homePageApis();
  }, []);

  const hero = homePageData.data;

  const products = homePageData.products;

  const promotions = homePageData.promotions;

  const popularCategories = homePageData.popular;

  const popularProducts = homePageData.popularProducts;

  console.log(homePageData, "weouwoewoeuwoe");

  const contextValue: HomePageContextValue = {
    hero,
    products,
    promotions,
    popularCategories,
    popularProducts,
  };

  console.log(contextValue, "contextvalueeee");

  return (
    <homePageContext.Provider value={contextValue}>
      {children}
    </homePageContext.Provider>
  );
};

export default HomePageProvider;

export const UseHome = () => {
  const context = useContext(homePageContext);

  if (!context) {
    throw new Error("UseHome must be used within a HomePageProvider");
  }

  return context;
};
