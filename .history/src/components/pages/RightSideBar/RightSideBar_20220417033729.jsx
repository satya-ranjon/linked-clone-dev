import React from "react";
import ProfileSection from "../LeftSideBar/ProfileSection";

export default function RightSideBar() {
  return (
    <div className="">
      <div className="h-screen fixed right-10 pt-20">
        <ProfileSection />
      </div>
    </div>
  );
}
