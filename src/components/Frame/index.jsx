import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Language from "./language";
import Theme from "./theme";
import Header from "../Header";
import { PowerGlitch } from "powerglitch";
import { Transition } from "@headlessui/react";
import sectionLgPNG from "../../assets/img/sectionlg.png";
import sectionLgMbPNG from "../../assets/img/sectionlgmb.png";
import sectionBlPNG from "../../assets/img/sectionbl.png";
import sectionBlMbPNG from "../../assets/img/sectionblmb.png";
import { useTranslation } from "react-i18next";
import NavMobile from "./navMobile";
import ToastNotif from "./toastNotif";

const Frame = () => {
  const location = useLocation();
  const current = location.pathname;

  const sectionTitle = () => {
    let title = document.querySelector(".titleGl");
    if (stopGlitch) {
      // console.log(stopGlitch);
      // stopGlitch(title);
    }
    setTimeout(() => {
      title = document.querySelector(".titleGl");
      // console.log(title);
      const { stopGlitch } = PowerGlitch.glitch(title, {
        playMode: "always",
        createContainers: true,
        hideOverflow: false,
        timing: {
          duration: 2000,
          easing: "ease-out",
        },
        glitchTimeSpan: {
          start: 0.5,
          end: 0.7,
        },
        shake: {
          velocity: 15,
          amplitudeX: window.innerWidth >= 768 ? 0.2 : 0.1,
          amplitudeY: window.innerWidth >= 768 ? 0.2 : 0.1,
        },
        slice: {
          count: 6,
          velocity: 15,
          minHeight: 0.02,
          maxHeight: 0.15,
          hueRotate: false,
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
  const [toast, setToast] = useState(false);

  const { i18n, t } = useTranslation();

  const [isShowing, setIsShowing] = useState(true);

  const { startGlitch, stopGlitch } = PowerGlitch.glitch();

  return (
    <div className="relative top-0 left-0 flex w-full min-w-full min-h-full md:p-8">
      <ToastNotif toast={toast} setToast={setToast} />
      {window.innerWidth >= 768 ? (
        <>
          <Language />
          <Theme />
        </>
      ) : null}
      <div className="relative w-full h-full min-h-full py-6 border-2 md:border border-fuchsia-600 dark:border-purple-800">
        <div className="relative flex flex-col items-center w-full h-full justify-evenly md:items-start">
          <Header setIsShowing={setIsShowing} />
          <div className="flex items-center justify-center w-full h-full md:pt-10 min-h-fit lg:p-2 top-28 lg:top-32">
            <Transition
              id="transition"
              className="flex items-center justify-center w-[395px] h-[700px] md:h-[1062px] md:w-[600px] min-h-fit max-h-full lg:w-[800px] lg:h-[466px] xl:w-[1200px] xl:h-[700px] overflow-hidden"
              show={isShowing}
              appear={true}
              enter="transition ease-in-out duration-[500ms] delay-200 transform"
              enterFrom="opacity-0 -translate-x-full"
              enterTo="opacity-100 translate-x-0"
              leave="transition ease-in-out duration-[100ms]"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-full"
            >
              <div className="absolute z-10 w-full pointer-events-none lg:max-h-full lg:w-full">
                <img src={sectionBlPNG} alt="" className="hidden object-cover w-full h-full lg:dark:block" />
                <img src={sectionBlMbPNG} alt="" className="hidden object-cover h-full lg:!hidden dark:block" />
                <img src={sectionLgPNG} alt="" className="hidden object-cover w-full h-full lg:block dark:hidden" />
                <img src={sectionLgMbPNG} alt="" className="visible object-cover h-full lg:!hidden dark:hidden" />
              </div>
              <div className="absolute md:w-[57px] pt-1 md:h-[230px] w-[36px] h-[155px] justify-center lg:justify-start left-1 lg:left-auto top-16 md:top-24 md:pt-2 lg:pt-0 lg:right-0 flex orientation-upright vertical-writing-lr lg:horizontal-writing-tb items-center lg:h-8 lg:top-4 xl:h-16 xl:top-4 lg:w-[240px] xl:w-[350px]">
                <p className="z-10 font-semibold tracking-[-0.12rem] md:tracking-[-0.15rem] whitespace-nowrap lg:tracking-normal select-none text-xs md:text-base lg:text-xl titleGl">
                  {sectionTitle()}
                </p>
              </div>
              <div className="h-full w-full py-[36px] pl-[41px] pr-[24px] md:py-[55px] md:pl-[61px] md:pr-[36px] lg:pt-[53px] lg:pb-[35px] lg:px-[42px] xl:pt-[81px] xl:pb-[53px] xl:px-[62px] z-0 ">
                <div className="w-full h-full bg-white/50 dark:bg-purple-950/20">
                  <Outlet context={[toast, setToast]} />
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
      <NavMobile setIsShowing={setIsShowing} />
    </div>
  );
};

export default Frame;
