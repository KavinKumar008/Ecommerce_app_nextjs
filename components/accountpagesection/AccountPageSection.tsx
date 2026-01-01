import Image from "next/image";
import ecom from "@/public/Ecommerce checkout laptop-pana.png";

const AccountPageSection = () => {
  return (
    <section className="lg:pl-32 lg:pr-32 lg:p-10 md:p-8 lg:flex md:flex p-6">
      <div className="lg:w-[50%] md:w-[50%] flex items-center justify-center">
        <Image
          src={ecom}
          height={600}
          width={600}
          alt=""
          className="w-[400px] h-[400px]"
        />
      </div>
      <div className="lg:w-[50%] md:w-[50%] flex flex-col items-center gap-6">
        <div className="w-26 h-26 border border-gray-400 rounded-full lg:mt-15 md:mt-15">
          {/* <input type="file" /> */}
        </div>
        <div className="space-y-6">
          <div>
            <input
              type="text"
              className="outline-0 border-b border-gray-400 pl-2"
            />
          </div>
          <div>
            <input
              type="text"
              className="outline-0 border-b border-gray-400 pl-2"
            />
          </div>
          <div>
            <input
              type="text"
              className="outline-0 border-b border-gray-400 pl-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountPageSection;
