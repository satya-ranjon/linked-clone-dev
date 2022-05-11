import React from "react";
import { FaUsers } from "react-icons/fa";
import {
  BusinessCenter,
  Notifications,
  Message,
  Home,
} from "@mui/icons-material";
export default function MenuBar() {
  return (
    <div className="flex justify-between my-auto text-neutral-500 space-x-4">
      <Home className=" cursor-pointer" fontSize="large" />
      <FaUsers className=" cursor-pointer text-4xl" />
      <BusinessCenter className=" cursor-pointer" fontSize="large" />
      <Notifications className=" cursor-pointer" fontSize="large" />
      <Message className=" cursor-pointer" fontSize="large" />
    </div>
  );
}
