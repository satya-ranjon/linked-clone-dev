import React from "react";
import Avatar from "@mui/material/Avatar";

export default function ProfileSection() {
  return (
    <div className="w-full flex justify-end">
      <div className="w-[278px] rounded-md overflow-hidden">
        <div className="relative">
          <img
            className="object-cover h-24 w-96"
            src="https://cutt.ly/xFXjHmj"
            alt=""
          />
          <Avatar
            className=" absolute bottom-5 left-3"
            alt="Remy Sharp"
            src="https://cutt.ly/UFXjUHk"
          />
        </div>
      </div>
    </div>
  );
}
