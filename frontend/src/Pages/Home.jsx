import React from "react";
import pic1 from "../landingpage detials/pic1.jpg";
import Huudas1 from "../comp/Huudas1";
import Huudas2 from "../comp/Huudas2";
import Huudas3 from "../comp/Huudas3";
import Header from "../comp/Header"
import Footer from "../comp/Footer"
import Review from "../comp/Review"

export default function Home() {
  return (
    <div className="bg-grey-300">
      <div
        className=" h-screen bg-repeat"
        style={{ backgroundImage: `url(${pic1})` }}
      >
        <Header/>
        <div className="w-[450px] py-[300px] ml-[150px]  ">
          <div className="font-Sans font-bold text-[40px] text-white">
            Instant collaborations for remote teams
          </div>
          <div className="font-base text-white font-Mulish text-[20px] mt-[3vh]">
            All in one for your remote team chats, collaboration and track
            projects
          </div>
          <div className=" flex justify-start mt-[5vh]">
            <input
              className="h-[4.5vh] w-[10vw] rounded-md py-2 pl-9 font-Mulish"
              type="text"
              name="search"
              placeholder="Email"
            />
            <button className="ml-[1vw] px-3 py-2 bg-skybutton text-sm border-none text-white rounded-md font-Mulish">
              Get early access
            </button>
          </div>{" "}
        </div>
      </div>

      <div className="flex flex-wrap">
        <Huudas1 />
        <Huudas2 />
        <Huudas3 />
      </div>

      <div className="font-Mulish font-bold text-[48px] ml-[35%] mt-[30vh] mb-[2vh]">
        What people say about us
      </div>
      <div  className=" mb-[20vh] flex flex-wrap">
      <Review/>
      <Review/>
      <Review/>
      <Review/>
      <Review/>
      </div>
      <Footer/>
    </div>
  );
}
