import { useTranslation } from "react-i18next";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { Tooltip } from "flowbite-react";
import ProjectTech from "./projectTech";

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
          <div className="flex items-center justify-center h-[45%] w-full lg:w-1/2 xl:w-5/12 md:h-fit">
            {/* media(first photo) */}
            <img
              src={project.thumbnail}
              alt={t(project.name)}
              onClick={() => {
                handleOpen(project);
                setPlay(false);
              }}
              className="max-w-full cursor-pointer xl:max-w-[420px] w-max max-h-full xl:max-h-[420px] m-2.5 rounded lg:hover:shadow-md lg:hover:shadow-slate-400 outline outline-1 lg:hover:outline-2 outline-fuchsia-700 dark:lg:hover:shadow-none  dark:outline-purple-700 transition-transform duration-250 ease-in-out"
            />
          </div>
          {/* {project.media.map((media) => {
            return <img src={media} alt="" className="w-96" />;
            // <img src="https://camo.githubusercontent.com/ebcbf7ea5902c6226b623a6ff57320de772520238390d273cdcc2fd019035050/68747470733a2f2f692e696d6775722e636f6d2f59424f55644b4a2e706e67" alt="" />;
          })} */}
          <div className="flex max-w-full flex-col pt-1 pb-7 md:justify-center px-3 md:pt-0 md:pb-0 h-[55%] lg:w-1/2 lg:h-full xl:w-7/12">
            <div>
              <div className="w-full pb-1 truncate">
                <span className="w-full text-xl font-semibold whitespace-nowrap">{t(project.name)}</span>
                {project.url ? (
                  <a className="flex items-center justify-center w-full space-x-1 apl-1 group/link" href={project.url} target="_blank">
                    <AiOutlineLink className="text-black dark:text-white lg:group-hover/link:text-purple-500" size={12} />
                    <span className="w-full text-xs truncate lg:group-hover/link:text-purple-500 whitespace-nowrap">{project.url}</span>
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
