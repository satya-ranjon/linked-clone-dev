import React from "react";
import Logo from "../assets/Logo.png";
import MenuBar from "./MenuBar";

export default function Header() {
  return (
    <div className="px-2 md:52 bg-white">
      <div className="flex justify-between ">
        <div className="py-2">
          <img className="sm:block hidden " src={Logo} alt="" />
        </div>
        <MenuBar />
      </div>
    </div>
  );
}
