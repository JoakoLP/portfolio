import { useTranslation } from "react-i18next";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { Tooltip } from "flowbite-react";
import ProjectTech from "./projectTech";
import { BsHandIndex } from "react-icons/bs";

const RenderProject = ({ project, index, handleOpen, tooltipStyle, setPlay }) => {
  const { i18n, t } = useTranslation();

  // console.log(index % 2);
  return (
    <>
      <div
        id={project.id}
        className={`h-full max-h-full p-4 md:p-6 overflow-hidden border-purple-700 dark:border-gray-800 ${index % 2 == 0 ? "bg-white dark:bg-black" : "bg-fuchsia-100 dark:bg-neutral-900"}`}
      >
        {/* <hr className="sticky top-0 z-10 -mx-1 border-gray-800 border-1 h-min group-first-of-type:hidden [:nth-of-type(2)_&]:-top-[1px]" /> */}
        {/* title */}
        <div className="relative flex flex-col items-center justify-center w-full h-full lg:space-y-0 lg:flex-row">
          <div className="flex relativea items-center justify-center h-[45%] w-full lg:w-1/2 xl:w-5/12 md:h-fit">
            <div className="relative object-contain max-w-full max-h-full overflow-hidden transition-transform xl:max-w-[420px] xl:max-h-[420px] ease-in-out rounded w-fit h-fit lg:hover:shadow-md lg:hover:shadow-slate-400 outline outline-1 lg:hover:outline-2 outline-fuchsia-700 dark:lg:hover:shadow-none dark:outline-purple-700 duration-250">
              <img
                src={project.thumbnail}
                alt={t(project.name)}
                onClick={() => {
                  handleOpen(project);
                  setPlay(false);
                }}
                className="w-full h-full"
              />
              <div className="absolute h-8 pointer-events-none aspect-square bottom-2 left-2">
                <div className="absolute h-8 aspect-square animate-duration-[2000ms] animate-ping p-1.5 overflow-visible rounded-full dark:bg-purple-500/70 bg-fuchsia-500/70"></div>
                <div className="relative animate-pulse inline-flex p-1.5 overflow-visible rounded-full dark:bg-purple-500/70 bg-fuchsia-500/70">
                  <BsHandIndex size={20} className="text-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-w-full flex-col pt-1 pb-7 md:justify-center px-3 md:pt-0 md:pb-0 h-[55%] lg:w-1/2 lg:h-full xl:w-7/12">
            <div>
              <div className="w-full pb-1 truncate">
                <span className="w-full text-xl font-semibold whitespace-nowrap">{t(project.name)}</span>
                {project.url ? (
                  <a className="flex items-center justify-center space-x-1 w-min group/link" href={project.url} target="_blank">
                    <AiOutlineLink className="text-black dark:text-white lg:group-hover/link:text-purple-500" size={12} />
                    <span className="text-sm truncate w-min lg:group-hover/link:text-purple-500 whitespace-nowrap">{project.url}</span>
                  </a>
                ) : null}
              </div>
              <p className={project.subTitle ? "visible italic text-sm" : "hidden"}>{t(project.subTitle)}</p>
            </div>
            {/* description */}
            <p className="text-start indent-1">{t(project.desc)}</p>
          </div>
          <div className="absolute right-0 flex self-end space-x-2 md:bottom-0 bottom-1 ">
            {/* technologies */}
            <ProjectTech project={project} tooltipStyle={tooltipStyle} />
          </div>

          <a className={project?.github ? "visible absolute top-0 right-0" : "hidden"} href={project?.github} target="_blank">
            <Tooltip content="GitHub" trigger="hover" animation="duration-500" style="auto" theme={tooltipStyle}>
              <AiFillGithub className={"visible lg:hover:text-purple-700 lg:hover:dark:text-purple-600 transition-colors duration-150"} size={22} />
            </Tooltip>
          </a>
        </div>
        {/* <hr className="sticky top-0 z-10 -mx-1 border-purple-900 group-last-of-type:hidden" /> */}
      </div>
    </>
  );
};

export default RenderProject;
