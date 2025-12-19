import React from "react";
import excavator from "../assets/Excavator.gif"; // your gif

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
      <img
        src={excavator}
        alt="Loading..."
        className="w-[120px] h-auto"
      />
    </div>
  );
};

export default PageLoader;
