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
    const blurScreen = document.getElementById("blur");
    blurScreen.classList.remove("hidden");
    blurScreen.classList.add("visible");
    blurScreen.classList.remove("opacity-0");
    blurScreen.classList.add("opacity-100");
    setTimeout(() => {
      setTimeout(() => {
        blurScreen.classList.remove("backdrop-blur");
        blurScreen.classList.remove("backdrop-grayscale-sm");
        blurScreen.classList.remove("opacity-100");
        blurScreen.classList.add("opacity-0");
        setTimeout(() => {
          blurScreen.classList.add("hidden");
          blurScreen.classList.add("backdrop-grayscale-sm");
          blurScreen.classList.add("backdrop-blur");
        }, 500);
      }, 500);

      if (currentTheme === "dark") {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
        setCurrentTheme("light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
        setCurrentTheme("dark");
      }
    }, 100);
  };

  const [enabled, setEnabled] = useState(false);

  return (
    <>
      <div className="absolute rotate-90 md:rotate-0 left-3 md:left-0 z-10 flex justify-center w-8 p-0.5 -bottom-1.5 md:bottom-8 ">
        <Switch
          checked={enabled}
          onChange={onChangeTheme}
          className={`${
            currentTheme === "dark" ? "bg-gray-200" : "bg-purple-600"
          } relative inline-flex h-11 w-6 p-0.5 lg:bg-opacity-80 lg:hover:bg-opacity-100 items-center justify-center rounded-full transition-colors focus:outline-none aring-2 aring-purple-500 aring-offset-2 aring-offset-purple-700`}
        >
          <span className={`${currentTheme === "dark" ? "-translate-y-2.5" : "translate-y-2.5"} flex justify-center items-center h-5 aspect-square transform rounded-full transition-transform`}>
            {currentTheme === "dark" ? <MoonIcon className="w-10 text-purple-600 -rotate-90 md:rotate-0 aspect-square" /> : <SunIcon className="w-10 text-white aspect-square" />}
          </span>
        </Switch>
      </div>
      <div id="blur" className="fixed top-0 left-0 z-50 hidden w-full h-full transition-all duration-500 opacity-0 backdrop-grayscale backdrop-blur-sm"></div>
    </>
  );
};

export default Theme;
