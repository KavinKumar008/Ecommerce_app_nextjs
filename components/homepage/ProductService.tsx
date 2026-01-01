import { FaClipboardQuestion } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ProductService = () => {
  return (
    <main className="lg:p-20 lg:ml-20 lg:mr-20 md:p-10 p-6 flex flex-col gap-12">
      <section className="flex flex-col justify-center items-center gap-3">
        <h2 className="lg:text-2xl md:text-2xl font-extrabold">
          Product Service and Support
        </h2>
        <div className="text-[13px] text-gray-500">
          We can help answer questions about tour product, maintenance, use,
          repair
          <p className="lg:flex lg:items-center lg:justify-center md:flex md:items-center md:justify-center">
            <span className="text-center">
              and maintenance of your product.
            </span>
          </p>
        </div>
      </section>
      <section className="flex justify-between">
        <div className="flex flex-col items-center gap-6">
          <div>
            <FaClipboardQuestion className="lg:w-10 lg:h-10 md:w-10 md:h-10 w-6 h-6 text-orange-400" />
          </div>
          <div className="flex flex-col items-center gap-2">
            <div>
              <h3 className="lg:text-lg lg:font-bold md:text-lg md:font-bold text-sm font-semibold">
                Live Chat
              </h3>
            </div>
            <div className="flex flex-col items-center lg:gap-0 md:gap-0 gap-2">
              <p className="lg:text-[13px] md:text-[13px] text-[8px] text-gray-500">
                Monday - Friday : 09.00 AM - 06.00 PM
              </p>
              <p className="lg:text-[13px] md:text-[13px] text-[8px] text-gray-500">
                Saturday - Sunday : 09.00 AM - 05.00 PM
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="w-0.5 h-36 bg-gray-300"></p>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div>
            <FaPhone className="lg:w-10 lg:h-10 md:w-10 md:h-10 w-6 h-6 text-orange-400" />
          </div>
          <div className="flex flex-col items-center gap-2">
            <div>
              <h3 className="lg:text-lg lg:font-bold md:text-lg md:font-bold text-sm font-semibold">
                Phone
              </h3>
            </div>
            <div className="flex flex-col items-center lg:gap-0 md:gap-0 gap-2">
              <p className="lg:text-[13px] md:text-[13px] text-[8px] text-gray-500">
                Customer service at 12345
              </p>
              <p className="lg:text-[13px] md:text-[13px] text-[8px] text-gray-500">
                Monday - Friday from 07.00 - 20.00
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="w-0.5 h-36 bg-gray-300"></p>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div>
            <MdEmail className="lg:w-10 lg:h-10 md:w-10 md:h-10 w-6 h-6 text-orange-400" />
          </div>
          <div className="flex flex-col items-center gap-2">
            <div>
              <h3 className="lg:text-lg lg:font-bold md:text-lg md:font-bold text-sm font-semibold">
                Email
              </h3>
            </div>
            <div>
              <div className="lg:text-[13px] md:text-[13px] text-[8px] text-gray-500">
                Send a message to Customer
                <div className="lg:flex lg:justify-center md:flex md:justify-center">
                  <span>service and Support.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductService;
