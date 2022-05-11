import React from "react";
import Header from "../../Header";
import NewPost from "./NewPost";
import PostList from "./PostList";
export default function Home() {
  return (
    <div className=" bg-neutral-100">
      <Header />
      <div className="lg:px-20 sm:px-5 xl:px-52 ">
        <div className=" lg:flex justify-between">
          <div className="w-[176px]">khokon</div>
          <div className=" w-[600px]  p-5">
            <NewPost />
            <PostList />
            <PostList />
            <PostList />
          </div>
          <div className="w-[280px] relative ">
            <div className="h-96 w-[280px] bg-black absolute right-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
