import React, { useState } from "react";
import { projects } from "../../../data/projects";
import { Tooltip } from "flowbite-react";
import { Carousel, IconButton } from "@material-tailwind/react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { HiOutlinePlay, HiOutlinePause } from "react-icons/hi2";
import RenderProject from "./project";
import ProjectModal from "./projectmodal.js";

const Projects = () => {
  const [play, setPlay] = useState(window.innerWidth >= 768 ? true : false);
  const pausePlay = () => {
    setPlay(!play);
  };

  const tooltipStyle = {
    arrow: { style: { auto: "border-2 bg-white dark:bg-black border-fuchsia-700 dark:border-purple-800" } },
    style: { auto: "border border-fuchsia-700 select-none bg-white text-gray-900 dark:border-nonea dark:bg-black dark:border-purple-800 dark:text-white  py-1 px-2 rounded" },
  };

  const [open, setOpen] = useState(false);

  const [project, setProject] = useState();

  const handleOpen = (project) => {
    // console.log("specs", project?.specs);
    setOpen(!open);
    if (project) {
      setProject(project);
    } else {
      setProject();
    }

    // console.log(project);
  };

  return (
    <div className="relative h-full max-h-full overflow-hidden">
      {/* <p className="absolute top-0 w-full pb-3 pl-3 text-lg font-semibold text-black dark:text-white">{t("navProjects")}</p> */}
      <div className="h-full max-h-full space-y-2 overflow-auto" id="projectsCont">
        <div className="h-full max-h-full">
          <Carousel
            className=""
            loop
            autoplay={play}
            autoplayDelay={7000}
            transition={window.innerWidth >= 768 ? { duration: 0.5 } : { duration: 0.15 }}
            prevArrow={({ handlePrev }) => (
              <IconButton variant="text" color="purple" size="sm" onClick={handlePrev} className="!absolute top-1/2 left-0.5 md:left-1 transition-opacity duration-150 -translate-y-2/4 rounded-full ">
                <MdNavigateBefore size={30} className="text-purple-700" />
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="text"
                color="purple"
                size="sm"
                onClick={handleNext}
                className="!absolute top-1/2 right-0.5 md:right-1 transition-opacity duration-150 -translate-y-1/2 rounded-full "
              >
                <MdNavigateNext size={30} className="text-purple-700" />
              </IconButton>
            )}
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute z-50 flex gap-2 transition-opacity duration-150 bottom-2 md:bottom-4 left-2/4 -translate-x-2/4">
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
              return <RenderProject project={project} index={index} handleOpen={handleOpen} tooltipStyle={tooltipStyle} setPlay={setPlay} />;
            })}
          </Carousel>
          <div className="absolute bottom-1.5 left-1.5 md:bottom-4 md:left-4 " onClick={pausePlay}>
            <Tooltip content="Autoplay" trigger="hover" placement="left" animation="duration-500" style="auto" theme={tooltipStyle}>
              <div className="flex" onClick={pausePlay}>
                <HiOutlinePlay size={24} className={`${play ? " text-purple-700" : "text-purple-700/50"} transition-all duration-200`} />
                <HiOutlinePause size={24} className={`${play ? "text-purple-700/50" : " text-purple-700"} transition-all duration-200`} />
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
      <ProjectModal open={open} handleOpen={handleOpen} project={project} tooltipStyle={tooltipStyle} />
    </div>
  );
};

export default Projects;
