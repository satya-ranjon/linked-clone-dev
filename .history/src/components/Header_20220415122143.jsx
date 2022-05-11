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
    <div className="w-full bg-red-100 flex justify-between ">
      <img src={Logo} alt="" />
      <div className="flex">
        <Home />
        <FaUsers />
        <BusinessCenter />
        <Notifications />
        <Message />
      </div>
      <div className=""></div>
    </div>
  );
}
