import React, { use } from "react";
import customer from "../../../../../assets/customer-top.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import ReviewCard from "./ReviewCard";

const Reviews = ({ reviewData }) => {
  const reviews = use(reviewData);
  console.log(reviews);
  return (
    <div className="mb-16">
      <div className="max-w-[800px] px-5 mx-auto text-center mb-12">
        <img src={customer} alt="" className=" mx-auto" />
        <h1 className="text-2xl my-5 font-bold text-secondary">
          What our customers are sayings
        </h1>
        <p className="text-sm text-accent">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        autoplay={true}
        loop={Infinity}
        coverflowEffect={{
          rotate: 70,
          stretch: 30,
          depth: 100,
          modifier: 5,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {reviews.map((reviewCard) => (
          <SwiperSlide key={(reviewCard.id)}>
            <ReviewCard reviewCard={reviewCard}></ReviewCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
