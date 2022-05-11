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
          <div className="w-[176px]">
            <div className="h-screen fixed w-[220px] bg-red-100 left-0">
              khokon
            </div>
          </div>
          <div className=" w-[600px]  p-5">
            <NewPost />
            <PostList />
            <PostList />
            <PostList />
          </div>
          <div className="w-[280px]">
            <div className="h-screen fixed w-[320px] bg-red-100 right-0">
              khokon
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
