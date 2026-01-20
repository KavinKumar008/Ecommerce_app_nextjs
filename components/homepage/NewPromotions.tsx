"use client";

import Image from "next/image";
// import { MdNavigateNext } from "react-icons/md";
import BorderLine from "../borderline/BorderLine";
import { useRouter } from "next/navigation";
import { UseHome } from "@/providers/HomePageProvider";

const NewPromotions = () => {
  const router = useRouter();

  const { promotions } = UseHome();

  const bigCard = promotions.filter((item) => item.type === "bigCard");
  const smallCard = promotions.filter((item) => item.type === "small");
  const tallCard = promotions.filter((item) => item.type === "tall");

  // console.log(bigCard, smallCard, tallCard, "sdkjsdjsdjsl");
  return (
    <>
      <main className="lg:pl-28 lg:pr-28 lg:p-10 md:p-8">
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="text-3xl font-bold">New Promotions</h1>
          <p className="text-sm text-gray-500">
            See what's new with our promos
          </p>
        </div>
        {/* <div className="flex justify-center lg:p-8 md:p-8 p-3">
          <ul className="w-[700px] border border-gray-300 flex justify-between items-center p-2 lg:pl-6 lg:pr-6 md:pl-5 md:pr-5 rounded-full">
            <li className="text-[9px] lg:text-base md:text-base cursor-pointer focus:border focus:border-blue-400 rounded-full text-black font-semibold">
              Recommendations
            </li>
            <li className="text-[9px] lg:text-base md:text-base cursor-pointer focus:border focus:border-blue-400 rounded-full text-black font-semibold">
              Smart Home
            </li>
            <li className="text-[9px] lg:text-base md:text-base cursor-pointer focus:border focus:border-blue-400 rounded-full text-black font-semibold">
              Home Security
            </li>
            <li className="text-[9px] lg:text-base md:text-base cursor-pointer focus:border focus:border-blue-400 rounded-full text-black font-semibold">
              Home Appliance
            </li>
            <li className="text-[9px] lg:text-base md:text-base cursor-pointer focus:border focus:border-blue-400 rounded-full text-black font-semibold">
              Gadget
            </li>
          </ul>
        </div> */}
        <section className="lg:flex md:flex lg:justify-around lg:p-3 p-3 md:gap-5 gap-10">
          {/* left side */}
          <div className="lg:space-y-16">
            <div className="p-5">
              {bigCard.map((product) => (
                <div
                  key={product.id}
                  className="lg:flex md:flex flex items-center gap-8"
                >
                  <div className="flex flex-col justify-evenly md:justify-between lg:gap-5 md:gap-5 gap-2">
                    <div className="bg-orange-400 text-white p-1 w-28 text-center rounded-md font-semibold">
                      {product.offer}
                    </div>
                    <div>
                      <h1 className="lg:text-2xl md:text-lg w-38 font-bold">
                        {product.sname}
                      </h1>
                      {/* <div className="lg:text-sm md:text-sm text-[12px] text-blue-800 flex items-center gap-1 cursor-pointer font-semibold">
                        <span>{product.btn}</span>
                        <MdNavigateNext />
                      </div> */}
                    </div>
                    <div className="space-y-2">
                      {/* <p className="text-sm font-semibold">{product.power}</p> */}
                      <p className="text-[12px]">{product.features}</p>
                      <p></p>
                    </div>
                  </div>
                  <div>
                    <Image
                      src={product.thumbnail}
                      width={100}
                      height={100}
                      alt="brandimage"
                      className="lg:w-92 lg:h-62 md:w-80 md:h-56 cursor-pointer active:scale-125 transition duration-300"
                      onClick={() =>
                        router.push(`productdetailspage/${product.id}`)
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 lg:gap-5 md:gap-5 gap-2 md:mt-12">
              {smallCard.map((smallproduct) => (
                <div
                  key={smallproduct.id}
                  className="flex items-center lg:gap-7 md:gap-5 gap-3 lg:p-5 md:p-5 p-2 bg-gray-100 rounded-md"
                >
                  <div className="flex flex-col gap-4 w-28">
                    <p className="lg:text-sm md:text-sm text-[11px] text-gray-500">
                      {smallproduct.sname}
                    </p>
                    <p className="lg:text-md md:text-[12px] text-[11px] font-bold">
                      {smallproduct.features}
                    </p>
                    <div className="bg-gray-300 p-1 rounded-md w-16 text-center">
                      <p className="text-green-600 text-[11px] font-semibold">
                        {smallproduct.offer}
                      </p>
                    </div>
                  </div>
                  <div>
                    <Image
                      src={smallproduct.thumbnail}
                      width={100}
                      height={100}
                      alt="brandimage"
                      className="w-36 h-24 cursor-pointer active:scale-125 transition duration-300"
                      onClick={() =>
                        router.push(`productdetailspage/${smallproduct.id}`)
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* right side */}
          <div className="grid grid-cols-1 lg:mt-0 md:mt-0 mt-5">
            <div className="flex flex-col gap-8">
              {tallCard.map((tallproduct) => (
                <div
                  key={tallproduct.id}
                  className="bg-gray-200 p-5 lg:h-56 flex items-center flex-col gap-4 rounded-md"
                >
                  <div className="">
                    <Image
                      src={tallproduct.thumbnail}
                      width={100}
                      height={100}
                      alt="brandimage"
                      className="lg:w-42 lg:h-36 md:w-32 md:h-24 cursor-pointer active:scale-125 transition duration-300"
                      onClick={() =>
                        router.push(`productdetailspage/${tallproduct.id}`)
                      }
                    />
                  </div>
                  <div className="lg:flex lg:flex-row md:flex md:flex-col md:items-center md:gap-1 lg:gap-3 flex gap-4 items-center">
                    <p className="text-[11px] text-gray-500">
                      {tallproduct.sname}
                    </p>
                    <p className="lg:text-sm md:text-[12px] font-semibold">
                      {tallproduct.features}
                    </p>
                    <div className="bg-gray-300 p-1 rounded-md">
                      <p className="text-green-600 lg:text-[11px] md:text-[9px] font-semibold">
                        {tallproduct.offer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <BorderLine />
    </>
  );
};

export default NewPromotions;
