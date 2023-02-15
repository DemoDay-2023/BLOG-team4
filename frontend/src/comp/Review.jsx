import React from "react";
import star from "../pic/star.png";
import rosesocute from "../pic/rosesocute.jpeg";

export const Review = () => {
  return (
    <div className="bg-white w-[366px] h-[374px] gap-5 rounded-[30px] shadow-xl flex flex-col justify-center items-center">
      <div className="flex flex-row gap-2 w-[291px] h-auto justify-start">
        <img src={star} alt="" className="w-[17px] h-[16px]" />
        <img src={star} alt="" className="w-[17px] h-[16px]" />
        <img src={star} alt="" className="w-[17px] h-[16px]" />
        <img src={star} alt="" className="w-[17px] h-[16px]" />
        <img src={star} alt="" className="w-[17px] h-[16px]" />
      </div>
      <h1 className="w-[291px] h-[154px] font-[600] text-[18px] flex items-center">
        Give everyone you work with—inside and outside your emoji, keep
        conversations focused in channels, and simplify all your communication
        into one place.
      </h1>
      <div className="flex flex-row gap-5 w-[291px] h-auto justify-start">
        <img
          alt=""
          src={rosesocute}
          className="w-[56px] h-[56px] rounded-full"
        />
        <h1 className=" font-[600] text-[18px] flex items-center">
          Munkhlun Flew4k
        </h1>
      </div>
    </div>
  );
};
