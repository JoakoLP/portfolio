import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const OnLoadAnimation = () => {
  const [done, setDone] = useState(undefined);
  const { i18n, t } = useTranslation();

  const letterMotion = () => {
    const loadCont = document.getElementById("loadCont");
    loadCont.className = `flex items-center justify-center pb-10 space-x-1 font-['Oswald'] transition-opacity duration-1000 opacity-100 select-none`;
    setTimeout(() => {
      const loading = document.getElementById("loading");
      const tLoad = document.getElementById("tLoad");
      const kLoad = document.getElementById("kLoad");
      const rLoad = document.getElementById("rLoad");

      const tHead = document.getElementById("tHead");
      const kHead = document.getElementById("kHead");
      const rHead = document.getElementById("rHead");

      // console.log(tLoad, kLoad, rLoad);
      // console.log(tHead, kHead, rHead);

      const singleMove = (itemLoad, itemHead) => {
        // get Y px to move
        // const HeadOffTop = itemHead.offsetTop;
        const HeadOffTop = itemHead.getBoundingClientRect().y;
        // const LoadOffTop = itemLoad.offsetTop;
        const LoadOffTop = itemLoad.getBoundingClientRect().y;
        // console.log({ HeadOffTop });
        // console.log({ LoadOffTop });
        const moveY = LoadOffTop - HeadOffTop;
        // console.log({ moveY });

        // get X px to move
        // const HeadOffLeft = itemHead.offsetLeft;
        const HeadOffLeft = itemHead.getBoundingClientRect().x;
        // const LoadOffLeft = itemLoad.offsetLeft;
        const LoadOffLeft = itemLoad.getBoundingClientRect().x;
        // console.log({ HeadOffLeft });
        // console.log({ LoadOffLeft });
        let moveX = LoadOffLeft - HeadOffLeft;
        // console.log({ moveX });

        if (itemLoad.innerHTML === "T") {
          const tLoadWidth = itemLoad.getBoundingClientRect().width;
          // console.log({ tLoadWidth });
          const tHeadWidth = itemHead.getBoundingClientRect().width;
          // console.log({ tHeadWidth });
          const diffWidth = (tLoadWidth - tHeadWidth) / 2;
          // console.log({ diffWidth });
          moveX += diffWidth;
          // console.log({ moveX });
          // console.log(itemLoad.innerHTML.toLowerCase());
          itemLoad.innerHTML = itemLoad.innerHTML.toLowerCase();
        }
        itemLoad.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
        itemLoad.className = "!opacity-100 relative transform transition-all duration-[500ms] inline !text-white ";
        setTimeout(() => {
          itemLoad.className = "!opacity-100 relative transform transition-colors duration-[500ms] text-purple-600 ";
        }, 500);
      };

      setTimeout(() => {
        if (loading) {
          loading.className = "fixed w-full h-full z-50 bg-black flex justify-center items-center text-2xl flex-col text-black transition-colors duration-[500ms]";
          setTimeout(() => {
            singleMove(tLoad, tHead);
            singleMove(kLoad, kHead);
            singleMove(rLoad, rHead);
            setTimeout(() => {
              loading.className = "fixed w-full h-full z-50 bg-black text-black flex justify-center items-center text-2xl flex-col opacity-0 transition duration-[500ms]";
              setTimeout(() => {
                setDone(true);
              }, 500);
            }, 750);
          }, 300);
        }
      }, 1000);
    }, 1000);
  };

  useEffect(() => {
    // setTimeout(() => {
    letterMotion();
    // }, 1000);
  }, []);

  return (
    <>
      {!done ? (
        <div className="fixed z-50 flex flex-col items-center justify-center w-full h-full text-2xl text-white bg-black " id="loading">
          <div id="loadCont" className="flex items-center justify-center pb-10 space-x-1 font-['Oswald'] transition-opacity duration-1000 opacity-0 select-none">
            <p className="flex space-x-1 whitespace-nowrap text-semibold">
              <span>Joaquin</span>
              {/* <span className="opacity-0">"</span> */}
              <span className="flex w-full ">
                <span id="tLoad" className="!opacity-100 relative transform transition-all duration-[750ms] inline !text-white">
                  T
                </span>
                a
                <span id="kLoad" className="!opacity-100 relative transform transition-all duration-[750ms] inline !text-white">
                  k
                </span>
                a
                <span id="rLoad" className="!opacity-100 relative transform transition-all duration-[750ms] inline !text-white">
                  r
                </span>
                a
              </span>
            </p>
            <p className="font-thin">{t("portfolio")}</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default OnLoadAnimation;
