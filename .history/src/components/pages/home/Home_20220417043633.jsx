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
      <div className="llg:px-52 mmd:px-20 smm:px-10 px-3">
        <div className=" flex justify-between">
          <LeftSideBar />
          <div className="xxl:w-[700px] smn:w-[600px] smx:w-[500px] smy:w-[400px] w-[80%] pr-3">
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
