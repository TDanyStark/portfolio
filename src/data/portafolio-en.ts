import type { HeaderDataType, HeroDataType, AboutDataType, ExperienceDataType, ProjectsDataType, SkillsDataType, ContactDataType, FooterDataType } from "../types";

export const HeaderData: HeaderDataType = {
  logoName: "Daniel Amado",
  logoURL: "img/logowhite.webp",
  idioma: "en",
  navLinks: [
    { text: "About", url: "#about" },
    { text: "Experience", url: "#experience" },
    { text: "Projects", url: "#projects" },
    { text: "Skills", url: "#skills" },
    { text: "Contact", url: "#contact" },
  ],
};

// Exported data
export const HeroData: HeroDataType = {
  estado: "Open to new opportunities!",
  saludo: "Hello, I'm",
  nombre: "Daniel",
  perfil: "Fullstack Developer",
  LinkedIn: "https://www.linkedin.com/in/danielamadov/",
  GitHub: "https://github.com/TDanyStark",
  CV: "cv/CV_DANIEL_AMADO.pdf",
};

export const AboutData: AboutDataType = {
  etiqueta: "About me",
  titulo: "Who is",
  tituloResaltado: "Daniel?",
  nombre: "Daniel Amado",
  rutaFoto: "img/Team-01.jpg",
  parrafo: "<strong>I am passionate about technology</strong> and always up-to-date with the latest trends. I love solving problems and finding creative solutions. I have <strong>1 year of experience as a teacher</strong> and <strong>3 years in the IT and programming sector</strong>, where I have been involved in all stages of web development, from <strong>frontend</strong>, which is my passion, to backend and deployment. I always strive to <strong>automate processes through programming</strong>, optimizing operations and improving productivity. Additionally, <strong>I use artificial intelligence in processes where it is useful</strong> to be highly efficient in key areas. I love collaborating and continuously learning, facing challenges that allow me to apply and expand my skills to <strong>drive efficiency and performance in every project</strong> I undertake."
};

// Organize experience from most recent to oldest
export const ExperienceData: ExperienceDataType = {
  etiqueta: "Experience",
  titulo: "Professional",
  tituloResaltado: "Journey",
  parrafo: "My work experience has been very varied, from teaching to developing digital solutions with code and with CMS",
  experiencia: [
    {
      cargo: "Developer and communications leader",
      empresa: "Market Support",
      fecha: "Feb/2023 - Present",
      descripcion: "Led and developed multiple web pages and applications for various clients, including a world-renowned laboratory. Implemented automation processes through programming, improving operational efficiency. Additionally, led a technical team in broadcasts.",
      verMas: "https://docs.google.com/document/d/1lTWbaeJLClDzqe_V9rWWpdHz87GLN6epsnL2PJFRrLw/edit#heading=h.s1bej6q54ifz"
    },
    {
      cargo: "Programming Instructor",
      empresa: "SENA",
      fecha: "Nov/2022 - Dec/2022",
      descripcion: "Taught Python programming to young people, fostering innovation and disruptive thinking to successfully complete area projects."
    },
    {
      cargo: "Programming Teacher",
      empresa: "Liceo adventista libertad",
      fecha: "Feb/2022 - Nov/2022",
      descripcion: "Guided final-year students in completing their programming projects, supporting the development of their final projects."
    },
    {
      cargo: "Web Developer",
      empresa: "Innovacenter SAS",
      fecha: "Oct/2020 - Feb/2023",
      descripcion: "Developed an accounting system with inventory and sales management, and led projects to create web pages for the company's clients."
    },
  ]
};

