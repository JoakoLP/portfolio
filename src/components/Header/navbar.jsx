import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

const NavBar = ({ setIsShowing, setNav }) => {
  const location = useLocation();
  const current = location.pathname;

  const { i18n, t } = useTranslation();

  const navigate = useNavigate();

  const onChange = (path) => {
    setIsShowing(false);
    setTimeout(() => {
      navigate(path);
      setIsShowing(true);
    }, 300);
  };

  const isSelected = (path, children) => {
    if (current === path) {
      return <li className={`font-bold text-purple-900 dark:text-purple-600`}>{children}</li>;
    } else {
      return (
        <li className="font-semibold">
          <button
            onClick={() => {
              onChange(path);
              if (setNav) {
                setNav(false);
              }
            }}
          >
            {children}
          </button>
        </li>
      );
    }
  };

  return (
    <ul className="flex flex-col items-center justify-center text-lg select-none md:text-base md:flex-row md:space-x-9 whitespace-nowrap">
      {/* home button */}
      {/* {isSelected("/", t("navHome"))} */}
      {/* button to projects */}
      {isSelected("/", t("navProjects"))}
      {/* about me */}
      {isSelected("/about", t("navAbout"))}
      {/* contact */}
      {isSelected("/contact", t("navContact"))}
    </ul>
  );
};

export default NavBar;
