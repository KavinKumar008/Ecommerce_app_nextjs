"use client";

// import { MdAddShoppingCart } from "react-icons/md";
// import { IoEye } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UseHome } from "@/providers/HomePageProvider";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const router = useRouter();

  const { hero } = UseHome();

  const heroData = hero?.[0];

  useEffect(() => {
    if (!heroData?.images?.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === heroData.images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [heroData?.images?.length]);

  if (!heroData || !heroData.images) return null; // Loading state

  return (
    <main className="lg:pl-30 lg:pr-30 lg:p-10">
      <div className="lg:flex lg:flex-row lg:justify-between md:flex md:flex-row md:gap-5 md:pl-8 md:pr-8 md:p-16 flex flex-col-reverse bg-gray-50 lg:mt-0 md:mt-0 mt-16">
        <section className="p-10 lg:p-0 md:p-0">
          {/* Content section - doesn't need to re-render */}
          <div>
            <div className="flex flex-col gap-3">
              <h1 className="lg:text-5xl lg:font-bold md:font-bold lg:leading-14 md:text-2xl text-2xl font-bold">
                {heroData.sname}
              </h1>
              <p className="lg:font-bold md:font-bold font-semibold">
                55'' Neo QLED 8K QN700B
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <TiTick className="h-6 w-6 text-green-500" />
                <p className="text-sm">Quantun Metrix Technology</p>
              </div>
              <div className="flex items-center gap-2">
                <TiTick className="h-6 w-6 text-green-500" />
                <p className="text-sm">Infinity One Design</p>
              </div>
            </div>
            {/* <div className="flex items-center gap-3">
              <button className="bg-blue-900 mt-6 p-3 rounded-full w-36 cursor-pointer outline-0 active:scale-90">
                <div className="flex items-center justify-center gap-3">
                  <MdAddShoppingCart className="text-white" />
                  <p className="text-white">Add to cart</p>
                </div>
              </button>
              <div className="border border-gray-300 rounded-full mt-5">
                <IoEye className="w-10 h-10 p-2 text-gray-500" />
              </div>
            </div> */}
          </div>
        </section>

        <section className="flex flex-col items-center justify-center gap-10">
          <div>
            <Image
              src={heroData.images[currentIndex]}
              height={100}
              width={100}
              alt="samsungtv"
              className="lg:w-[500px] lg:h-92 md:w-[500px] md:h-92 w-[300px] cursor-pointer active:scale-90 transition duration-500"
              onClick={() => router.push(`productdetailspage/${heroData.id}`)}
            />
          </div>
          <div className="flex justify-center gap-3">
            {heroData.images.map((_, idx) => (
              <button
                key={idx}
                className={`lg:w-24 lg:h-1 md:w-24 md:h-1 w-16 h-1 rounded-full cursor-pointer ${
                  idx === currentIndex ? "bg-blue-900" : "bg-gray-400"
                }`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default HeroSection;
