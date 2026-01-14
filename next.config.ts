import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns : [
      {
        protocol:"https",
        hostname:"res.cloudinary.com"
      }
    ]
  },
  compiler:{
    removeConsole:process.env.NODE_ENV === "production" ? {exclude : ['error','warn']} : false
  }
};

export default nextConfig;
