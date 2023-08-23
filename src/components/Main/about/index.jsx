import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { i18n, t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center p-3 border border-purple-900 border-opacity-50">
      <p className="self-start text-lg">{t("navAbout")}</p>
      <div className="w-2/3">
        <p className="indent-2">
          {t("about1")}
          {/* My name is Joaquin Takara, I'm a Full Stack Developer. My current goal is to enter a company in the IT world to continue evolving my knowledge in the software development field. */}
        </p>
        <p className="indent-2">
          {t("about2")}
          {/* I am willing to bring my skills and knowledge to contribute to the development and success of a company. I hope to be able to work on various projects to continue learning and improving in my
        career as a developer. */}
        </p>
      </div>
    </div>
  );
};

export default About;
