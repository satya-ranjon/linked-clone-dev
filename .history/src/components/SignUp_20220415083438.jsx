import React from "react";
import Logo from "../assets/Logo.png";
export default function SignUp() {
  return (
    <div className="m-10">
      <img src={Logo} className=" cursor-pointer" alt="logo" />
      <div className="grid place-items-center">
        <form>
          <input type="text" className="border-[2px] border-gray-600" />
        </form>
      </div>
    </div>
  );
}
