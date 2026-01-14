"use client";

import Image from "next/image";
import ecom from "@/public/Ecommerce checkout laptop-pana.png";
import { useRouter } from "next/navigation";
import { MdLogout } from "react-icons/md";
import { useAuth } from "@/providers/AuthProvider";
import { useEffect, useRef, useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import { CldUploadWidget } from "next-cloudinary";
import add_file from "@/public/undraw_add-file_lf11.png";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

type accountProps = {
  id: number;
  name: string;
  email?: string;
  mobile_no?: string;
  avatar_url: string;
};

const AccountPageSection = () => {
  const { isLoggedIn } = useAuth();

  const router = useRouter();

  const [myaccountData, setMyAccountData] = useState<accountProps[]>([]);

  const [avatarURL, setAvatarURL] = useState();

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

  useEffect(() => {
    const accountsPageApi = async () => {
      try {
        if (!isLoggedIn) return;
        const res = await fetch(`${apiUrl}/myaccount`);
        const data = await res.json();

        if (res.status === 200) {
          setMyAccountData(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    accountsPageApi();
  }, [isLoggedIn]);

  console.log(myaccountData, "myaccountttttt");
  return (
    <section className="lg:pl-32 lg:pr-32 lg:p-10 md:p-8 lg:flex md:flex p-6">
      <div className="lg:w-[50%] md:w-[50%] flex items-center justify-center">
        <Image
          src={ecom}
          height={600}
          width={600}
          alt=""
          className="w-[500px] h-[400px]"
        />
      </div>
      <div className="lg:w-[50%] md:w-[50%] flex flex-col items-center gap-10 ">
        {myaccountData.map((item) => (
          <div key={item.id} className="flex flex-col items-center gap-10">
            <div className="w-26 h-26 border border-gray-400 rounded-full lg:mt-8 md:mt-8 relative">
              <div className="w-full h-full rounded-full overflow-hidden">
                {avatarURL || item.avatar_url ? (
                  <Image
                    src={add_file || item.avatar_url}
                    alt="avatarimage"
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full bg-linear-to-br from-purple-400 to-blue-500 flex items-center justify-center text-white text-3xl font-bold">
                    {item.name.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>

              <CldUploadWidget
                uploadPreset="avatar_preset"
                options={{
                  maxFiles: 1,
                  resourceType: "image",
                  clientAllowedFormats: ["png", "jpg", "jpeg"],
                  maxFileSize: 2 * 1024 * 1024, // 2MB
                }}
                onSuccess={async (result: any) => {
                  const url = result.info.secure_url;
                  setAvatarURL(url);

                  await fetch(`${apiUrl}/upload-avatar`, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ avatarUrl: url }),
                  });
                }}
              >
                {({ open }) => (
                  <button
                    type="button"
                    disabled={!isLoggedIn}
                    onClick={() => open()}
                    className="disabled:opacity-45 disabled:cursor-not-allowed absolute bottom-1 right-1 bg-white border rounded-full p-2 shadow cursor-pointer"
                  >
                    <MdOutlineFileUpload />
                  </button>
                )}
              </CldUploadWidget>
            </div>
            <div>
              <div className="space-y-6 w-full flex flex-col">
                <div>
                  {/* <input
              type="text"
              className="outline-0 border-b border-gray-400 pl-2 w-[300px]"
            /> */}
                  <p className="border-b border-gray-400 pl-2 w-[300px]">
                    {item.name}
                  </p>
                </div>
                <div>
                  {/* <input
              type="text"
              className="outline-0 border-b border-gray-400 pl-2 w-[300px]"
            /> */}
                  <p className="border-b border-gray-400 pl-2 w-[300px]">
                    {item.email || item.mobile_no}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex lg:justify-between md:justify-around justify-between">
              <button
                type="button"
                className="text-sm cursor-pointer border border-gray-400 p-2 rounded-lg active:scale-90 transition duration-300 ease-in-out"
                onClick={() => {
                  if (!isLoggedIn) {
                    alert("Signup or Login first to see your orders");
                    return;
                  }
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
        ))}
      </div>
    </section>
  );
};

export default AccountPageSection;
