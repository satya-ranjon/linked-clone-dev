import { Avatar } from "@mui/material";
import React from "react";
import Profile from "../../../assets/profile.jpg";

export default function SugestFirendList() {
  return (
    <div className="bg-white p-3 my-4  text-neutral-900 ">
      <p className=" text-lg font-semibold mb-5 ">People you may know:</p>
      <div className="pl-2">
        <div className="flex justify-between py-2 my-1">
          <Avatar alt="Remy Sharp" className="my-auto" src={Profile} />
          <div className="">
            <p className=" font-semibold">Steve Jobs</p>
            <p className=" text-[10px]">CEO of Apple</p>
          </div>
          <button className="border-[2px] p-2 py-1 border-[#00aaffd3] rounded-lg my-auto text-[#00ACFF] text-sm font-semibold">
            Connect
          </button>
        </div>
        <div className="flex justify-between py-1 my-1">
          <Avatar alt="Remy Sharp" className="my-auto" src={Profile} />
          <div className="">
            <p className=" font-semibold">Steve Jobs</p>
            <p className=" text-[10px]">CEO of Apple</p>
          </div>
          <button className="border-[2px] p-2 py-1 border-[#00aaffd3] rounded-lg my-auto text-[#00ACFF] text-sm font-semibold">
            Connect
          </button>
        </div>
        <div className="flex justify-between py-1 my-1">
          <Avatar alt="Remy Sharp" className="my-auto" src={Profile} />
          <div className="">
            <p className=" font-semibold">Steve Jobs</p>
            <p className=" text-[10px]">CEO of Apple</p>
          </div>
          <button className="border-[2px] p-2 py-1 border-[#00aaffd3] rounded-lg my-auto text-[#00ACFF] text-sm font-semibold">
            Connect
          </button>
        </div>
        <button className="w-full text-center p-2">See all</button>
      </div>
    </div>
  );
}

// text-[#666666]
