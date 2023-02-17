import React from "react";
import Header from "../comp/Header";
// import Footer from '../comp/Footer'

export const Blogpost = () => {
  return (
    <div className="w-screen h-screen bg-[#f5f5f5] flex flex-col">
      <Header />
      <div className="mr-[200px] ml-[200px] mt-[46px] flex justify-start flex-col">
        <div className="font-Mulish font-extrabold text-5xl leading-[60px] flex align-center">
        Blog posts
        </div>
        <div className="font-Mulish font-semibold text-[18px] leading-[29px] flex align-center text-[#6D7D8B]">
        Our latest updates and blogs about managing your team
        </div>
      </div>
      <div>
        
      </div>
      <div className="mr-[200px] ml-[200px] flex justify-center">
        <button className="h-[44px] w-[165px] bg-slate-200 rounded-md">Next</button>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
