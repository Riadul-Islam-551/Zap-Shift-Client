import React from "react";
import service from "../../../../../assets/service.png";

const Service = () => {
  return (
    <div className="bg-secondary py-24 rounded-2xl my-20">
      <h1 className="text-2xl font-bold text-center text-white">
        Our Services
      </h1>
      <p className="text-accent-content text-sm mb-8 mx-auto text-center my-3 max-w-[600px]">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-4 mx-16">
        {/* service - 1  */}
        <div className="card bg-base-100  shadow-sm hover:bg-primary transition duration-300 hover:scale-105">
          <figure className="px-10 pt-10">
            <img src={service} alt="Service" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-secondary">
              Express & Standard Delivery
            </h2>
            <p className="text-accent">
              We deliver parcels within 24–72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka
              within 4–6 hours from pick-up to drop-off.
            </p>
          </div>
        </div>
        {/* service - 2  */}
        <div className="card bg-base-100  shadow-sm hover:bg-primary transition duration-300 hover:scale-105">
          <figure className="px-10 pt-10">
            <img src={service} alt="Service" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-secondary">Nationwide Delivery</h2>
            <p className="text-accent">
              We deliver parcels within 24–72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka
              within 4–6 hours from pick-up to drop-off.
            </p>
          </div>
        </div>
        {/* service - 3  */}
        <div className="card bg-base-100  shadow-sm hover:bg-primary transition duration-300 hover:scale-105">
          <figure className="px-10 pt-10">
            <img src={service} alt="Service" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-secondary">Fulfillment Solution</h2>
            <p className="text-accent">
              We deliver parcels within 24–72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka
              within 4–6 hours from pick-up to drop-off.
            </p>
          </div>
        </div>
        {/* service - 4  */}
        <div className="card bg-base-100  shadow-sm hover:bg-primary transition duration-300 hover:scale-105">
          <figure className="px-10 pt-10">
            <img src={service} alt="Service" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-secondary">Cash on Home Delivery</h2>
            <p className="text-accent">
              We deliver parcels within 24–72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka
              within 4–6 hours from pick-up to drop-off.
            </p>
          </div>
        </div>
        {/* service - 5 */}
        <div className="card bg-base-100  shadow-sm hover:bg-primary transition duration-300 hover:scale-105">
          <figure className="px-10 pt-10">
            <img src={service} alt="Service" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-secondary">
              Corporate Service / Contract In Logistics
            </h2>
            <p className="text-accent">
              We deliver parcels within 24–72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka
              within 4–6 hours from pick-up to drop-off.
            </p>
          </div>
        </div>
        {/* service - 6  */}
        <div className="card bg-base-100  shadow-sm hover:bg-primary transition duration-300 hover:scale-105">
          <figure className="px-10 pt-10">
            <img src={service} alt="Service" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-secondary">Parcel Return</h2>
            <p className="text-accent">
              We deliver parcels within 24–72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka
              within 4–6 hours from pick-up to drop-off.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
