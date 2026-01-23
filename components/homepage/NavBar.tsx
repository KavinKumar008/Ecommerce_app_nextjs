"use client";

import { IoIosSearch } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import DropDown from "../dropdownmenucart/DropDown";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { VscThreeBars } from "react-icons/vsc";

const NavBar = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const router = useRouter();

  const pathName = usePathname();

  const isActive = (path: string) => {
    return pathName === path;
  };

  console.log(pathName, "pathnammeeeenav");

  useEffect(() => {
    const handleResize = () => {
      if (innerWidth >= 768) {
        setIsSideBarOpen(false);
      }
    };

    handleResize();
    addEventListener("resize", handleResize);

    return () => removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="lg:static md:static relative lg:p-0 md:p-0 p-3">
      <section
        className={`transition-transform duration-300
    lg:flex md:flex lg:justify-around md:justify-around
    ${
      isSideBarOpen
        ? "fixed top-0 left-0 w-52 h-screen bg-white shadow-2xl z-40 md:static md:w-auto md:h-auto md:bg-transparent"
        : "hidden md:flex"
    }`}
      >
        <div className="lg:flex lg:flex-row lg:items-center md:flex md:flex-row md:items-center lg:gap-6 md:gap-4 cursor-pointer lg:mt-0 md:mt-0 mt-14 p-5 flex flex-col gap-5">
          <h1
            className="font-extrabold lg:text-xl md:text-2xl text-2xl active:scale-90"
            onClick={() => router.push("/")}
          >
            Emmable
          </h1>
          <p
            className={` lg:text-sm md:text-sm text-lg active:scale-90 ${
              isActive("/allproductpage")
                ? "text-blue-500 font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => router.push("/allproductpage")}
          >
            All Product
          </p>
          <p
            className={`lg:text-sm md:text-sm text-lg active:scale-90 ${
              isActive("/homeappliancepage")
                ? "text-blue-500 font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => router.push("/homeappliancepage")}
          >
            Home Appliance
          </p>
          <p
            className={`lg:text-sm md:text-sm text-lg active:scale-90 ${
              pathName.startsWith("/solopage")
                ? "text-blue-500 font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => router.push("/solopage")}
          >
            Products
          </p>
          <a href="#promo">
            <p className="text-gray-500 lg:text-sm md:text-sm text-lg active:scale-90">
              Promo
            </p>
          </a>
          <a href="#footer">
            <p className="text-gray-500 lg:text-sm md:text-sm text-lg active:scale-90">
              Support
            </p>
          </a>
        </div>
        <div className="lg:flex gap-5 lg:items-center md:flex md:items-center">
          {/* <IoIosSearch className="text-gray-500 text-xl cursor-pointer" /> */}
          {/* <div className="flex items-center gap-2 cursor-pointer"> */}
          <DropDown
            isDropDownOpen={isDropDownOpen}
            setIsDropDownOpen={setIsDropDownOpen}
            isMounted={isMounted}
            setIsMounted={setIsMounted}
          />
          {/* </div> */}
          <div
            className={`flex items-center gap-2 cursor-pointer lg:p-0 md:p-0 p-4 ${
              isActive("/accountpage")
                ? "text-blue-500 font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => router.push("/accountpage")}
          >
            <MdPerson
              className={`${isActive("/accountpage") ? "text-blue-500 font-semibold" : "text-gray-500 text-xl"}`}
            />
            <p className="lg:text-sm md:text-sm text-lg active:scale-90">
              Account
            </p>
          </div>
        </div>
      </section>
      <VscThreeBars
        className="lg:hidden md:hidden w-10 h-10 cursor-pointer fixed top-4 left-4 z-50"
        onClick={() => setIsSideBarOpen((prev) => !prev)}
      />
    </main>
  );
};

export default NavBar;
