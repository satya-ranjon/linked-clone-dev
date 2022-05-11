import React from "react";
import LeftMenuSection from "./LeftMenuSection";
import ProfileSection from "./ProfileSection";

export default function LeftSideBar() {
  return (
    <div className="smy:block hidden w-[278px] pt-20">
      <div className="fixed top-20">
        <ProfileSection />
        <LeftMenuSection />
      </div>
    </div>
  );
}
