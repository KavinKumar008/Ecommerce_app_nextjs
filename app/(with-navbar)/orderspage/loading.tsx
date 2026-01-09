import OrderPageSkeleton from "@/components/skeleton/OrderPageSkeleton";

const loading = () => {
  return (
    <div className="lg:pl-32 lg:pr-32 lg:p-10 md:p-7 p-3 lg:mt-0 md:mt-0 mt-12">
      <OrderPageSkeleton />
    </div>
  );
};

export default loading;
