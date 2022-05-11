import React from "react";
import { FaUsers } from "react-icons/fa";
import {
  BusinessCenter,
  Notifications,
  Message,
  Home,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
export default function MenuBar() {
  return (
    <div className="flex justify-between my-auto text-neutral-500 space-x-4">
      <NavLink to="/home" className="text-green-600">
        <Home className=" cursor-pointer" fontSize="large" />
      </NavLink>
      <NavLink to="">
        <FaUsers className=" cursor-pointer text-4xl" />
      </NavLink>
      <NavLink to="">
        <BusinessCenter className=" cursor-pointer" fontSize="large" />
      </NavLink>
      <NavLink to="">
        <Notifications className=" cursor-pointer" fontSize="large" />
      </NavLink>
      <NavLink to="">
        <Message className=" cursor-pointer" fontSize="large" />
      </NavLink>
    </div>
  );
}
