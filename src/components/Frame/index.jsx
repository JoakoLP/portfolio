import React from "react";
import { Outlet } from "react-router-dom";
import Language from "./language";
import Theme from "./theme";

const Frame = () => {
  return (
    <div className=" absolute w-screen left-0 top-0 h-screen p-10 ">
      {/* <div className="bg-black h-screen p-6 "> */}
      <Language />
      <Theme />
      <div className="border-4 p-6 border-purple-900 border-double w-full h-full">
        <Outlet />
      </div>
      {/* </div> */}
    </div>
  );
};

export default Frame;
