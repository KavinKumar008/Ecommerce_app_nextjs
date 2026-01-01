import laptop from "@/public/images/homepage/promotionssection/laptop.jpg";
import oven from "@/public/images/homepage/promotionssection/oven.jpg";
import vaccumrobot from "@/public/images/homepage/promotionssection/vaccumrobot.jpg";
import ac from "@/public/images/homepage/promotionssection/ac.jpg";
import washingmachine from "@/public/images/homepage/promotionssection/washingmachine.jpg";

export const Promotions = [
  {
    offer: "UP TO 40%",
    brandName: "Lenovo OFFice and Work Laptop",
    btn: "Shop Now",
    power: "Power & Versatility",
    features: "IdeaPad Flex 5i 12th Gen(15, Intel) ",
    brandImage: laptop,
    type: "bigCard",
  },
  {
    brandName: "Electrolux",
    features: "UltimateTaste single oven",
    offer: "10% OFF",
    type: "small",
    brandImage: oven,
  },
  {
    brandName: "Samsung",
    features: "VR5000RM Vaccum Robot",
    offer: "30% OFF",
    type: "small",
    brandImage: vaccumrobot,
  },
  {
    brandName: "LG",
    features: "Dualcool Inverter",
    offer: "25% OFF",
    type: "tall",
    brandImage: ac,
  },
  {
    brandName: "LG",
    features: "Front Loading D3V",
    offer: "15% OFF",
    type: "tall",
    brandImage: washingmachine,
  },
];
