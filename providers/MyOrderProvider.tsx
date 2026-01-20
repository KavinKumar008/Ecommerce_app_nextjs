"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

// const apiUrl = process.env.NEXT_PUBLIC_API_URL;

type orderProps = {
  id: number;
  total_price: string;
  thumbnail: string;
  brand_name: string;
};

type orderContextValue = {
  orderData: orderProps[];
};

const OrderContext = createContext<orderContextValue | undefined>(undefined);

const MyOrderProvider = ({ children }: { children: React.ReactNode }) => {
  const [orderData, setOrderData] = useState<orderProps[]>([]);

  useEffect(() => {
    const orderApi = async () => {
      const orderRes = await fetch("api/myorder");
      const data = await orderRes.json();

      if (orderRes.status === 200) {
        setOrderData(data.data);
      }
    };

    orderApi();
  }, []);

  return (
    <OrderContext.Provider value={{ orderData }}>
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
