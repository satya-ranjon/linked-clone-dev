import React from "react";
import Logo from "../assets/Logo.png";
export default function Login() {
  return (
    <div className="bg-[#f3f2ef] h-screen">
      <div className="mx-44 pt-20">
        <img src={Logo} alt="" />
        <div className="grid place-items-center mt-40">
          <h1 className=" text-2xl font-semibold">
            Make the most of your professional life
          </h1>
          <div className="p-5 bg-white">
            <button className="rounded-xl bg-blue-500 w-full">
              Continue with email
            </button>
            <button className="rounded-xl">Continue with Google</button>
          </div>
        </div>
      </div>
    </div>
  );
}
