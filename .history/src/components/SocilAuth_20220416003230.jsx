import React from "react";

export default function SocilAuth() {
  return (
    <div className="py-5 space-y-5">
      <div className="border-2 p-2 border-neutral-700 flex justify-center font-semibold text-lg space-x-3 cursor-pointer rounded-md hover:bg-neutral-200 transition-all duration-300">
        <FcGoogle className="my-auto text-2xl" />
        <p>Sign in with Google</p>
      </div>
      <div className="border-2 p-2 border-neutral-700 flex justify-center font-semibold text-lg space-x-3 cursor-pointer rounded-md hover:bg-neutral-200 transition-all duration-300">
        <AiFillApple className="my-auto text-2xl" />
        <p>Sign in with Apple</p>
      </div>
    </div>
  );
}
