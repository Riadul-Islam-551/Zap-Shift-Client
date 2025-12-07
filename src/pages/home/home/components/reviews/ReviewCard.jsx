import React from "react";
import reviewQuote from "../../../../../assets/reviewQuote.png";

const ReviewCard = ({ reviewCard }) => {
  console.log(reviewCard);
  const { userName, review, user_photoURL } = reviewCard;
  return (
    <div className="card card-border bg-white w-96 shadow-none">
      <div className="card-body ">
        <div className="border-b-2 pb-5 border-dashed border-accent-content">
          <img src={reviewQuote} alt="" className="card-title w-[30px]" />
          <p>{review}</p>
        </div>

        <div className="pt-5 flex items-center gap-5 ">
          <img src={user_photoURL} alt="" className="w-[50px] rounded-full" />
          <p className="font-bold text-secondary text-lg">{userName}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
