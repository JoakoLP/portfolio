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
        subtitle: "Web Developer",
        about1:
          "My name is Joaquin Takara, I'm a Full Stack Developer and Information Systems Engineering student. My current goal is to enter a company in the IT world to continue evolving my knowledge in the software development field.",
        about2:
          "I am willing to bring my skills and knowledge to contribute to the development and success of a company. I hope to be able to work on various projects to continue learning and improving in my career as a developer.",
        // navHome: "Home",
        navHome: "HOME",
        homeBio: "A passionate $$Full Stack developer$$ que busca su primer experiencia laboral.",
        // navProjects: "Projects",
        navProjects: "PROJECTS",
        share: "Copy link",
        // navAbout: "About me",
        navAbout: "ABOUT ME",
        myGithub: "My Github",
        myLinkedin: "My Linkedin",
        mySkills: "My Skills",
        curriculum: "Download Curriculum Vitae",
        curriculumLink: "https://drive.google.com/file/d/12vI7i24o39urPGjsRPQBVcR28jpQEPe6/view",
        // navContact: "Contact",
        navContact: "CONTACT",
        social: "Social media",
        contactName: "Name",
        contactMsg: "Message",
        contactSend: "Send",
        contactConfirm: "Message sended.",
        contactError: "Couldn't send, check the fields.",
        contactPhone: "Phone",
        projectFeatures: "Features",
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
          "Has a better search engine, user accounts and an administration panel where you can create categories, subcategories or view the list of users. In addition, you can add or edit products by assigning tags for a better search.",
        "pr-fullstackSpecs-Accounts": "User accounts: register and login.",
        "pr-fullstackSpecs-Cart": "Shopping cart.",
        "pr-fullstackSpecs-Search": "Search engine with category filter.",
        "pr-fullstackSpecs-Admin": "Admin panel: Add products, product list, product edit, user list, add and edit categories and subcategories.",
        "pr-fullstackSpecs-Categ": "Categorization: Categories y subcategories.",
        "pr-fullstackSpecs-Assets": "Cloudinary: Users and products images storaged in the cloud.",
        // Calculator App Project
        "pr-calculatorPy": "Calculator",
        "pr-calculatorPySubtitle": "Calculator App",
        "pr-CalculatorDesc": "Desktop calculator made in Python.",
        "pr-calculatorPySpecs-Operations": "You can do addition, subtraction, division, multiplication, percentage and exponentiation.",
        "pr-calculatorPySpecs-Errors": "It has procedures to avoid some possible calculation errors.",
        "pr-calculatorPySpecs-Exponent": "It allows powers of more than one digit, with representation in superscript characters.",
        "pr-calculatorPySpecs-Write": "Allows manual writing of formulas in the entry.",
        // Bugsite
        "pr-bugsite": "BugSite",
        "pr-bugsiteSubtitle": "Issue tracker App",
        "pr-bugsiteDesc": "Issue tracker App with MySQL made in Next.js",
        "pr-bugsiteSpecs-MySQL": "Uses MySQL.",
        "pr-bugsiteSpecs-TypeScript": "Uses TypeScript",
      },
    },
    es: {
      translation: {
        subtitle: "Desarrollador Web",
        about1:
          "Mi nombre es Joaquin Takara, soy desarrollador Full Stack y estudiante de Ingeniería en Sistemas de Información. Mi objetivo actual es ingresar a una empresa del mundo IT para seguir profundizando mis conocimientos en el campo del desarrollo de software.",
        about2:
          "Estoy dispuesto a aportar mis habilidades y conocimientos para contribuir al desarrollo y éxito de una empresa. Espero poder trabajar en diversos proyectos para seguir aprendiendo y mejorando en mi carrera como desarrollador.",
        // navHome: "Principal",
        navHome: "PRINCIPAL",
        homeBio: "Un $$desarrollador Full Stack$$ apasionado en el área que busca su primer experiencia laboral.",
        // navProjects: "Proyectos",
        navProjects: "PROYECTOS",
        share: "Copiar link",
        // navAbout: "Acerca de mí",
        navAbout: "ACERCA DE MÍ",
        myGithub: "Mi Github",
        myLinkedin: "Mi Linkedin",
        mySkills: "Mis habilidades",
        curriculum: "Descargar Curriculum Vitae",
        curriculumLink: "https://drive.google.com/file/d/17VWi_8xajX0Htca6QsXK7eCOibUULrNF/view",
        // navContact: "Contacto",
        navContact: "CONTACTO",
        social: "Redes",
        contactName: "Nombre",
        contactMsg: "Mensaje",
        contactSend: "Enviar",
        contactConfirm: "Mensaje enviado.",
        contactError: "No se ha podido enviar, revisa los campos.",
        contactPhone: "Celular",
        projectFeatures: "Características",
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
          "Cuenta con un mejor motor de búsqueda, cuentas de usuario y panel de administración donde se pueden crear categorías, subcategorías o ver el listado de usuarios. Además, se puede agregar o editar productos asignandole etiquetas para una mejor busqueda.",
        "pr-fullstackSpecs-Accounts": "Cuentas de usuario: registro y inicio de sesión.",
        "pr-fullstackSpecs-Cart": "Carrito de compras.",
        "pr-fullstackSpecs-Search": "Motor de búsqueda con filtro de categorías.",
        "pr-fullstackSpecs-Admin": "Panel de administración: Agregar productos, listado de productos, editar productos, listado de usuarios, crear y editar categorías y subcategorías.",
        "pr-fullstackSpecs-Categ": "Categorización: Categorías y subcategorías.",
        "pr-fullstackSpecs-Assets": "Cloudinary: Imágenes de usuarios y productos almacenados en la nube.",
        // Calculator App Project
        "pr-calculatorPy": "Calculadora",
        "pr-calculatorPySubtitle": "Aplicación de calculadora",
        "pr-CalculatorDesc": "Calculadora de escritorio hecha en Python.",
        "pr-calculatorPySpecs-Operations": "Puede hacer suma, resta, división, multiplicación, porcentaje y potenciación.",
        "pr-calculatorPySpecs-Errors": "Tiene procedimientos para evitar algunos posibles errores de cálculo.",
        "pr-calculatorPySpecs-Exponent": "Permite potencias de mas de un dígito, con representación en carácteres superíndices.",
        "pr-calculatorPySpecs-Write": "Permite escritura manual de fórmulas en la entrada.",
        // Bugsite
        "pr-bugsite": "BugSite",
        "pr-bugsiteSubtitle": "Aplicación para seguimiento de errores.",
        "pr-bugsiteDesc": "Aplicación para seguimiento de errores con MySQL hecho en Next.js",
        "pr-bugsiteSpecs-MySQL": "Usa MySQL.",
        "pr-bugsiteSpecs-TypeScript": "Usa TypeScript",
      },
    },
  },
});

export default i18n;
