import React from "react";
import Logo from "../assets/Logo.png";
import { HiHome } from "react-icons/hi";
import { FaUsers } from "react-icons/fa";
import { BusinessCenter, NotificationsNone } from "@mui/icons-material";

export default function Header() {
  return (
    <div className="w-full bg-red-100 ">
      <img src={Logo} alt="" />
      <div className="flex">
        <HiHome />
        <FaUsers />
        <BusinessCenter />
        <NotificationsNone />
      </div>
    </div>
  );
}
