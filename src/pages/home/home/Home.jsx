import React from "react";
import WorkingPolicy from "./components/workingPolicy/WorkingPolicy";
import Service from "./components/service/Service";
import Banner from "./components/banner/Banner";
import Brands from "./components/brands/Brands";
import PolicyDetails from "./components/policyDetails/PolicyDetails";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <WorkingPolicy></WorkingPolicy>
      <Service></Service>
      <Brands></Brands>
      <PolicyDetails></PolicyDetails>
    </div>
  );
};

export default Home;
