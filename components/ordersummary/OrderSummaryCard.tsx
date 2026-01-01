import { useRouter } from "next/navigation";
import { CiLock } from "react-icons/ci";
import { IoChevronDown } from "react-icons/io5";
import { MdOutlineDiscount } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { useCart } from "@/providers/CartPageProvider";

const OrderSummaryCard = ({ currentPage }) => {
  const router = useRouter();

  const { cartItemGet } = useCart();

  console.log(cartItemGet, "woiuqiouoqwu");

  const totalPrice = cartItemGet.reduce(
    (acc, currentItem) =>
      acc + Number(currentItem.PRICE) * currentItem.QUANTITY,
    0
  );

  const push = () => {
    if (currentPage === "Cart") {
      router.push(`shippingdetailspage`);
    } else if (currentPage === "Shippingdetails") {
      router.push(`paymentpage`);
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
        className="flex items-center justify-center gap-2 mt-3 bg-blue-900 text-white p-3 rounded-full w-full text-sm font-semibold cursor-pointer active:scale-90 transition duration-300"
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
