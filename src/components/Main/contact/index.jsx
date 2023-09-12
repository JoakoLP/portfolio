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
      <div className="flex flex-col w-full p-4 h-[93%] justify-center">
        <div className="flex w-full justify-evenly">
          <div className="flex flex-col justify-center h-full space-y-4 font-semibold">
            <p>
              <span>Email: </span>
              <a href="mailto:joakotakara@gmail.com" className="lg:hover:text-fuchsia-500 lg:hover:dark:text-purple-600">
                joakotakara@gmail.com
              </a>
            </p>
            <p>
              <span>{t("contactPhone")}: </span>
              <a href="tel:5492215018488" className="lg:hover:text-fuchsia-500 lg:hover:dark:text-purple-600">
                +54 9221 501-8488
              </a>
            </p>
            <div className="flex">
              <p className="font-semibold whitespace-nowrap">{`${t("social")}:`}</p>
              <div className="flex items-center justify-center w-full space-x-2">
                <a href="https://www.linkedin.com/in/joaquintakara/" target="_blank">
                  <Tooltip content={t("myLinkedin")} placement="bottom-end" trigger="hover" animation="duration-500" style="auto">
                    <AiFillLinkedin size={26} className="lg:hover:text-fuchsia-500 lg:hover:dark:text-purple-600"></AiFillLinkedin>
                  </Tooltip>
                </a>
                <a href="https://github.com/JoakoLP" target="_blank">
                  <Tooltip content={t("myGithub")} placement="bottom-start" trigger="hover" animation="duration-500" style="auto">
                    <AiFillGithub size={26} className="lg:hover:text-fuchsia-500 lg:hover:dark:text-purple-600"></AiFillGithub>
                  </Tooltip>
                </a>
              </div>
            </div>
          </div>
          <div>
            <form action="" className="space-y-2" onSubmit={contactSubmit}>
              <div className="flex w-full space-x-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder={t("contactName")}
                  className="rounded-sm focus:ring-fuchsia-600 bg-transparent focus:bg-white focus:dark:bg-black bg-opacity-0 focus:dark:bg-opacity-70 transition-colors duration-300 placeholder:text-black placeholder:dark:text-white placeholder:!text-opacity-80 border-fuchsia-700 dark:border-purple-900"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="rounded-sm focus:ring-fuchsia-600 bg-transparent focus:bg-white focus:dark:bg-black bg-opacity-0 focus:bg-opacity-70 focus:dark:bg-opacity-70 transition-colors duration-300 placeholder:text-black placeholder:dark:text-white placeholder:!text-opacity-80 border-fuchsia-700 dark:border-purple-900"
                />
              </div>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder={t("contactMsg")}
                className="rounded-sm focus:ring-fuchsia-600 w-full bg-transparent max-h-[50%] focus:bg-white focus:dark:bg-black bg-opacity-0 focus:bg-opacity-70 focus:dark:bg-opacity-70 transition-colors duration-300 placeholder:text-black placeholder:dark:text-white placeholder:!text-opacity-80 border-fuchsia-700 dark:border-purple-900"
              ></textarea>
              <button type="submit" className="w-full bg-fuchsia-600 dark:bg-purple-900 text-white abg-opacity-70 p-1.5 rounded-sm ">
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
