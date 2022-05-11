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
      <div className="w-full bg-red-100 flex justify-between p-2 ">
        <img src={Logo} alt="" />
        <div className="flex text-2xl justify-between w-full px-10 my-auto">
          <Home />
          <FaUsers />
          <BusinessCenter />
          <Notifications />
          <Message />
        </div>
        <div className="">khokon</div>
      </div>
    </div>
  );
}
