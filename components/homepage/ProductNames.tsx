import { SiSamsung } from "react-icons/si";
import { SiSony } from "react-icons/si";
import BorderLine from "../borderline/BorderLine";

const ProductNames = () => {
  return (
    <>
      <div className="lg:pl-28 lg:pr-28 md:pl-12 md:pr-12 pl-10 pr-10  flex justify-between">
        <SiSamsung className="lg:text-[130px] md:text-[100px] text-[50px]" />
        <SiSony className="lg:text-[130px] md:text-[100px] text-[50px]" />
        <SiSamsung className="lg:text-[130px] md:text-[100px] text-[50px]" />
        <SiSony className="lg:text-[130px] md:text-[100px] text-[50px]" />
      </div>
      <BorderLine />
    </>
  );
};

export default ProductNames;
