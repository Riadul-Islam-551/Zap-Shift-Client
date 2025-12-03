import React from "react";
import { Outlet } from "react-router";
import NavBar from "../shared/nav/NavBar";
import Footer from "../shared/footer/Footer";

const RootLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
