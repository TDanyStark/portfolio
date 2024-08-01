import type { HeaderDataType, HeroDataType, AboutDataType, ExperienceDataType, ProjectsDataType, SkillsDataType, ContactDataType, FooterDataType, TestimonialsDataType, EducationDataType  } from "../types";

export const HeaderData: HeaderDataType = {
  logoName: "Daniel Amado",
  logoURL: "img/logowhite.webp",
  idioma: "es",
  navLinks: [
    { text: "Acerca", url: "#about" },
    { text: "Experiencia", url: "#experience" },
    { text: "Proyectos", url: "#projects" },
    { text: "Skills", url: "#skills" },
    { text: "Contácteme", url: "#contact" },
  ],
};

// Datos exportados
export const HeroData: HeroDataType = {
  estado: "¡Abierto a nuevas oportunidades!",
  saludo: "¡Hola, soy",
  nombre: "Daniel",
  perfil: "Desarrollador Fullstack",
  LinkedIn: "https://www.linkedin.com/in/danielamadov/",
  GitHub: "https://github.com/TDanyStark",
  CV: "cv/cv_daniel_amado_es.pdf",
};

export const AboutData: AboutDataType = {
  etiqueta: "Acerca de mi",
  titulo: "¿Quién es",
  tituloResaltado: "Daniel?",
  nombre: "Daniel Amado",
  rutaFoto: "img/daniel.webp",
  parrafo: "<strong>Soy un apasionado por la tecnología</strong> y siempre al día con las últimas tendencias. Me encanta resolver problemas y encontrar soluciones creativas. Tengo <strong>1 año de experiencia como docente</strong> y <strong>3 años en el sector IT y de programación</strong>, donde he podido interactuar en todas las etapas de un desarrollo web, desde el <strong>frontend</strong>, que es mi pasión, hasta el backend y el despliegue. Siempre busco <strong>automatizar procesos a través de la programación</strong>, optimizando operaciones y mejorando la productividad. Además, <strong>utilizo la inteligencia artificial en los procesos donde es útil</strong> para ser altamente eficiente en áreas clave. Me encanta colaborar y aprender continuamente, enfrentando desafíos que me permitan aplicar y expandir mis habilidades para <strong>impulsar la eficiencia y el rendimiento en cada proyecto</strong> que emprendo."
};

// organizar experiencia de mayor a menor
export const ExperienceData: ExperienceDataType = {
  etiqueta: "Experiencia",
  titulo: "Trayectoria",
  tituloResaltado: "Profesional",
  parrafo: "Mi experiencia laboral ha sido muy variada, desde la docencia hasta el desarrollo de soluciones digitales con código, y con CMS",
  experiencia: [
    {
      cargo: "Developer and communications leader",
      empresa: "Market Support",
      fecha: "Feb/2023 - Actualidad",
      descripcion: "Lideré y desarrollé múltiples páginas y aplicaciones web para diversos clientes, incluyendo un laboratorio de renombre mundial. Implementé procesos de automatización mediante programación, mejorando la eficiencia operativa. Además, lideré un equipo técnico en transmisiones.",
      verMas: "cv/cv_daniel_amado_es.pdf"
    },
    {
      cargo: "Instructor de Programación",
      empresa: "SENA",
      fecha: "Nov/2022 - Dic/2022",
      descripcion: "Impartí conocimientos en Python a jóvenes, fomentando la innovación y el pensamiento disruptivo para la exitosa culminación de proyectos en el área."
    },
    {
      cargo: "Docente de programación",
      empresa: "Liceo adventista libertad",
      fecha: "Feb/2022 - Nov/2022",
      descripcion: "Guié a estudiantes de último grado en la finalización de sus proyectos de programación, apoyando el desarrollo de sus proyectos de grado."
    },
    {
      cargo: "Desarrollador Web",
      empresa: "Innovacenter SAS",
      fecha: "Ene/2019 - Feb/2022",
      descripcion: "Desarrollé un sistema contable con manejo de inventario y ventas, y lideré proyectos de creación de páginas web para clientes de la organización."
    },
  ]
};

