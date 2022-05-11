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
          <div className=" left-3 -bottom-5 absolute cursor-pointer">
            <Avatar alt="Remy Sharp" src="https://cutt.ly/UFXjUHk" />
          </div>
        </div>
        <div className=" -space-y-1 pl-14 flex w-full ">
          <div className="">
            <p className=" text-md font-semibold cursor-pointer">Khokon Dev</p>
            <p className=" text-[12px]">UX/UI Desginer</p>
          </div>
          <div className="pt-2">
            <AiFillLinkedin className="text-[#D8C281] mx-2" />
          </div>
          <div className="w-10 h-1 bg-blue-500"></div>
        </div>
      </div>
    </div>
  );
}
