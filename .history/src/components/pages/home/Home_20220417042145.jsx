import React from "react";
import Header from "../../Header";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import RightSideBar from "../RightSideBar/RightSideBar";
import NewPost from "./NewPost";
import PostList from "./PostList";
export default function Home() {
  return (
    <div className=" bg-neutral-100">
      <Header />
      <div className="llg:px-52 mmd:px-20 smm:px-10 px-5">
        <div className=" flex justify-between">
          <LeftSideBar />
          <div className="xxl:w-[700px] w-[600px]">
            <NewPost />
            <PostList />
            <PostList />
            <PostList />
          </div>
          <RightSideBar />
        </div>
      </div>
    </div>
  );
}
