import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "../Assets/signinpage_img.svg";
import line from "../Assets/line.svg";
import { Link } from "react-router-dom";
import { Signup } from "./Signup";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export const Signin = () => {

  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle password visibility
    const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="font-custom1 tracking-wider flex flex-col w-1/2 items-center justify-center">
        <div>
          <div className="pb-2">
            <div className="font-bold text-5xl pb-2">Sign in</div>
            <div className="text-gray-400">
              Don't have an account?{" "}
              <Link to = '/' className="text-[#1C4532] hover:underline underline-offset-2">
                Create now
              </Link>
            </div>
          </div>
          <div className="text-gray-400 pb-3">
            <label htmlFor="username">User Name</label>
            <br/>
            <input
              type="text"
              className="border-2 h-[55px] w-[415px] rounded-md p-2 text-black"
              placeholder="Enter your User Name"
            />
          </div>
          <div className="text-gray-400 pb-1.5">
            <div>Password</div>
            <input
              className="border-2 h-[55px] w-[415px] rounded-md mr-2 p-2 text-black"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
            />
            <button onClick={togglePasswordVisibility}>
              <FontAwesomeIcon icon={faEye} className="" />
            </button>
            <div className="text-right mr-7 pt-1.5 hover:text-[#1C4532] hover:underline underline-offset-2 ">
              Forgot Password?
            </div>
          </div>
          <div>
            <button className="bg-[#1C4532] rounded-3xl w-full text-xl text-white font-bold p-3 mt-4">
              Sign In
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-[#2A2B31] flex flex-col h-screen items-center justify-center">
        <div className="items-center justify-center">
          <img src={img} alt="img" />
        </div>
        <div className="font-custom2 pt-24 text-xl text-[#989898] flex">
          <img src={line} alt="line" className="pt-1 mr-3" />
          <span>Geopol Conclave Forum</span>
          <img src={line} alt="line" className="pt-1 ml-3" />
        </div>
      </div>
    </div>
  );
};
