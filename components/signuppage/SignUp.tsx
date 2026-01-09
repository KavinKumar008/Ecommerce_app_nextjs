"use client";

import ecomweb from "@/public/Ecommerce web page-pana.png";
import home from "@/public/beach house-pana.png";
import Image from "next/image";
import React, { useState } from "react";
import { GoEyeClosed } from "react-icons/go";
import { RxEyeOpen } from "react-icons/rx";
import Login from "./Login";
import { useRouter, useSearchParams } from "next/navigation";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const SignUp = () => {
  const [identifier, setIdentifier] = useState({
    uname: "",
    identifier: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    uname: "",
    identifier: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const [showLogin, setShowLogin] = useState(false);

  const router = useRouter();

  const searchParams = useSearchParams();

  const redirect = searchParams.get("redirect") || "/";

  console.log(searchParams, "searchparamsss", redirect);

  const handleIdentifier = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setIdentifier((prev) => ({ ...prev, [name]: value }));
  };

  const isValidEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const isValidMobile = (value: string) => {
    return /^[6-9]\d{9}$/.test(value);
  };

  const isValidName = (value: string) => {
    return /^[a-zA-Z\s]{3,}$/.test(value);
  };

  const isValidatePass = (value: string) => {
    return /^[0-9]{6,}$/.test(value);
  };

  const validate = () => {
    let newErrors = { uname: "", identifier: "", password: "" };

    if (!isValidName(identifier.uname)) {
      newErrors.uname = "Enter a valid name";
    }

    if (
      !isValidMobile(identifier.identifier) &&
      !isValidEmail(identifier.identifier)
    ) {
      newErrors.identifier = "Enter a valid email or mobile number";
    }

    if (!isValidatePass(identifier.password)) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    // stop API call if errors exist
    if (newErrors.uname || newErrors.identifier || newErrors.password) {
      return false;
    }

    console.log("VALID DATA ✅", identifier);
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    const res = await fetch(`${apiUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: identifier.uname,
        identifier: identifier.identifier,
        pass: identifier.password,
      }),
    });

    setIdentifier({ uname: "", identifier: "", password: "" });

    if (res.status === 201) {
      router.push(redirect);
      // router.push("/homepage");
    }
  };

  console.log(identifier);

  const handleCancelSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setIdentifier({ uname: "", identifier: "", password: "" });
    setErrors({ uname: "", identifier: "", password: "" });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="lg:w-[750px] lg:h-auto md:w-[750px] md:h-auto w-full rounded-lg shadow-2xl lg:flex md:flex">
        <div className="lg:w-[50%] md:w-[50%] w-full">
          <Image src={ecomweb} alt="signupimage" className="w-92 h-[450px]" />
        </div>
        <div className="lg:w-[50%] md:w-[50%] w-full flex flex-col items-center gap-7 lg:p-0 md:p-0 p-5">
          <Image
            src={home}
            alt="home"
            className="lg:w-20 lg:h-20 md:w-20 md:h-20 w-36 h-36"
          />
          {showLogin ? (
            <Login
              showLogin={showLogin}
              setShowLogin={setShowLogin}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              isValidEmail={isValidEmail}
              isValidMobile={isValidMobile}
              isValidatePass={isValidatePass}
            />
          ) : (
            <form action="" className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-3">
                <p className="text-sm">Name</p>
                <input
                  type="text"
                  name="uname"
                  value={identifier.uname}
                  placeholder="Enter your name"
                  className="outline-0 border-b border-gray-400 placeholder:text-sm pl-2 lg:w-72 md:w-72 w-full"
                  onChange={(e) => handleIdentifier(e)}
                />
                {errors.uname && (
                  <p className="text-sm text-red-400">{errors.uname}</p>
                )}
              </div>
              <div className="space-y-3">
                <p className="text-sm">Email or Mobile No</p>
                <div className="relative">
                  <input
                    type="text"
                    name="identifier"
                    value={identifier.identifier}
                    placeholder="Enter your email or mobile no"
                    className="outline-0 border-b border-gray-400 placeholder:text-sm pl-2 lg:w-72 md:w-72 w-full"
                    onChange={(e) => handleIdentifier(e)}
                  />
                </div>
                {errors.identifier && (
                  <p className="text-sm text-red-400">{errors.identifier}</p>
                )}
              </div>
              <div className="space-y-3">
                <p className="text-sm">Password</p>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={identifier.password}
                    placeholder="Enter your password"
                    className="outline-0 border-b border-gray-400 placeholder:text-sm pl-2 lg:w-72 md:w-72 w-full"
                    onChange={(e) => handleIdentifier(e)}
                  />
                  <span
                    className="absolute right-2 cursor-pointer"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <RxEyeOpen /> : <GoEyeClosed />}
                  </span>
                </div>
                {errors.password && (
                  <p className="text-sm text-red-400">{errors.password}</p>
                )}
              </div>
              <div className="space-x-8">
                <button
                  className="bg-gray-400 rounded-full p-2 cursor-pointer w-28 text-white active:scale-90 outline-0"
                  type="button"
                  onClick={handleCancelSignUp}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-gray-400 rounded-full p-2 cursor-pointer w-28 text-white active:scale-90 outline-0"
                  // onClick={() => router.push("/homepage")}
                >
                  Sign Up
                </button>
              </div>
            </form>
          )}

          {showLogin ? (
            ""
          ) : (
            <div className="text-sm">
              Already have an account click.
              <button
                className="text-blue-500 cursor-pointer active:scale-90"
                onClick={() => setShowLogin(true)}
              >
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
