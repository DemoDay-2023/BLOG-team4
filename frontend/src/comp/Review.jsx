import React from "react";
import star from "../pic/star.png";

export const Review = () => {
  return (
    <div className="bg-white w-[366px] h-[374px] rounded-lg shadow-2xl flex flex-row justify-center items-center">
      <div className="flex flex-row gap-2">
        <img src={star} alt="" className="w-[17px] h-[16px]" />
        <img src={star} alt="" className="w-[17px] h-[16px]" />
        <img src={star} alt="" className="w-[17px] h-[16px]" />
        <img src={star} alt="" className="w-[17px] h-[16px]" />
        <img src={star} alt="" className="w-[17px] h-[16px]" />
      </div>
    </div>
  );
};
