"use client";

import Image from "next/image";
import ecom from "@/public/Ecommerce checkout laptop-pana.png";
import { useRouter } from "next/navigation";
import { MdLogout } from "react-icons/md";
import { useAuth } from "@/providers/AuthProvider";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const AccountPageSection = () => {
  const { isLoggedIn } = useAuth();

  const router = useRouter();

  const handleLogout = async () => {
    if (!isLoggedIn) {
      alert("You need to login first");
      return;
    }
    await fetch(`${apiUrl}/logout`, {
      method: "POST",
    });
    if (isLoggedIn) {
      router.push("signuppage");
    }
  };

  return (
    <section className="lg:pl-32 lg:pr-32 lg:p-10 md:p-8 lg:flex md:flex p-6 border border-red-500">
      <div className="lg:w-[50%] md:w-[50%] flex items-center justify-center">
        <Image
          src={ecom}
          height={600}
          width={600}
          alt=""
          className="w-[500px] h-[400px]"
        />
      </div>
      <div className="lg:w-[50%] md:w-[50%] flex flex-col items-center gap-10">
        <div className="w-26 h-26 border border-gray-400 rounded-full lg:mt-8 md:mt-8">
          {/* <input type="file" /> */}
        </div>
        <div className="space-y-6 w-full flex flex-col items-center">
          <div>
            <input
              type="text"
              className="outline-0 border-b border-gray-400 pl-2 w-[300px]"
            />
          </div>
          <div>
            <input
              type="text"
              className="outline-0 border-b border-gray-400 pl-2 w-[300px]"
            />
          </div>
          <div>
            <input
              type="text"
              className="outline-0 border-b border-gray-400 pl-2 w-[300px]"
            />
          </div>
        </div>
        <div className="w-full flex lg:justify-around md:justify-around justify-between">
          <button
            type="button"
            className="text-sm cursor-pointer border border-gray-400 p-2 rounded-lg active:scale-90 transition duration-300 ease-in-out"
            onClick={() => {
              router.push("/orderspage");
            }}
          >
            My orders
          </button>
          <button
            type="button"
            className="flex items-center gap-2 text-sm cursor-pointer border border-red-500 p-2 rounded-lg active:scale-90 transition duration-300 ease-in-out"
            onClick={handleLogout}
          >
            <MdLogout />
            Logout
          </button>
        </div>
      </div>
    </section>
  );
};

export default AccountPageSection;
