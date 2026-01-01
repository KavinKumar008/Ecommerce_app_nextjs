import HomeApplianceSection from "@/components/homeappliancesection/HomeApplianceSection";

const page = async () => {
  const apiURL = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${apiURL}/homeappliance`);
  const data = await res.json();
  console.log(data, "homeappliance");
  return (
    <div>
      <HomeApplianceSection homeApp={data.data} />
    </div>
  );
};

export default page;
