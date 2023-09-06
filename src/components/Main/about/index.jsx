import React from "react";
import { useTranslation } from "react-i18next";
import profPhoto from "../../../assets/img/IMG_0818.png";

const About = () => {
  const { i18n, t } = useTranslation();
  // console.log(profPhoto);
  const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "GIT", "GitHub", "Node.js", "Express", "MongoDB"];
  const renderSkill = (skill) => {
    return (
      <div className="p-1 px-1.5 max-w-full bg-fuchsia-700 dark:bg-purple-900 bg-opacity-60 dark:bg-opacity-60 rounded-sm">
        <p className="text-white whitespace-nowrap">{skill}</p>
      </div>
    );
  };

  return (
    <div className="h-full max-h-full overflow-hidden">
      <div className="flex flex-col items-center justify-center h-full p-8 space-y-8">
        <div>
          <p className="pb-3 pl-3 text-lg font-semibold text-black dark:text-white">{t("navAbout")}</p>
          <div className="flex items-center justify-center p-4 space-x-12">
            <div className="overflow-hidden bg-opacity-50 rounded-full bg-purple-950 w-min h-min min-w-fit">
              <div className="flex w-72 overflow-hidden skew-x-[deg] justify-center items-center -m-6">
                <img src={profPhoto} alt="" className="object-cover w-full -skew-x-[deg] aspect-square" />
                {/* <div className={`bg-[url("https://i.imgur.com/hllpTZg.jpeg")]`}></div> */}
              </div>
            </div>
            <div className="pb-3 pl-3 text-lg font-semibold text-black dark:text-white">
              <p className="indent-2">{t("about1")}</p>
              <p className="indent-2">{t("about2")}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <p className="w-full text-xl font-semibold">{t("mySkills")}</p>
          <div className="flex p-4 space-x-2">
            {skills.map((skill) => {
              return renderSkill(skill);
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
