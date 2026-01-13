"use client";

import React, { createContext, useContext, useState } from "react";

type ShippingDetails = {
  fname: string;
  lname: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  postalcode: string;
};

type OrderData = {
  orderId: number;
  razorpayOrderId: string;
  amount: number;
  currency: string;
  cartId: number;
  //   shippingDetails: ShippingDetails;
};

type OrderContextType = {
  order: OrderData | null;
  setOrder: (order: OrderData) => void;
  clearOrder: () => void;
};

const orderContext = createContext<OrderContextType | undefined>(undefined);

const OrderProvider = ({ children }: { children: React.ReactNode }) => {
  const [order, setOrderState] = useState<OrderData | null>(null);

  const setOrder = (order: OrderData) => {
    setOrderState(order);
  };

  const clearOrder = () => {
    setOrderState(null);
  };
  return (
    <orderContext.Provider value={{ order, setOrder, clearOrder }}>
      {children}
    </orderContext.Provider>
  );
};

export default OrderProvider;

export const useRazorOrder = () => {
  const cxt = useContext(orderContext);

  if (!cxt) {
    throw new Error("userazororder must beused with orderprovider");
  }

  return cxt;
};
