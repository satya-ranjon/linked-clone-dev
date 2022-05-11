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
          <div className=" flex justify-between space-x-1">
            <div className="bg-[#7373738a] w-14 h-[3px] mt-4">
              <div className="w-[90%] h-full bg-blue-500"></div>
            </div>
            <p className=" text-[11px] mt-[8px] text-[#737373]"> 90%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
