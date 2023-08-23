import React, { useEffect, useState } from "react";
import i18n from "../../i18n.ts";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

const Language = () => {
  let localLanguage = localStorage.getItem("lang") || "en";
  const [currentLang, setCurrentLang] = useState(localLanguage);

  useEffect(() => {
    // console.log(localLanguage);
    setCurrentLang(localLanguage);
    i18n.changeLanguage(localLanguage);
  }, []);

  const onChangeLang = () => {
    // console.log(currentLang);
    if (i18n.language === "en") {
      i18n.changeLanguage("es");
      localStorage.setItem("lang", "es");
      setCurrentLang("es");
    } else {
      i18n.changeLanguage("en");
      localStorage.setItem("lang", "en");
      setCurrentLang("en");
    }
  };
  return (
    <div className="top-0 right-10 absolute ">
      <div className="flex items-end w-min h-10">
        {/* language selector (es/en) */}
        <button className="z-10 flex w-14 justify-center items-center p-0.5 space-x-1" onClick={onChangeLang}>
          <GlobeAltIcon className="h-5 aspect-square text-purple-600" />
          <p className="leading-none">{currentLang}</p>
        </button>
      </div>
    </div>
  );
};

export default Language;
