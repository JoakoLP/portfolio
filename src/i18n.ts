import i18n from "i18next";
import { initReactI18next } from "react-i18next";

let localLanguage = localStorage.getItem("lang") || "en";
i18n.use(initReactI18next).init({
  lng: localLanguage, // default language
  fallbackLng: "en", // language that will be loaded in case the translations the user is looking for are not available.
  interpolation: {
    escapeValue: false, // used to escape the values and avoid XSS attacks, we will set it to false, because React already does it by default.
  },
  resources: {
    en: {
      translation: {
        title: "Joaquin Takara - Portfolio",
        subtitle: "Web Developer",
        portfolio: "Portfolio",
        about1: "My name is Joaquin Takara, I'm a Full Stack Developer. My current goal is to enter a company in the IT world to continue evolving my knowledge in the software development field.",
        about2:
          "I am willing to bring my skills and knowledge to contribute to the development and success of a company. I hope to be able to work on various projects to continue learning and improving in my career as a developer.",
        // navHome: "Home",
        navHome: "HOME",
        homeBio: "A passionate $$Full Stack developer$$ que busca su primer experiencia laboral.",
        // navProjects: "Projects",
        navProjects: "PROJECTS",
        // navAbout: "About me",
        navAbout: "ABOUT ME",
        myGithub: "My Github",
        myLinkedin: "My Linkedin",
        mySkills: "My Skills",
        // navContact: "Contact",
        navContact: "CONTACT",
        social: "Social media",
        contactName: "Name",
        contactMsg: "Message",
        contactSend: "Send",
        contactConfirm: "Message sended.",
        contactError: "Couldn't send, check the fields.",
        contactPhone: "Phone",
        // front end project numen
        "pr-numenTitleFE": "Gaming Store - Numen Project",
        "pr-numenSubTitleFE": "Front-End group project made during the course in Academia Numen.",
        "pr-numenDescFE": "E-Commerce of computer supplies. It has a search engine, filtering by category and shopping cart.",
        // back end project numen
        "pr-numenTitleBE": "CRUD Server - Numen Project",
        "pr-numenSubTitleBE": "Back-End individual project made during the course in Academia Numen.",
        "pr-numenDescBE":
          "CRUD Server connected with an external API. It has account routes (login, register, logout, unregister, bookmarks, info (change name, email or password)) and communication routes with the API (search, bookmarks, etc.)",
        // fullstack project
        "pr-fullstackTitle": "FullStack E-Commerce",
        "pr-fullstackSubTitle": "FullStack E-Commerce connected to MongoDB via server. ",
        "pr-fullstackDesc":
          "Unlike the one previously created for the course, this one has a better search engine, user accounts and an administration panel where you can create categories, subcategories or view the list of users. In addition, you can add or edit products by assigning tags for a better search.",
      },
    },
    es: {
      translation: {
        title: "Joaquin Takara - Portafolio",
        subtitle: "Desarrollador Web",
        portfolio: "Portafolio",
        about1:
          "Mi nombre es Joaquin Takara, soy desarrollador Full Stack. Mi objetivo actual es ingresar a una empresa del mundo IT para seguir profundizando mis conocimientos en el campo del desarrollo de software.",
        about2:
          "Estoy dispuesto a aportar mis habilidades y conocimientos para contribuir al desarrollo y éxito de una empresa. Espero poder trabajar en diversos proyectos para seguir aprendiendo y mejorando en mi carrera como desarrollador.",
        // navHome: "Principal",
        navHome: "PRINCIPAL",
        homeBio: "Un $$desarrollador Full Stack$$ apasionado en el área que busca su primer experiencia laboral.",
        // navProjects: "Proyectos",
        navProjects: "PROYECTOS",
        // navAbout: "Acerca de mí",
        navAbout: "ACERCA DE MÍ",
        myGithub: "Mi Github",
        myLinkedin: "Mi Linkedin",
        mySkills: "Mis habilidades",
        // navContact: "Contacto",
        navContact: "CONTACTO",
        social: "Redes",
        contactName: "Nombre",
        contactMsg: "Mensaje",
        contactSend: "Enviar",
        contactConfirm: "Mensaje enviado.",
        contactError: "No se ha podido enviar, revisa los campos.",
        contactPhone: "Celular",
        // front end project numen
        "pr-numenTitleFE": "Gaming Store - Proyecto Numen",
        "pr-numenSubTitleFE": "Proyecto grupal Front-End realizado en el curso de Academia Numen.",
        "pr-numenDescFE": "E-Commerce de insumos de informática. Cuenta con buscador, filtrado por categoría y carrito de compras.",
        // back end project numen
        "pr-numenTitleBE": "Servidor CRUD - Proyecto Numen",
        "pr-numenSubTitleBE": "Proyecto individual Back-End realizado en el curso de Academia Numen.",
        "pr-numenDescBE":
          "Servidor CRUD conectado con API externa. Cuenta con rutas de cuenta (login, register, logout, unregister, bookmarks, info (change name, email o password)) y rutas de comunicación con la API (search, bookmarks, etc.) ",
        // fullstack project
        "pr-fullstackTitle": "E-Commerce FullStack",
        "pr-fullstackSubTitle": "E-Commerce FullStack conectado a MongoDB mediante el servidor.",
        "pr-fullstackDesc":
          "A diferencia del creado anteriormente para el curso, este cuenta con un mejor motor de búsqueda, cuentas de usuario y panel de administración donde se pueden crear categorías, subcategorías o ver el listado de usuarios. Además, se puede agregar o editar productos asignandole etiquetas para una mejor busqueda.",
      },
    },
  },
});

export default i18n;
