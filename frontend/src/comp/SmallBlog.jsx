import React from "react";
import pic1 from "../pic/Rectangle.png";
import { Profile1 } from "./Profile1";

export const SmallBlog = () => {
  return (
    <div className="w-[380px] h-[425px] shadow-xl flex flex-col items-center rounded-[40px]">
      <img src={pic1} alt="" className="rounded-t-[35px] top-0" />
      <div className="w-[340px] h-[300px] flex flex-col items-center gap-[26px]">
        <h1 className="w-[335px] h-auto font-[500] text-[24px] flex items-center mt-4">
          Data-Driven Design is Killing Our Instincts
        </h1>
        <h1 className="w-[335px] h-auto font-[600] text-[14px] flex items-center">
          Artists and designers are working to address a major problem for
          marginalized communities in the data economy: ‘If the data does not
          exist…
        </h1>
        <Profile1 />
      </div>
    </div>
  );
};

export default SmallBlog;
