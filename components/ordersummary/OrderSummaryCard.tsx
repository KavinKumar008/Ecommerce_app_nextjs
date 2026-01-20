"use client";

import { useRouter } from "next/navigation";
import { CiLock } from "react-icons/ci";
import { IoChevronDown } from "react-icons/io5";
import { MdOutlineDiscount } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { UseCart } from "@/providers/CartPageProvider";
import { loadRazorpay } from "@/utils/loadRazorpay";
import { toast } from "react-toastify";
import { useRazorOrder } from "@/providers/OrderProvider";

// const apiUrl = process.env.NEXT_PUBLIC_API_URL;

type OrderSummaryProps = {
  currentPage: string;
  handleSubmit?: () => Promise<boolean> | boolean;
};

const OrderSummaryCard = ({ currentPage, handleSubmit }: OrderSummaryProps) => {
  const router = useRouter();

  const { cartItemGet } = UseCart();

  const { order } = useRazorOrder();

  console.log(cartItemGet, "woiuqiouoqwu");

  const totalPrice = cartItemGet.reduce(
    (acc, currentItem) =>
      acc + Number(currentItem.price) * currentItem.quantity,
    0,
  );

  const handlePayment = async () => {
    if (!order) {
      toast.error("Order not created");
      return;
    }
    const res = await loadRazorpay();

    console.log(res, "responseeeee");

    if (!res) {
      alert("Razorpay SDK failed");
      return;
    }

    // open razorpay

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
      amount: order.amount,
      currency: "INR",
      name: "My Ecommerce Store",
      description: "Order Payment",
      order_id: order.razorpayOrderId,

      handler: async function (response: any) {
        console.log(response, "razorpayresponseeeeee");
        // verify payment
        const verifyRes = await fetch("/api/verify-payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
            cartId: order.cartId,
            orderId: order?.orderId,
          }),
        });

        const verifyData = await verifyRes.json();

        // alert("Payment Successfull");
        if (verifyData.success) {
          router.push("/thanksorderpage");
        } else {
          alert("Payment verification failed");
        }
      },

      theme: {
        color: "#000",
      },
    };

    const rzp = new (window as any).Razorpay(options);

    rzp.open();
  };

  const push = async () => {
    if (currentPage === "Cart") {
      if (cartItemGet.length === 0) {
        toast.warn("Please add items to the cart");
        return;
      }
      router.push("/shippingdetailspage");
      return;
    } else if (currentPage === "Shippingdetails") {
      if (!handleSubmit) return;
      const isValid = await handleSubmit();
      if (!isValid) return;
      router.push("/paymentpage");
      return;
    } else if (currentPage === "Payment") {
      handlePayment();
    }
  };

  return (
    <div className=" p-5 lg:mt-28 md:mt-28 mt-10 bg-gray-100 rounded-md">
      <h1 className="text-lg font-semibold">Order Summary</h1>
      <div className="w-full mt-2">
        <p className="border border-gray-200"></p>
      </div>
      <div className="flex flex-col gap-3 mt-3">
        <div className="flex justify-between">
          <p className="text-sm text-gray-500">Subtotal</p>
          <p className="text-sm flex items-center">
            <FaRupeeSign />
            {totalPrice.toLocaleString()}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm text-gray-500">Tax</p>
          <p className="text-sm flex items-center">
            <FaRupeeSign />
            0.00
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm text-gray-500">Shipping</p>
          <p className="text-sm flex items-center">
            <FaRupeeSign />
            10.00
          </p>
        </div>
      </div>
      <div className="w-full mt-2">
        <p className="border border-gray-200"></p>
      </div>
      <div className="flex justify-between mt-3">
        <p className="font-medium">Total</p>
        <p className="text-lg font-semibold flex items-center">
          <FaRupeeSign />
          {(totalPrice + 10).toLocaleString()}.00
        </p>
      </div>
      <button
        disabled={
          (currentPage === "Cart" && cartItemGet.length === 0) ||
          (currentPage === "Payment" && !order)
        }
        className="disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-3 outline-0 bg-blue-900 text-white p-3 rounded-full w-full text-sm font-semibold cursor-pointer active:scale-90 transition duration-300"
        onClick={() => push()}
      >
        <CiLock />
        Continue To Payment
      </button>
      <div className="flex items-center justify-center gap-2 mt-4">
        <MdOutlineDiscount />
        <p className="font-semibold lg:text-sm md:text-[12px]">
          Use discount voucher
        </p>

        <span className="flex items-center text-sm">
          optional <IoChevronDown className="cursor-pointer" />
        </span>
      </div>
    </div>
  );
};

export default OrderSummaryCard;
