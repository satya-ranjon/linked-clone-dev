import React from "react";
import LeftMenuSection from "../LeftSideBar/LeftMenuSection";
import ProfileSection from "../LeftSideBar/ProfileSection";

export default function RightSideBar() {
  return (
    <div className="smd:block hidden w-[278px]">
      <div className="fixed top-20">
        <ProfileSection />
        <LeftMenuSection />
        <FollowHastags />
      </div>
    </div>
  );
}
