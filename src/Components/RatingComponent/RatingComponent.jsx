import React from "react";

const RatingComponent = ({ ratingValue }) => {
  console.log(ratingValue);
  return (
    <div>
      {ratingValue >= 5 ? (
        <div>
          <i className="fa fa-star text-blackColor"></i>
          <i className="fa fa-star text-blackColor"></i>
          <i className="fa fa-star text-blackColor"></i>
          <i className="fa fa-star text-blackColor"></i>
          <i className="fa fa-star text-blackColor"></i>
        </div>
      ) : ratingValue >= 4 ? (
        <div>
          <i className="fa fa-star text-blackColor"></i>
          <i className="fa fa-star text-blackColor"></i>
          <i className="fa fa-star text-blackColor"></i>
          <i className="fa fa-star text-blackColor"></i>
          <i className="fa fa-star text-darkGrey"></i>
        </div>
      ) : ratingValue >= 3 ? (
        <div>
          <i className="fa fa-star text-blackColor"></i>
          <i className="fa fa-star text-blackColor"></i>
          <i className="fa fa-star text-blackColor"></i>
          <i className="fa fa-star text-darkGrey"></i>
          <i className="fa fa-star text-darkGrey"></i>
        </div>
      ) : ratingValue >= 2 ? (
        <div>
          <i className="fa fa-star text-blackColor"></i>
          <i className="fa fa-star text-blackColor"></i>
          <i className="fa fa-star text-darkGrey"></i>
          <i className="fa fa-star text-darkGrey"></i>
          <i className="fa fa-star text-darkGrey"></i>
        </div>
      ) : (
        <div>
          <i className="fa fa-star text-blackColor"></i>
          <i className="fa fa-star text-darkGrey"></i>
          <i className="fa fa-star text-darkGrey"></i>
          <i className="fa fa-star text-darkGrey"></i>
          <i className="fa fa-star text-darkGrey"></i>
        </div>
      )}
    </div>
  );
};

export default RatingComponent;
