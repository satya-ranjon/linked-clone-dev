import React from "react";
import ProfileSection from "./ProfileSection";

export default function LeftSideBar() {
  return (
    <div className="smy:block hidden w-[278px] pt-20">
      <div className="fixed top-0">
        <ProfileSection />
      </div>
    </div>
  );
}
