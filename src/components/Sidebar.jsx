import React, { useState } from "react";
import RatingFilter from "./RatingFilter";

const Sidebar = () => {
  const [ratedValue, setRatedValue] = useState(0);
  const [ascending, setAscending] = useState(true);
  const [outOfStock, setOutOfStock] = useState(false);
  const [megaDiscount, setMegaDiscount] = useState(false);

  const clearFilter = () => {
    setAscending(true);
    setRatedValue(0);
    setOutOfStock(false);
    setMegaDiscount(false);
  };

  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-10 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pt-24 overflow-y-auto bg-gray-50">
        <span className="self-center text-xl font-semibold whitespace-nowrap">
          Flowbite
        </span>
        <ul className="mt-8 space-y-2 font-medium">
          <li>
            <div className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
              <input
                id="default-radio-1"
                type="radio"
                defaultValue=""
                checked={ascending}
                onChange={() => {
                  setAscending(true);
                }}
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
              />
              <label
                htmlFor="default-radio-1"
                className="ml-2 font-medium text-gray-900"
              >
                Ascending
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
              <input
                id="default-radio-2"
                type="radio"
                defaultValue=""
                checked={!ascending}
                onChange={() => {
                  setAscending(false);
                }}
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
              />
              <label
                htmlFor="default-radio-2"
                className="ml-2 font-medium text-gray-900"
              >
                Descending
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
              <input
                id="megaDiscount"
                type="checkbox"
                defaultValue=""
                checked={megaDiscount}
                onChange={() => {
                  setMegaDiscount(!megaDiscount);
                }}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <label
                htmlFor="megaDiscount"
                className="ml-2 font-medium text-gray-900"
              >
                Mega Discount Only &nbsp;
                <span style={{ fontSize: "10px" }}>(15%+)</span>
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
              <input
                id="outOfStock"
                type="checkbox"
                defaultValue=""
                checked={outOfStock}
                onChange={() => {
                  setOutOfStock(!outOfStock);
                }}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <label
                htmlFor="outOfStock"
                className="ml-2 font-medium text-gray-900"
              >
                Include Out of Stock
              </label>
            </div>
          </li>
          <li className="flex justify-around items-center">
            <label htmlFor="rating" className="ml-2 text-gray-900">
              Rating:{" "}
            </label>
            <RatingFilter
              name="rating"
              ratedValue={ratedValue}
              setRatedValue={setRatedValue}
            />
          </li>
          <li>
            <button
              type="button"
              onClick={clearFilter}
              className="w-full mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
            >
              Clear Filter
              <i className="bi bi-x-square px-2"></i>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
