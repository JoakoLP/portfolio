import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { Switch } from "@headlessui/react";

const Theme = () => {
  const [currentTheme, setCurrentTheme] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
      setCurrentTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setCurrentTheme("light");
    }
  }, [window.matchMedia("(prefers-color-scheme: dark)")]);
  // Whenever the user explicitly chooses light mode
  // localStorage.theme = "light";

  // Whenever the user explicitly chooses dark mode
  // localStorage.theme = "dark";

  // Whenever the user explicitly chooses to respect the OS preference
  // localStorage.removeItem("theme");

  const onChangeTheme = () => {
    // console.log(localStorage.theme);
    // console.log(window.matchMedia("(prefers-color-scheme: light)").matches);
    if (currentTheme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setCurrentTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setCurrentTheme("dark");
    }
  };

  const [enabled, setEnabled] = useState(false);

  return (
    <>
      {/* <div className="bottom-10 left-0 absolute [writing-mode:vertical-rl] -rotate-180  "> */}
      {/* <div className="flex items-end w-10 h-min"> */}
      {/* color theme switch */}
      {/* <button className="z-10 flex justify-center items-center p-0.5 space-x-1" onClick={onChangeTheme}> */}
      {/* {currentTheme === "dark" ? <MoonIcon className="w-6 h-6 text-purple-600" /> : <SunIcon className="w-6 h-6 text-gray-500" />} */}
      {/* </button> */}
      {/* </div> */}
      {/* </div> */}
      {/* <Switch.Label className="mr-4">Enable notifications</Switch.Label> */}
      <div className="absolute left-0 z-10 flex justify-center w-8 p-0.5 bottom-8 ">
        <Switch
          checked={enabled}
          onChange={onChangeTheme}
          className={`${
            currentTheme === "dark" ? "bg-gray-200" : "bg-purple-600"
          } relative inline-flex h-11 w-6 p-0.5 lg:bg-opacity-80 lg:hover:bg-opacity-100 items-center justify-center rounded-full transition-colors focus:outline-none aring-2 aring-purple-500 aring-offset-2 aring-offset-purple-700`}
        >
          <span className={`${currentTheme === "dark" ? "-translate-y-2.5" : "translate-y-2.5"} flex justify-center items-center h-5 aspect-square transform rounded-full transition-transform`}>
            {currentTheme === "dark" ? <MoonIcon className="w-10 text-purple-600 aspect-square" /> : <SunIcon className="w-10 text-white aspect-square" />}
          </span>
        </Switch>
      </div>
    </>
  );
};

export default Theme;
