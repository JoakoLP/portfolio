import React, { useState } from "react";
import { projects } from "../../../data/projects";
import { useTranslation } from "react-i18next";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, SiCreatereactapp, SiNextdotjs, SiJavascript } from "react-icons/si";
import { AiFillGithub, AiOutlineLink, AiOutlineHtml5 } from "react-icons/ai";
import { BiLogoJavascript } from "react-icons/bi";
import { Tooltip } from "flowbite-react";
import { Carousel, IconButton } from "@material-tailwind/react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { HiOutlinePlay, HiOutlinePause } from "react-icons/hi2";

const Projects = () => {
  const { i18n, t } = useTranslation();
  const [play, setPlay] = useState(true);
  const pausePlay = () => {
    setPlay(!play);
  };
  const renderProject = (project, index) => {
    let techOnProject = {
      react: false,
      tailwind: false,
      html: false,
      express: false,
      js: false,
      node: false,
      mongo: false,
      CRA: false,
      next: false,
    };
    project.technologies.forEach((tech) => {
      if (tech === "react") {
        techOnProject.react = true;
      } else if (tech === "tailwind") {
        techOnProject.tailwind = true;
      } else if (tech === "html") {
        techOnProject.html = true;
      } else if (tech === "express") {
        techOnProject.express = true;
      } else if (tech === "js") {
        techOnProject.js = true;
      } else if (tech === "node") {
        techOnProject.node = true;
      } else if (tech === "mongo") {
        techOnProject.mongo = true;
      } else if (tech === "CRA") {
        techOnProject.CRA = true;
      } else if (tech === "next") {
        techOnProject.next = true;
      }
    });

    // console.log(index % 2);
    return (
      <>
        <div
          id={project.id}
          className={`h-full max-h-full p-6 overflow-hidden border-purple-700 dark:border-gray-800 group ${index % 2 == 0 ? "bg-white dark:bg-black" : "bg-violet-100 dark:bg-neutral-900"}`}
        >
          {/* <hr className="sticky top-0 z-10 -mx-1 border-gray-800 border-1 h-min group-first-of-type:hidden [:nth-of-type(2)_&]:-top-[1px]" /> */}
          {/* title */}
          <div className="relative flex items-center w-full h-full">
            <div className="flex items-center justify-center w-1/2 xl:w-5/12 h-fit">
              {/* media(first photo) */}
              <img
                src={project.media[0]}
                alt={t(project.name)}
                className="max-w-[300px] xl:max-w-[420px] w-max max-h-[300px] xl:max-h-[420px] m-2.5 rounded lg:hover:shadow-md lg:hover:shadow-slate-400 outline outline-1 lg:hover:outline-2 outline-fuchsia-700 dark:lg:hover:shadow-none  dark:outline-purple-700 transition-transform duration-250 ease-in-out"
              />
            </div>
            {/* {project.media.map((media) => {
              return <img src={media} alt="" className="w-96" />;
              // <img src="https://camo.githubusercontent.com/ebcbf7ea5902c6226b623a6ff57320de772520238390d273cdcc2fd019035050/68747470733a2f2f692e696d6775722e636f6d2f59424f55644b4a2e706e67" alt="" />;
            })} */}
            <div className="flex flex-col justify-center w-1/2 h-full px-3 xl:w-7/12">
              <div className="">
                <a className="flex items-center space-x-1 group/link w-min" href={project.url} target="_blank">
                  <span className="text-lg font-semibold cursor-pointer lg:group-hover/link:text-purple-500 whitespace-nowrap">{t(project.name)}</span>
                  {project.url ? <AiOutlineLink className="invisible text-purple-500 lg:group-hover/link:visible" /> : null}
                </a>
                <p className={project.subTitle ? "visible italic text-sm" : "hidden"}>{t(project.subTitle)}</p>
              </div>
              {/* description */}
              <p className="text-start indent-1">{t(project.desc)}</p>
            </div>
            <div className="absolute bottom-0 right-0 flex self-end space-x-2">
              {/* technologies */}
              <div className={techOnProject.CRA ? "visible" : "hidden"}>
                <Tooltip content="Create React App" trigger="hover" animation="duration-500" style="auto">
                  <SiCreatereactapp
                    className={techOnProject.CRA ? "visible lg:hover:text-purple-700 lg:hover:dark:text-purple-600 text-cyan-400 transition-colors duration-150" : "hidden"}
                    size={22}
                  />
                </Tooltip>
              </div>
              <div className={techOnProject.next ? "visible" : "hidden"}>
                <Tooltip content="Next.js" trigger="hover" animation="duration-500" style="auto">
                  <SiNextdotjs
                    className={
                      techOnProject.next
                        ? "visible lg:hover:text-purple-700 lg:hover:dark:text-purple-600 text-black bg-white outline outline-1 outline-white rounded-full transition-colors duration-150"
                        : "hidden"
                    }
                    size={22}
                  />
                </Tooltip>
              </div>
              <div className={techOnProject.express ? "visible" : "hidden"}>
                <Tooltip content="Express.js" trigger="hover" animation="duration-500" style="auto">
                  <SiExpress
                    className={
                      techOnProject.express
                        ? "visible lg:hover:text-purple-700 lg:hover:dark:text-purple-600 bg-white text-black outline outline-1 outline-black lg:hover:outline-purple-600 transition-colors duration-150"
                        : "hidden"
                    }
                    size={22}
                  />
                </Tooltip>
              </div>
              <div className={techOnProject.mongo ? "visible" : "hidden"}>
                <Tooltip content="MongoDB" trigger="hover" animation="duration-500" style="auto">
                  <SiMongodb className={techOnProject.mongo ? "visible lg:hover:text-purple-700 lg:hover:dark:text-purple-600 text-green-500 transition-colors duration-150" : "hidden"} size={22} />
                </Tooltip>
              </div>

              <div className={techOnProject.react ? "visible" : "hidden"}>
                <Tooltip content="React" trigger="hover" animation="duration-500" style="auto">
                  <FaReact className={techOnProject.react ? "visible lg:hover:text-purple-700 lg:hover:dark:text-purple-600 text-cyan-400 transition-colors duration-150" : "hidden"} size={22} />
                </Tooltip>
              </div>
              <div className={techOnProject.tailwind ? "visible" : "hidden"}>
                <Tooltip content="TailwindCSS" trigger="hover" animation="duration-500" style="auto">
                  <SiTailwindcss
                    className={techOnProject.tailwind ? "visible lg:hover:text-purple-700 lg:hover:dark:text-purple-600 text-cyan-500 transition-colors duration-150" : "hidden"}
                    size={22}
                  />
                </Tooltip>
              </div>
              <div className={techOnProject.html ? "visible" : "hidden"}>
                <Tooltip content="HTML" trigger="hover" animation="duration-500" style="auto">
                  <AiOutlineHtml5 className={techOnProject.html ? "visible lg:hover:text-purple-700 lg:hover:dark:text-purple-600 transition-colors duration-150" : "hidden"} size={22} />
                </Tooltip>
              </div>
              <div className={techOnProject.js ? "visible" : "hidden"}>
                <Tooltip content="JavaScript" trigger="hover" animation="duration-500" style="auto">
                  <SiJavascript
                    className={techOnProject.js ? "visible lg:hover:text-purple-700 lg:hover:dark:text-purple-600 bg-black text-yellow-300 transition-colors duration-150" : "hidden"}
                    size={22}
                  />
                </Tooltip>
              </div>
              <div className={techOnProject.node ? "visible" : "hidden"}>
                <Tooltip content="Node.js" trigger="hover" animation="duration-500" style="auto">
                  <FaNodeJs className={techOnProject.node ? "visible lg:hover:text-purple-700 lg:hover:dark:text-purple-600 text-green-500 transition-colors duration-150" : "hidden"} size={22} />
                </Tooltip>
              </div>
            </div>

            <a className={project?.github ? "visible absolute top-0 right-0" : "hidden"} href={project?.github} target="_blank">
              <Tooltip content="GitHub" trigger="hover" animation="duration-500" style="auto">
                <AiFillGithub className={project?.github ? "visible lg:hover:text-purple-700 lg:hover:dark:text-purple-600 transition-colors duration-150" : "hidden"} size={22} />
              </Tooltip>
            </a>
          </div>
          {/* <hr className="sticky top-0 z-10 -mx-1 border-purple-900 group-last-of-type:hidden" /> */}
        </div>
      </>
    );
  };

  return (
    <div className="relative h-full max-h-full overflow-hidden">
      {/* <p className="absolute top-0 w-full pb-3 pl-3 text-lg font-semibold text-black dark:text-white">{t("navProjects")}</p> */}
      <div className="h-full max-h-full space-y-2 overflow-auto" id="projectsCont">
        <div className="h-full max-h-full">
          <Carousel
            className="group/carousel"
            loop
            autoplay={play}
            autoplayDelay={7000}
            prevArrow={({ handlePrev }) => (
              <IconButton variant="text" color="purple" size="sm" onClick={handlePrev} className="!absolute top-2/4 left-1 transition-opacity duration-150 -translate-y-2/4 rounded-full ">
                <MdNavigateBefore size={22} className="text-purple-700" />
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton variant="text" color="purple" size="sm" onClick={handleNext} className="!absolute top-2/4 right-1 transition-opacity duration-150 -translate-y-2/4 rounded-full ">
                <MdNavigateNext size={22} className="text-purple-700" />
              </IconButton>
            )}
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute z-50 flex gap-2 transition-opacity duration-150 bottom-4 left-2/4 -translate-x-2/4">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-purple-700" : "w-4 bg-purple-700/50"}`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            {projects.map((project, index) => {
              return renderProject(project, index);
            })}
          </Carousel>
          <div className="absolute bottom-4 left-4 " onClick={pausePlay}>
            <Tooltip content="Autoplay" trigger="hover" placement="left" animation="duration-500" style="auto">
              <div className="flex" onClick={pausePlay}>
                <HiOutlinePlay size={24} className={`${play ? " text-purple-700" : "text-purple-700/50"} transition-all duration-200`} />
                <HiOutlinePause size={24} className={`${play ? "text-purple-700/50" : " text-purple-700"} transition-all duration-200`} />
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
