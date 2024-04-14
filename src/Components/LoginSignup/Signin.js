import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "../Assets/signinpage_img.svg";
import line from "../Assets/line.svg";
import { Link, useNavigate } from "react-router-dom";
import { Signup } from "./Signup";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export const Signin = () => {

  const [showPassword, setShowPassword] = useState(false);

  const[user, setUser] = useState('');
  const[pwd, setPwd] = useState('');

  const navigate = useNavigate();

  // Function to toggle password visibility
    const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const loggedUser = localStorage.getItem("user");
    const loggedPwd = localStorage.getItem("password");
    if(user === loggedUser && pwd === loggedPwd){
        navigate("/home");
    }
    else if(user !== loggedUser){
      alert("Incorrect username entered");
    }
    else{
      alert("Incorrect password entered");
    }
  }

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="font-custom1 tracking-wider flex flex-col w-1/2 items-center justify-center">
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
            <label htmlFor="username">Username</label>
            <br/>
            <input
              onChange={(e)=> setUser(e.target.value)}
              type="text"
              className="border-2 h-[55px] w-[415px] rounded-md p-2 text-black"
              placeholder="Enter your User Name"
            />
          </div>
          <div className="text-gray-400 pb-1.5">
            <div>Password</div>
            <input
              onChange={(e) => setPwd(e.target.value)}
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
            <button type="submit" className="bg-[#1C4532] rounded-3xl w-full text-xl text-white font-bold p-3 mt-4">
              Sign In
            </button>
          </div>
        </div>
      </form>
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
