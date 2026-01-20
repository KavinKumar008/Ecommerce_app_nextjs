"use client";

import { createContext, useContext, useEffect, useState } from "react";

// const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const authLoggedApi = async () => {
      const res = await fetch("api/me");
      const data = await res.json();

      if (res.status === 200) {
        setIsLoggedIn(data.isLoggedIn);
      }
    };

    authLoggedApi();
  }, []);

  const logout = async () => {
    await fetch("api/logout", { method: "POST" });
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UseAuth = () => useContext(AuthContext);
