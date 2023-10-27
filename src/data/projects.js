// collection of projects with: name, photo/video/gif, description, technologies, url, git.
import eCommerce from "./e-commerce";

export const projects = [
  {
    id: "projecto-fullstack",
    name: "pr-fullstackTitle",
    subTitle: "pr-fullstackSubTitle",
    thumbnail: eCommerce.thumbnail,
    media: eCommerce.assets,
    specs: ["pr-fullstackSpecs-Accounts", "pr-fullstackSpecs-Cart", "pr-fullstackSpecs-Search", "pr-fullstackSpecs-Admin", "pr-fullstackSpecs-Categ", "pr-fullstackSpecs-Assets"],
    desc: "pr-fullstackDesc",
    technologies: ["react", "tailwind", "js", "node", "express", "mongo", "CRA"],
    url: "https://e-commerce.joaquintakara.com/",
    github: "https://github.com/JoakoLP/e-commerce",
  },
  {
    id: "project-numen-front",
    name: "pr-numenTitleFE",
    subTitle: "pr-numenSubTitleFE",
    thumbnail: "https://camo.githubusercontent.com/ebcbf7ea5902c6226b623a6ff57320de772520238390d273cdcc2fd019035050/68747470733a2f2f692e696d6775722e636f6d2f59424f55644b4a2e706e67",
    media: ["https://camo.githubusercontent.com/ebcbf7ea5902c6226b623a6ff57320de772520238390d273cdcc2fd019035050/68747470733a2f2f692e696d6775722e636f6d2f59424f55644b4a2e706e67"],
    desc: "pr-numenDescFE",
    technologies: ["react", "tailwind", "js", "node", "CRA"],
    url: "https://proyecto-numen-nine.vercel.app/",
    github: "https://github.com/JoakoLP/proyecto-numen",
  },
  {
    id: "project-numen-back",
    name: "pr-numenTitleBE",
    subTitle: "pr-numenSubTitleBE",
    thumbnail: "https://raw.githubusercontent.com/JoakoLP/proyecto-backend/master/proyectoBackEnd.jpg",
    media: ["https://raw.githubusercontent.com/JoakoLP/proyecto-backend/master/proyectoBackEnd.jpg"],
    desc: "pr-numenDescBE",
    technologies: ["express", "node", "js"],
    url: "https://github.com/JoakoLP/proyecto-backend#readme",
    github: "https://github.com/JoakoLP/proyecto-backend",
  },
  // {
  //   id: "proyecto-numen",
  //   name: "pr-numenTitle",
  //   media: ["https://camo.githubusercontent.com/ebcbf7ea5902c6226b623a6ff57320de772520238390d273cdcc2fd019035050/68747470733a2f2f692e696d6775722e636f6d2f59424f55644b4a2e706e67"],
  //   desc: "pr-numenDesc",
  //   technologies: ["react", "tailwind", "next"],
  //   // url: "https://proyecto-numen-nine.vercel.app/",
  //   github: "https://github.com/JoakoLP/proyecto-numen",
  // },
  // {
  //   id: "proyecto-numen",
  //   name: "pr-numenTitle",
  //   media: ["https://camo.githubusercontent.com/ebcbf7ea5902c6226b623a6ff57320de772520238390d273cdcc2fd019035050/68747470733a2f2f692e696d6775722e636f6d2f59424f55644b4a2e706e67"],
  //   desc: "pr-numenDesc",
  //   technologies: ["node", "mongo"],
  //   // url: "https://proyecto-numen-nine.vercel.app/",
  //   github: "https://github.com/JoakoLP/proyecto-numen",
  // },
  // {
  //   id: "e-commerce",
  //   name: t("pr-numenTitle"),
  //   media: [],
  //   desc: t("pr-numenTitle"),
  //   technologies: [],
  //   url: "",
  // },
];
