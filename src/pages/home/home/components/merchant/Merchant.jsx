import React from "react";
import merchantLocation from "../../../../../assets/location-merchant.png";

const Merchant = () => {
  return (
    <div className="max-w-5xl mx-auto md:px-9 mb-16">
      <div className="hero bg-secondary rounded-2xl p-9">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={merchantLocation} className="rounded-lg w-[300px]" />
          <div>
            <h1 className="text-2xl font-bold text-white">
              Merchant and Customer Satisfaction is Our First Priority
            </h1>
            <p className="py-6 text-accent-content text-sm">
              We offer the lowest delivery charge with the highest value along
              with 100% safety of your product. Pathao courier delivers your
              parcels in every corner of Bangladesh right on time.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <button className="btn btn-primary text-black rounded-full shadow-none ">
                Become a Merchant
              </button>
              <button className="btn text-primary hover:text-black border-primary bg-transparent hover:bg-primary rounded-full shadow-none transition duration-300">
                Earn with ZapShift Courier
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Merchant;
