import React from "react";
import team from "../pic/team.png";
import instagram from "../pic/Instagram.png";
import facebook from "../pic/Facebook.png";
import twitter from "../pic/Twitter.png";

export const Footer = () => {
  return (
    <div className="bg-[#252B3B] w-[100vw] h-[280px] flex justify-evenly items-center">
      <div className="w-auto h-[200px] flex justify-evenly items-start flex-col gap-9 mb-[28px]">
        <img alt="" src={team} className="w-[93px] h-[65px]" />
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <img alt="" src={instagram} className="w-[22px] h-[20px]" />
            <h1 className="w-auto h-auto font-[400] text-[16px] text-white">
              Instagram
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <img alt="" src={facebook} className="w-[22px] h-[20px]" />
            <h1 className="w-auto h-auto font-[400] text-[16px] text-white">
              Facebook
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <img alt="" src={twitter} className="w-[22px] h-[18px]" />
            <h1 className="w-auto h-auto font-[400] text-[16px] text-white">
              Twitter
            </h1>
          </div>
        </div>
      </div>
      <div className="w-auto h-[200px] flex justify-evenly items-start flex-col gap-9 ">
        <h1 className="w-auto h-auto font-[400] text-[20px] text-white">
          Use Cases
        </h1>
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <h1 className="w-auto h-auto font-[400] text-[16px] text-white">
              UI Design
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <h1 className="w-auto h-auto font-[400] text-[16px] text-white">
              UX Design
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <h1 className="w-auto h-auto font-[400] text-[16px] text-white">
              Prototyping
            </h1>
          </div>
        </div>
      </div>
      <div className="w-auto h-[200px] flex justify-evenly items-start flex-col gap-9 ">
        <h1 className="w-auto h-auto font-[400] text-[20px] text-white">
          Explore
        </h1>
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <h1 className="w-auto h-auto font-[400] text-[16px] text-white">
              Figma
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <h1 className="w-auto h-auto font-[400] text-[16px] text-white">
              Customers
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <h1 className="w-auto h-auto font-[400] text-[16px] text-white">
              Why I Love Figma
            </h1>
          </div>
        </div>
      </div>
      <div className="w-auto h-[200px] flex justify-evenly items-start flex-col gap-9 ">
        <h1 className="w-auto h-auto font-[400] text-[20px] text-white">
          Resources
        </h1>
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <h1 className="w-auto h-auto font-[400] text-[16px] text-white">
              Community Resources Hub
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <h1 className="w-auto h-auto font-[400] text-[16px] text-white">
              Support
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <h1 className="w-auto h-auto font-[400] text-[16px] text-white">
              Education
            </h1>
          </div>
        </div>
      </div>
      <div className="w-auto h-[200px] flex justify-evenly items-start flex-col gap-9 mb-[35px]">
        <h1 className="w-auto h-auto font-[400] text-[20px] text-white">
          Subscribe to our newsletter
        </h1>
        <input
          className="w-[296px] h-[56px] placeholder:text-blue-400 text-blue-400 flex justify-center pl-[15px]"
          placeholder="Email"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="35"
          fill="#4DA0FD"
          class="bi bi-arrow-right"
          viewBox="0 0 16 16"
          className="relative bottom-[82px] left-[240px]"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
          />
        </svg>
      </div>
    </div>
  );
};
