import React from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const current = location.pathname;

  const { i18n, t } = useTranslation();

  const isSelected = (path, children) => {
    if (current === path) {
      return <li className="italic font-semibold text-purple-500 list-disc">{children}</li>;
    } else {
      return (
        <li>
          <Link to={`${path}`}>{children}</Link>
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
          <p className="text-2xl tracking-widest">tkr</p>
        </div>
        <ul className="flex flex-col items-start space-y-1">
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
      <div className="flex justify-end w-full max-h-full p-2 h-2/3">
        <div className="w-2/3 h-full max-h-full p-3 overflow-hidden ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Header;
