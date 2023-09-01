import React from "react";
import { useTranslation } from "react-i18next";
import profPhoto from "../../../assets/img/IMG_0818.png";

const About = () => {
  const { i18n, t } = useTranslation();
  console.log(profPhoto);
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="self-start text-lg font-semibold">{t("navAbout")}</p>
      <div className="w-2/3">
        <div className="relative w-64 overflow-hidden -skew-x-12 aspect-square">
          <img src={profPhoto} alt="" className="absolute -right-[5%] top-0 bottom-0 -left-[5%] skew-x-12" />
          <div className={`bg-[url("https://i.imgur.com/hllpTZg.jpeg")]`}></div>
        </div>
        <p className="indent-2">{t("about1")}</p>
        <p className="indent-2">{t("about2")}</p>
      </div>
    </div>
  );
};

export default About;
