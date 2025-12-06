import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import bannerImg1 from "../../../../../assets/banner/banner1.png";
import bannerImg2 from "../../../../../assets/banner/banner2.png";
import bannerImg3 from "../../../../../assets/banner/banner3.png";
import { FaCircleArrowUp } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="mt-10 mb-16 ">
      <Carousel autoPlay={true} infiniteLoop={true} className="md:mx-4">
        <div className="relative">
          <img src={bannerImg1} />
          <div className="absolute z-10 bottom-2 md:bottom-6 lg:bottom-12 left-6 md:left-11 lg:left-16">
            <button className="btn bg-secondary hover:bg-secondary-content text-white text-xs md:text-sm lg:text-lg rounded-full shadow-none border-none p-6 mr-4 ">
              Track Your Parcel
              <span className="rotate-45 ">
                <FaCircleArrowUp className="w-3 h-3 " />
              </span>
            </button>
            <button className="btn rounded-xl shadow-none border-accent-content text-xs md:text-sm lg:text-lg p-6">
              Be A Rider
            </button>
          </div>
        </div>
        <div className="relative">
          <img src={bannerImg2} />
          <div className="absolute z-10 bottom-2 md:bottom-6 lg:bottom-12 left-6 md:left-11 lg:left-16">
            <button className="btn bg-secondary hover:bg-secondary-content text-white text-xs md:text-sm lg:text-lg rounded-full shadow-none border-none p-6 mr-4">
              Track Your Parcel
              <span className="rotate-45 ">
                <FaCircleArrowUp className="w-5 h-5 " />
              </span>
            </button>
            <button className="btn rounded-xl shadow-none border-accent-content text-xs md:text-sm lg:text-lg p-6">
              Be A Rider
            </button>
          </div>
        </div>
        <div className="relative">
          <img src={bannerImg3} />
          <div className="absolute z-10 bottom-2 md:bottom-6 lg:bottom-12 left-6 md:left-11 lg:left-16">
            <button className="btn bg-secondary hover:bg-secondary-content text-white text-xs md:text-sm lg:text-lg rounded-full shadow-none border-none p-6 mr-4 ">
              Track Your Parcel
              <span className="rotate-45 ">
                <FaCircleArrowUp className="w-5 h-5 " />
              </span>
            </button>
            <button className="btn rounded-xl shadow-none border-accent-content text-xs md:text-sm lg:text-lg p-6">
              Be A Rider
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
