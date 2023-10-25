import { Carousel, Dialog, DialogBody, DialogFooter, DialogHeader, IconButton } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import { AiOutlineClose, AiOutlineLink } from "react-icons/ai";
import ProjectTech from "./projectTech";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { useEffect, useState } from "react";

const ProjectModal = ({ open, handleOpen, project, tooltipStyle }) => {
  const { i18n, t } = useTranslation();

  const [imgModal, setImgModal] = useState(false);
  const [imgSelected, setImgSelected] = useState();
  const handleImg = (asset) => {
    setImgModal(!imgModal);
    if (asset) {
      setImgSelected(asset);
    }
  };

  const renderAssets = (project) => {
    if (project) {
      // console.log(project?.media);
      return project?.media?.map((asset, index) => {
        // console.log(index);
        // console.log(asset);
        if (index > -1) {
          const assetType = asset.split(".").toReversed()[0];
          // console.log(asset);
          if (assetType == "mp4") {
            // console.log("si", assetType);
            return (
              <div className="flex items-center justify-center h-full p-4 md:p-6">
                <video controls muted className="w-full h-full">
                  <source src={asset} />
                </video>
              </div>
            );
          } else {
            return (
              <div className="flex max-h-[40vh] bg-purple-300/20 dark:bg-purple-300/5 items-center justify-center h-full p-4 md:p-6">
                <img
                  src={asset}
                  className="object-contain w-full h-full max-h-[40vh] cursor-pointer"
                  onClick={() => {
                    handleImg(asset);
                  }}
                />
              </div>
            );
          }
        }
      });
    }
  };

  return (
    <Dialog open={open} handler={handleOpen} className=" a!-translate-y-1/3 dark:bg-slate-950">
      <DialogHeader>
        <div className="flex items-center justify-between w-full text-black dark:text-white">
          <div>
            <p>{t(project?.name)}</p>
            {project?.url ? (
              <a className="flex items-center justify-center w-full space-x-1 apl-1 group/link" href={project.url} target="_blank">
                <AiOutlineLink className="text-black dark:text-white lg:group-hover/link:text-purple-500" size={12} />
                <span className="w-full text-sm font-normal truncate lg:group-hover/link:text-purple-500 whitespace-nowrap">{project.url}</span>
              </a>
            ) : null}
          </div>
          <IconButton onClick={handleOpen}>
            <AiOutlineClose size={20} />
          </IconButton>
        </div>
      </DialogHeader>
      <DialogBody className="space-y-3 overflow-hidden text-black dark:text-white">
        <Carousel
          className="items-center"
          loop
          transition={window.innerWidth >= 768 ? { duration: 0.5 } : { duration: 0.15 }}
          prevArrow={({ handlePrev }) => (
            <IconButton variant="text" color="purple" size="sm" onClick={handlePrev} className="!absolute top-1/2 left-0.5 md:left-1 transition-opacity duration-150 -translate-y-2/4 rounded-full ">
              <MdNavigateBefore size={30} className="text-purple-700" />
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton variant="text" color="purple" size="sm" onClick={handleNext} className="!absolute top-1/2 right-0.5 md:right-1 transition-opacity duration-150 -translate-y-1/2 rounded-full ">
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
          {/* <img src={project?.media[0]} /> */}
          {/* <img src="https://icons.getbootstrap.com/assets/img/icons-hero.png" /> */}
          {renderAssets(project)}
        </Carousel>

        <p className="text-black indent-2 dark:text-white">{t(project?.desc)}</p>

        {project?.specs ? (
          <div>
            <p className="font-semibold pt-1a">{t("projectFeatures")}:</p>
            <ul className="text-sm list-disc list-inside">
              {project?.specs.map((spec) => {
                // console.log(spec);
                return <li className="!marker:mr-1">{t(spec)}</li>;
              })}
            </ul>
          </div>
        ) : null}
      </DialogBody>
      <DialogFooter className="">
        <div className="flex justify-end w-full pt-4 border-t">
          <div className="flex space-x-2">
            <ProjectTech project={project} tooltipStyle={tooltipStyle} />
          </div>
        </div>
      </DialogFooter>

      <Dialog open={imgModal} handler={handleImg} size="xxl" className="dark:bg-slate-950 !max-h-screen">
        {imgSelected ? (
          <>
            <DialogHeader className="flex justify-end">
              <IconButton className="" onClick={handleImg}>
                <AiOutlineClose size={20} />
              </IconButton>
            </DialogHeader>
            <DialogBody className="max-h-[90%] flex justify-center items-center">
              <img src={imgSelected} className="max-h-full" />
            </DialogBody>
          </>
        ) : null}
      </Dialog>
    </Dialog>
  );
};

export default ProjectModal;
