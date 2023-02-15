import React from "react";
import pic1 from "../landingpage detials/pic1.jpg"
import Text from "../landingpage detials/text"
import pic2 from "../landingpage detials/pic2.jpg"
import pic3 from "../landingpage detials/pic3.jpg"
import pic4 from "../landingpage detials/pic4.jpg"
// import Header from "../comp/Header"

export default function Home() {
 return (
    <div className="bg-grey-300">
  <div className="h-screen " style={{backgroundImage:`url(${pic1})`}}>
{/* <Header/> */}
<div className="w-[450px] py-[300px] ml-[150px]  ">
 <div className="font-sans font-bold text-4xl text-white">Instant collaborations for remote teams</div>
 <div className="font-base text-white">All in one for your remote team chats, 
 collaboration and track projects</div>
 <form>
    <span>
        <div className=" flex justify-start">
    <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-2/5 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" name="search" placeholder="Email"/>
    <button className=" block px-3 py-2 bg-sky-500 rounded-md text-sm shadow-sm
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 border-2 border-sky-500 text-white " >Get early access</button>
      </div> </span>
 </form>
 </div>
 </div>
 <div className="flex justify-evenly">
 <div className="mt-[25vh]">
<Text/>
</div>
<img src={pic2} alt="" />
</div>
<div className="flex justify-evenly">
<img src={pic3} alt="" />
<div className="mt-[25vh]">
<Text/>
</div>
</div>
<div className="flex justify-evenly">
<div className="mt-[25vh]">
<Text/>
</div>
<img src={pic4} alt="" />
</div>
<div>
    <div className="font-sans font-bold text-4xl flex justify-center mt-10">What people say about us</div>
</div>
</div>
 )
}