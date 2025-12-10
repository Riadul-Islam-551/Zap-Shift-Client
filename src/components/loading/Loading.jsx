import React from "react";
import Logo from "../logo/Logo";

const Loading = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-white">
      {/* Logo Container */}
      <div className="flex items-end animate-pulse">
        <Logo></Logo>
        <p className="text-2xl font-extrabold text-black tracking-wide -translate-x-3">
          ZapShift
        </p>
      </div>

      {/* Loading Text */}
      <p className="mt-4 text-gray-500 text-sm tracking-wider">Loading...</p>

      {/* Progress Bar */}
      <div className="mt-4 w-40 h-1 bg-gray-200 rounded overflow-hidden">
        <div className="h-full w-1/2 bg-black animate-loading"></div>
      </div>
    </div>
  );
};

export default Loading;
