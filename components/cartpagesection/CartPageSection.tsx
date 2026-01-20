"use client";

import PopularProducts from "../homepage/PopularProducts";
import Image from "next/image";
// import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

import OrderSummaryCard from "../ordersummary/OrderSummaryCard";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import CheckOutFlow from "../checkoutflow/CheckOutFlow";
import { FaRupeeSign } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { UseCart } from "@/providers/CartPageProvider";

// const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const CartPageSection = () => {
  const router = useRouter();
  const cartPathName = usePathname();
  const { cartItemGet, setCartItemGet, deleteCartApi } = UseCart();

  const pageName =
    cartPathName.slice(1).charAt(0).toUpperCase() + cartPathName.slice(2, 5);

  const increaseQty = async (cartItemId: number) => {
    setCartItemGet((prev) =>
      prev.map((item) =>
        item.cart_item_id === cartItemId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
    await fetch("/api/cartapi/increase", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cartItemId }),
    });
  };

  const decreaseQty = async (cartItemId: number) => {
    const item = cartItemGet.find((i) => i.cart_item_id === cartItemId);

    if (!item || item.quantity === 1) return;
    setCartItemGet((prev) =>
      prev.map((item) =>
        item.cart_item_id === cartItemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
    await fetch("/api/cartapi/decrease", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cartItemId }),
    });
  };

  // console.log(cartItemGet, "dkjeirjewoirjowiejr");

  return (
    <main className="lg:mt-0 md:mt-0 mt-7">
      <div className="lg:w-full md:w-full lg:p-0 md:p-0 p-5">
        <p className="border border-gray-200"></p>
      </div>
      <div className="lg:p-3 md:p-3 flex items-center lg:ml-32 md:ml-5 ml-5 gap-4">
        <CheckOutFlow currentPage={pageName} />
      </div>
      <div className="lg:w-full md:w-full lg:p-0 md:p-0 p-5">
        <p className="border border-gray-200"></p>
      </div>
      <section className="lg:flex md:flex lg:p-0 md:p-0 p-2">
        <div className="lg:pl-32 lg:p-10 md:p-10 p-3 lg:w-[70%] md:w-[65%]">
          <h1 className="text-2xl font-bold">Cart ({cartItemGet.length})</h1>
          <div className="flex justify-between mt-8">
            <div>
              <p className="text-gray-500 text-sm">Product</p>
            </div>
            <div className="flex lg:gap-38 md:gap-20 gap-6">
              <p className="text-gray-500 text-sm">Amount</p>
              <p className="text-gray-500 text-sm">Subtotal</p>
            </div>
          </div>
          <div className="w-full mt-3">
            <p className="border border-gray-200"></p>
          </div>
          <div className="">
            <div>
              {cartItemGet.map((product) => (
                <div key={product.cart_item_id}>
                  <div className="flex items-center justify-between mt-5">
                    <div className="flex flex-col items-start gap-2 w-[50%]">
                      <div className="flex gap-5">
                        <div className="bg-gray-50 p-3 rounded-md">
                          <Image
                            src={product.thumbnail}
                            alt="brandimage"
                            width={100}
                            height={100}
                            className="lg:w-28 lg:h-16 md:w-44 md:h-16 w-36 h-10 cursor-pointer active:sacle-90 transition duration-200"
                            onClick={() =>
                              router.push(
                                `/productdetailspage/${product.product_id}`,
                              )
                            }
                          />
                        </div>
                        <div className="flex flex-col justify-center items-start">
                          <p
                            className="lg:text-sm md:text-[12px] text-[11px] font-semibold line-clamp-2"
                            title={product.brand_name}
                          >
                            {product.brand_name}
                          </p>
                          <p className="text-gray-400 lg:text-sm md:text-sm text-[11px]">
                            Color:Gray
                          </p>
                        </div>
                      </div>
                      <div className="mt-5 flex items-center gap-7">
                        {/* <button className="flex items-center gap-2 text-gray-500 cursor-pointer">
                          <MdEdit />
                          Edit
                        </button> */}
                        <button
                          className="flex items-center gap-2 text-gray-500 cursor-pointer active:scale-90 transition"
                          onClick={() => deleteCartApi(product.cart_item_id)}
                        >
                          <MdDelete />
                          <p className="text-sm lg:font-medium md:font-medium font-bold">
                            Delete
                          </p>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-around lg:gap-7 md:gap-7 gap-5 border border-gray-500 rounded-full lg:w-36 lg:h-12 md:w-28 md:h-10 w-26 h-8">
                      <FaMinus
                        className="cursor-pointer text-gray-500 active:scale-90"
                        onClick={() => decreaseQty(product.cart_item_id)}
                      />
                      <p className="font-bold lg:text-base md:text-base text-sm">
                        {product.quantity}
                      </p>
                      <FaPlus
                        className="cursor-pointer text-gray-500 active:scale-90"
                        onClick={() => increaseQty(product.cart_item_id)}
                      />
                    </div>
                    <div className="font-extrabold lg:text-sm md:text-sm text-[11px] flex items-center">
                      <FaRupeeSign />
                      {(
                        product.quantity * Number(product.price)
                      ).toLocaleString()}
                      .00
                    </div>
                  </div>
                  <div className="w-full mt-4">
                    <p className="border-b border-gray-200"></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Order summary */}
        <div className="lg:w-[25%] md:w-[30%] w-full h-[350px]">
          <OrderSummaryCard currentPage={pageName} />
        </div>
      </section>
      <div className="lg:mt-36 md:mt-36 mt-10">
        <PopularProducts />
      </div>
    </main>
  );
};

export default CartPageSection;
