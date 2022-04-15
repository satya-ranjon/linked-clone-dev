import React, { useState } from "react";
import Logo from "../assets/Logo.png";
export default function SignUp() {
  const [toogleOn, setToggleOn] = useState(false);

  return (
    <div className="m-10" onClick={() => setToggleOn(false)}>
      <img src={Logo} className=" cursor-pointer" alt="logo" />
      <div className="grid place-items-center mt-6 z-10">
        <div className=" w-full ssm:w-96 sm:w-fit space-y-1 sm:p-4 sm:shadow-xl shadow-gray-800">
          <h1 className=" text-3xl font-semibold">Sign in</h1>
          <p className=" text-sm ">Stay updated on your professional world</p>
          <form className="pt-4">
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
