import React from "react";
import ProfileSection from "../LeftSideBar/ProfileSection";

export default function RightSideBar() {
  return (
    <div className="smd:block hidden w-[278px] pt-40">
      <div className="fixed top-0">
        <ProfileSection />
      </div>
    </div>
  );
}
