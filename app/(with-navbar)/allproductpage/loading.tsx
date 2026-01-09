import ProductSkeletonCard from "@/components/skeleton/ProductSkeletonCard";

export default function loading() {
  return (
    <section className="lg:pl-32 lg:pr-32 lg:p-10 md:p-10 p-5 lg:grid lg:grid-cols-4 lg:place-items-end md:grid md:grid-cols-3 md:place-items-end grid grid-cols-1 place-items-center lg:gap-20 md:gap-10 gap-10 lg:mt-0 md:mt-0 mt-20">
      {Array.from({ length: 10 }, (_, index) => (
        <ProductSkeletonCard key={index} />
      ))}
    </section>
  );
}
