"use client";

import React, { createContext, useContext, useState } from "react";
import { cartApiProps } from "@/types/Cart";

type CartContextType = {
  cartItemGet: cartApiProps[];
  setCartItemGet: React.Dispatch<React.SetStateAction<cartApiProps[]>>;
  deleteCartApi: (cartItemId: number) => Promise<void>;
  fetchCart: () => Promise<void>;
};

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const cartPageContext = createContext<CartContextType | null>(null);

const CartPageProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItemGet, setCartItemGet] = useState<cartApiProps[]>([]);

  const fetchCart = async () => {
    try {
      const res = await fetch(`${apiUrl}/cartapi/getcart`);
      const data = await res.json();
      console.log(res, "asldjksldjasldjalsdjk");
      if (res.status === 200) {
        setCartItemGet(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCartApi = async (cartItemId: number) => {
    setCartItemGet((prev) =>
      prev.filter((item) => item.CART_ITEM_ID !== cartItemId)
    );
    try {
      const res = await fetch(`${apiUrl}/cartapi/deletecart`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cartItemId }),
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <cartPageContext.Provider
      value={{ cartItemGet, setCartItemGet, deleteCartApi, fetchCart }}
    >
      {children}
    </cartPageContext.Provider>
  );
};

export default CartPageProvider;

export const useCart = (): CartContextType => {
  const context = useContext(cartPageContext);

  if (!context) {
    throw new Error("useCart must be used within CartPageProvider");
  }

  return context;
};
