import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Tooltip } from "flowbite-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { i18n, t } = useTranslation();
  const contactSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const msg = document.getElementById("message").value;

    const contactObject = {
      name,
      email,
      msg,
    };
    console.log(contactObject);
  };

  return (
    <div className="h-full">
      {/* <p className="absolute top-0 w-full pb-3 pl-3 text-lg font-semibold text-black dark:text-white">{t("navContact")}</p> */}
      <div className="flex flex-col justify-center w-full h-full p-4">
        <div className="flex flex-col items-center w-full h-full space-y-4 lg:flex-row justify-evenly lg:space-y-0">
          <div className="flex flex-col items-start justify-center font-semibold lg:h-full lg:space-y-4">
            <p className="w-min whitespace-nowrap">
              <span>Email: </span>
              <a href="mailto:joakotakara@gmail.com" className="lg:hover:text-fuchsia-700 lg:hover:dark:text-purple-600">
                joakotakara@gmail.com
              </a>
            </p>
            <p className="w-min whitespace-nowrap">
              <span>{t("contactPhone")}: </span>
              <a href="tel:5492215018488" className="lg:hover:text-fuchsia-700 lg:hover:dark:text-purple-600">
                +54 9221 501-8488
              </a>
            </p>
            <div className="flex w-full">
              <p className="font-semibold whitespace-nowrap">{`${t("social")}:`}</p>
              <div className="flex items-center justify-center w-full space-x-2">
                <a href="https://www.linkedin.com/in/joaquintakara/" target="_blank">
                  <Tooltip
                    content={t("myLinkedin")}
                    placement="bottom"
                    trigger="hover"
                    animation="duration-500"
                    style="auto"
                    theme={{
                      arrow: { style: { auto: "bg-fuchsia-700 dark:bg-purple-800" } },
                      style: { auto: "border border-fuchsia-700 bg-white text-gray-900 dark:border-nonea dark:bg-black dark:border-purple-800 dark:text-white py-1.5 px-2.5" },
                    }}
                  >
                    <AiFillLinkedin size={26} className="lg:hover:text-fuchsia-700 lg:hover:dark:text-purple-600"></AiFillLinkedin>
                  </Tooltip>
                </a>
                <a href="https://github.com/JoakoLP" target="_blank">
                  <Tooltip
                    content={t("myGithub")}
                    placement="bottom"
                    trigger="hover"
                    animation="duration-500"
                    style="auto"
                    theme={{
                      arrow: { style: { auto: "bg-fuchsia-700 dark:bg-purple-800" } },
                      style: { auto: "border border-fuchsia-700 bg-white text-gray-900 dark:border-nonea dark:bg-black dark:border-purple-800 dark:text-white py-1.5 px-2.5" },
                    }}
                  >
                    <AiFillGithub size={26} className="lg:hover:text-fuchsia-700 lg:hover:dark:text-purple-600"></AiFillGithub>
                  </Tooltip>
                </a>
              </div>
            </div>
          </div>
          <div className="max-h-full">
            <form action="" className="flex flex-col justify-center h-full space-y-2" onSubmit={contactSubmit}>
              <div className="flex w-full space-x-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder={t("contactName")}
                  className="rounded-sm w-1/2 focus:ring-fuchsia-600 bg-transparent focus:bg-white focus:dark:bg-black bg-opacity-0 focus:dark:bg-opacity-70 transition-colors duration-300 placeholder:text-black placeholder:dark:text-white placeholder:!text-opacity-80 border-fuchsia-700 dark:border-purple-900"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="rounded-sm w-1/2 focus:ring-fuchsia-600 bg-transparent focus:bg-white focus:dark:bg-black bg-opacity-0 focus:bg-opacity-70 focus:dark:bg-opacity-70 transition-colors duration-300 placeholder:text-black placeholder:dark:text-white placeholder:!text-opacity-80 border-fuchsia-700 dark:border-purple-900"
                />
              </div>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder={t("contactMsg")}
                className="rounded-sm focus:ring-fuchsia-600 w-full bg-transparent lg:!h-[200px] xl:max-h-[50%] focus:bg-white focus:dark:bg-black bg-opacity-0 focus:bg-opacity-70 focus:dark:bg-opacity-70 transition-colors duration-300 placeholder:text-black placeholder:dark:text-white placeholder:!text-opacity-80 border-fuchsia-700 dark:border-purple-900"
              ></textarea>
              <button type="submit" className="w-full bg-fuchsia-700/80 dark:bg-purple-900/90 text-white p-1.5 rounded-sm ">
                {t("contactSend")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
