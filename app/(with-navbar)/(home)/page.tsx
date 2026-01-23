import HeroSection from "@/components/homepage/HeroSection";
import NewPromotions from "@/components/homepage/NewPromotions";
import PopularCategories from "@/components/homepage/PopularCategories";
import PopularProducts from "@/components/homepage/PopularProducts";
import ProductNames from "@/components/homepage/ProductNames";
import Products from "@/components/homepage/Products";
import ProductService from "@/components/homepage/ProductService";
import Promo from "@/components/homepage/Promo";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Products />
      <NewPromotions />
      <PopularProducts />
      <ProductNames />
      <PopularCategories />
      <Promo />
      <ProductService />
      {/* https://www.figma.com/design/nsM3mxZlRtvkMxuF4vkqez/Emmable--e-Commerce-Website-Design-Desktop-Version--Preview-?node-id=302-2&p=f&t=XflvNq8g6mgOKZq1-0 */}
    </>
  );
};

export default HomePage;
