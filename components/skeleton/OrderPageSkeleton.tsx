const OrderPageSkeleton = () => {
  return (
    <div className="rounded-lg w-full lg:h-36 md:h-36 h-24 shadow-xl flex lg:flex lg:items-center md:flex md:items-center items-center lg:gap-56 md:gap-10 gap-5 bg-gray-200 animate-pulse">
      <div className="flex items-center lg:gap-8 md:gap-8 gap-3">
        <div className="flex items-center lg:h-24 md:h-24 h-14 lg:w-20 md:w-20 w-14 bg-gray-400 rounded-md animate-pulse ml-5"></div>
        <div>
          <p className="lg:w-60 md:w-52 w-24 lg:h-10 md:h-10 h-5 bg-gray-400 rounded-md truncate animate-pulse"></p>
        </div>
        <div className="lg:w-28 md:w-24 w-12 lg:h-10 md:h-10 h-5 rounded-md bg-gray-400 animate-pulse"></div>
      </div>
      <div className="animate-pulse lg:w-36 md:w-36 w-20 lg:h-10 md:h-10 h-5 bg-gray-400 rounded-md"></div>
    </div>
  );
};

export default OrderPageSkeleton;
