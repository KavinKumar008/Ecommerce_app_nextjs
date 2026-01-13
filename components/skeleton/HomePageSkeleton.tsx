const HomePageSkeleton = () => {
  return (
    <div className="lg:flex lg:flex-row lg:justify-between md:flex md:flex-row md:gap-20 flex flex-col-reverse gap-5 md:pl-8 md:pr-8 md:p-16 p-8">
      <div className="space-y-5">
        <h1 className=" w-72 h-10 bg-gray-400 animate-pulse rounded"></h1>
        <h1 className=" w-64 h-10 bg-gray-400 animate-pulse rounded"></h1>
        <h1 className=" w-56 h-10 bg-gray-400 animate-pulse rounded"></h1>
        <h1 className=" w-48 h-10 bg-gray-400 animate-pulse rounded"></h1>
        <div className="flex gap-3">
          <h1 className=" w-28 h-12 bg-gray-400 animate-pulse rounded-full"></h1>
          <h1 className=" w-10 h-10 bg-gray-400 animate-pulse rounded-full"></h1>
        </div>
      </div>
      <div>
        <div className="lg:w-[450px] lg:h-80 md:w-[400px] md:h-72 w-80 h-48 bg-gray-400 animate-pulse"></div>
      </div>
    </div>
  );
};

export default HomePageSkeleton;
