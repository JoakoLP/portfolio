import React, { useEffect, useState } from "react";
import i18n from "../../i18n.ts";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

const Language = () => {
  let localLanguage = localStorage.getItem("lang") || "en";
  const [currentLang, setCurrentLang] = useState(localLanguage);

  // useEffect(() => {
  //   // console.log(localLanguage);
  //   setCurrentLang(localLanguage);
  //   i18n.changeLanguage(localLanguage);
  // }, []);

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
    <div className="absolute bottom-1 right-1 md:top-0 md:right-8 ">
      <div className="flex items-center h-8 w-min">
        {/* language selector (es/en) */}
        <button className="z-10 flex w-14 justify-center items-center p-0.5 space-x-1a" onClick={onChangeLang}>
          <GlobeAltIcon className="h-5 text-purple-600 aspect-square" />
          <p className="text-center">{currentLang}</p>
        </button>
      </div>
    </div>
  );
};

export default Language;
