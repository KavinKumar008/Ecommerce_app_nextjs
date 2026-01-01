"use client";
import { AiFillCarryOut } from "react-icons/ai";
import { useRouter } from "next/navigation";

const ThanksOrderSection = () => {
  const router = useRouter();
  return (
    <main className="flex items-center justify-center lg:mt-0 md:mt-0 mt-12">
      <section className="bg-gray-100 lg:w-[500px] lg:h-[480px] md:w-[500px] md:h-[480px] w-[340px] lg:mt-20 lg:mb-36 md:mt-20 md:mb-36 rounded-lg ">
        <div className="flex flex-col items-center justify-center gap-6 text-center p-7">
          <AiFillCarryOut className="w-36 h-28 text-orange-500" />
          <h1 className="text-2xl font-bold">Thanks for your order!</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore a
            consectetur dicta! Magnam beatae necessitatibus earum sapiente non
            eaque iste?
          </p>
          <div className="w-full">
            <p className="border-b border-gray-300"></p>
          </div>
          <p>Get in touch with us if you have any questions or concern.</p>
          <div className="lg:flex lg:flex-row md:flex md:flex-row flex flex-col gap-3 lg:gap-10 md:gap-10 mt-5">
            <button
              className="lg:w-42 md:w-42 w-64 border border-gray-500 p-3 rounded-full cursor-pointer outline-none"
              onClick={() => router.push("/homepage")}
            >
              Go Back Shopping
            </button>
            <button className="lg:w-42 md:w-42 w-64 bg-blue-900 p-3 rounded-full text-white cursor-pointer">
              Track Order
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ThanksOrderSection;
