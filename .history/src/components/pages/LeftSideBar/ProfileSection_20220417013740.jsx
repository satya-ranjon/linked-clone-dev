import React from "react";
import Avatar from "@mui/material/Avatar";
import { AiFillLinkedin } from "react-icons/ai";

export default function ProfileSection() {
  return (
    <div className="w-full flex justify-end ">
      <div className="w-[278px] bg-white rounded-md overflow-hidden">
        <div className="relative">
          <img
            className="object-cover h-24 w-96"
            src="https://cutt.ly/xFXjHmj"
            alt=""
          />
          <div className=" left-3 -bottom-5 absolute">
            <Avatar alt="Remy Sharp" src="https://cutt.ly/UFXjUHk" />
          </div>
        </div>
        <div className=" -space-y-1 pl-14 flex ">
          <div className="">
            <p className=" text-md font-semibold">Khokon Dev</p>
            <p className=" text-[12px]">UX/UI Desginer</p>
          </div>
          <AiFillLinkedin className="text-[#D8C281] mx-2 pt-5" />
        </div>
      </div>
    </div>
  );
}
