import React from "react";
import Logo from "../assets/Logo.png";
import { FaUsers } from "react-icons/fa";
import {
  BusinessCenter,
  Notifications,
  Message,
  Home,
} from "@mui/icons-material";

export default function Header() {
  return (
    <div className=" px-10">
      <div className="flex justify-between p-2 ">
        <img src={Logo} alt="" />
        <div className="flex text-2xl justify-between w-full px-10 my-auto text-neutral-500 ">
          <Home className=" cursor-pointer text-5xl" />
          <FaUsers className=" cursor-pointer" />
          <BusinessCenter className=" cursor-pointer" />
          <Notifications className=" cursor-pointer" />
          <Message className=" cursor-pointer" />
        </div>
        <div className="">khokon</div>
      </div>
    </div>
  );
}
