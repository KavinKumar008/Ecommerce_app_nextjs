import HomePageSkeleton from "@/components/skeleton/HomePageSkeleton";

const loading = () => {
  return (
    <div className="lg:pl-32 lg:pr-32 lg:p-20 flex flex-col-reverse bg-gray-50">
      <HomePageSkeleton />
    </div>
  );
};

export default loading;
