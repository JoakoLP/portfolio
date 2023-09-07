import React from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { i18n, t } = useTranslation();
  const [first, second, third] = t("homeBio").split("$$");

  return (
    <div className="h-full max-h-full overflow-hidden relative">
      {/* <p className="absolute top-0 w-full pb-3 pl-3 text-lg font-semibold text-black dark:text-white">{t("navHome")}</p> */}
      <div>
        <div>
          <p className="text-2xl font-semibold text-fuchsia-600 dark:text-purple-600">
            Hola, soy Joaquin Takara. <span className="text-2xl">👋🏼</span>
          </p>
          {/* <p>Soy desarrollador Full Stack y estoy buscando mi primer experiencia laboral.</p> */}
          {/* <p>{console.log(t("homeBio").split(" "))}</p> */}
          {/* <p>{t("homeBio")}</p> */}
          <p>
            {first} <span className="text-fuchsia-500 dark:text-purple-500">{second}</span> {third}
          </p>
          {/* <p>Un desarrollador Full Stack apasionado en el área que busca su primer experiencia laboral.</p> */}
          {/* <p>Un desarrollador Full Stack en búsqueda de su primer experiencia laboral.</p> */}
          {/* <p>Soy desarrollador Full Stack enfocado en desarrollar aplicaciones funcionales</p> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
