"use client";
import CheckOutFlow from "../checkoutflow/CheckOutFlow";
import OrderSummaryCard from "../ordersummary/OrderSummaryCard";
import { usePathname } from "next/navigation";

const ShippingDetailsSection = () => {
  const cartPathName = usePathname();

  const pathName =
    cartPathName.slice(1).charAt(0).toUpperCase() + cartPathName.slice(2, 16);

  console.log(pathName, "shippingpathhhhhh");
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
      <section className="lg:pl-32 lg:pr-32 lg:p-10 md:p-8 md:gap-10 space-y-5 lg:flex md:flex lg:gap-36">
        <div className="lg:w-[60%] md:w-[60%] w-full space-y-5 p-5">
          <h1 className="text-2xl font-bold">Shipping Details</h1>
          <div className="space-y-3">
            <div className="flex justify-between">
              <div>
                <p className="lg:text-lg md:text-lg text-sm font-medium">
                  Contact information
                </p>
              </div>
              <div>
                <p className="lg:text-sm md:text-sm text-xs">
                  Already have an account?{" "}
                  <button className="text-blue-500">Log in </button>
                </p>
              </div>
            </div>
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-3 outline-0 border border-gray-400 rounded-md"
            />
            <div className="flex gap-3">
              <input type="checkbox" />
              <p className="text-sm">Email me with news and offers</p>
            </div>
          </div>
          <div className="space-y-7">
            <h3 className="text-lg font-medium">Shipping Address</h3>
            <select
              name=""
              id=""
              className="w-full p-3 rounded-md outline-0 border border-gray-400"
            >
              <option value="">Erode</option>
              <option value="">Coimbatore</option>
              <option value="">Chennai</option>
              <option value="">Bangalore</option>
            </select>
            <div className="grid grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="First name"
                className="w-full p-3 rounded-md outline-0 border border-gray-400"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full p-3 rounded-md outline-0 border border-gray-400"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Address"
                className="w-full p-3 rounded-md outline-0 border border-gray-400"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="City"
                className="w-full p-3 rounded-md outline-0 border border-gray-400"
              />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <select
                name=""
                id=""
                className="p-3 rounded-md outline-0 border border-gray-400"
              >
                <option value="">Provinence</option>
                <option value=""></option>
                <option value=""></option>
              </select>
              <input
                type="text"
                placeholder="Postal code"
                className="p-3 rounded-md outline-0 border border-gray-400"
              />
            </div>
            <input
              type="tel"
              placeholder="Phone"
              className="w-full p-3 rounded-md outline-0 border border-gray-400"
            />
          </div>
        </div>
        <div className="lg:w-[35%] lg:p-0 md:p-0 p-4">
          <OrderSummaryCard currentPage={pathName} />
        </div>
      </section>
    </main>
  );
};

export default ShippingDetailsSection;
