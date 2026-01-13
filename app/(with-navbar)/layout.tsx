import NavBar from "@/components/homepage/NavBar";
import Footer from "@/components/homepage/Footer";
import ProductsProvider from "@/providers/ProductsProvider";
import { Montserrat, Roboto } from "next/font/google";
import CartPageProvider from "@/providers/CartPageProvider";
import HomePageProvider from "@/providers/HomePageProvider";
import { AuthProvider } from "@/providers/AuthProvider";
import MyOrderProvider from "@/providers/MyOrderProvider";
import OrderProvider from "@/providers/OrderProvider";

const montSerrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <OrderProvider>
        <MyOrderProvider>
          <AuthProvider>
            <HomePageProvider>
              <CartPageProvider>
                <ProductsProvider>
                  <NavBar />
                  {children}
                  <Footer />
                </ProductsProvider>
              </CartPageProvider>
            </HomePageProvider>
          </AuthProvider>
        </MyOrderProvider>
      </OrderProvider>
    </>
  );
}
