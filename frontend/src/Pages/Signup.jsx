import React, { useRef } from "react";
import Header from "../comp/Header";
import Footer from "../comp/Footer";
import axios from "axios";

export default function Signup() {
  const email = useRef();
  const password1 = useRef();
  const password2 = useRef();

  const handleChange = () => {
    if (
      email.current.value &&
      password1.current.value &&
      password2.current.value !== "" &&
      password1.current.value === password2.current.value
    ) {
      axios
        .post("http://localhost:8000/users/signup", {
          email: email.current.value,
          password: password1.current.value,
        })
        .then(function (response) {
          console.log(response.data);
          window.location.replace("/Signin");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className=" ml-[43%] w-[15vw] h-[20vh] my-[24vh] drop-shadow-[0_0px_5px_rgba(0,0,0,0.25)] flex flex-wrap">
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
          ref={password1}
        />
        <input
          type="password"
          className="mt-[2vh] rounded-lg pl-[1vw] w-[15vw] h-[5vh] "
          placeholder="password"
          ref={password2}
        />
        <button
          className="w-[5vw] h-[4vh] bg-slate-300 rounded-lg text-inherit ml-[30%] mt-[2vh]"
          onClick={handleChange}
        >
          submit
        </button>
      </div>
      <Footer />
    </div>
  );
}
