import React from "react";
import { Outlet } from "react-router-dom";
import Language from "./language";
import Theme from "./theme";

const Frame = () => {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen p-8 ">
      <Language />
      <Theme />
      <div className="w-full h-full p-6 border border-purple-900">
        <Outlet />
      </div>
    </div>
  );
};

export default Frame;
