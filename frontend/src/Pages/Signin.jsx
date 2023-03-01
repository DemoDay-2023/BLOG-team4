import React, { useRef } from "react";
import Header from "../comp/Header";
import Footer from "../comp/Footer";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Signin() {
  const email = useRef();
  const password = useRef();

  const handleChange = () => {
    axios
      .post("http://localhost:8000/users/signin", {
        email: email.current.value,
        password: password.current.value,
      })
      .then(function (response) {
        console.log(response.data);
        window.location.replace("/");
        localStorage.setItem("token", response.data.token);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <Header />
      <div className=" ml-[43%] w-[15vw] h-[21vh] my-[24vh] drop-shadow-[0_0px_5px_rgba(0,0,0,0.25)] flex flex-col justify-center items-center">
        <input
          type="text"
          className="mt-[2vh] rounded-lg pl-[1vw] w-[15vw] h-[5vh] "
          placeholder="email"
          ref={email}
        />
        <input
          type="password"
          className="mt-[2vh] rounded-lg pl-[1vw] w-[15vw] h-[5vh] "
          placeholder="password"
          ref={password}
        />
        <div>
          <Link
            className="w-[5vw] h-[4vh] bg-slate-300 rounded-lg text-inherit flex justify-center items-center"
            to="/Signup"
          >
            signup
          </Link>
          <button
            className="w-[5vw] h-[4vh] bg-slate-300 rounded-lg text-inherit"
            onClick={handleChange}
          >
            submit
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
