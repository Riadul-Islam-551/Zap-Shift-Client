import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiCoinInsert } from "react-icons/ci";
import { CiVault } from "react-icons/ci";
import { CiBank } from "react-icons/ci";

const WorkingPolicy = () => {
  return (
    <div className="max-w-[1200px] px-2 my-5">
      <h1 className="font-bold text-2xl text-center my-5">Working Policy</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {/* policy - 1  */}
        <div className="card  bg-base-100 card-xs shadow-sm">
          <div className="card-body">
            <div className="">
              <CiDeliveryTruck className=" w-[50px] h-[50px]" />
            </div>
            <h2 className="card-title text-secondary">Booking Pick & Drop</h2>
            <p className="text-accent">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
        </div>
        {/* policy - 2  */}
        <div className="card  bg-base-100 card-xs shadow-sm">
          <div className="card-body">
            <div className="">
              <CiCoinInsert className=" w-[50px] h-[50px]" />
            </div>
            <h2 className="card-title  text-secondary">Cash On Delivery</h2>
            <p className="text-accent">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
        </div>
        {/* policy - 3  */}
        <div className="card bg-base-100 card-xs shadow-sm">
          <div className="card-body">
            <div className="">
              <CiVault className=" w-[50px] h-[50px]" />
            </div>
            <h2 className="card-title  text-secondary">Delivery Hub</h2>
            <p className="text-accent">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
        </div>
        {/* policy - 4  */}
        <div className="card bg-base-100 card-xs shadow-sm">
          <div className="card-body">
            <div className="">
              <CiBank className=" w-[50px] h-[50px]" />
            </div>
            <h2 className="card-title  text-secondary">Booking SME & Corporate</h2>
            <p className="text-accent">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingPolicy;
