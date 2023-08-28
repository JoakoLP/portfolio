import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Transition } from "@headlessui/react";

const Header = () => {
  const location = useLocation();
  const current = location.pathname;

  const { i18n, t } = useTranslation();

  const navigate = useNavigate();

  const [isShowing, setIsShowing] = useState(true);

  const onChange = (path) => {
    setIsShowing(false);
    setTimeout(() => {
      navigate(path);
      setIsShowing(true);
    }, 300);
  };
  document.title = t("title");

  const isSelected = (path, children) => {
    if (current === path) {
      return <li className="italic font-bold text-purple-900 list-disc dark:text-purple-500">{children}</li>;
    } else {
      return (
        <li className="font-semibold">
          <button
            onClick={() => {
              onChange(path);
            }}
          >
            {children}
          </button>
        </li>
      );
    }
  };

  return (
    <>
      <header className="space-y-12 h-min w-min">
        {/* Logo*/}
        <div className="flex items-center justify-center space-x-2">
          <div className="flex flex-col items-start text-purple-400a whitespace-nowrap ">
            <p className="text-2xl font-light h-min ">Joaquin Takara</p>
            <p className="leading-none">{t("subtitle")}</p>
          </div>
          {/* <img src="" alt="logo" className="h-10 aspect-square" /> */}
          <p className="text-2xl font-['Oswald'] flex">
            <span id="tHead" className="relative h-min">
              t
            </span>
            <span id="kHead" className="relative h-min">
              k
            </span>
            <span id="rHead" className="relative h-min">
              r
            </span>
          </p>
        </div>
        <ul className="flex flex-col items-start space-y-1 select-none">
          {/* home button */}
          {isSelected("/", t("navHome"))}
          {/* button to projects */}
          {isSelected("/projects", t("navProjects"))}
          {/* about me */}
          {isSelected("/about", t("navAbout"))}
          {/* contact */}
          {isSelected("/contact", t("navContact"))}
        </ul>
      </header>

      <div className="flex justify-end w-full max-h-full p-2 overflow-hidden h-3/4">
        {/* <div className="w-2/3 h-full max-h-full p-3 overflow-hidden animate-fade-down animate-once animate-duration-[750ms] animate-delay-300 animate-ease-in-out"> */}
        <Transition
          id="transition"
          className="w-3/4 h-full max-h-full p-3 overflow-hidden bg-white border border-opacity-50 dark:border border-fuchsia-950 dark:border-purple-700 bg-opacity-70 dark:bg-opacity-20 dark:bg-purple-950"
          show={isShowing}
          appear={true}
          enter="transition ease-in-out duration-[500ms] delay-200 transform"
          enterFrom="opacity-0 -translate-x-full"
          enterTo="opacity-100 translate-x-0"
          leave="transition ease-in-out duration-[100ms]"
          leaveFrom="opacity-100 translate-x-0"
          leaveTo="opacity-0 translate-x-full"
        >
          <Outlet />
        </Transition>
        {/* </div> */}
      </div>
    </>
  );
};

export default Header;
