import { Tooltip } from "flowbite-react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, SiCreatereactapp, SiNextdotjs, SiJavascript, SiPython } from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";

const ProjectTech = ({ project, tooltipStyle }) => {
  let techOnProject = {
    // react: undefined,
    // tailwind: undefined,
    // html: undefined,
    // express: undefined,
    // js: undefined,
    // node: undefined,
    // mongo: undefined,
    // CRA: undefined,
    // next: undefined,
    react: false,
    tailwind: false,
    html: false,
    express: false,
    js: false,
    node: false,
    mongo: false,
    CRA: false,
    next: false,
    python: false,
  };

  const disableTech = () => {
    techOnProject = {
      react: false,
      tailwind: false,
      html: false,
      express: false,
      js: false,
      node: false,
      mongo: false,
      CRA: false,
      next: false,
      python: false,
    };
  };

  const checkTechnologies = () => {
    project?.technologies.forEach((tech) => {
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
      } else if (tech === "python") {
        techOnProject.python = true;
      }
    });
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
    } else if (tech === "python") {
      techOnProject.python = true;
    }
  });

  // useEffect(() => {
  //   disableTech();
  //   if (project) {
  //     console.log("si", project);
  //     checkTechnologies();
  //   }
  //   console.log(techOnProject);
  // }, [project]);

  return (
    <>
      <div className={techOnProject.CRA ? "visible" : "hidden"}>
        <Tooltip content="Create React App" trigger="hover" animation="duration-500" style="auto" theme={tooltipStyle}>
          <SiCreatereactapp className={"visible lg:hover:text-purple-700 lg:hover:dark:text-purple-600 text-cyan-400 transition-colors duration-150"} size={22} />
        </Tooltip>
      </div>
      <div className={techOnProject.next ? "visible" : "hidden"}>
        <Tooltip content="Next.js" trigger="hover" animation="duration-500" style="auto" theme={tooltipStyle}>
          <SiNextdotjs
            className={"visible lg:hover:text-purple-700 lg:hover:dark:text-purple-600 text-black bg-white outline outline-1 outline-white rounded-full transition-colors duration-150"}
            size={22}
          />
        </Tooltip>
      </div>
      <div className={techOnProject.express ? "visible" : "hidden"}>
        <Tooltip content="Express.js" trigger="hover" animation="duration-500" style="auto" theme={tooltipStyle}>
          <SiExpress
            className={"visible lg:hover:text-purple-700 lg:hover:dark:text-purple-600 bg-white text-black outline outline-1 outline-black lg:hover:outline-purple-600 transition-colors duration-150"}
            size={22}
          />
        </Tooltip>
      </div>
      <div className={techOnProject.mongo ? "visible" : "hidden"}>
        <Tooltip content="MongoDB" trigger="hover" animation="duration-500" style="auto" theme={tooltipStyle}>
          <SiMongodb className={"visible lg:hover:text-purple-700 lg:hover:dark:text-purple-600 text-green-500 transition-colors duration-150"} size={22} />
        </Tooltip>
      </div>

      <div className={techOnProject.react ? "visible" : "hidden"}>
        <Tooltip content="React" trigger="hover" animation="duration-500" style="auto" theme={tooltipStyle}>
          <FaReact className={"visible lg:hover:text-purple-700 lg:hover:dark:text-purple-600 text-cyan-400 transition-colors duration-150"} size={22} />
        </Tooltip>
      </div>
      <div className={techOnProject.tailwind ? "visible" : "hidden"}>
        <Tooltip content="TailwindCSS" trigger="hover" animation="duration-500" style="auto" theme={tooltipStyle}>
          <SiTailwindcss className={"visible lg:hover:text-purple-700 lg:hover:dark:text-purple-600 text-cyan-500 transition-colors duration-150"} size={22} />
        </Tooltip>
      </div>
      <div className={techOnProject.html ? "visible" : "hidden"}>
        <Tooltip content="HTML" trigger="hover" animation="duration-500" style="auto" theme={tooltipStyle}>
          <AiOutlineHtml5 className={"visible lg:hover:text-purple-700 lg:hover:dark:text-purple-600 transition-colors duration-150"} size={22} />
        </Tooltip>
      </div>
      <div className={techOnProject.js ? "visible" : "hidden"}>
        <Tooltip content="JavaScript" trigger="hover" animation="duration-500" style="auto" theme={tooltipStyle}>
          <SiJavascript className={"visible lg:hover:text-purple-700 lg:hover:dark:text-purple-600 bg-black text-yellow-300 transition-colors duration-150"} size={22} />
        </Tooltip>
      </div>
      <div className={techOnProject.node ? "visible" : "hidden"}>
        <Tooltip content="Node.js" trigger="hover" animation="duration-500" style="auto" theme={tooltipStyle}>
          <FaNodeJs className={"visible lg:hover:text-purple-700 lg:hover:dark:text-purple-600 text-green-500 transition-colors duration-150"} size={22} />
        </Tooltip>
      </div>
      <div className={techOnProject.python ? "visible" : "hidden"}>
        <Tooltip content="Python" trigger="hover" animation="duration-500" style="auto" theme={tooltipStyle}>
          <SiPython className={"visible lg:hover:text-purple-700 lg:hover:dark:text-purple-600 text-blue-500 bg-yellow-300 p-0.5 rounded-full transition-colors duration-150"} size={26} />
        </Tooltip>
      </div>
    </>
  );
};

export default ProjectTech;
