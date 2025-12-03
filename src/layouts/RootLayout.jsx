import React from "react";
import { Outlet } from "react-router";
import NavBar from "../shared/nav/NavBar";
import Footer from "../shared/footer/Footer";

const RootLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="max-w-[1200px] mx-auto">
        <Outlet></Outlet>
      </div>
      
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
