import React from "react";

const BorderLine = () => {
  return (
    <div className="lg:pl-28 lg:pr-28 md:pl-10 md:pr-10 p-10">
      <p className="border border-gray-200"></p>
    </div>
  );
};

export const FullBorder = () => {
  return (
    <div className="w-full">
      <p className="border-b border-gray-300"></p>
    </div>
  );
};

export default BorderLine;
