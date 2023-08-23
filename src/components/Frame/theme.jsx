import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

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
    console.log(localStorage.theme);
    console.log(window.matchMedia("(prefers-color-scheme: light)").matches);
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

  return (
    <div className="bottom-10 left-0 absolute [writing-mode:vertical-rl] -rotate-180  ">
      <div className="flex items-end h-min w-10">
        {/* color theme switch */}
        <button className="z-10 flex justify-center items-center p-0.5 space-x-1" onClick={onChangeTheme}>
          {currentTheme === "dark" ? <MoonIcon className="h-6 w-6 text-purple-600" /> : <SunIcon className="h-6 w-6 text-gray-500" />}
        </button>
      </div>
    </div>
  );
};

export default Theme;
