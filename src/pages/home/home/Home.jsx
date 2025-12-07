import React from "react";
import WorkingPolicy from "./components/workingPolicy/WorkingPolicy";
import Service from "./components/service/Service";
import Banner from "./components/banner/Banner";
import Brands from "./components/brands/Brands";
import PolicyDetails from "./components/policyDetails/PolicyDetails";
import Merchant from "./components/merchant/Merchant";
import Reviews from "./components/reviews/Reviews";

const reviewData = fetch("/reviews.json").then(data => data.json())

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <WorkingPolicy></WorkingPolicy>
      <Service></Service>
      <Brands></Brands>
      <PolicyDetails></PolicyDetails>
      <Merchant></Merchant>
      <Reviews reviewData={reviewData}></Reviews>
    </div>
  );
};

export default Home;
