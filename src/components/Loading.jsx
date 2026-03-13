import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">

      <div className="relative w-24 h-24">

        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[var(--primary-color)] border-r-[white] animate-spin"></div>

        {/* Inner ring */}
        <div className="absolute inset-3 rounded-full border-4 border-transparent border-t-white border-r-[var(--primary-color)] animate-[spin_2.5s_linear_infinite]"></div>

      </div>

    </div>
  );
};

export default Loading;