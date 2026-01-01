import { CgPaypal } from "react-icons/cg";
import { SiAmericanexpress } from "react-icons/si";
import { SiVisa } from "react-icons/si";
import { FaApplePay } from "react-icons/fa";
import { FaStripe } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { LiaCcJcb } from "react-icons/lia";
import { CiTwitter } from "react-icons/ci";
import { LuFacebook } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";
import { MdOutlineCopyright } from "react-icons/md";
import { SiMastercard } from "react-icons/si";

const Footer = () => {
  return (
    <main className="lg:flex lg:flex-col bg-gray-50" id="footer">
      <section className="lg:pr-28 lg:pl-28 lg:p-16 md:pr-6 md:pl-6 md:p-6 p-5 lg:flex lg:gap-20 md:flex md:gap-12 space-y-8">
        <div className="flex flex-col gap-5">
          <div className="space-y-3">
            <h2 className="text-xl font-bold">Emmable</h2>
            <p className="text-sm">
              Join our list and get 10% off your <br /> next purchase.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <h3 className="text-sm font-medium">Accepted Payments</h3>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-4">
                <div className="icon-box">
                  <CgPaypal className="w-6 h-8" />
                </div>
                <div className="icon-box">
                  <SiAmericanexpress />
                </div>
                <div className="icon-box">
                  <SiMastercard />
                </div>
                <div className="icon-box">
                  <SiVisa />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="icon-box">
                  <FaApplePay />
                </div>
                <div className="icon-box">
                  <FaStripe />
                </div>
                <div className="icon-box">
                  <FaGooglePay />
                </div>
                <div className="icon-box">
                  <LiaCcJcb />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:gap-28 md:flex md:gap-12 flex gap-6">
          <div className="lg:flex lg:flex-col lg:gap-4 md:flex md:flex-col md:gap-4 flex flex-col gap-2">
            <h3 className="font-semibold text-sm lg:text-lg">Company</h3>
            <p className="lg:text-sm md:text-sm text-[10px]">About Us</p>
            <p className="lg:text-sm md:text-sm text-[10px]">Blog</p>
            <p className="lg:text-sm md:text-sm text-[10px]">Careers</p>
            <p className="lg:text-sm md:text-sm text-[10px]">Our Team</p>
            <p className="lg:text-sm md:text-sm text-[10px]">Help Center</p>
            <p className="lg:text-sm md:text-sm text-[10px]">Outlets</p>
          </div>
          <div className="lg:flex lg:flex-col lg:gap-4 md:flex md:flex-col md:gap-4 flex flex-col gap-2">
            <h3 className="font-semibold text-sm lg:text-lg">Shop</h3>
            <p className="lg:text-sm md:text-sm text-[10px]">Gift Cards</p>
            <p className="lg:text-sm md:text-sm text-[10px]">Our Products</p>
            <p className="lg:text-sm md:text-sm text-[10px]">My Account</p>
            <p className="lg:text-sm md:text-sm text-[10px]">Shipping</p>
            <p className="lg:text-sm md:text-sm text-[10px]">Returns</p>
            <p className="lg:text-sm md:text-sm text-[10px]">Rewards</p>
          </div>
          <div className="lg:flex lg:flex-col lg:gap-4 md:flex md:flex-col md:gap-4 flex flex-col gap-2">
            <h3 className="font-semibold text-sm lg:text-lg">Support</h3>
            <p className="lg:text-sm md:text-sm text-[10px]">Contact Us</p>
            <p className="lg:text-sm md:text-sm text-[10px]">Payment Options</p>
            <p className="lg:text-sm md:text-sm text-[10px]">Store Locator</p>
            <p className="lg:text-sm md:text-sm text-[10px]">Accessibility</p>
            <p className="lg:text-sm md:text-sm text-[10px]">Affiliates</p>
          </div>
          <div className="lg:flex lg:flex-col lg:gap-4 md:flex md:flex-col md:gap-4 flex flex-col gap-2">
            <h3 className="font-semibold text-sm lg:text-lg">FAQ</h3>
            <p className="lg:text-sm md:text-sm text-[10px]">Rewards FAQ</p>
            <p className="lg:text-sm md:text-sm text-[10px]">Product Care</p>
            <p className="lg:text-sm md:text-sm text-[10px]">Size Guide</p>
          </div>
        </div>
      </section>
      <section className="lg:pl-28 lg:pr-28 lg:p-10 md:pl-6 md:pr-6 p-3">
        <div className="border-t border-gray-500">
          <div className="mt-10 flex justify-between items-center gap-3">
            <div className="lg:flex lg:items-center lg:gap-3 md:flex md:items-center md:gap-3">
              <p className="lg:text-sm md:text-sm text-[11px] font-semibold">
                Find us on:
              </p>
              <div className="flex gap-2 ">
                <CiTwitter className="lg:w-6 lg:h-6 border border-blue-300 rounded-full bg-blue-400 text-white" />
                <LuFacebook className="lg:w-6 lg:h-6 border border-blue-300 rounded-full bg-blue-400 text-white" />
                <SlSocialLinkedin className="lg:w-6 lg:h-6 border border-blue-300 rounded-full bg-blue-400 text-white" />
              </div>
            </div>
            <div className="lg:flex lg:gap-4 md:flex md:gap-4 flex gap-2 text-sm">
              <p className="sm:text-sm text-[9px]">Term of Use</p>
              <p className="sm:text-sm text-[9px]">Privacy Policy</p>
            </div>
            <div className="flex items-center gap-1">
              <span>
                <MdOutlineCopyright className="text-gray-500" />
              </span>
              <p className="lg:text-sm md:text-sm text-[10px] text-gray-500">
                2025 All Rights Reserved. Designed by Designspace.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Footer;
