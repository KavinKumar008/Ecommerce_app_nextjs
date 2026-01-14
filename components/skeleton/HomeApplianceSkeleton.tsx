const HomeApplianceSkeleton = () => {
  return (
    <div>
      <div className="lg:w-56 lg:h-44 md:w-56 md:h-44 w-56 h-56 bg-gray-100 rounded animate-pulse p-4 flex flex-col justify-between">
        <div className="flex items-center justify-center">
          <div className="lg:w-28 lg:h-32 md:w-28 md:h-32 w-48 h-36 bg-gray-400 animate-pulse rounded"></div>
        </div>
      </div>
      <div className="lg:w-full lg:h-5 md:w-full md:h-5 w-full h-7 bg-gray-400 rounded animate-pulse mt-3"></div>
      <div className="lg:w-full lg:h-5 md:w-w-full md:h-5 w-full h-7 bg-gray-400 rounded animate-pulse mt-3"></div>
    </div>
  );
};

export default HomeApplianceSkeleton;
