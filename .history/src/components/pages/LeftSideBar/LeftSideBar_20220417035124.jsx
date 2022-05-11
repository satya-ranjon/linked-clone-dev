import React from "react";
import ProfileSection from "./ProfileSection";

export default function LeftSideBar() {
  return (
    <div className="w-fit">
      <div className="h-screen fixed left-2 xl:left-[10%] pt-20">
        <ProfileSection />
      </div>
    </div>
  );
}
