import { Avatar } from "@mui/material";
import React from "react";
import Profile from "../../../assets/profile.jpg";
export default function SugestFirendList() {
  return (
    <div className="bg-white p-3 my-4  text-neutral-900 ">
      <p className=" text-lg font-semibold ">People you may know:</p>
      <div className="pl-1">
        <div className="flex">
          <Avatar alt="Remy Sharp" src={Profile} />
        </div>
      </div>
    </div>
  );
}

// text-[#666666]
