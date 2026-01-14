const Promo = () => {
  return (
    <div
      id="promo"
      className="relative w-full h-[500px] bg-cover bg-center bg-[url('/images/samsung_tv_bg.jpg')] mt-10"
    >
      <div className="absolute inset-0 bg-linear-to-b from-black to-transparent"></div>

      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-start pt-20 text-center text-white px-4">
        <h1 className="text-4xl font-bold">Neo QLED</h1>
        <p className="lg:text-4xl md:text-4xl text-xl mt-2 font-semibold">
          Incredible feature to highlight
        </p>
        <p className="max-w-xl mt-4 opacity-80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </div>
    </div>
  );
};

export default Promo;