export const ProjectsData: ProjectsDataType = {
  etiqueta: "Projects",
  titulo: "Significant",
  tituloResaltado: "Experiences",
  parrafo: "These are some of the recent projects that have been fundamental to my professional development and have significantly contributed to my growth in the industry.",
  proyectos: [
    {
      img: "img/portafolio/projects/calculadora.webp",
      titulo: "TiroCare Control",
      descripcion: "Medication dose calculator for patients with hypothyroidism.",
      tecnologias: ["Astro JS", "React", "Tailwind"],
      link: "https://market-support.com/apps/abbott/tirocare-control/",
      LinkGithub: "https://github.com/TDanyStark/tirocare-control/"
    },
    {
      img: "img/portafolio/projects/elmetodo.webp",
      titulo: "The most reliable method is your knowledge",
      descripcion: "This application aims to test and increase university students' knowledge about different contraceptive methods.",
      tecnologias: ["Astro JS", "React", "Tailwind"],
      link: "https://market-support.com/apps/abbott/el-metodo-mas-confiable/",
      LinkGithub: "https://github.com/TDanyStark/el-metodo-mas-confiable-es-tu-conocimiento/"
    },
    {
      img: "img/portafolio/projects/quetantoconosex.webp",
      titulo: "How much do you know?",
      descripcion: "This application aims to promote key knowledge about sexual and reproductive health in a playful way.",
      tecnologias: ["Astro JS", "HTML", "CSS", "JS", "Tailwind"],
      link: "https://market-support.com/apps/abbott/que-tanto-conosex/",
      LinkGithub: "https://github.com/TDanyStark/app-que-tanto-conosex/"
    },
    {
      img: "img/portafolio/projects/mandalas.webp",
      titulo: "Paint Mandalas",
      descripcion: "This application aims to invite patients to relax and reduce stress by painting mandalas.",
      tecnologias: ["Astro JS", "HTML", "JS", "Tailwind"],
      link: "https://market-support.com/apps/abbott/mandalas-emocionales/",
      LinkGithub: "https://github.com/TDanyStark/pintar-mandalas/"
    },
    {
      img: "img/portafolio/projects/album_sii.webp",
      titulo: "Album SII",
      descripcion: "This application aims to allow users to complete their album taking into account the type of patient and their correct treatment.",
      tecnologias: ["PHP", "HTML", "JS", "CSS", "MYSQL"],
      link: "https://market-support.com/apps/album_sii_bloqued/login",
      LinkGithub: "https://github.com/TDanyStark/album_sii/"
    },
    {
      img: "img/portafolio/projects/mapadolor.webp",
      titulo: "Interactive pain map",
      descripcion: "This application aims to measure a patient's pain threshold.",
      tecnologias: ["HTML", "JS", "CSS"],
      link: "https://market-support.com/apps/mapa-interactivo-dolor/",
      LinkGithub: "https://github.com/TDanyStark/Mapa-casos-de-dolor/"
    },
    {
      img: "img/portafolio/projects/market.webp",
      titulo: "Market Support",
      descripcion: "Website of the company Market Support.",
      tecnologias: ["WordPress", "CSS"],
      link: "https://market-support.com",
    },
    {
      img: "img/portafolio/projects/bbm.webp",
      titulo: "BBM productions",
      descripcion: "Website of the company BBM productions.",
      tecnologias: ["WordPress", "CSS"],
      link: "https://bbmproducciones.com.co/",
    },
    {
      img: "img/portafolio/projects/autoclic.webp",
      titulo: "Autoclic",
      descripcion: "Website of the company Autoclic.",
      tecnologias: ["WordPress", "CSS", "PHP"],
      link: "https://autoclic.com.co/",
    },
    {
      img: "img/portafolio/projects/cafecitoconcata.webp",
      titulo: "Cafecito con Cata",
      descripcion: "Website of the company Cafecito con Cata, Woocommerce, learndash, memberships and affiliates, CSS, PHP.",
      tecnologias: ["Woocommerce", "CSS", "PHP"],
      link: "https://cafecitoconcata.com/",
    },
    {
      img: "img/portafolio/projects/equipomas.webp",
      titulo: "Equipo MAS",
      descripcion: "Website of the company Equipo MAS, Woocommerce, learndash, memberships, CSS, PHP.",
      tecnologias: ["Woocommerce", "CSS", "PHP"],
      link: "https://equipomas.com/",
    },
    {
      img: "img/portafolio/projects/hellomarketeros.webp",
      titulo: "Hello marketeros",
      descripcion: "Website of the company Hello marketeros, Woocommerce, learndash, CSS.",
      tecnologias: ["Woocommerce", "CSS"],
      link: "https://cursos.market-support.com/",
    },
    {
      img: "img/portafolio/projects/enextge.webp",
      titulo: "e-nextGe",
      descripcion: "Website of the company e-nextGe.",
      tecnologias: ["Woocommerce", "CSS"],
      link: "https://e-nextge.com/",
    },
    {
      img: "img/portafolio/projects/sheetzoom.webp",
      titulo: "Webinar creator, and automation",
      descripcion: "System to automatically create webinars in zoom with a single click, sending links in HTML format, sending reports, etc.",
      tecnologias: ["GAS", "Google sheets"],
    },
    {
      img: "img/portafolio/projects/enviomails.webp",
      titulo: "Email marketing with sheets and GAS",
      descripcion: "Script to do email marketing to 1500 emails per day.",
      tecnologias: ["GAS", "Google sheets"],
    },
  ],
}

export const SkillsData: SkillsDataType = {
  etiqueta: "Skills",
  titulo: "Professional",
  tituloResaltado: "Strengths",
  parrafo: "These are some of the skills I have acquired and refined throughout my professional career.",
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
      nombre: "Many more",
      img: "img/portafolio/skills/more.svg",
    },
  ]
}

export const ContactData: ContactDataType = {
  copy: "Do you have a project in mind or just want to say hi? Don't hesitate to get in touch with me!",
  callToAction: "Let's talk!",
  email: "daniel.amadove@gmail.com",
};

export const FooterData: FooterDataType = {
  creditos: "Made with ❤️ by Daniel Amado",
  comunidad: "if you like this landing page, you can clone it on my github",
}
