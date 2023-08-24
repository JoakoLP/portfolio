import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { i18n, t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="self-start font-semibold text-lg">{t("navAbout")}</p>
      <div className="w-2/3">
        <p className="indent-2">{t("about1")}</p>
        <p className="indent-2">{t("about2")}</p>
      </div>
    </div>
  );
};

export default About;
