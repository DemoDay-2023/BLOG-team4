import React from "react";
import Text from '../landingpage detials/text'
import pic3 from "../landingpage detials/pic3.jpg";

export default function Huudas2() {
  return (
    <div className="w-screen">
        <img src={pic3} alt="" className=" w-[30%] ml-[1vw] mt-[10vh]" />
        <div className="mt-[-50vh] ml-[62vw]">
          <Text />
        </div>
    </div>
  );
}
