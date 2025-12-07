import React from "react";

const Question = () => {
  return (
    <div className=" mt-9 mb-16">
      <h1 className="text-2xl text-secondary text-center font-bold ">
        Frequently Asked Question (FAQ)
      </h1>
      <p className="text-accent max-w-[800px] text-sm mx-auto text-center my-6">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        Achieve proper alignment, reduce pain, and strengthen your body with
        ease!
      </p>
      <div className="max-w-[900px] px-9 mx-auto ">
        {/* question - 1  */}
        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-base-100 border-base-300 rounded-2xl mb-7"
        >
          <div className="collapse-title font-semibold text-secondary">
            How does this posture corrector work?
          </div>
          <div className="collapse-content text-sm text-accent">
            A posture corrector works by providing support and gentle alignment
            to your shoulders, back, and spine, encouraging you to maintain
            proper posture throughout the day. Here’s how it typically
            functions: A posture corrector works by providing support and gentle
            alignment to your shoulders.
          </div>
        </div>
        {/* question - 2  */}
        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-base-100 border-base-300 rounded-2xl mb-7"
        >
          <div className="collapse-title font-semibold text-secondary">
            Is it suitable for all ages and body types?
          </div>
          <div className="collapse-content text-sm text-accent">
            A posture corrector works by providing support and gentle alignment
            to your shoulders, back, and spine, encouraging you to maintain
            proper posture throughout the day. Here’s how it typically
            functions: A posture corrector works by providing support and gentle
            alignment to your shoulders.
          </div>
        </div>
        {/* question - 3  */}
        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-base-100 border-base-300 rounded-2xl mb-7"
        >
          <div className="collapse-title font-semibold text-secondary">
            Does it really help with back pain and posture improvement?
          </div>
          <div className="collapse-content text-sm text-accent">
            A posture corrector works by providing support and gentle alignment
            to your shoulders, back, and spine, encouraging you to maintain
            proper posture throughout the day. Here’s how it typically
            functions: A posture corrector works by providing support and gentle
            alignment to your shoulders.
          </div>
        </div>
        {/* question - 4 */}
        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-base-100 border-base-300 rounded-2xl mb-7"
        >
          <div className="collapse-title font-semibold text-secondary">
            Does it have smart features like vibration alerts?
          </div>
          <div className="collapse-content text-sm text-accent">
            A posture corrector works by providing support and gentle alignment
            to your shoulders, back, and spine, encouraging you to maintain
            proper posture throughout the day. Here’s how it typically
            functions: A posture corrector works by providing support and gentle
            alignment to your shoulders.
          </div>
        </div>
        {/* question - 5  */}
        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-base-100 border-base-300 rounded-2xl mb-7"
        >
          <div className="collapse-title font-semibold text-secondary">
            How will I be notified when the product is back in stock?
          </div>
          <div className="collapse-content text-sm text-accent">
            A posture corrector works by providing support and gentle alignment
            to your shoulders, back, and spine, encouraging you to maintain
            proper posture throughout the day. Here’s how it typically
            functions: A posture corrector works by providing support and gentle
            alignment to your shoulders.
          </div>
        </div>
      </div>
      <div className=" text-center">
        <button className="btn text-secondary bg-primary rounded-2xl">
          See More FAQ’s
        </button>
      </div>
    </div>
  );
};

export default Question;
