import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex items-end">
        <img src={logo} alt="ZapShift" />
        <p className="text-2xl font-extrabold text-black tracking-wide  -translate-x-3">
          ZapShift
        </p>
      </div>
    </Link>
  );
};

export default Logo;
