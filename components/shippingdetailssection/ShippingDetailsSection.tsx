"use client";
import { useState } from "react";
import CheckOutFlow from "../checkoutflow/CheckOutFlow";
import OrderSummaryCard from "../ordersummary/OrderSummaryCard";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useCart } from "@/providers/CartPageProvider";
import { useRazorOrder } from "@/providers/OrderProvider";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

type ShippingForm = {
  mail: string;
  state: string;
  fname: string;
  lname: string;
  address: string;
  city: string;
  postalcode: string;
  mobileno: string;
};

type FormErrors = Partial<Record<keyof ShippingForm, string>>;

const ShippingDetailsSection = () => {
  const router = useRouter();
  const cartPathName = usePathname();

  const [formData, setFormData] = useState<ShippingForm>({
    mail: "",
    state: "",
    fname: "",
    lname: "",
    address: "",
    city: "",
    postalcode: "",
    mobileno: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const { cartItemGet } = useCart();

  const { setOrder } = useRazorOrder();

  const pathName =
    cartPathName.slice(1).charAt(0).toUpperCase() + cartPathName.slice(2, 16);

  console.log(pathName, "shippingpathhhhhh");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    console.log(name);

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // clear error while typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.mail.trim()) {
      newErrors.mail = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.mail)) {
      newErrors.mail = "Enter a valid email";
    }

    if (!formData.fname.trim()) {
      newErrors.fname = "First name is required";
    }

    if (!formData.lname.trim()) {
      newErrors.lname = "Last name is required";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.postalcode.trim()) {
      newErrors.postalcode = "Postal code is required";
    } else if (!/^\d{6}$/.test(formData.postalcode)) {
      newErrors.postalcode = "Postal code must be 6 digits";
    }

    if (!formData.mobileno.trim()) {
      newErrors.mobileno = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobileno)) {
      newErrors.mobileno = "Enter a valid Indian phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    // console.log(e);
    // e.preventDefault();
    if (!validateForm()) {
      toast.error("Fill all required fields");
      return false;
    }

    const orderRes = await fetch(`${apiUrl}/create-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        form: { ...formData },
        cartId: cartItemGet[0].CART_ID,
      }),
    });

    const data = await orderRes.json();

    if (orderRes.status === 200) {
      setOrder({
        orderId: data.orderId,
        razorpayOrderId: data.razorpayOrderId,
        amount: data.amount,
        currency: data.currency,
        cartId: data.cartId,
      });
    }

    console.log(data, "Validated data:", formData);
    // Proceed to payment / next step

    // fetch(`${apiUrl}/shippingdetails`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ form: { ...formData } }),
    // });

    return true;
  };

  console.log(formData, "sdlsjdljsdjslds");

  return (
    <main className="lg:mt-0 md:mt-0 mt-7">
      <div className="lg:w-full md:w-full lg:p-0 md:p-0 p-5">
        <p className="border border-gray-200"></p>
      </div>
      <div className="lg:p-3 md:p-3 flex items-center lg:ml-32 md:ml-5 ml-5 gap-4">
        <CheckOutFlow currentPage={pathName} />
      </div>
      <div className="lg:w-full md:w-full lg:p-0 md:p-0 p-5">
        <p className="border border-gray-200"></p>
      </div>
      <section className="lg:pl-32 lg:pr-32 lg:p-10 md:p-8 md:gap-10 space-y-5 lg:flex md:flex lg:gap-36">
        <div className="lg:w-[60%] md:w-[60%] w-full space-y-5 p-5">
          <form onSubmit={handleSubmit} className="space-y-7">
            <h1 className="text-2xl font-bold">Shipping Details</h1>
            <div className="space-y-3">
              <div className="flex justify-between">
                <div>
                  <p className="lg:text-lg md:text-lg text-sm font-medium">
                    Contact information
                  </p>
                </div>
                <div>
                  <p className="lg:text-sm md:text-sm text-xs">
                    Already have an account?{" "}
                    <button
                      type="button"
                      className="text-blue-500 cursor-pointer text-sm active:scale-90"
                      onClick={() => router.push("signuppage")}
                    >
                      Log in{" "}
                    </button>
                  </p>
                </div>
              </div>
              {/* <form onSubmit={handleSubmit} className="space-y-7"> */}

              <input
                type="email"
                name="mail"
                value={formData.mail}
                placeholder="Your email"
                className="w-full p-3 outline-0 border border-gray-400 rounded-md"
                onChange={handleChange}
              />
              {errors.mail && (
                <p className="text-red-500 text-sm">{errors.mail}</p>
              )}
              <div className="flex gap-3">
                <input type="checkbox" />
                <p className="text-sm">Email me with news and offers</p>
              </div>
            </div>
            {/* <form onSubmit={handleSubmit} className="space-y-7"> */}
            <h3 className="text-lg font-medium">Shipping Address</h3>
            <select
              name="state"
              value={formData.state}
              id=""
              className="w-full p-3 rounded-md outline-0 border border-gray-400"
              onChange={handleChange}
            >
              <option value="">Select State</option>
              <option value="tamil nadu">Tamil Nadu</option>
              <option value="kerala">Kerala</option>
              <option value="bangalore">Bangalore</option>
              <option value="telangana">Telangana</option>
            </select>
            {errors.state && (
              <p className="text-red-500 text-sm mt-1">{errors.state}</p>
            )}
            <div className="grid grid-cols-2 gap-5">
              <div>
                <input
                  type="text"
                  name="fname"
                  value={formData.fname}
                  placeholder="First name"
                  className="w-full p-3 rounded-md outline-0 border border-gray-400"
                  onChange={handleChange}
                />
                {errors.fname && (
                  <p className="text-red-500 text-sm mt-1">{errors.fname}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="lname"
                  value={formData.lname}
                  placeholder="Last name"
                  className="w-full p-3 rounded-md outline-0 border border-gray-400"
                  onChange={handleChange}
                />
                {errors.lname && (
                  <p className="text-red-500 text-sm mt-1">{errors.lname}</p>
                )}
              </div>
            </div>
            <div>
              <input
                type="text"
                name="address"
                value={formData.address}
                placeholder="Address"
                className="w-full p-3 rounded-md outline-0 border border-gray-400"
                onChange={handleChange}
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">{errors.address}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="city"
                value={formData.city}
                placeholder="City"
                className="w-full p-3 rounded-md outline-0 border border-gray-400"
                onChange={handleChange}
              />
              {errors.city && (
                <p className="text-red-500 text-sm mt-1">{errors.city}</p>
              )}
            </div>
            <div className="">
              {/* <select
                name=""
                id=""
                className="p-3 rounded-md outline-0 border border-gray-400"
              >
                <option value="">Provinence</option>
                <option value=""></option>
                <option value=""></option>
              </select> */}
              <input
                type="text"
                name="postalcode"
                value={formData.postalcode}
                placeholder="Postal code"
                className="w-full p-3 rounded-md outline-0 border border-gray-400"
                onChange={handleChange}
              />
              {errors.postalcode && (
                <p className="text-red-500 text-sm mt-1">{errors.postalcode}</p>
              )}
            </div>
            <div>
              <input
                type="tel"
                name="mobileno"
                value={formData.mobileno}
                placeholder="Phone"
                className="w-full p-3 rounded-md outline-0 border border-gray-400"
                onChange={handleChange}
              />
              {errors.mobileno && (
                <p className="text-red-500 text-sm mt-1">{errors.mobileno}</p>
              )}
            </div>
          </form>
        </div>
        <div
          className="lg:w-[35%] lg:p-0 md:p-0 p-4"
          onClick={() => validateForm()}
        >
          <OrderSummaryCard
            currentPage={pathName}
            handleSubmit={handleSubmit}
          />
        </div>
      </section>
    </main>
  );
};

export default ShippingDetailsSection;
