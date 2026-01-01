import NavBar from "@/components/homepage/NavBar";
import Footer from "@/components/homepage/Footer";
import ProductsProvider from "@/providers/ProductsProvider";
import { Montserrat, Roboto } from "next/font/google";
import CartPageProvider from "@/providers/CartPageProvider";

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
      <CartPageProvider>
        <ProductsProvider>
          <NavBar />
          {children}
          <Footer />
        </ProductsProvider>
      </CartPageProvider>
    </>
  );
}
