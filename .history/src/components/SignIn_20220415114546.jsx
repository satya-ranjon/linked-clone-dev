import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";

export default function SignUp() {
  const [showhit, setShowhit] = useState(true);
  return (
    <div className="m-10">
      <img src={Logo} className=" cursor-pointer" alt="logo" />
      <div className="grid place-items-center mt-20 z-10">
        <div className=" w-full sm:w-[30rem] space-y-1 sm:p-4 sm:shadow-md sm:border-[1px] shadow-gray-800">
          <h1 className=" text-3xl font-semibold">Sign in</h1>
          <p className=" text-sm ">Stay updated on your professional world</p>
          <form className="pt-4 space-y-4">
            <TextField
              className="w-full"
              id="outlined-basic"
              label="Email or Phone"
              variant="outlined"
            />
            <div className="relative">
              <TextField
                className="w-full relative"
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type={`${showhit ? "password" : "text"}`}
              />
              <p
                className="font-semibold text-blue-600 cursor-pointer w-fit hover:bg-blue-200 transition-all duration-300 rounded-xl absolute top-4 right-3"
                onClick={() => setShowhit((prv) => !prv)}
              >
                {showhit ? "show" : "hide"}
              </p>
            </div>
            <p className="font-semibold text-blue-600 cursor-pointer w-fit hover:bg-blue-200 transition-all duration-300 rounded-xl">
              Forgot password?
            </p>
            <div className=" p-2 flex justify-center font-semibold text-lg space-x-3 cursor-pointer rounded-md hover:bg-blue-600 transition-all duration-300 bg-blue-500 text-white">
              <p>Sign in</p>
            </div>
            <div className="border-2 p-2 border-neutral-700 flex justify-center font-semibold text-lg space-x-3 cursor-pointer rounded-md hover:bg-neutral-200 transition-all duration-300">
              <FcGoogle className="my-auto text-2xl" />
              <p>Sign in with Google</p>
            </div>

            <div className="border-2 p-2 border-neutral-700 flex justify-center font-semibold text-lg space-x-3 cursor-pointer rounded-md hover:bg-neutral-200 transition-all duration-300">
              <AiFillApple className="my-auto text-2xl" />
              <p>Sign in with Apple</p>
            </div>
          </form>
        </div>
        <p className="mt-8">
          New to LinkedIn?
          <span className=" text-blue-600 cursor-pointer font-semibold">
            Join now ?
          </span>
        </p>
      </div>
    </div>
  );
}
