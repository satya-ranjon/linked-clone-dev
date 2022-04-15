import React from "react";
import Logo from "../assets/Logo.png";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  return (
    <div className="sm:bg-[#f3f2ef] bg-white h-screen ">
      <div className="mx-8 sm:mx-32 pt-20 text-center font-semibold">
        <img src={Logo} alt="" />
        <div className="grid place-items-center mt-40 space-y-4">
          <h1 className="text-xl ssm:text-3xl">
            Make the most of your professional life
          </h1>
          <div className="p-0 ssm:p-8 py-10 bg-white space-y-3">
            <button className="rounded-3xl bg-blue-500 w-full text-md text-white p-4">
              Continue with email
            </button>
            <button className="rounded-3xl border-2 border-gray-700 w-full text-md text-gray-700 p-3">
              <div className="flex justify-center space-x-4">
                <FcGoogle className="my-auto text-2xl" />
                <p>Continue with Google</p>
              </div>
            </button>
            <p>
              Already on LinkedIn?{" "}
              <span className=" text-blue-500 "> Sign in</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
