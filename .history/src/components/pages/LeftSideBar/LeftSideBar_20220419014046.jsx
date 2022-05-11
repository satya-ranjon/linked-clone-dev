import React from "react";
import LeftMenuSection from "./LeftMenuSection";
import ProfileSection from "./ProfileSection";
import followHastags from "./FollowHastags";
export default function LeftSideBar() {
  return (
    <div className="smy:block hidden w-[278px] pt-20">
      <div className="fixed top-20">
        <ProfileSection />
        <LeftMenuSection />
        <followHastags />
      </div>
    </div>
  );
}
