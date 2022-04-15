import React from "react";
import Logo from "../assets/Logo.png";
export default function SignUp() {
  return (
    <div className="m-10">
      <img src={Logo} className=" cursor-pointer" alt="logo" />
      <div className="grid place-items-center mt-6 ">
        <div className=" w-full ssm:w-96 sm:w-fit space-y-1 sm:p-4 sm:shadow-xl shadow-gray-800">
          <h1 className=" text-3xl font-semibold">Sign in</h1>
          <p className=" text-sm ">Stay updated on your professional world</p>
          <form className="pt-4">
            <div className="">
              <label> Email or Phone</label>
              <input
                type="text"
                className="border-[1px] border-gray-600 outline-[.5px] outline-blue-600 p-4 w-full"
              />
            </div>
            <div className="">
              <label> Password</label>
              <input
                type="text"
                className="border-[1px] border-gray-600 outline-[.5px] outline-blue-600 p-4 w-full"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
