import Image from "next/image";
import featureImage from "@/public/images/featuresection.jpg";

const FeatureSection = () => {
  return (
    <section className="lg:pr-32 lg:pl-32 lg:p-10 md:p-8 lg:flex lg:flex-col md:flex md:flex-col lg:gap-20 md:gap-20 lg:mt-0 md:mt-0 mt-16">
      <div className="lg:flex md:flex justify-between lg:mb-0 md:mb-0 mb-16">
        <div className="">
          <Image
            src={featureImage}
            alt="featuresection"
            className="w-80 h-auto rounded-lg"
          />
        </div>
        <div className="lg:space-y-7 md:space-y-7 space-y-4 lg:mt-0 md:mt-0 mt-5 lg:w-[40%] md:w-[40%]">
          <div>
            <p className="lg:text-4xl md:text-2xl text-xl font-extrabold lg:leading-12">
              Another Feature to highlight
            </p>
          </div>
          <div>
            <p className="lg:text-xl md:text-xl text-lg font-extrabold">
              Real 8K resolution
            </p>
          </div>
          <div className="text-gray-500 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
            minus hic ab, veritatis molestiae delectus similique in architecto
            praesentium dolores!
          </div>
        </div>
      </div>
      <div className="lg:flex md:flex justify-between">
        <div className="lg:space-y-7 md:space-y-7 space-y-4 lg:mb-0 md:mb-0 mb-5 lg:w-[40%] md:w-[40%]">
          <div>
            <p className="lg:text-4xl md:text-2xl text-xl font-extrabold lg:leading-12">
              Another Feature to highlight
            </p>
          </div>
          <div>
            <p className="lg:text-xl md:text-xl text-lg font-extrabold">
              Real 8K resolution
            </p>
          </div>
          <div className="text-gray-500 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
            minus hic ab, veritatis molestiae delectus similique in architecto
            praesentium dolores!
          </div>
        </div>
        <div className="">
          <Image
            src={featureImage}
            alt="featuresection"
            className="w-80 h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
