import React from "react";
import ProfileSection from "../LeftSideBar/ProfileSection";

export default function RightSideBar() {
  return (
    <div className="smd:block hidden w-[278px]">
      <div className="fixed top-10">
        <ProfileSection />
      </div>
    </div>
  );
}
