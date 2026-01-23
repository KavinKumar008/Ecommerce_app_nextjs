import NavBar from "@/components/homepage/NavBar";
import Footer from "@/components/homepage/Footer";
import ProductsProvider from "@/providers/ProductsProvider";
import { Montserrat, Roboto } from "next/font/google";
// import CartPageProvider from "@/providers/CartPageProvider";
// import HomePageProvider from "@/providers/HomePageProvider";
// import { AuthProvider } from "@/providers/AuthProvider";
// import MyOrderProvider from "@/providers/MyOrderProvider";
// import OrderProvider from "@/providers/OrderProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <HomePageProvider>
        <OrderProvider>
          <MyOrderProvider>
            <AuthProvider>
              <CartPageProvider>
                <ProductsProvider> */}
      <NavBar />
      {children}
      <Footer />
      {/* </ProductsProvider>
              </CartPageProvider>
            </AuthProvider>
          </MyOrderProvider>
        </OrderProvider>
      </HomePageProvider> */}
    </>
  );
}
