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
      <div className="bg-[#FAFDF0]">
        <main className="max-w-[1200px] mx-auto h-screen  flex justify-center items-center">
          <div>
            <Outlet></Outlet>
          </div>
          <div>
            <img src={authImage} alt="" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Authlayout;
