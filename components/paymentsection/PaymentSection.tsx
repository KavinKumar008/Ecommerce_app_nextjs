"use client";

import { CgPaypal } from "react-icons/cg";
import { SiAmericanexpress } from "react-icons/si";
import { SiVisa } from "react-icons/si";
import { SiMastercard } from "react-icons/si";
import OrderSummaryCard from "../ordersummary/OrderSummaryCard";
import { usePathname } from "next/navigation";
import CheckOutFlow from "../checkoutflow/CheckOutFlow";

const PaymentSection = () => {
  const paymentPathName = usePathname();

  const pathName =
    paymentPathName.slice(1).charAt(0).toUpperCase() +
    paymentPathName.slice(2, 8);
  console.log(pathName, "paymentpathname");
  return (
    <main className="lg:mt-0 md:mt-0 mt-7">
      <div className="lg:w-full md:w-full lg:p-0 md:p-0 p-5">
        <p className="border border-gray-200"></p>
      </div>
      <div className="lg:p-3 md:p-3 flex items-center lg:ml-32 md:ml-5 ml-5 gap-4">
        <CheckOutFlow currentPage={pathName} />
      </div>
      <div className="lg:w-full md:w-full lg:p-0 md:p-0 p-5">
        <p className="border border-gray-200"></p>
      </div>
      <section className="lg:pr-32 lg:pl-32 lg:p-10 md:p-8 p-5 lg:flex md:flex justify-between">
        <div className="space-y-10">
          <h1 className="text-3xl font-bold">Payment</h1>
          <div className="space-y-3">
            <p className="font-medium">Choose Payment Method</p>
            <div className="lg:w-[500px] md:w-auto w-full h-auto border border-gray-300 rounded-xl">
              <div className="flex justify-between p-5">
                <label
                  htmlFor=""
                  className="flex items-center gap-2 font-medium"
                >
                  <input type="radio" />
                  <p> Credit Card</p>
                </label>
                <div className="flex">
                  <SiMastercard className="w-10 h-5" />
                  <SiVisa className="w-10 h-5" />
                  <SiAmericanexpress className="w-10 h-5" />
                </div>
              </div>
              <div className="w-full">
                <p className="border-b border-gray-300"></p>
              </div>
              <div className="p-4 space-y-5">
                <input
                  type="text"
                  placeholder="Card number"
                  className="w-full outline-0 border border-gray-300 p-2 rounded-md placeholder:text-sm"
                />
                <input
                  type="text"
                  placeholder="Name on card"
                  className="w-full outline-0 border border-gray-300 p-2 rounded-md placeholder:text-sm"
                />
                <div className="flex justify-between">
                  <select
                    name=""
                    id=""
                    className="lg:w-36 md:w-32 outline-0 border border-gray-300 p-2 rounded-md"
                  >
                    <option value="">January</option>
                    <option value="">January</option>
                    <option value="">January</option>
                    <option value="">January</option>
                    <option value="">January</option>
                    <option value="">January</option>
                    <option value="">January</option>
                    <option value="">January</option>
                    <option value="">January</option>
                  </select>
                  <select
                    name=""
                    id=""
                    className="lg:w-36 md:w-32 outline-0 border border-gray-300 p-2 rounded-md"
                  >
                    <option value="">January</option>
                    <option value="">January</option>
                    <option value="">January</option>
                    <option value="">January</option>
                    <option value="">January</option>
                    <option value="">January</option>
                  </select>
                  <div>
                    <input
                      type="text"
                      placeholder="CCV"
                      className="lg:w-36 md:w-32 w-20 outline-0 border border-gray-300 p-2 rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="border-b border-gray-300"></p>
              </div>
              <div className="flex justify-between items-center p-4">
                <label htmlFor="" className="flex gap-2">
                  <input type="radio" />
                  <p className="font-medium">Paypal</p>
                </label>
                <CgPaypal />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-[30%]">
          <OrderSummaryCard />
        </div>
      </section>
    </main>
  );
};

export default PaymentSection;
