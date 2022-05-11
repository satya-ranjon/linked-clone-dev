import React from "react";
import Avatar from "@mui/material/Avatar";

export default function ProfileSection() {
  return (
    <div className="w-full flex justify-end">
      <div className="w-[278px] rounded-md overflow-hidden">
        <div className="h-20 overflow-hidden relative">
          <img src="https://cutt.ly/xFXjHmj" alt="" />
          <Avatar
            className=" absolute z-10 -bottom-5"
            alt="Remy Sharp"
            src="https://cutt.ly/UFXjUHk"
          />
        </div>
      </div>
    </div>
  );
}
