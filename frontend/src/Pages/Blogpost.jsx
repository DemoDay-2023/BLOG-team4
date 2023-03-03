import React from "react";
import  Header from "../comp/Header";
import  Footer from "../comp/Footer";
import SmallBlog from "../comp/SmallBlog"
import { Link } from "react-router-dom";

export const Blogpost = () => {
  return (
    <>
    <Link to="/Blog" >
      <Header />
      <h1 className="font-Mulish text-[5vh]  ml-[10vw] mt-[7vh]" >Blog posts</h1>
      <p className="text-blackgr font-Mulish ml-[10vw] mt-[2vh]">Our latest updates and blogs about managing your team</p>
      <div className="flex flex-wrap w-[80vw] mt-[10vh] ml-[10vw]">
      <SmallBlog/>
      <SmallBlog/>
      <SmallBlog/>
      <SmallBlog/>
      <SmallBlog/>
      <SmallBlog/>
      <SmallBlog/>
      <SmallBlog/>
      <SmallBlog/>
      </div>
      <button className="w-[5vw] h-[3vh] bg-grey mb-[8vh] rounded ml-[45vw]">next</button>
      <Footer/>
    </Link>
    </>
  );
};
export default Blogpost;
