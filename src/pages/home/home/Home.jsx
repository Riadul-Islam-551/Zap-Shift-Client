import React from "react";
import WorkingPolicy from "./components/workingPolicy/WorkingPolicy";
import Service from "./components/service/Service";
import Banner from "./components/banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <WorkingPolicy></WorkingPolicy>
      <Service></Service>
    </div>
  );
};

export default Home;
