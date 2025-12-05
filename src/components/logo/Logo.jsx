import React from "react";
import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="flex items-end">
      <img src={logo} alt="ZapShift"/>
      <p className="text-2xl font-extrabold text-black tracking-wide  -translate-x-3">
        ZapShift
      </p>
    </div>
  );
};

export default Logo;
