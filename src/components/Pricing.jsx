import React from "react";

const Pricing = ({ discountPercentage, price }) => {
  return (
    <div>
      {discountPercentage ? (
        <div className="flex flex-col">
          <span className="text-3xl font-bold text-gray-900">
            ${(price * ((100 - discountPercentage) / 100)).toFixed(2)}
          </span>
          <div>
            <span className=" text-gray-400 line-through">
              ${price.toFixed(2)}
            </span>
            <span className="bg-red-100 text-black text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
              {discountPercentage}%
            </span>
          </div>
        </div>
      ) : (
        <span className="text-3xl font-bold text-gray-900">
          ${price.toFixed(2)}
        </span>
      )}
    </div>
  );
};

export default Pricing;
