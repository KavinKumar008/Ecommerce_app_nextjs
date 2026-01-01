// import AllProductsSection from "@/components/allproductssection/AllProductsSection";
// import { getAllProducts } from "@/components/allproductssection/AllProductsSection";
import Pagination from "@/components/pagination/Pagination";

type functionProps = {
  searchParams: Promise<{ page?: string }>;
};

const apiURL = process.env.NEXT_PUBLIC_API_URL;
const page = async ({ searchParams }: functionProps) => {
  // console.log(searchParams, "searchparamsssss");

  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const limit = 10;
  const res = await fetch(
    `${apiURL}/productlimit?page=${currentPage}&limit=${limit}`,
    {
      cache: "no-store",
    }
  );
  // console.log(res, "resssss");
  const data = await res.json();
  // console.log(data, "dataaaaa");
  // const products = resData?.data;

  return (
    <div>
      {/* <AllProductsSection products={data.data} total={data.total} page={page} /> */}
      <Pagination products={data.data} total={data.total} page={currentPage} />
    </div>
  );
};

export default page;
