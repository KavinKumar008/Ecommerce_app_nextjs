import SignUp from "@/components/signuppage/SignUp";
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<div>Loading..........</div>}>
      <SignUp />
    </Suspense>
  );
};

export default page;
