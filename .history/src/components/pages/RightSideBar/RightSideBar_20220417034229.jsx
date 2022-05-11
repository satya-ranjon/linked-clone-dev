import React from "react";
import ProfileSection from "../LeftSideBar/ProfileSection";

export default function RightSideBar() {
  return (
    <div className="w-fit">
      <div className="h-screen fixed right-5 xl:right-10 pt-20">
        <ProfileSection />
      </div>
    </div>
  );
}
