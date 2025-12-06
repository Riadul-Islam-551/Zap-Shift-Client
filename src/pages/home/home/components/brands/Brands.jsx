import React from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import amazon from "../../../../../assets/brands/amazon.png";
import amazonVector from "../../../../../assets/brands/amazon_vector.png";
import casio from "../../../../../assets/brands/casio.png";
import moonstar from "../../../../../assets/brands/moonstar.png";
import randstad from "../../../../../assets/brands/randstad.png";
import star from "../../../../../assets/brands/star.png";
import starPeople from "../../../../../assets/brands/start_people.png";

const brandsLogo = [
  amazon,
  amazonVector,
  casio,
  moonstar,
  randstad,
  star,
  starPeople,
];

const Brands = () => {
  return (
    <div className="mb-12">
      <h2 className="taxt-sm md:text-lg text-center text-secondary font-extrabold mb-5 lg:mb-7">
        We've helped thousands of sales teams
      </h2>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        className="mySwiper"
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {brandsLogo.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
