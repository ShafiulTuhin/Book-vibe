import React from "react";
import BannerImage from "../../assets/hero_img.jpg";
const Banner = () => {
  return (
    <div className="hero-content w-full lg:px-20 bg-base-200 flex-col lg:flex-row-reverse justify-between">
      <img
        src={BannerImage}
        className="max-w-sm rounded-lg shadow-2xl lg:px-0 px-4"
      />
      <div>
        <p className="py-6 font-bold lg:text-5xl text-3xl leading-15">
          Books to freshen up <br /> your bookshelf
        </p>
        <button className="btn btn-success text-white">View This List</button>
      </div>
    </div>
  );
};

export default Banner;
