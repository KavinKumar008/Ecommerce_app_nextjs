"use client";

import { UseAuth } from "@/providers/AuthProvider";
import { UseOrder } from "@/providers/MyOrderProvider";
import Image from "next/image";
import { FaRupeeSign } from "react-icons/fa";

const OrderSection = () => {
  const { orderData } = UseOrder();

  const { isLoggedIn } = UseAuth();

  // if (orderData) {
  //   return (
  //     <div className="bg-red-50 lg:pl-34 lg:pr-34 lg:p-10 md:pl-34 md:pr-34 md:p-10 lg:mt-0 md:mt-0 mt-10">
  //       Pay and see your products
  //     </div>
  //   );
  // }

  if (!isLoggedIn) {
    return (
      <div className="bg-red-50 lg:pl-34 lg:pr-34 lg:p-10 md:pl-34 md:pr-34 md:p-10 lg:mt-0 md:mt-0 mt-10">
        <p className="text-center">
          Please login and pay to see your order products
        </p>
      </div>
    );
  }

  return (
    <section className="lg:pl-32 lg:pr-32 lg:p-10 md:p-7 p-3 lg:mt-0 md:mt-0 mt-12">
      <div className="lg:space-y-5 md:space-y-5 space-y-3">
        {orderData.map((item) => (
          <div
            key={item.id}
            className="rounded-lg w-full lg:h-36 md:h-36 h-24 shadow-xl flex lg:flex lg:items-center md:flex md:items-center lg:gap-56 md:gap-10 gap-5"
          >
            <div className="flex items-center lg:gap-8 md:gap-8 gap-3">
              <div className="flex items-center">
                <Image
                  src={item.thumbnail}
                  width={70}
                  height={10}
                  alt={item.brand_name}
                  className="lg:h-20 lg:w-20 md:h-20 md:w-20 w-10 h-10 lg:ml-8 md:ml-8 ml-2 cursor-pointer"
                />
              </div>
              <div>
                <p
                  className="lg:text-[13px] md:text-[13px] text-[9px] lg:w-80 md:w-80 w-36 truncate"
                  title={item.brand_name}
                >
                  {item.brand_name}
                </p>
              </div>
              <div className="flex items-center lg:text-sm md:text-sm text-[9px]">
                <FaRupeeSign />
                <p>{item.total_price}</p>
              </div>
            </div>
            <div className="lg:text-base md:text-base text-[9px] flex items-center">
              Lorem ipsum dolor sit.
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrderSection;
