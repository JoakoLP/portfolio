import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Language from "./language";
import Theme from "./theme";
import Header from "../Header";
import { PowerGlitch } from "powerglitch";
import { Transition } from "@headlessui/react";
import sectionLgPNG from "../../assets/img/sectionlg.png";
import sectionBlPNG from "../../assets/img/sectionbl.png";
import { useTranslation } from "react-i18next";

const Frame = () => {
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

  const [isShowing, setIsShowing] = useState(true);

  const { startGlitch, stopGlitch } = PowerGlitch.glitch();

  return (
    <div className="absolute top-0 left-0 w-screen h-screen p-8 ">
      <Language />
      <Theme />
      <div className="flex flex-col justify-between w-full h-full p-6 border border-fuchsia-700 dark:border-purple-900">
        <Header setIsShowing={setIsShowing} />
        <div className="absolute left-0 flex justify-center w-full max-h-full p-2 overflow-hidden lg:top-24 xl:top-32">
          <Transition
            id="transition"
            className="flex items-center justify-center lg:w-[800px] lg:h-[466px] xl:w-[1200px] xl:h-[700px] overflow-hidden"
            show={isShowing}
            appear={true}
            enter="transition ease-in-out duration-[500ms] delay-200 transform"
            enterFrom="opacity-0 -translate-x-full"
            enterTo="opacity-100 translate-x-0"
            leave="transition ease-in-out duration-[100ms]"
            leaveFrom="opacity-100 translate-x-0"
            leaveTo="opacity-0 translate-x-full"
          >
            <div className="absolute z-10 w-full max-h-full pointer-events-none">
              <img src={sectionBlPNG} alt="" className="hidden object-cover w-full h-full dark:block" />
              <img src={sectionLgPNG} alt="" className="visible object-cover w-full h-full dark:hidden" />
            </div>
            <div className="absolute right-0 flex items-center lg:h-8 lg:top-4 xl:h-16 xl:top-4 lg:w-[240px] xl:w-[350px]">
              <p className="z-10 text-xl font-semibold select-none titleGl">{sectionTitle()}</p>
            </div>
            <div className="h-full w-full lg:pt-[53px] lg:pb-[35px] lg:px-[42px] xl:pt-[81px] xl:pb-[53px] xl:px-[62px] z-0 ">
              <div className="w-full h-full bg-opacity-10 bg-fuchsia-400 dark:bg-opacity-20 dark:bg-purple-950">
                <Outlet />
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  );
};

export default Frame;
