import React from "react";
import Logo from "../assets/Logo.png";
export default function SignUp() {
  return (
    <div className="m-10">
      <img src={Logo} className=" cursor-pointer" alt="logo" />
      <div className="grid place-items-center border-2 border-gray-600">
        <h1 className=" text-2xl font-semibold">Sign in</h1>
        <p className=" text-sm ">Stay updated on your professional world</p>
        <form>
          <input type="text" className="border-[2px] border-gray-600" />
        </form>
      </div>
    </div>
  );
}
