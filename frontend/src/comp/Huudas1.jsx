import React from "react";
import Text from '../landingpage detials/text'
import pic2 from "../landingpage detials/pic2.svg";

export default function Huudas1() {
  return (
    <div className="w-screen">
        <div className="mt-[30vh] ml-[12vw]">
          <Text />
        </div>
        <img src={pic2} alt="" className=" w-[50%] ml-[50vw] mt-[-50vh]" />
    </div>
  );
}
