import { IoIosArrowBack } from "react-icons/io";
import { RxEyeOpen } from "react-icons/rx";
import { GoEyeClosed } from "react-icons/go";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

type loginProps = {
  showLogin: boolean;
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  isValidEmail: (value: string) => boolean;
  isValidMobile: (value: string) => boolean;
  isValidatePass: (value: string) => boolean;
};

// const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const Login = ({
  showLogin,
  setShowLogin,
  showPassword,
  setShowPassword,
  isValidEmail,
  isValidMobile,
  isValidatePass,
}: loginProps) => {
  const [identifier, setIdentifier] = useState({
    identifier: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    identifier: "",
    password: "",
  });

  const router = useRouter();

  const searchParams = useSearchParams();

  const redirect = searchParams.get("redirect") || "/";

  const handleIdentifier = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setIdentifier((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let newErrors = { identifier: "", password: "" };

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
    if (newErrors.identifier || newErrors.password) {
      return false;
    }

    console.log("VALID DATA ✅", identifier);
    return true;
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    const res = await fetch("api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: identifier.identifier,
        password: identifier.password,
      }),
    });

    if (res.status === 201) {
      router.push(redirect);
    }

    setIdentifier({ identifier: "", password: "" });
  };

  const handleLoginCancel = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({ identifier: "", password: "" });
  };
  return (
    <div>
      <form action="" className="space-y-5" onSubmit={handleLoginSubmit}>
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
        <div className="flex justify-between">
          <button
            type="button"
            className="bg-gray-400 rounded-full p-2 cursor-pointer w-28 text-white active:scale-90 outline-0"
            onClick={handleLoginCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-gray-400 rounded-full p-2 cursor-pointer w-28 text-white active:scale-90 outline-0"
            // onClick={() => router.push("/homepage")}
          >
            Login
          </button>
        </div>
      </form>
      <button
        type="button"
        className="cursor-pointer text-blue-400 text-sm active:scale-90 flex items-center gap-1 mt-5"
        onClick={() => setShowLogin(false)}
      >
        <IoIosArrowBack />
        Go Back
      </button>
    </div>
  );
};

export default Login;
