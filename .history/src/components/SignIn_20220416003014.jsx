import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [showhit, setShowhit] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="m-10">
      <img src={Logo} className=" cursor-pointer" alt="logo" />
      <div className="grid place-items-center mt-20 z-10">
        <div className=" w-full sm:w-[30rem] space-y-1 sm:p-4 sm:shadow-md sm:border-[1px] shadow-gray-800">
          <h1 className=" text-3xl font-semibold">Sign in</h1>
          <p className=" text-sm ">Stay updated on your professional world</p>

          <div className="py-5 space-y-5">
            <div className="border-2 p-2 border-neutral-700 flex justify-center font-semibold text-lg space-x-3 cursor-pointer rounded-md hover:bg-neutral-200 transition-all duration-300">
              <FcGoogle className="my-auto text-2xl" />
              <p>Sign in with Google</p>
            </div>
            <div className="border-2 p-2 border-neutral-700 flex justify-center font-semibold text-lg space-x-3 cursor-pointer rounded-md hover:bg-neutral-200 transition-all duration-300">
              <AiFillApple className="my-auto text-2xl" />
              <p>Sign in with Apple</p>
            </div>
          </div>
        </div>
        <p className="mt-8">
          New to LinkedIn?
          <span
            className=" text-blue-600 cursor-pointer font-semibold"
            onClick={() => navigate("/signup")}
          >
            Join now ?
          </span>
        </p>
      </div>
    </div>
  );
}
