"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

// const apiUrl = process.env.NEXT_PUBLIC_API_URL;

type orderProps = {
  id: number;
  total_price: string;
  thumbnail: string;
  brand_name: string;
  pid: number;
};

type orderContextValue = {
  orderData: orderProps[];
  isLoading: boolean;
};

const OrderContext = createContext<orderContextValue | undefined>(undefined);

const MyOrderProvider = ({ children }: { children: React.ReactNode }) => {
  const [orderData, setOrderData] = useState<orderProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const orderApi = async () => {
      try {
        const orderRes = await fetch("/api/myorder");

        if (!orderRes.ok) {
          console.error("Order API failed:", orderRes.status);
          return;
        }
        const data = await orderRes.json();

        if (orderRes.status === 200) {
          setOrderData(data.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    orderApi();
  }, []);

  return (
    <OrderContext.Provider value={{ orderData, isLoading }}>
      {children}
    </OrderContext.Provider>
  );
};

export default MyOrderProvider;

export const UseOrder = () => {
  const order = useContext(OrderContext);

  if (!order) {
    throw new Error("Useorder must be use with myorderprovider");
  }

  return order;
};
