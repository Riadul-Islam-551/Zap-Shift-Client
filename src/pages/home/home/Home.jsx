import React from "react";
import WorkingPolicy from "./components/workingPolicy/WorkingPolicy";
import Service from "./components/service/Service";
import Banner from "./components/banner/Banner";
import Brands from "./components/brands/Brands";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <WorkingPolicy></WorkingPolicy>
      <Service></Service>
      <Brands></Brands>
    </div>
  );
};

export default Home;
