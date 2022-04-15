import React, { useState } from "react";
import Logo from "../assets/Logo.png";
export default function SignUp() {
  const [toogleOn, setToggleOn] = useState(false);
  return (
    <div className="m-10">
      <img src={Logo} className=" cursor-pointer" alt="logo" />
      <div className="grid place-items-center mt-6 ">
        <div className=" w-full ssm:w-96 sm:w-fit space-y-1 sm:p-4 sm:shadow-xl shadow-gray-800">
          <h1 className=" text-3xl font-semibold">Sign in</h1>
          <p className=" text-sm ">Stay updated on your professional world</p>
          <form className="pt-4">
            <div className="" onClick={() => setToggleOn((prv) => !prv)}>
              <label
                className={`font-normal  text-neutral-400 absolute p-2 z-0  ${
                  toogleOn && `text-sm py-0`
                }`}
              >
                Email or Phone
              </label>
              <input
                type="text"
                className="border-[1px] border-gray-600 outline-[.5px] outline-blue-600 px-3 pt-4 p-1 w-full"
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