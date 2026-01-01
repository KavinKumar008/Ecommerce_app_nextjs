import { RxCross2 } from "react-icons/rx";
import * as Accordion from "@radix-ui/react-accordion";
import { FaAngleDown } from "react-icons/fa6";
import React, { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";

type filterBarProps = {
  filterBarShoes: string[];
  appliedBrands: string[];
  setAppliedBrands: React.Dispatch<React.SetStateAction<string[]>>;
  minimumPrice: string;
  setMinimumPrice: React.Dispatch<React.SetStateAction<string>>;
  maximumPrice: string;
  setMaximumPrice: React.Dispatch<React.SetStateAction<string>>;
  showDiscountOnly: number | null;
  setShowDiscountOnly: React.Dispatch<React.SetStateAction<number | null>>;
};

const FilterBars = ({
  filterBarShoes,
  appliedBrands,
  setAppliedBrands,
  minimumPrice,
  setMinimumPrice,
  maximumPrice,
  setMaximumPrice,
  showDiscountOnly,
  setShowDiscountOnly,
}: filterBarProps) => {
  const [storedCategories, setStoredCategories] = useState<string[]>([]);
  // const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [tempSelectedBrands, setTempSelectedBrands] =
    useState<string[]>(appliedBrands);

  const [tempMinPrice, setTempMinPrice] = useState(minimumPrice || "");
  const [tempMaxPrice, setTempMaxPrice] = useState(maximumPrice || "");

  const [showAll, setShowAll] = useState(false);

  const visibleFilters = showAll
    ? storedCategories
    : storedCategories.slice(0, 4);

  const discountsArray = [
    "20% or more",
    "30% or more",
    "40% or more",
    "50% or more",
    "60% or more",
    "70% or more",
  ];

  const handleResetAll = () => {
    setStoredCategories([]);
    setTempSelectedBrands([]);
    setAppliedBrands([]);
    setShowDiscountOnly(null);
    setTempMinPrice("");
    setTempMaxPrice("");
    setMinimumPrice("");
    setMaximumPrice("");
  };
  const handleBrands = (
    e: React.ChangeEvent<HTMLInputElement>,
    item: string
  ) => {
    if (e.target.checked) {
      setTempSelectedBrands((prev) => [...prev, item]);
    } else {
      setTempSelectedBrands((prev) => prev.filter((brand) => brand !== item));
    }
  };

  const addedFiltersShown = (
    e: React.ChangeEvent<HTMLInputElement>,
    item: string,
    type: "checkbox" | "radio"
  ) => {
    const isChecked = e.target.checked;

    setStoredCategories((prev) => {
      if (!isChecked) {
        return prev.filter((i) => i !== item);
      }

      if (type === "radio") {
        return [item];
      }
      return prev.includes(item) ? prev : [...prev, item];
    });
  };

  const applyPriceFilter = () => {
    setMinimumPrice(tempMinPrice);
    setMaximumPrice(tempMaxPrice);

    setStoredCategories((prev) => {
      const withoutPrice = prev.filter((item) => !item.startsWith("₹"));

      if (!tempMinPrice && !tempMaxPrice) {
        return withoutPrice;
      }

      const label = `${tempMinPrice || 0}-${
        tempMaxPrice === "999999" ? "3000+" : "3000"
      }`;

      return [...withoutPrice, label];
    });
  };

  return (
    <section className="max-w-md ">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Filter:</h1>
        <button
          type="button"
          className="text-blue-400 border-b border-blue-400 text-sm cursor-pointer active:scale-90"
          onClick={handleResetAll}
        >
          Reset All
        </button>
      </div>
      <div className="mt-8">
        <div className=" flex flex-wrap gap-2 items-center">
          {visibleFilters.map((category, i) => (
            <div
              key={i}
              className="flex gap-2 items-center border border-gray-400 rounded-full p-2 text-sm "
            >
              {category}
              <RxCross2
                className="cursor-pointer"
                onClick={() =>
                  setStoredCategories((prev) =>
                    prev.filter((item) => item !== category)
                  )
                }
              />
            </div>
          ))}
        </div>
        {storedCategories.length > 4 && (
          <button
            className="text-blue-400 text-sm cursor-pointer active:scale-90 mt-3"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
      <div className="w-full mt-5">
        <p className="border-b border-gray-300"></p>
      </div>

      {/* Brand */}

      <div className="mt-5">
        <Accordion.Root type="single" collapsible>
          <Accordion.Item value="brand">
            <Accordion.Trigger asChild>
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold">Brand</h2>
                </div>
                <div>
                  <FaAngleDown className="cursor-pointer text-gray-400" />
                </div>
              </div>
            </Accordion.Trigger>
            <Accordion.Content className="w-full min-w-[250px]">
              <section className="mt-5">
                <div className="space-y-4">
                  {filterBarShoes?.map((item, index) => (
                    <div key={index} className="flex justify-between gap-5">
                      <div className="flex gap-5 items-center">
                        <input
                          type="checkbox"
                          checked={
                            tempSelectedBrands.includes(item) &&
                            storedCategories.includes(item)
                          }
                          className="accent-orange-400"
                          onChange={(e) => {
                            handleBrands(e, item);
                            addedFiltersShown(e, item, "checkbox");
                          }}
                        />
                        <p className="text-sm">{item}</p>
                      </div>
                    </div>
                  ))}
                  <div className="flex justify-end">
                    {/* <button
                      className="text-blue-300 active:scale-90 cursor-pointer"
                      onClick={() => {
                        setAppliedBrands([]);
                        setTempSelectedBrands([]);
                        setStoredCategories([]);
                      }}
                    >
                      Clear Filter
                    </button> */}
                    <button
                      className="text-blue-300 active:scale-90 cursor-pointer"
                      onClick={() => setAppliedBrands(tempSelectedBrands)}
                    >
                      Apply Filter
                    </button>
                  </div>
                </div>
              </section>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>

      <div className="w-full mt-5">
        <p className="border-b border-gray-300"></p>
      </div>

      {/* Price  */}
      <div className="mt-5">
        <Accordion.Root type="single" collapsible>
          <Accordion.Item value="categories">
            <Accordion.Trigger asChild>
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold">Price</h2>
                </div>
                <div>
                  <FaAngleDown className="cursor-pointer text-gray-400" />
                </div>
              </div>
            </Accordion.Trigger>
            <Accordion.Content className="w-full min-w-[250px]">
              <section>
                <div className="flex items-center gap-5 mt-5">
                  {/* <label htmlFor="minprice">Min</label> */}
                  <select
                    name="minprice"
                    id="minprice"
                    value={tempMinPrice}
                    className="w-24 p-1 outline-0 border border-black opacity-80 text-sm"
                    onChange={(e) => {
                      setTempMinPrice(e.target.value);
                    }}
                  >
                    <option value="">Min</option>
                    <option value="500">₹ 500</option>
                    <option value="1000">₹ 1000</option>
                    <option value="1500">₹ 1500</option>
                    <option value="2000">₹ 2000</option>
                    <option value="3000">₹ 3000</option>
                  </select>
                  <span className="text-sm text-blue-200">to</span>
                  <select
                    name="maxprice"
                    id="maxprice"
                    value={tempMaxPrice}
                    className="w-24 p-1 outline-0 border border-black opacity-80 text-sm"
                    onChange={(e) => {
                      setTempMaxPrice(e.target.value);
                    }}
                  >
                    <option value="500">₹ 500</option>
                    <option value="1000">₹ 1000</option>
                    <option value="1500">₹ 1500</option>
                    <option value="2000">₹ 2000</option>
                    <option value="3000">₹ 3000</option>
                    <option value="999999">₹ 3000 +</option>
                  </select>
                </div>
                <div className="flex justify-between mt-5">
                  <button
                    className="cursor-pointer text-blue-300 text-sm active:scale-90 outline-0"
                    onClick={() => {
                      setTempMinPrice("");
                      setTempMaxPrice("");
                      setMinimumPrice("");
                      setMaximumPrice("");
                    }}
                  >
                    Clear Filter
                  </button>
                  <button
                    type="button"
                    className="cursor-pointer text-blue-300 text-sm active:scale-90 outline-0"
                    onClick={applyPriceFilter}
                  >
                    Apply filter
                  </button>
                </div>
              </section>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>

      <div className="w-full mt-5">
        <p className="border-b border-gray-300"></p>
      </div>

      {/* Discount */}

      <div className="mt-5">
        <Accordion.Root type="single" collapsible>
          <Accordion.Item value="price ">
            <Accordion.Trigger asChild>
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold">Discount</h2>
                </div>
                <div>
                  <FaAngleDown className="cursor-pointer text-gray-400" />
                </div>
              </div>
            </Accordion.Trigger>
            <Accordion.Content className="w-full min-w-[250px]">
              <section>
                <div
                  className={`flex justify-end ${
                    showDiscountOnly ? "mt-3" : "mt-0"
                  }`}
                >
                  {showDiscountOnly ? (
                    <button
                      type="button"
                      className="cursor-pointer text-sm active:scale-90 text-blue-300"
                      onClick={() => setShowDiscountOnly(null)}
                    >
                      Clear All
                    </button>
                  ) : (
                    ""
                  )}
                </div>
                <div className="space-y-4 mt-5">
                  {discountsArray.map((discount, index) => {
                    const discountValue = parseInt(discount);

                    return (
                      <div key={index}>
                        <div className="flex items-center gap-5">
                          <input
                            type="radio"
                            name="discount"
                            className="accent-orange-400"
                            checked={showDiscountOnly === discountValue}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setShowDiscountOnly(discountValue);
                                addedFiltersShown(e, discount, "radio");
                              }
                            }}
                          />
                          <p className="text-sm">{discount}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </section>
  );
};

export default FilterBars;
