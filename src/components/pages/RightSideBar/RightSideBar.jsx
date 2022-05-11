import React from "react";
import PagesList from "./PagesList";
import SugestFirendList from "./SugestFirendList";

export default function RightSideBar() {
  return (
    <div className="smd:block hidden w-[278px]">
      <div className="fixed top-20">
        <SugestFirendList />
        <PagesList />
      </div>
    </div>
  );
}
