"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

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
      const orderRes = await fetch(`${apiUrl}/myorder`);
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

export const useOrder = () => {
  const order = useContext(OrderContext);

  if (!order) {
    throw new Error("useorder must be use with myorderprovider");
  }

  return order;
};
