import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Transition } from "@headlessui/react";
import { PowerGlitch } from "powerglitch";
import framePNG from "../../assets/img/seccion3.png";

const Header = () => {
  const location = useLocation();
  const current = location.pathname;

  const sectionTitle = () => {
    let title = document.querySelector(".titleGl");
    if (stopGlitch) {
      console.log(stopGlitch);
      stopGlitch(title);
    }
    setTimeout(() => {
      title = document.querySelector(".titleGl");
      console.log(title);
      const { stopGlitch } = PowerGlitch.glitch(title, {
        playMode: "always",
        createContainers: true,
        hideOverflow: false,
        timing: {
          duration: 2000,
        },
        glitchTimeSpan: {
          start: 0.5,
          end: 0.7,
        },
        shake: {
          velocity: 15,
          amplitudeX: 0.2,
          amplitudeY: 0.2,
        },
        slice: {
          count: 6,
          velocity: 15,
          minHeight: 0.02,
          maxHeight: 0.15,
          hueRotate: true,
        },
      });
    }, 1000);
    switch (current) {
      case "/":
        return t("navProjects");
      // break;
      case "/about":
        return t("navAbout");
      // break;

      case "/contact":
        return t("navContact");
      // break;
      default:
      // break;
    }
  };

  const { i18n, t } = useTranslation();

  const navigate = useNavigate();

  const [isShowing, setIsShowing] = useState(true);

  const { startGlitch, stopGlitch } = PowerGlitch.glitch();

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
      return <li className={`font-bold text-purple-900 dark:text-purple-600`}>{children}</li>;
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

  useEffect(() => {
    setTimeout(() => {
      const element = document.querySelector(".glitch");
      PowerGlitch.glitch(element, {
        playMode: "always",
        createContainers: true,
        hideOverflow: false,
        timing: {
          duration: 2000,
        },
        glitchTimeSpan: {
          start: 0.5,
          end: 0.7,
        },
        shake: {
          velocity: 15,
          amplitudeX: 0.2,
          amplitudeY: 0.2,
        },
        slice: {
          count: 6,
          velocity: 15,
          minHeight: 0.02,
          maxHeight: 0.15,
          hueRotate: true,
        },
      });
      // stopGlitch();
      setTimeout(() => {
        // startGlitch();
      }, 2500);
    }, 2500);
  }, []);

  return (
    <>
      <header className="flex justify-between w-full h-min ">
        {/* Logo*/}
        <div className="flex items-center justify-center space-x-2 ">
          <div className="flex flex-col items-start text-purple-400a whitespace-nowrap ">
            <p className="text-2xl font-medium dark:font-light h-min">Joaquin Takara</p>
            <p className="font-semibold leading-none dark:font-medium">{t("subtitle")}</p>
          </div>
          {/* <img src="" alt="logo" className="h-10 aspect-square" /> */}
          <p className="text-2xl font-['Oswald'] flex glitch text-purple-600">
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
        <ul className="flex items-center justify-center select-none pr-9 space-x-9 whitespace-nowrap">
          {/* home button */}
          {/* {isSelected("/", t("navHome"))} */}
          {/* button to projects */}
          {isSelected("/", t("navProjects"))}
          {/* about me */}
          {isSelected("/about", t("navAbout"))}
          {/* contact */}
          {isSelected("/contact", t("navContact"))}
        </ul>
      </header>

      <div className="absolute left-0 flex justify-center w-full max-h-full p-2 overflow-hidden top-32">
        {/* <div className="w-2/3 h-full max-h-full p-3 overflow-hidden animate-fade-down animate-once animate-duration-[750ms] animate-delay-300 animate-ease-in-out"> */}
        {/* <div className="relative w-full h-full"> */}
        <Transition
          id="transition"
          // className="w-3/4 h-full max-h-full p-3 overflow-hidden border border-opacity-50 bg-fuchsia-400 bg-opacity-10 dark:border border-fuchsia-700 dark:border-purple-700 dark:bg-opacity-10 dark:bg-purple-950"
          className="flex items-center justify-center w-[1200px] h-[700px] overflow-hidden p-3a "
          show={isShowing}
          appear={true}
          enter="transition ease-in-out duration-[500ms] delay-200 transform"
          enterFrom="opacity-0 -translate-x-full blur-lg"
          enterTo="opacity-100 translate-x-0 blur-none"
          leave="transition ease-in-out duration-[100ms]"
          leaveFrom="opacity-100 translate-x-0 blur-none"
          leaveTo="opacity-0 translate-x-full blur-lg"
        >
          <div className="absolute z-10 w-full max-h-full pointer-events-none">
            <img src={framePNG} alt="" className="object-cover w-[1200px]  p-4a" />
          </div>
          <div className="absolute right-0 flex items-center h-16 top-4 w-[350px]">
            <p className="text-xl font-semibold titleGl">{sectionTitle()}</p>
          </div>
          {/* 1080 x 568 */}
          <div className="h-[568px] w-[1080px] mt-12 m-5 p-2 z-0 bg-fuchsia-400 bg-opacity-10 dark:bg-opacity-20 dark:bg-purple-950">
            <Outlet />
          </div>
        </Transition>
        {/* </div> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default Header;
