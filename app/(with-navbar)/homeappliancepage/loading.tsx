import HomeApplianceSkeleton from "@/components/skeleton/HomeApplianceSkeleton";

const loading = () => {
  return (
    <div className="lg:pl-32 lg:pr-32 lg:p-10 md:p-10 p-5 flex gap-10">
      <div className="lg:w-[25%] md:w-[35%]">
        <section className="max-w-md animate-pulse">
          <div className="flex items-center justify-between mb-8">
            <div className="h-6 w-20 bg-gray-200 rounded"></div>
            <div className="h-4 w-16 bg-gray-200 rounded"></div>
          </div>
          <div className="space-y-4">
            <div className="h-8 bg-gray-200 rounded"></div>
            <div className="h-8 bg-gray-200 rounded"></div>
            <div className="h-8 bg-gray-200 rounded"></div>
          </div>
        </section>
      </div>
      <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2  grid grid-cols-1 place-items-center lg:gap-20 md:gap-10 gap-10 lg:mt-0 md:mt-0 mt-20">
        {Array.from({ length: 10 }, (_, index) => (
          <HomeApplianceSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export default loading;
