import React from "react";
import Avatar from "@mui/material/Avatar";

export default function PostList() {
  return (
    <div className="my-5 bg-white">
      <div className="flex p-4">
        <div className="flex space-x-2">
          <Avatar
            alt="Remy Sharp"
            src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          />
          <div>
            <h2 className="text-xl">Khokon Dev</h2>
            <p className="text-sm text-neutral-500">UX/UI</p>
          </div>
        </div>
      </div>
    </div>
  );
}
