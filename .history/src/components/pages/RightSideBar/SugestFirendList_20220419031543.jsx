import { Avatar } from "@mui/material";
import React from "react";
import Profile from "../../../assets/profile.jpg";

export default function SugestFirendList() {
  return (
    <div className="bg-white my-4 rounded-md text-neutral-900 ">
      <p className=" text-lg font-semibold p-3 px-5 ">People you may know:</p>
      <div className="px-4 pl-5">
        <div className="flex justify-between py-2 my-1">
          <Avatar
            className="cursor-pointer"
            alt="Remy Sharp my-auto"
            src={Profile}
          />
          <div className="">
            <p className=" font-semibold cursor-pointer">Steve Jobs</p>
            <p className=" text-[10px]">CEO of Apple</p>
          </div>
          <button className="border-[2px] p-2 py-1 border-[#00aaffd3] rounded-lg my-auto text-[#00ACFF] text-sm font-semibold">
            Connect
          </button>
        </div>
      </div>
      <button className="w-full text-center p-2 border-t-2 transition-all duration-300 mt-4 hover:bg-slate-100 text-[#00ACFF] ">
        See all
      </button>
    </div>
  );
}

// text-[#666666]
