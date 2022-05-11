import React from "react";
import Avatar from "@mui/material/Avatar";

export default function NewPost() {
  return (
    <div>
      <div className="flex">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <input
          type="text"
          className="w-full ml-3 outline-none p-2"
          placeholder="Write somthing .. "
        />
      </div>
    </div>
  );
}
