import React from "react";
import Header from "../comp/Header";
import { Review } from "../comp/Review";
import { SmallBlog } from "../comp/SmallBlog";

export const Home = () => {
  return (
    <div className="flex gap-5">
      <p>Home</p>
      <Header />
      <Review />
      <SmallBlog />
    </div>
  );
};

export default Home;
