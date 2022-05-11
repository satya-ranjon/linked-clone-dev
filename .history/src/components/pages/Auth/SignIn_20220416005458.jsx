import React from "react";
import Logo from "../../../assets/Logo.png";

import { useNavigate } from "react-router-dom";
import Form from "./Form";
import SocilAuth from "./SocilAuth";

export default function SignIn() {
  const navigate = useNavigate();
  return (
    <div className="m-10">
      <img src={Logo} className=" cursor-pointer" alt="logo" />
      <div className="grid place-items-center mt-20 z-10">
        <div className=" w-full sm:w-[30rem] space-y-1 sm:p-4 sm:shadow-md sm:border-[1px] shadow-gray-800">
          <h1 className=" text-3xl font-semibold">Sign in</h1>
          <p className=" text-sm ">Stay updated on your professional world</p>
          <Form />
          <SocilAuth />
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
