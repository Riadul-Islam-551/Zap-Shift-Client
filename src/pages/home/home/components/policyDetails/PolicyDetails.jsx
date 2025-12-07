import React from "react";
import liveTracking from "../../../../../assets/live-tracking.png";
import safeService from "../../../../../assets/safe-delivery.png";
import deliveryMan from "../../../../../assets/tiny-deliveryman.png";

const PolicyDetails = () => {
  return (
    <div className="max-w-5xl mx-auto px-9 grid grid-cols-1 gap-5 mb-16 ">
      <div className="hero bg-white rounded-2xl">
        <div className="hero-content flex-col lg:flex-row">
          <img src={liveTracking} className="max-w-[150px] rounded-xl mr-5" />
          <div className="px-5 border-none md:border-l border-accent lg:border-dashed">
            <h1 className="text-xl text-secondary font-bold">
              Live Parcel Tracking
            </h1>
            <p className="py-3 text-accent text-sm ">
              Stay updated in real-time with our live parcel tracking feature.
              From pick-up to delivery, monitor your shipment's journey and get
              instant status updates for complete peace of mind.
            </p>
          </div>
        </div>
      </div>
      <div className="hero bg-white rounded-2xl">
        <div className="hero-content flex-col lg:flex-row">
          <img src={deliveryMan} className="max-w-[150px] rounded-xl mr-5" />
          <div className="px-5 border-none md:border-l border-accent lg:border-dashed">
            <h1 className="text-xl text-secondary font-bold">
              100% Safe Delivery
            </h1>
            <p className="py-3 text-accent text-sm">
              We ensure your parcels are handled with the utmost care and
              delivered securely to their destination. Our reliable process
              guarantees safe and damage-free delivery every time.
            </p>
          </div>
        </div>
      </div>
      <div className="hero bg-white rounded-2xl">
        <div className="hero-content flex-col lg:flex-row">
          <img src={safeService} className="max-w-[150px] rounded-xl mr-5" />
          <div className="px-5 border-none md:border-l border-accent lg:border-dashed">
            <h1 className="text-xl text-secondary font-bold">
              24/7 Call Center Support
            </h1>
            <p className="py-3  text-accent text-sm">
              Our dedicated support team is available around the clock to assist
              you with any questions, updates, or delivery concerns—anytime you
              need us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyDetails;
