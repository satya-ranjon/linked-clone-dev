import React from "react";
import Logo from "../assets/Logo.png";
import MenuBar from "./MenuBar";

export default function Header() {
  return (
    <div className="md:px-52 bg-white">
      <div className="grid grid-cols-6 gap-4">
        <div className="py-3">
          <img className="sm:block hidden " src={Logo} alt="" />
        </div>
        <div className="col-start-2 col-span-4">
          <MenuBar />
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
