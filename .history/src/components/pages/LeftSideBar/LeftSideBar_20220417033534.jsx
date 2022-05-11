import React from "react";
import ProfileSection from "./ProfileSection";

export default function LeftSideBar() {
  return (
    <div className="">
      <div className="h-screen fixed left-0">
        <ProfileSection />
      </div>
    </div>
  );
}
