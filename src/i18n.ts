import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en", // default language
  fallbackLng: "en", // language that will be loaded in case the translations the user is looking for are not available.
  interpolation: {
    escapeValue: false, // used to escape the values and avoid XSS attacks, we will set it to false, because React already does it by default.
  },
  resources: {
    en: {
      translation: {
        title: "Joaquin Takara - Portfolio",
        subtitle: "Web Developer",
        about1: "My name is Joaquin Takara, I'm a Full Stack Developer. My current goal is to enter a company in the IT world to continue evolving my knowledge in the software development field.",
        about2:
          "I am willing to bring my skills and knowledge to contribute to the development and success of a company. I hope to be able to work on various projects to continue learning and improving in my career as a developer.",
        navHome: "Home",
        navProjects: "Projects",
        navAbout: "About me",
        navContact: "Contact",
        "pr-numenTitle": "Project Numen - E-Commerce",
        "pr-numenDesc": "Group project made during the course in Academia Numen. We exceed the requirements requested to approve.",
      },
    },
    es: {
      translation: {
        title: "Joaquin Takara - Portfolio",
        subtitle: "Desarrollador Web",
        about1:
          "Mi nombre es Joaquin Takara, soy desarrollador Full Stack. Mi objetivo actual es ingresar a una empresa del mundo IT para seguir profundizando mis conocimientos en el campo del desarrollo de software.",
        about2:
          "Estoy dispuesto a aportar mis habilidades y conocimientos para contribuir al desarrollo y éxito de una empresa. Espero poder trabajar en diversos proyectos para seguir aprendiendo y mejorando en mi carrera como desarrollador.",
        navHome: "Principal",
        navProjects: "Proyectos",
        navAbout: "Acerca de mí",
        navContact: "Contacto",
        "pr-numenTitle": "Proyecto Numen - E-Commerce",
        "pr-numenDesc": "Trabajo grupal realizado en el curso de Academia Numen. Superamos las consignas solicitadas para aprobar.",
      },
    },
  },
});

export default i18n;
