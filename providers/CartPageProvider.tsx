"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { cartApiProps } from "@/types/Cart";

type CartContextType = {
  cartItemGet: cartApiProps[];
  setCartItemGet: React.Dispatch<React.SetStateAction<cartApiProps[]>>;
  deleteCartApi: (cartItemId: number) => Promise<void>;
};

// const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const cartPageContext = createContext<CartContextType | null>(null);

const CartPageProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItemGet, setCartItemGet] = useState<cartApiProps[]>([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await fetch("/api/cartapi/getcart");
        const data = await res.json();
        console.log(res, "asldjksldjasldjalsdjk");
        if (res.status === 200) {
          setCartItemGet(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchCart();
  }, []);

  const deleteCartApi = async (cartItemId: number) => {
    setCartItemGet((prev) =>
      prev.filter((item) => item.cart_item_id !== cartItemId),
    );
    try {
      const res = await fetch("/api/cartapi/deletecart", {
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
      value={{ cartItemGet, setCartItemGet, deleteCartApi }}
    >
      {children}
    </cartPageContext.Provider>
  );
};

export default CartPageProvider;

export const UseCart = (): CartContextType => {
  const context = useContext(cartPageContext);

  console.log(context, "cartcontextttt");

  if (!context) {
    throw new Error("UseCart must be used within CartPageProvider");
  }

  return context;
};
