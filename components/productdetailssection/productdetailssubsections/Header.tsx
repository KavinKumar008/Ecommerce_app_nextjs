"use client";

import samsungtv from "@/public/images/samsungtv8k.jpg";
import Image from "next/image";
import { MdShoppingCart } from "react-icons/md";
import { allProductsType } from "@/types/Product";
import { FaRupeeSign } from "react-icons/fa";
import { useAuth } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

type HeaderProps = {
  filterAllProducts: allProductsType[];
};

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const Header = ({ filterAllProducts }: HeaderProps) => {
  const { isLoggedIn } = useAuth();

  console.log(isLoggedIn, "isloggedinnnnnn");

  const router = useRouter();

  // const [selectedImages, setSelectedImages] = useState("");
  // const [apiData, setApiData] = useState<{ id: number; offer_price: number }[]>(
  //   []
  // );
  // console.log(filterAllProducts, "headerpage");

  // useEffect(() => {
  //   const postCartItemsApi = filterAllProducts.map((item) => ({
  //     id: item.id,
  //     offer_price: item.offer_price,
  //   }));

  //   setApiData(postCartItemsApi);
  // }, [filterAllProducts]);

  // console.log(apiData, "eoruiqwqpwoeiqwpoeioqwpei");

  const cartPostApi = async (productId: number, price: number) => {
    try {
      if (!isLoggedIn) {
        router.push(`/signuppage?redirect=/productdetailspage/${productId}`);
        return;
      }

      toast.success("Item Added to Cart");
      const res = await fetch(`${apiUrl}/cartapi`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: productId,
          offer_price: price,
        }),
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="lg:pr-32 lg:pl-32 lg:p-10 md:p-8 lg:flex md:flex gap-10 lg:mt-0 md:mt-0 mt-5">
      <div className="">
        <div className="lg:flex md:flex gap-10">
          {/* <div className="lg:flex-col lg:justify-normal lg:gap-5 md:flex-col md:gap-5 md:justify-normal flex justify-between">
            <Image
              src={samsungtv}
              alt="samsungtv"
              className="lg:h-16 lg:w-28 md:h-16 md:w-28 h-14 w-14 border-2 border-blue-500 rounded-md p-1 cursor-pointer"
            />
            <Image
              src={samsungtv}
              alt="samsungtv"
              className="lg:h-16 lg:w-28 md:h-16 md:w-28 h-14 w-14 border-2 border-blue-500 rounded-md p-1 cursor-pointer"
            />
            <Image
              src={samsungtv}
              alt="samsungtv"
              className="lg:h-16 lg:w-28 md:h-16 md:w-28 h-14 w-14 border-2 border-blue-500 rounded-md p-1 cursor-pointer"
            />
            <Image
              src={samsungtv}
              alt="samsungtv"
              className="lg:h-16 lg:w-28 md:h-16 md:w-28 h-14 w-14 border-2 border-blue-500 rounded-md p-1 cursor-pointer"
            />
          </div> */}
          {filterAllProducts.map((item) => (
            <div
              key={item.id}
              className="lg:flex md:flex md:gap-14 lg:justify-between lg:mt-0 md:mt-0 mt-5"
            >
              <div className="lg:h-[400px] lg:w-[500px] md:w-[350px] w-full h-[300px] bg-gray-100 rounded-lg flex items-center justify-center">
                {item?.thumbnail ? (
                  <Image
                    src={item.thumbnail}
                    alt="samsungtv"
                    width={500}
                    height={500}
                    className="lg:w-72 lg:h-72 md:w-48 md:h-48 w-60 h-56 p-3"
                  />
                ) : null}
              </div>
              <div className="flex flex-col gap-3 lg:w-[30%] md:w-[40%] w-full lg:mt-0 md:mt-0 mt-5">
                <h1 className="font-bold text-2xl">{item.brand_name}</h1>
                <div className="space-y-2">
                  <h3 className="text-blue-900 font-bold text-sm">
                    Description
                  </h3>
                  <p className="text-sm lg:font-semibold md:font-semibold font-bold ">
                    {item.description}
                  </p>
                </div>
                <div className="font-bold flex gap-1 items-center justify-end text-gray-400">
                  <FaRupeeSign />
                  <p className="line-through">
                    {" "}
                    {item.offer_price.toLocaleString()}
                  </p>
                </div>
                <div className="mt-4">
                  <p className="border-b border-gray-300"></p>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <p className="font-bold flex gap-1 items-center">
                    <FaRupeeSign />
                    {item.original_price.toLocaleString()}
                  </p>
                  <button
                    className="bg-blue-900 rounded-full p-2 text-white cursor-pointer w-32 text-sm flex items-center gap-2 justify-center active:scale-90 transition"
                    onClick={() => cartPostApi(item.id, item.offer_price)}
                  >
                    <MdShoppingCart />
                    Add to cart
                  </button>
                </div>
                <div className="mt-4">
                  <p className="border-b border-gray-300"></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="flex flex-col gap-3 lg:w-[40%] md:w-[40%] lg:mt-0 md:mt-0 mt-5">
        <div>
          <p className="font-bold text-2xl">Samsung Qled nk8000</p>
        </div>

        <ul className="text-sm text-gray-500">
          <li>Quantum HCR 32h</li>
          <li>Quantum HCR 32h</li>
          <li>Quantum HCR 32h</li>
          <li>Quantum HCR 32h</li>
        </ul>

        <div className="space-y-3">
          <div className="text-lg font-semibold">Size/Variant</div>
          <div className="flex gap-5">
            <p className="border border-gray-500 w-16 h-10 rounded-md flex items-center justify-center cursor-pointer">
              55''
            </p>
            <p className="border border-gray-500 w-16 h-10 rounded-md flex items-center justify-center cursor-pointer">
              65''
            </p>
            <p className="border border-gray-500 w-16 h-10 rounded-md flex items-center justify-center cursor-pointer">
              75''
            </p>
          </div>
        </div>
        <div className="mt-4">
          <p className="border-b border-gray-300"></p>
        </div>
        <div className="flex items-center justify-between mt-3">
          <p className="font-bold">$1433.00</p>
          <button className="bg-blue-900 rounded-full p-2 text-white cursor-pointer w-32 text-sm flex items-center gap-2 justify-center">
            <MdShoppingCart />
            Add to cart
          </button>
        </div>
        <div className="mt-4">
          <p className="border-b border-gray-300"></p>
        </div>
      </div> */}
    </section>
  );
};

export default Header;