export const ProjectsData: ProjectsDataType = {
  etiqueta: "Proyectos",
  titulo: "Experiencias",
  tituloResaltado: "Significativas",
  parrafo: "Estos son algunos de los proyectos recientes que han sido fundamentales en mi desarrollo profesional y han contribuido significativamente a mi crecimiento en la industria.",
  proyectos: [
    {
      img: "img/portafolio/projects/calculadora.webp",
      titulo: "TiroCare Control",
      descripcion: "Calculadora de dosis de un medicamento para pacientes con hipotiroidismo.",
      tecnologias: ["Astro JS", "React", "Tailwind"],
      link: "https://market-support.com/apps/abbott/tirocare-control/",
      LinkGithub: "https://github.com/TDanyStark/tirocare-control/"
    },
    {
      img: "img/portafolio/projects/elmetodo.webp",
      titulo: "El método más confiable es tu conocimiento",
      descripcion: "Este aplicativo tiene como objetivo probar y aumentar los conocimientos que tienen los estudiantes universitarios acerca de los diferentes métodos anticonceptivos.",
      tecnologias: ["Astro JS", "React", "Tailwind"],
      link: "https://market-support.com/apps/abbott/el-metodo-mas-confiable/",
      LinkGithub: "https://github.com/TDanyStark/el-metodo-mas-confiable-es-tu-conocimiento/"
    },
    {
      img: "img/portafolio/projects/quetantoconosex.webp",
      titulo: "Que tanto conosex",
      descripcion: "Este aplicativo tiene como objetivo promover, de manera lúdica, conocimientos clave sobre salud sexual y reproductiva.",
      tecnologias: ["Astro JS", "HTML", "CSS", "JS", "Tailwind"],
      link: "https://market-support.com/apps/abbott/que-tanto-conosex/",
      LinkGithub: "https://github.com/TDanyStark/app-que-tanto-conosex/"
    },
    {
      img: "img/portafolio/projects/mandalas.webp",
      titulo: "Pintar Mandalas",
      descripcion: "Este aplicativo tiene como propósito invitar a los pacientes a relajarse y reducir el estrés mediante la pintura de mandalas.",
      tecnologias: ["Astro JS", "HTML", "JS", "Tailwind"],
      link: "https://market-support.com/apps/abbott/mandalas-emocionales/",
      LinkGithub: "https://github.com/TDanyStark/pintar-mandalas/"
    },
    {
      img: "img/portafolio/projects/album_sii.webp",
      titulo: "Album SII",
      descripcion: "Este aplicativo tiene como propósito que los usuarios puedan completar su album teniendo en cuenta el tipo de paciente y su tratamiento correcto.",
      tecnologias: ["PHP", "HTML", "JS", "CSS", "MYSQL"],
      link: "https://market-support.com/apps/album_sii_bloqued/login",
      LinkGithub: "https://github.com/TDanyStark/album_sii/"
    },
    {
      img: "img/portafolio/projects/mapadolor.webp",
      titulo: "Mapa interactivo del dolor",
      descripcion: "Este aplicativo tiene como propósito medir el umbral del dolor de un paciente.",
      tecnologias: ["HTML", "JS", "CSS"],
      link: "https://market-support.com/apps/mapa-interactivo-dolor/",
      LinkGithub: "https://github.com/TDanyStark/Mapa-casos-de-dolor/"
    },
    {
      img: "img/portafolio/projects/market.webp",
      titulo: "Market Support",
      descripcion: "Pagina web de la empresa Market Support.",
      tecnologias: ["WordPress", "CSS"],
      link: "https://market-support.com",
    },
    {
      img: "img/portafolio/projects/bbm.webp",
      titulo: "BBM producciones",
      descripcion: "Pagina web de la empresa BBM producciones.",
      tecnologias: ["WordPress", "CSS"],
      link: "https://bbmproducciones.com.co/",
    },
    {
      img: "img/portafolio/projects/autoclic.webp",
      titulo: "Autoclic",
      descripcion: "Pagina web de la empresa Autoclic.",
      tecnologias: ["WordPress", "CSS", "PHP"],
      link: "https://autoclic.com.co/",
    },
    {
      img: "img/portafolio/projects/cafecitoconcata.webp",
      titulo: "Cafecito con Cata",
      descripcion: "Pagina web de la empresa cafecito con cata, Woocommerce, learndash, membresías y afiliados, CSS, PHP.",
      tecnologias: ["Woocommerce", "CSS", "PHP"],
      link: "https://cafecitoconcata.com/",
    },
    {
      img: "img/portafolio/projects/equipomas.webp",
      titulo: "Equipo MAS",
      descripcion: "Pagina web de la empresa Equipo MAS, Woocommerce, learndash, membresías, CSS, PHP.",
      tecnologias: ["Woocommerce", "CSS", "PHP"],
      link: "https://equipomas.com/",
    },
    {
      img: "img/portafolio/projects/hellomarketeros.webp",
      titulo: "Hello marketeros",
      descripcion: "Pagina web de la empresa Hello marketeros, Woocommerce, learndash, CSS.",
      tecnologias: ["Woocommerce", "CSS"],
      link: "https://cursos.market-support.com/",
    },
    {
      img: "img/portafolio/projects/enextge.webp",
      titulo: "e-nextGe",
      descripcion: "Pagina web de la empresa e-nextGe.",
      tecnologias: ["Woocommerce", "CSS"],
      link: "https://e-nextge.com/",
    },
    {
      img: "img/portafolio/projects/sheetzoom.webp",
      titulo: "Creador de webinars, y automatización",
      descripcion: "Sistema para crear webinars en zoom automáticamente con un solo clic, envío de links en formato HTML, envío de informes, etc.",
      tecnologias: ["GAS", "Google sheets"],
    },
    {
      img: "img/portafolio/projects/enviomails.webp",
      titulo: "Email marketing con sheets y GAS",
      descripcion: "Script para hacer email marketing a 1500 correos al dia.",
      tecnologias: ["GAS", "Google sheets"],
    },
  ],
}

