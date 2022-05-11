import React from "react";
import ProfileSection from "../LeftSideBar/ProfileSection";

export default function RightSideBar() {
  return (
    <div className="sm:block hidden w-[278px]">
      <div className="fixed top-0">
        <ProfileSection />
      </div>
    </div>
  );
}
