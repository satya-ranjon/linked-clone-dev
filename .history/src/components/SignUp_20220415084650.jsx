import React from "react";
import Logo from "../assets/Logo.png";
export default function SignUp() {
  return (
    <div className="m-10">
      <img src={Logo} className=" cursor-pointer" alt="logo" />
      <div className="grid place-items-center mt-6 ">
        <div className=" w-full ssm:w-96 sm:w-fit space-y-3">
          <h1 className=" text-3xl font-semibold">Sign in</h1>
          <p className=" text-sm ">Stay updated on your professional world</p>
          <form className="my-5">
            <input
              type="text"
              className="border-[1px] border-gray-600 outline-[1px] outline-blue-600 p-2 w-full"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
