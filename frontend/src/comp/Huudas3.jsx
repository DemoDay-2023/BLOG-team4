import React from "react";
import Text from '../landingpage detials/text'
import pic3 from "../landingpage detials/pic4.jpg";

export default function Huudas3() {
  return (
    <div className="w-screen">
        <div className="mt-[50vh] ml-[12vw]">
          <Text />
        </div>
        <img src={pic3} alt="" className=" ml-[60vw] mt-[-50vh]" />
    </div>
  );
}
