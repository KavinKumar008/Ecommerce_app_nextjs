// import { TiTick } from "react-icons/ti";

type CheckOutFlowProps = {
  currentPage?: string;
};

const CheckOutFlow = ({ currentPage }: CheckOutFlowProps) => {
  console.log(currentPage, "checkoutcurrent");
  const steps = [
    { key: "Cart", label: "Cart" },
    { key: "Shippingdetails", label: "Shipping details" },
    { key: "Payment", label: "Payment" },
  ];
  return (
    <>
      {steps.map((step, index) => (
        <div key={step.key} className="flex items-center gap-2">
          <div
            className={`h-8 w-8 rounded-full flex items-center justify-center
              ${
                step.key === currentPage
                  ? "bg-purple-900 text-white"
                  : "border text-gray-400"
              }`}
          >
            {index + 1}
            {/* <TiTick /> */}
          </div>
          <span>{step.key === currentPage ? step.label : ""}</span>
        </div>
      ))}
    </>
  );
};

export default CheckOutFlow;
