import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { PowerGlitch } from "powerglitch";
import NavBar from "./navbar";
import { useLocation, useNavigate } from "react-router-dom";

const Header = ({ setIsShowing }) => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const current = location.pathname;

  const { startGlitch, stopGlitch } = PowerGlitch.glitch();

  useEffect(() => {
    // document.title = "Joaquin Takara - Portfolio";
    setTimeout(() => {
      const element = document.querySelector(".glitch");
      PowerGlitch.glitch(element, {
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
          amplitudeX: 0.2,
          amplitudeY: 0.1,
        },
        slice: {
          count: 6,
          velocity: 15,
          minHeight: 0.02,
          maxHeight: 0.15,
          hueRotate: false,
        },
      });
      // stopGlitch();
      setTimeout(() => {
        // startGlitch();
      }, 2500);
    }, 2500);
  }, [i18n.language]);

  useEffect(() => {
    const title = document.getElementById("title");
    if (current !== "/about") {
      title.onclick = () => {
        onChange("/about");
      };
      title.classList.add("cursor-pointer");
    } else {
      title.onclick = null;
      title.classList.remove("cursor-pointer");
    }
  }, [current]);

  const onChange = (path) => {
    setIsShowing(false);
    setTimeout(() => {
      navigate(path);
      setIsShowing(true);
    }, 300);
  };

  return (
    <>
      <header className="flex justify-center w-full select-none md:pl-6 md:pr-12 md:justify-between h-min ">
        {/* Logo*/}
        <a id="title" className="flex items-center justify-center space-x-2 cursor-pointer ">
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
        </a>
        {window.innerWidth >= 768 ? <NavBar setIsShowing={setIsShowing} /> : null}
      </header>
    </>
  );
};

export default Header;
