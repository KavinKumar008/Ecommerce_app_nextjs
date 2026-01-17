import HomeApplianceSection from "@/components/homeappliancesection/HomeApplianceSection";
import { getProductsByCategory } from "@/lib/queries/products";

const page = async () => {
  const products = await getProductsByCategory(5);
  return (
    <div>
      <HomeApplianceSection homeApp={products} />
    </div>
  );
};

export default page;
