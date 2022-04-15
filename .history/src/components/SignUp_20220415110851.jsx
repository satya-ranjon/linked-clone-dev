import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import Button from "@mui/material/Button";

export default function SignUp() {
  return (
    <div className="m-10">
      <img src={Logo} className=" cursor-pointer" alt="logo" />
      <div className="grid place-items-center mt-6 z-10">
        <div className=" w-full sm:w-[100px] space-y-1 sm:p-4 sm:shadow-xl shadow-gray-800">
          <h1 className=" text-3xl font-semibold">Sign in</h1>
          <p className=" text-sm ">Stay updated on your professional world</p>
          <form className="pt-4 space-y-4">
            <TextField
              className="w-full"
              id="outlined-basic"
              label="Email or Phone"
              variant="outlined"
            />
            <div className="relative">
              <TextField
                className="w-full relative"
                id="outlined-basic"
                label="Password"
                variant="outlined"
              />
              <p className="font-semibold text-blue-600 cursor-pointer w-fit hover:bg-blue-200 transition-all duration-300 rounded-xl">
                Forget Password
              </p>
            </div>
            <Button variant="contained" size="large" className="w-full">
              Sign in
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
