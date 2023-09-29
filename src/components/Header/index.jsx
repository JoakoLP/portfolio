import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { PowerGlitch } from "powerglitch";
import NavBar from "./navbar";

const Header = ({ setIsShowing }) => {
  // const location = useLocation();
  // const current = location.pathname;

  const { i18n, t } = useTranslation();

  // const navigate = useNavigate();

  const { startGlitch, stopGlitch } = PowerGlitch.glitch();

  // const onChange = (path) => {
  //   setIsShowing(false);
  //   setTimeout(() => {
  //     navigate(path);
  //     setIsShowing(true);
  //   }, 300);
  // };

  document.title = t("title");

  // const isSelected = (path, children) => {
  //   if (current === path) {
  //     return <li className={`font-bold text-purple-900 dark:text-purple-600`}>{children}</li>;
  //   } else {
  //     return (
  //       <li className="font-semibold">
  //         <button
  //           onClick={() => {
  //             onChange(path);
  //           }}
  //         >
  //           {children}
  //         </button>
  //       </li>
  //     );
  //   }
  // };

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
      <header className="flex justify-center w-full md:left-2/4 md:pl-6 md:pr-12 md:-translate-x-2/4 md:absolute md:top-0 md:justify-between h-min ">
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
        {window.innerWidth >= 768 ? <NavBar setIsShowing={setIsShowing} /> : null}
      </header>
    </>
  );
};

export default Header;
