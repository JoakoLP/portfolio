import React, { useState } from "react";
import NavBar from "../Header/navbar";
import Language from "./language";
import Theme from "./theme";

const NavMobile = ({ setIsShowing }) => {
  const [nav, setNav] = useState(false);

  if (window.innerWidth < 768) {
    return (
      <>
        <div
          className={`fixed transition-all duration-500 flex justify-center items-center ${
            nav ? "visible h-[14%]" : "opacity-0 invisible h-0"
          } p-4 border-b border-fuchsia-700 bg-fuchsia-100 dark:bg-purple-950/95 w-full z-40`}
        >
          <NavBar setIsShowing={setIsShowing} setNav={setNav} />
          <Language />
          <Theme />
        </div>
        <div className="fixed z-50 top-3 right-3">
          <div
            className={`relative w-6 h-5 ${nav ? "" : "space-y-1"}`}
            onClick={() => {
              setNav(!nav);
            }}
          >
            <div
              className={`w-6 h-1 bg-fuchsia-700  rounded-sm transition-all duration-300 ${
                nav ? "translate-y-[200%] -rotate-45 bg-fuchsia-700 dark:bg-purple-600" : "bg-fuchsia-500 dark:bg-purple-800 "
              }`}
            ></div>
            <div
              className={`w-6 h-1 bg-fuchsia-700 rounded-sm transition-all duration-300 ${nav ? "translate-y-full rotate-45 bg-fuchsia-700 dark:bg-purple-600" : "bg-fuchsia-500 dark:bg-purple-800"}`}
            ></div>
            <div className={`w-6 h-1 bg-fuchsia-700 rounded-sm transition-all duration-300 ${nav ? "-rotate-45 bg-fuchsia-700 dark:bg-purple-600" : "bg-fuchsia-500 dark:bg-purple-800"}`}></div>
          </div>
        </div>
      </>
    );
  }
};

export default NavMobile;
