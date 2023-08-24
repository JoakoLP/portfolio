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
        // front end project numen
        "pr-numenTitleFE": "Gaming Store - Numen Project",
        "pr-numenSubTitleFE": "Front-End group project made during the course in Academia Numen.",
        "pr-numenDescFE": "E-Commerce of computer supplies. It has a search engine, filtering by category and shopping cart.",
        // back end project numen
        "pr-numenTitleBE": "CRUD Server - Numen Project",
        "pr-numenSubTitleBE": "Back-End individual project made during the course in Academia Numen.",
        "pr-numenDescBE":
          "CRUD Server connected with an external API. It has account routes (login, register, logout, unregister, bookmarks, info (change name, email or password)) and communication routes with the API (search, bookmarks, etc.)",
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
        // front end project numen
        "pr-numenTitleFE": "Gaming Store - Proyecto Numen",
        "pr-numenSubTitleFE": "Proyecto grupal Front-End realizado en el curso de Academia Numen.",
        "pr-numenDescFE": "E-Commerce de insumos de informática. Cuenta con buscador, filtrado por categoría y carrito de compras.",
        // back end project numen
        "pr-numenTitleBE": "Servidor CRUD - Proyecto Numen",
        "pr-numenSubTitleBE": "Proyecto individual Back-End realizado en el curso de Academia Numen.",
        "pr-numenDescBE":
          "Servidor CRUD conectado con API externa. Cuenta con rutas de cuenta (login, register, logout, unregister, bookmarks, info (change name, email o password)) y rutas de comunicación con la API (search, bookmarks, etc.) ",
      },
    },
  },
});

export default i18n;
