import React from "react";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "../Assets/signinpage_img.svg";
import line from "../Assets/line.svg";
import { Link, useNavigate } from "react-router-dom";
import { Signin } from "./Signin";
import {
  faInfoCircle,
  faEye,
  faCheck,
  faTimes,
  faEyeSlash
} from "@fortawesome/free-solid-svg-icons";

const USER_REGEX = /^[a-zA-Z][a-zA-z0-9-_]{3,23}$/;
const PWD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]|:;<>,.?/~]).{8,}$/;

export const Signup = () => {

  const navigate = useNavigate();

  const userRef = useRef();
  const errRef = useRef();

  const [showPassword, setShowPassword] = useState(false);
  const [showconfPassword, setShowconfPassword] = useState(false);

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const isPwdValid = PWD_REGEX.test(pwd);
    console.log(isPwdValid);
    console.log(pwd);
    setValidPwd(isPwdValid);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  // Function to toggle password visibility
  const toggleconfPasswordVisibility = () => {
    console.log(showconfPassword);
    setShowconfPassword(!showconfPassword);
  };
  const togglePasswordVisibility = () => {
    console.log("hello");
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", user);
    localStorage.setItem("password", pwd);
    navigate("/signin");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <p
        ref={errRef}
        className={` ${errMsg ? "errmsg" : "hidden"} `}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <form onSubmit={handleSubmit} className="font-custom1 tracking-wider flex flex-col w-1/2 items-center justify-center">
        <div>
          <div className="pb-2">
            <div className="font-bold text-5xl pb-2">Sign up</div>
            <div className="text-gray-400">
              Already have an account?{" "}
              <Link
                to={"/signin"}
                className="text-[#1C4532] hover:underline underline-offset-2"
              >
                Login
              </Link>
            </div>
          </div>

          <div className="text-gray-400 pb-3 flex flex-col">
            <label htmlFor="username">
              Username:
              <FontAwesomeIcon
                icon={validName ? faCheck : faTimes}
                className={`pl-2 ${
                  validName ? "text-green-500" : "text-red-500"
                }`}
              />
            </label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
              className="border-2 h-[55px] w-[415px] rounded-md p-2 text-black"
              placeholder="Enter your User Name"
            />
          </div>
          <p
            id="uidnote"
            className={`p-2 ${
              userFocus && user && !validName ? "instructions" : "hidden"
            }`}
          >
            <FontAwesomeIcon icon={faInfoCircle} className="pr-2" />
            4 to 24 characters.
            <br />
            Must begin with a letter.
            <br />
            Letters, numbers, underscores, hyphens allowed.
          </p>

          <div className="text-gray-400 pb-3">
            <label htmlFor="password">
              Password:
              <FontAwesomeIcon
                icon={validPwd ? faCheck : faTimes}
                className={`pl-2 ${
                  validPwd ? "text-green-500" : "text-red-500"
                }`}
              />
            </label>
            <br />
            <input
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
              className="border-2 h-[55px] w-[415px] rounded-md mr-2 p-2 text-black"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
            />
            <button onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            <p
              id="pwdnote"
              className={`text-black ${
                pwdFocus && !validPwd ? "instructions" : "hidden"
              }`}
            >
              <FontAwesomeIcon icon={faInfoCircle} className="pr-2" />
              8 to 24 characters.
              <br />
              Must include uppercase and lowercase letters,
              <br /> a number and a special character.
              <br />
              Allowed special characters:{" "}
              <span aria-label="exclamation mark">!</span>{" "}
              <span aria-label="at symbol">@</span>{" "}
              <span aria-label="hashtag">#</span>{" "}
              <span aria-label="dollar sign">$</span>{" "}
              <span aria-label="percent">%</span>
            </p>
          </div>

          <div>
            <div className="text-gray-400 pb-1.5">
              <label>Confirm Password</label>
              <FontAwesomeIcon
                icon={validMatch && matchPwd ? faCheck : faTimes}
                className={`pl-2 ${
                  validMatch && matchPwd ? "text-green-500" : "text-red-500"
                }`}
              />
              <br />
              <input
                id="confirm_pwd"
                onChange={(e) => setMatchPwd(e.target.value)}
                value={matchPwd}
                required
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
                className="border-2 h-[55px] w-[415px] rounded-md mr-2 p-2 text-black"
                type={showconfPassword ? "text" : "password"}
                placeholder="Confirm password"
              />
              <button onClick={toggleconfPasswordVisibility}>
                <FontAwesomeIcon icon={showconfPassword ? faEyeSlash : faEye} />
              </button>
              <p
                id="confirmnote"
                className={`text-black p-2 ${
                  matchFocus && !validMatch ? "instructions" : "hidden"
                }`}
              >
                <FontAwesomeIcon icon={faInfoCircle} className="pr-2" />
                Must match the first password input field.
              </p>
              
            </div>
            <div></div>
            <button
              type="submit"
              disabled={!validName || !validPwd || !validMatch ? true : false}
              className="bg-[#1C4532] rounded-3xl w-full text-xl text-white font-bold p-3 mt-4"
            >
              Sign Up
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
