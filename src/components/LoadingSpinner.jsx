import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="w-full mt-40 grid place-content-center">
      <div
        style={{ borderTopColor: "transparent" }}
        className="w-32 h-32 border-4 border-blue-500 border-solid rounded-full animate-spin"
      />
    </div>
  );
};

export default LoadingSpinner;
