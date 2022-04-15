import React from "react";
import Logo from "../assets/Logo.png";
export default function Login() {
  return (
    <div className="bg-[#f3f2ef] h-screen">
      <div className="mx-32 pt-20">
        <img src={Logo} alt="" />
        <div className="grid place-items-center mt-40 space-y-4">
          <h1 className=" text-2xl font-semibold">
            Make the most of your professional life
          </h1>
          <div className="p-5 py-10 bg-white space-y-3">
            <button className="rounded-3xl bg-blue-500 w-full text-md font-semibold text-white p-2">
              Continue with email
            </button>
            <button className="rounded-3xl border-8 border-gray-700 w-full text-md font-semibold text-gray-700 p-2">
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
