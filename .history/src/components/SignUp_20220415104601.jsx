import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import Logo from "../assets/Logo.png";
export default function SignUp() {
  const [toogleOn, setToggleOn] = useState(false);

  return (
    <div className="m-10" onClick={() => setToggleOn(false)}>
      <img src={Logo} className=" cursor-pointer" alt="logo" />
      <div className="grid place-items-center mt-6 z-10">
        <div className=" w-full sm:w-fit space-y-1 sm:p-4 sm:shadow-xl shadow-gray-800">
          <h1 className=" text-3xl font-semibold">Sign in</h1>
          <p className=" text-sm ">Stay updated on your professional world</p>
          <form className="pt-4 space-y-5">
            <TextField
              className="w-full"
              id="outlined-basic"
              label="Email or Phone"
              variant="outlined"
            />
            <TextField
              className="w-full"
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
          </form>
          <p className="font-semibold text-blue-600 cursor-pointer w-fit hover:bg-blue-300 transition-all duration-300">
            Forget Password
          </p>
        </div>
      </div>
    </div>
  );
}
