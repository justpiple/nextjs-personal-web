import { useState, CSSProperties } from "react";
import BarLoader from "react-spinners/BarLoader";

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-5 bg-gray-100 w-full fixed z-40 opacity-60">
      <div className="flex space-x-2">
        <BarLoader
          // color={color}
          // loading={loading}
          className="w-6 h-6 "
          width={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
