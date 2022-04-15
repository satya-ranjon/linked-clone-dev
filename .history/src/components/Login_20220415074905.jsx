import React from "react";
import Logo from "../assets/Logo.png";
export default function Login() {
  return (
    <div className="bg-[#f3f2ef] h-screen">
      <div className="mx-44 pt-20">
        <img src={Logo} alt="" />
        <div className="grid place-items-center h-screen">
          <h1>Make the most of your professional life</h1>
        </div>
      </div>
    </div>
  );
}
