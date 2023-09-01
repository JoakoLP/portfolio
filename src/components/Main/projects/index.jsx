import React from "react";
import { projects } from "../../../data/projects";
import { useTranslation } from "react-i18next";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, SiCreatereactapp, SiNextdotjs } from "react-icons/si";
import { AiFillGithub, AiOutlineLink, AiOutlineHtml5 } from "react-icons/ai";
import { BiLogoJavascript } from "react-icons/bi";
import { Tooltip } from "flowbite-react";

const Projects = () => {
  const { i18n, t } = useTranslation();

  const renderProject = (project) => {
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
    return (
      <>
        <div id={project.id} className="max-h-full p-1 overflow-hidden border border-purple-700 rounded bg-slate-100 dark:border-gray-800 dark:bg-black group">
          {/* <hr className="sticky top-0 z-10 -mx-1 border-gray-800 border-1 h-min group-first-of-type:hidden [:nth-of-type(2)_&]:-top-[1px]" /> */}
          {/* title */}
          <div className="relative flex items-center space-x-2">
            <div className="flex min-w-[420px] justify-center items-center h-fit">
              {/* media(first photo) */}
              <img
                src={project.media[0]}
                alt={t(project.name)}
                className="h-[250px] m-2.5 rounded lg:hover:shadow-md lg:hover:shadow-slate-400 dark:lg:hover:shadow-none dark:lg:hover:outline dark:lg:hover:outline-1 dark:lg:hover:outline-purple-700  lg:hover:scale-105 transition-transform duration-250 ease-in-out"
              />
            </div>
            {/* {project.media.map((media) => {
              return <img src={media} alt="" className="w-96" />;
              // <img src="https://camo.githubusercontent.com/ebcbf7ea5902c6226b623a6ff57320de772520238390d273cdcc2fd019035050/68747470733a2f2f692e696d6775722e636f6d2f59424f55644b4a2e706e67" alt="" />;
            })} */}
            <div className="flex flex-col h-full">
              <div className="absolute top-2">
                <div className="flex items-center space-x-1 group/link">
                  <a href={project.url} target="_blank" className="text-lg font-semibold cursor-pointer lg:hover:text-purple-500 ">
                    {t(project.name)}
                  </a>
                  {project.url ? <AiOutlineLink className="hidden text-purple-500 group-hover/link:inline" /> : null}
                </div>
                <p className={project.subTitle ? "visible italic text-sm" : "hidden"}>{t(project.subTitle)}</p>
              </div>
              {/* description */}
              <p className="text-start indent-1">{t(project.desc)}</p>
            </div>
            <div className="absolute bottom-0 right-0 flex self-end space-x-2">
              {/* technologies */}
              <div className={techOnProject.CRA ? "visible" : "hidden"}>
                <Tooltip content="Create React App" trigger="hover" animation="duration-500" style="auto">
                  <SiCreatereactapp className={techOnProject.CRA ? "visible lg:hover:text-purple-700 lg:hover:dark:text-purple-600" : "hidden"} size={22} />
                </Tooltip>
              </div>
              <div className={techOnProject.next ? "visible" : "hidden"}>
                <Tooltip content="Next.js" trigger="hover" animation="duration-500" style="auto">
                  <SiNextdotjs className={techOnProject.next ? "visible lg:hover:text-purple-700 lg:hover:dark:text-purple-600" : "hidden"} size={22} />
                </Tooltip>
              </div>
              <div className={techOnProject.express ? "visible" : "hidden"}>
                <Tooltip content="Express.js" trigger="hover" animation="duration-500" style="auto">
                  <SiExpress className={techOnProject.express ? "visible lg:hover:text-purple-700 lg:hover:dark:text-purple-600" : "hidden"} size={22} />
                </Tooltip>
              </div>
              <div className={techOnProject.mongo ? "visible" : "hidden"}>
                <Tooltip content="MongoDB" trigger="hover" animation="duration-500" style="auto">
                  <SiMongodb className={techOnProject.mongo ? "visible lg:hover:text-purple-700 lg:hover:dark:text-purple-600" : "hidden"} size={22} />
                </Tooltip>
              </div>

              <div className={techOnProject.react ? "visible" : "hidden"}>
                <Tooltip content="React" trigger="hover" animation="duration-500" style="auto">
                  <FaReact className={techOnProject.react ? "visible lg:hover:text-purple-700 lg:hover:dark:text-purple-600" : "hidden"} size={22} />
                </Tooltip>
              </div>
              <div className={techOnProject.tailwind ? "visible" : "hidden"}>
                <Tooltip content="TailwindCSS" trigger="hover" animation="duration-500" style="auto">
                  <SiTailwindcss className={techOnProject.tailwind ? "visible lg:hover:text-purple-700 lg:hover:dark:text-purple-600" : "hidden"} size={22} />
                </Tooltip>
              </div>
              <div className={techOnProject.html ? "visible" : "hidden"}>
                <Tooltip content="HTML" trigger="hover" animation="duration-500" style="auto">
                  <AiOutlineHtml5 className={techOnProject.html ? "visible lg:hover:text-purple-700 lg:hover:dark:text-purple-600" : "hidden"} size={22} />
                </Tooltip>
              </div>
              <div className={techOnProject.js ? "visible" : "hidden"}>
                <Tooltip content="JavaScript" trigger="hover" animation="duration-500" style="auto">
                  <BiLogoJavascript className={techOnProject.js ? "visible lg:hover:text-purple-700 lg:hover:dark:text-purple-600" : "hidden"} size={22} />
                </Tooltip>
              </div>
              <div className={techOnProject.node ? "visible" : "hidden"}>
                <Tooltip content="Node.js" trigger="hover" animation="duration-500" style="auto">
                  <FaNodeJs className={techOnProject.node ? "visible lg:hover:text-purple-700 lg:hover:dark:text-purple-600" : "hidden"} size={22} />
                </Tooltip>
              </div>
            </div>

            <a className={project?.github ? "visible absolute top-0 right-0" : "hidden"} href={project?.github} target="_blank">
              <Tooltip content="GitHub" trigger="hover" animation="duration-500" style="auto">
                <AiFillGithub className={project?.github ? "visible lg:hover:text-purple-700 lg:hover:dark:text-purple-600" : "hidden"} size={22} />
              </Tooltip>
            </a>
          </div>
          {/* <hr className="sticky top-0 z-10 -mx-1 border-purple-900 group-last-of-type:hidden" /> */}
        </div>
      </>
    );
  };

  return (
    <div className="h-full max-h-full overflow-hidden">
      <p className="pb-3 pl-3 text-lg font-semibold text-black dark:text-white">{t("navProjects")}</p>
      <div className="h-[93%] max-h-full space-y-2 overflow-auto" id="projectsCont">
        {projects.map((project) => {
          return renderProject(project);
        })}
      </div>
    </div>
  );
};

export default Projects;
