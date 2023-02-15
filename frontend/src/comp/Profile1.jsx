import React from "react";
import rosesocute from "../pic/rosesocute.jpeg";

export const Profile1 = () => {
  return (
    <div className="flex flex-row gap-5 w-[335px] h-auto justify-start items-center">
      <img alt="" src={rosesocute} className="w-[56px] h-[56px] rounded-full" />
      <h1 className=" font-[600] text-[#6D7D8B] text-[12px] flex items-center">
        Munkhlun Flew4k
      </h1>
      <div className="w-[3px] h-[21px] bg-[#6D7D8B] rounded-xl"></div>
      <h1 className=" font-[600] text-[#6D7D8B] text-[12px] flex items-center">
        2nd January,2022
      </h1>
    </div>
  );
};
