import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { MdShoppingCart } from "react-icons/md";
// import { PopularProductsArray } from "@/staticarray/homepage/PopularProducts";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useCart } from "@/providers/CartPageProvider";
import { FaRupeeSign } from "react-icons/fa";

type DropDownProps = {
  isDropDownOpen: boolean;
  setIsDropDownOpen: (open: boolean) => void;
};

const DropDown = ({ isDropDownOpen, setIsDropDownOpen }: DropDownProps) => {
  const router = useRouter();
  const { cartItemGet, setCartItemGet, deleteCartApi } = useCart();

  const totalPrice = cartItemGet.reduce(
    (acc, currentItem) =>
      acc + Number(currentItem.PRICE) * currentItem.QUANTITY,
    0
  );

  console.log(cartItemGet.length, "oeiueeoiu");

  //   console.log(isDropDownOpen, "kdwkdjwkdj");
  return (
    <DropdownMenu.Root open={isDropDownOpen}>
      <DropdownMenu.Trigger asChild>
        <div
          className="flex items-center gap-2 cursor-pointer outline-0 lg:p-0 md:p-0 p-4 relative active:scale-90"
          onClick={() => setIsDropDownOpen(true)}
        >
          <MdShoppingCart className="text-gray-500 text-xl" />
          {cartItemGet.length ? (
            <span className="text-[10px] font-extrabold border border-gray-300 bg-gray-400 rounded-full w-4 h-4 flex items-center justify-center absolute left-3 bottom-2">
              {" "}
              {cartItemGet.length}
            </span>
          ) : (
            ""
          )}

          <p className="lg:text-sm md:text-sm text-lg">Cart</p>
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <div className="fixed inset-0 bg-black/50">
          <DropdownMenu.Content>
            <section className="w-[300px] h-auto bg-white mt-5 rounded-lg shadow-lg">
              <div className="flex justify-between p-3">
                <h1 className="font-semibold">Cart ({cartItemGet.length})</h1>
                <button
                  className="text-sm text-pink-400 cursor-pointer active:scale-90"
                  onClick={() => {
                    router.push("/cartpage");
                  }}
                >
                  View Cart
                </button>
              </div>
              <div className="w-full mt-1">
                <p className="border-b border-gray-300"></p>
              </div>
              <div className="mt-3 flex flex-col gap-5 p-3">
                {cartItemGet.slice(0, 2).map((item) => (
                  <div className="flex gap-3" key={item.CART_ITEM_ID}>
                    <Image
                      src={item.THUMBNAIL}
                      alt="brandimage"
                      width={10}
                      height={10}
                      className="w-10 h-10 cursor-pointer"
                      onClick={() =>
                        router.push(`/productdetailspage/${item.PRODUCT_ID}`)
                      }
                    />
                    <div className="flex flex-col">
                      <p
                        className="text-[11px] font-semibold line-clamp-2"
                        title={item.BRAND_NAME}
                      >
                        {item.BRAND_NAME}
                      </p>
                      <p className="text-gray-500 text-[11px]">
                        {item.QUANTITY} item
                      </p>
                    </div>
                    <div className="space-y-3 flex flex-col items-end">
                      <MdDelete
                        className="cursor-pointer text-gray-500"
                        onClick={() => deleteCartApi(item.CART_ITEM_ID)}
                      />
                      <p className="text-sm font-semibold flex items-center">
                        <FaRupeeSign className="text-sm" />
                        {(Number(item.PRICE) * item.QUANTITY).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full mt-1">
                <p className="border-b border-gray-300"></p>
              </div>
              <div className="p-3">
                <div className="mt-3 flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-500">Cart Subtotal</p>
                    <p className="text-lg font-bold flex items-center">
                      <FaRupeeSign className="text-lg" />
                      {totalPrice.toLocaleString()}.00
                    </p>
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <button
                    className="cursor-pointer text-center bg-blue-900 w-full p-2 rounded-full text-white active:scale-90"
                    onClick={() => setIsDropDownOpen(false)}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </section>
          </DropdownMenu.Content>
        </div>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropDown;