export const SkillsData: SkillsDataType = {
  etiqueta: "Skills",
  titulo: "Fortalezas",
  tituloResaltado: "Profesionales",
  parrafo: "Estas son algunas de las habilidades que he adquirido y perfeccionado a lo largo de mi carrera profesional.",
  skills: [
    {
      nombre: "React",
      img: "img/portafolio/skills/react.svg",
    },
    {
      nombre: "JavaScript",
      img: "img/portafolio/skills/js.svg",
    },
    {
      nombre: "Astro JS",
      img: "img/portafolio/skills/astro.svg",
    },
    {
      nombre: "HTML",
      img: "img/portafolio/skills/html.svg",
    },
    {
      nombre: "CSS",
      img: "img/portafolio/skills/CSS.svg",
    },
    {
      nombre: "PHP",
      img: "img/portafolio/skills/php.svg",
    },
    {
      nombre: "Code Igniter",
      img: "img/portafolio/skills/codeigniter.svg",
    },
    {
      nombre: "Python",
      img: "img/portafolio/skills/python.svg",
    },
    {
      nombre: "Selenium",
      img: "img/portafolio/skills/selenium.svg",
    },
    {
      nombre: "Vue",
      img: "img/portafolio/skills/vue.svg",
    },
    {
      nombre: "Git",
      img: "img/portafolio/skills/Git.svg",
    },
    {
      nombre: "Github",
      img: "img/portafolio/skills/github.svg",
    },
    {
      nombre: "WordPress",
      img: "img/portafolio/skills/wordpress.svg",
    },
    {
      nombre: "Woocommerce",
      img: "img/portafolio/skills/woo.svg",
    },
    {
      nombre: "Muchas más",
      img: "img/portafolio/skills/more.svg",
    },
  ]
}

export const TestimonialsData: TestimonialsDataType = {
  etiqueta: "Testimonios",
  titulo: "Referencias",
  tituloResaltado: "Personales",
  parrafo: "Estas son algunas de las opiniones de profesionales con los que he tenido el gusto de colaborar.",
  testimonios: [
    {
      nombre: "Camilo Pabon",
      cargo: "Desarrollador backend Java",
      empresa: "Wecall",
      comentario: "Daniel es un profesional muy dedicado en su trabajo, lo que no sabe lo investiga, lo que no encuentra se lo inventa. Siempre procura entregar un producto impecable, tiene gran gusto por el diseño, es perseverante y con su constancia ha podido llegar muy lejos y sé que seguirá superándose cada vez más.",
      img: "/img/portafolio/testimonials/camilo.webp",
      linkLinkedIn: "https://www.linkedin.com/in/jcpbo/"
    },
    {
      nombre: "Joseph Guerrero",
      cargo: "Desarrollador mid-level frontend",
      empresa: "Globant",
      comentario: "Sus ganas de avanzar y sus grandes talentos lo han hecho llegar muy lejos. Sus principios y habilidades blandas lo hacen sobresalir siempre y da gusto participar en sus reuniones y revisar su código de gran calidad.",
      img: "/img/portafolio/testimonials/joseph.webp",
      linkLinkedIn: "https://www.linkedin.com/in/joseth-guerrero-b267975b/"
    },
    {
      nombre: "Sandy Baron",
      cargo: "CEO",
      empresa: "Market Support",
      comentario: "Daniel es un excelente profesional, siempre dispuesto a ayudar y aportar soluciones creativas a los problemas. Su conocimiento en frontend es impresionante y su capacidad para trabajar en equipo es excepcional.",
      img: "/img/portafolio/testimonials/sandy.webp",
      linkLinkedIn: "https://www.linkedin.com/in/sandy-barón-701a4a129/"
    }
  ],
}

export const EducationData: EducationDataType = {
  etiqueta: "Educación",
  titulo: "Formación",
  tituloResaltado: "Académica",
  parrafo: "Mi formación académica ha sido fundamental para mi desarrollo profesional y ha sido la base de mi carrera en la industria.",
  estudios:[
    {
      titulo: "Ingeniería de Sistemas",
      institucion: "UNIREMINGTON",
      logo: "img/portafolio/education/uniremington.webp",
      fecha: "2015 - 2018",
    },
  ]
}

export const ContactData: ContactDataType = {
  copy: "¿Tienes un proyecto en mente o quieres transformar tu idea en realidad? ¡No dudes en ponerte en contacto conmigo!",
  callToAction: "¡Hablemos!",
  email: "daniel.amadove@gmail.com",
};

export const FooterData: FooterDataType = {
  creditos: "Hecho con ❤️ por Daniel Amado",
  comunidad: "si te gusta esta landing puedes clonarla en mi github",
}