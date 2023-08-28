import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const OnLoadAnimation = () => {
  const [done, setDone] = useState(undefined);
  const { i18n, t } = useTranslation();

  const letterMotion = () => {
    const loading = document.getElementById("loading");
    const tLoad = document.getElementById("tLoad");
    const kLoad = document.getElementById("kLoad");
    const rLoad = document.getElementById("rLoad");

    const tHead = document.getElementById("tHead");
    const kHead = document.getElementById("kHead");
    const rHead = document.getElementById("rHead");

    console.log(tLoad, kLoad, rLoad);
    console.log(tHead, kHead, rHead);

    const singleMove = (itemLoad, itemHead) => {
      // get Y px to move
      const HeadOffTop = itemHead.offsetTop;
      const LoadOffTop = itemLoad.offsetTop;
      console.log(HeadOffTop);
      console.log(LoadOffTop);
      const moveY = LoadOffTop - HeadOffTop;
      console.log(moveY);

      // get X px to move
      const HeadOffLeft = itemHead.offsetLeft;
      const LoadOffLeft = itemLoad.offsetLeft;
      console.log(HeadOffLeft);
      console.log(LoadOffLeft);
      const moveX = LoadOffLeft - HeadOffLeft;
      // const moveX = `-${LoadOffLeft - HeadOffLeft}px`;
      // const moveX = `-translate-x-[${LoadOffLeft - HeadOffLeft}px]`;
      console.log(moveX);

      // itemLoad.className = moveX;
      // itemLoad.className = moveX + "relative text-purple-400 relative transform transition-all duration-[1000ms]";
      if (itemLoad.innerHTML === "T") {
        console.log(itemLoad.innerHTML.toLowerCase());
        itemLoad.innerHTML = itemLoad.innerHTML.toLowerCase();
      }
      itemLoad.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
      // itemLoad.className = `text-purple-400 relative translate-y-[${moveY}px] translate-x-[${moveX}px] transform transition-all duration-[1000ms]`;
      setTimeout(() => {
        itemLoad.className = `  opacity-0 transition-opacity duration-[1000ms]`;
      }, 2000);
    };

    setTimeout(() => {
      if (loading) {
        loading.className = "fixed w-full h-full z-50 bg-black flex justify-center items-center text-2xl flex-col text-black transition-colors duration-[750ms]";
        setTimeout(() => {
          singleMove(tLoad, tHead);
          singleMove(kLoad, kHead);
          singleMove(rLoad, rHead);
          setTimeout(() => {
            loading.className = "fixed w-full h-full z-50 bg-black text-black flex justify-center items-center text-2xl flex-col opacity-0 transition duration-[750ms]";
          }, 500);
        }, 300);
      }
    }, 1000);

    // setInterval(() => {
    //   loading.className = "fixed w-full h-full z-50 bg-black text-white flex justify-center items-center text-2xl flex-col bg-opacity-0 transition duration-[1000ms]";
    // }, 2000);
  };

  useEffect(() => {
    letterMotion();
    setTimeout(() => {
      setDone(true);
    }, 3000);
  }, []);
  return (
    <>
      {!done ? (
        <div className="fixed z-50 flex flex-col items-center justify-center w-full h-full text-2xl text-white bg-black " id="loading">
          <div className="flex items-center justify-center pb-10 space-x-1 font-['Oswald']">
            <p className="flex space-x-1 whitespace-nowrap text-semibold">
              <span>Joaquin</span>
              {/* <span className="opacity-0">"</span> */}
              <span className="flex w-full ">
                <span id="tLoad" className="!opacity-100 relative transform transition-all duration-[750ms] !text-white">
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
