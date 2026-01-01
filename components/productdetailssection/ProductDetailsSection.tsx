"use client";
import { useParams } from "next/navigation";
import BgImageSection from "./productdetailssubsections/BgImageSection";
import FeatureSection from "./productdetailssubsections/FeatureSection";
import Header from "./productdetailssubsections/Header";
import HighlightVideo from "./productdetailssubsections/HighlightVideo";
import SpecificationSection from "./productdetailssubsections/SpecificationSection";
import { useProducts } from "@/providers/ProductsProvider";

const ProductDetailsSection = () => {
  const { allProducts } = useProducts();
  // console.log(allProducts, "sldsjdjsdswiwoejweoweoweowejwo");
  const params = useParams();
  const id = Number(params.id);

  const filterAllProducts = allProducts.filter((item) => item.id === id);
  console.log(filterAllProducts, "skjskljsalkjdal");
  // console.log(params, "sdjsdlsjdlskdsldksd", Number(id));
  return (
    <main className="p-6 lg:p-0 md:p-0 lg:mt-0 md:mt-0 mt-5">
      <nav className="bg-black text-white flex lg:justify-end lg:gap-10 md:justify-between md:gap-10 gap-5 p-3 text-sm cursor-pointer">
        <p>Overview</p>
        <p>Specification</p>
        <p>Reviews</p>
        <p>Support</p>
      </nav>
      <section>
        <Header filterAllProducts={filterAllProducts} />
        <div className="mt-10 w-full lg:block md:block hidden">
          <p className="border-b border-gray-300"></p>
        </div>
        <HighlightVideo />
        <FeatureSection />
        <BgImageSection />
        <SpecificationSection />
      </section>
    </main>
  );
};

export default ProductDetailsSection;
