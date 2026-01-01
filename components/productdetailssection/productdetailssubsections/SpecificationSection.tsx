const SpecificationSection = () => {
  return (
    <section className="lg:pr-32 lg:pl-32 lg:p-10 md:pr-8 md:pl-8 md:p-10 mt-7">
      <div>
        <h1 className="text-3xl font-bold">Specification</h1>
      </div>
      <div className="mt-5">
        <p className="border-b border-gray-300"></p>
      </div>
      <div className="grid grid-cols-3 mt-6">
        <p className="font-bold text-xl">Display</p>
        <div className="space-y-2">
          <p className="lg:font-semibold md:font-semibold">Screen Size</p>
          <p>55''</p>
        </div>
        <div className="space-y-2">
          <p className="lg:font-semibold md:font-semibold">Resolution</p>
          <p>7,680 * 4580</p>
        </div>
      </div>
      <div className="mt-5">
        <p className="border-b border-gray-300"></p>
      </div>
      <div className="grid grid-cols-3 mt-6">
        <p className="font-bold text-xl">Weight</p>
        <div className="space-y-2">
          <p className="lg:font-semibold md:font-semibold">Package Weight</p>
          <p>35.8 kg</p>
        </div>
        <div className="space-y-2">
          <p className="lg:font-semibold md:font-semibold">
            Set Weight with Stand
          </p>
          <p>24.8 kg</p>
        </div>
      </div>
    </section>
  );
};

export default SpecificationSection;
