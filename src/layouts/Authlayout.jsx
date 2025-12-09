import React from "react";
import Logo from "../components/logo/Logo";
import { Outlet } from "react-router";
import authImage from "../assets/authImage.png";

const Authlayout = () => {
  return (
    <div>
      {/* navbar  */}
      <div className="">
        <div className="navbar bg-base-100 max-w-[1200px] mx-auto">
          <div className="navbar-start">
            <Logo></Logo>
          </div>
          <div className="navbar-end">
            <a className="btn">Button</a>
          </div>
        </div>
      </div>
      {/* main section  */}
      <div className="bg-[#FAFDF0] ">
        <main className="max-w-[1200px] px-6  mx-auto h-screen flex flex-col-reverse md:flex-row justify-center items-center">
          <div className="flex-1">
            <Outlet></Outlet>
          </div>
          <div className="flex-1 pt-12 md:pt-0">
            <img src={authImage} alt="" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Authlayout;
