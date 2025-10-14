import type { HeaderDataType, HeroDataType, AboutDataType, ExperienceDataType, ProjectsDataType, SkillsDataType, ContactDataType, FooterDataType, TestimonialsDataType, EducationDataType  } from "../types";

export const HeaderData: HeaderDataType = {
  logoName: "Daniel Amado",
  logoURL: "img/logowhite.webp",
  idioma: "en",
  navLinks: [
    { text: "Experience", url: "#experience" },
    { text: "Projects", url: "#projects" },
    { text: "Skills", url: "#skills" },
    { text: "About", url: "#about" },
    { text: "Contact", url: "#contact" },
  ],
};

// Exported data
export const HeroData: HeroDataType = {
  estado: "Open to new opportunities!",
  saludo: "Hello, I'm",
  nombre: "Daniel Amado",
  perfil: "Full Stack Developer",
  LinkedIn: "https://www.linkedin.com/in/danielamadov/",
  GitHub: "https://github.com/TDanyStark",
  CV: "cv/cv_daniel_amado_en.pdf",
};

export const AboutData: AboutDataType = {
  etiqueta: "About Me",
  titulo: "Who is",
  tituloResaltado: "Daniel Amado?",
  nombre: "Daniel Amado",
  rutaFoto: "img/daniel.webp",
  altImg: "Daniel Amado – Full Stack Web Developer and WordPress and Automation Expert in Colombia",
  titleImg: "Daniel Amado, professional web developer and automation expert",
  parrafo: "<strong>I am passionate about technology</strong> and always up-to-date with the latest trends. I love solving problems and finding creative solutions. I have <strong>1 year of experience as a teacher</strong> and <strong>3 years in the IT and programming sector</strong>, where I have been involved in all stages of web development, from <strong>frontend</strong>, which is my passion, to backend and deployment. I always seek to <strong>automate processes through programming</strong>, optimizing operations and improving productivity. Additionally, <strong>I use artificial intelligence in processes where it's useful</strong> to be highly efficient in key areas. I love collaborating and continuously learning, facing challenges that allow me to apply and expand my skills to <strong>drive efficiency and performance in every project</strong> I undertake."
};

// Organize experience from most to least recent
export const ExperienceData: ExperienceDataType = {
  etiqueta: "Experience",
  titulo: "Professional",
  tituloResaltado: "Trajectory",
  parrafo: "My work experience has been very varied, from teaching to developing digital solutions with code and CMS.",
  experiencia: [
    {
      cargo: "Developer and communications leader",
      empresa: "Market Support",
      fecha: "Feb/2023 - Present",
      descripcion: "Led and developed multiple web pages and applications for various clients, including a renowned global laboratory. Implemented automation processes through programming, improving operational efficiency. Additionally, led a technical team in broadcasts.",
      verMas: "cv/cv_daniel_amado_en.pdf"
    },
    {
      cargo: "Programming Instructor",
      empresa: "SENA",
      fecha: "Nov/2022 - Dec/2022",
      descripcion: "I imparted knowledge in Python to young individuals, fostering innovation and disruptive thinking for the successful completion of projects in the area."
    },
    {
      cargo: "Programming Teacher",
      empresa: "Liceo adventista libertad",
      fecha: "Feb/2022 - Nov/2022",
      descripcion: "Guided final year students in completing their programming projects, supporting the development of their graduation projects."
    },
    {
      cargo: "Web Developer",
      empresa: "Innovacenter SAS",
      fecha: "Jan/2019 - Feb/2023",
      descripcion: "Developed an accounting system with inventory and sales management, and led web page creation projects for the organization's clients."
    },
  ]
};

export const ProjectsData: ProjectsDataType = {
  etiqueta: "Projects",
  titulo: "Significant",
  tituloResaltado: "Experiences",
  cta: "View more projects",
  viewless: "View less",
  parrafo: "These are some of the recent projects that have been fundamental in my professional development and have significantly contributed to my growth in the industry.",
  proyectos: [
    {
      img: "img/portafolio/projects/qr2.webp",
      titulo: "QR Codes with Analytics",
      descripcion: "System for creating QR codes with analytics, allowing users to track the performance of their codes in real time.",
      tecnologias: ["WordPress", "CSS"],
      link: "https://qr2.market-support.com/",
      LinkGithub: "https://github.com/TDanyStark/qr_codes"
    },
    {
      img: "img/portafolio/projects/petrasanta.webp",
      titulo: "Hotel Petra Santa",
      descripcion: "Website for Hotel Petra Santa, with online booking and payment system.",
      tecnologias: ["WordPress", "CSS"],
      link: "https://hotelpetrasanta.com/"
    },
    {
      img: "img/portafolio/projects/icz.webp",
      titulo: "Instituto Canzion Colombia",
      descripcion: "Website for Instituto Canzion Colombia.",
      tecnologias: ["WordPress", "CSS"],
      link: "https://institutocanzion.com.co/"
    },
    {
      img: "img/portafolio/projects/fcs.webp",
      titulo: "Focredisocial S.A.S",
      descripcion: "Website for Focredisocial S.A.S.",
      tecnologias: ["WordPress", "CSS"],
      link: "https://fcs.com.co/"
    },
    {
      img: "img/portafolio/projects/creditalliance.webp",
      titulo: "Credit Alliance",
      descripcion: "Website for Credit Alliance.",
      tecnologias: ["WordPress", "CSS"],
      link: "https://creditalliancesas.com/"
    },
    {
      img: "img/portafolio/projects/laberinto.webp",
      titulo: "Maze Raising the Standard",
      descripcion: "Interactive maze where each step depends on your correct answers. Answer all questions without mistakes to complete the challenge and trigger a lively confetti celebration.",
      tecnologias: ["Astro JS", "React", "Tailwind"],
      link: "https://market-support.com/apps/abbott/laberinto-klaricid/",
      LinkGithub: "https://github.com/TDanyStark/laberinto-klaricid/"
    },
    {
      img: "img/portafolio/projects/calculadora.webp",
      titulo: "TiroCare Control",
      descripcion: "Dosage calculator for a medication used by patients with hypothyroidism.",
      tecnologias: ["Astro JS", "React", "Tailwind"],
      link: "https://market-support.com/apps/abbott/tirocare-control/",
      LinkGithub: "https://github.com/TDanyStark/tirocare-control/"
    },
    {
      img: "img/portafolio/projects/elmetodo.webp",
      titulo: "The Most Reliable Method is Your Knowledge",
      descripcion: "This app aims to test and expand university students' knowledge about different contraceptive methods.",
      tecnologias: ["Astro JS", "React", "Tailwind"],
      link: "https://market-support.com/apps/abbott/el-metodo-mas-confiable/",
      LinkGithub: "https://github.com/TDanyStark/el-metodo-mas-confiable-es-tu-conocimiento/"
    },
    {
      img: "img/portafolio/projects/quetantoconosex.webp",
      titulo: "How Much Do You Know?",
      descripcion: "This app aims to promote, in a playful way, key knowledge about sexual and reproductive health.",
      tecnologias: ["Astro JS", "HTML", "CSS", "JS", "Tailwind"],
      link: "https://market-support.com/apps/abbott/que-tanto-conosex/",
      LinkGithub: "https://github.com/TDanyStark/app-que-tanto-conosex/"
    },
    {
      img: "img/portafolio/projects/mandalas.webp",
      titulo: "Mandala Painting",
      descripcion: "This app is designed to invite patients to relax and reduce stress through mandala painting.",
      tecnologias: ["Astro JS", "HTML", "JS", "Tailwind"],
      link: "https://market-support.com/apps/abbott/mandalas-emocionales/",
      LinkGithub: "https://github.com/TDanyStark/pintar-mandalas/"
    },
    {
      img: "img/portafolio/projects/album_sii.webp",
      titulo: "SII Album",
      descripcion: "This app allows users to complete their album based on the type of patient and the correct treatment.",
      tecnologias: ["PHP", "HTML", "JS", "CSS", "MYSQL"],
      link: "https://market-support.com/apps/album_sii_bloqued/login",
      LinkGithub: "https://github.com/TDanyStark/album_sii/"
    },
    {
      img: "img/portafolio/projects/mapadolor.webp",
      titulo: "Interactive Pain Map",
      descripcion: "This app is designed to measure a patient's pain threshold.",
      tecnologias: ["HTML", "JS", "CSS"],
      link: "https://market-support.com/apps/mapa-interactivo-dolor/",
      LinkGithub: "https://github.com/TDanyStark/Mapa-casos-de-dolor/"
    },
    {
      img: "img/portafolio/projects/elarepazo.webp",
      titulo: "El Arepazo",
      descripcion: "Website for El Arepazo.",
      tecnologias: ["WordPress", "CSS"],
      link: "https://elarepazo.co/"
    },
    {
      img: "img/portafolio/projects/market.webp",
      titulo: "Market Support",
      descripcion: "Website for Market Support (Multilingual).",
      tecnologias: ["WordPress", "CSS"],
      link: "https://market-support.com"
    },
    {
      img: "img/portafolio/projects/referupproperty.webp",
      titulo: "Referup Property",
      descripcion: "Website for Referup Property.",
      tecnologias: ["WordPress", "CSS"],
      link: "https://referupproperty.com/"
    },
    {
      img: "img/portafolio/projects/bioshine.webp",
      titulo: "Bioshine Cleaning",
      descripcion: "Website for Bioshine Cleaning.",
      tecnologias: ["WordPress", "CSS"],
      link: "https://bioshinecleaning.com/"
    },
    {
      img: "img/portafolio/projects/norat.webp",
      titulo: "Spa Norat",
      descripcion: "Website for Spa Norat.",
      tecnologias: ["WordPress", "Elementor", "CSS"],
      link: "https://spanorat.com/inicio/"
    },
    {
      img: "img/portafolio/projects/ctoxlabs.webp",
      titulo: "CTOxLabs",
      descripcion: "Website for CTOxLabs (Multilingual).",
      tecnologias: ["WordPress", "Elementor", "CSS"],
      link: "https://ctoxlabs.com/es-es/inicio/"
    },
    {
      img: "img/portafolio/projects/bbm.webp",
      titulo: "BBM Productions",
      descripcion: "Website for BBM Productions.",
      tecnologias: ["WordPress", "CSS"],
      link: "https://bbmproducciones.com.co/"
    },
    {
      img: "img/portafolio/projects/cafecitoconcata.webp",
      titulo: "Cafecito con Cata",
      descripcion: "Website for Cafecito con Cata, featuring Woocommerce, LearnDash, memberships, affiliates, CSS, and PHP.",
      tecnologias: ["Woocommerce", "CSS", "PHP"],
      link: "https://cafecitoconcata.com/"
    },
    {
      img: "img/portafolio/projects/equipomas.webp",
      titulo: "Equipo MAS",
      descripcion: "Website for Equipo MAS, featuring Woocommerce, LearnDash, memberships, CSS, and PHP.",
      tecnologias: ["Woocommerce", "CSS", "PHP"],
      link: "https://equipomas.com/"
    },
    {
      img: "img/portafolio/projects/hellomarketeros.webp",
      titulo: "Hello Marketeros",
      descripcion: "Website for Hello Marketeros, featuring Woocommerce, LearnDash, and CSS.",
      tecnologias: ["Woocommerce", "CSS"],
      link: "https://hellomarketeros.com/"
    },
    {
      img: "img/portafolio/projects/autoclic.webp",
      titulo: "Autoclic",
      descripcion: "Website for Autoclic.",
      tecnologias: ["WordPress", "CSS", "PHP"],
      link: "https://autoclic.com.co/"
    },
    {
      img: "img/portafolio/projects/sheetzoom.webp",
      titulo: "Webinar Creator and Automation",
      descripcion: "System to create Zoom webinars automatically with one click, send links in HTML format, send reports, etc.",
      tecnologias: ["GAS", "Google sheets"]
    },
    {
      img: "img/portafolio/projects/enviomails.webp",
      titulo: "Email Marketing with Sheets and GAS",
      descripcion: "Script to perform email marketing to 1500 emails per day.",
      tecnologias: ["GAS", "Google sheets"]
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
      nombre: "HTML",
      img: "img/portafolio/skills/html.svg",
    },
    {
      nombre: "CSS",
      img: "img/portafolio/skills/CSS.svg",
    },
    {
      nombre: "Astro JS",
      img: "img/portafolio/skills/astro.svg",
    },
    {
      nombre: "Next JS",
      img: "img/portafolio/skills/nextjs.svg",
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
      nombre: "MySQL",
      img: "img/portafolio/skills/mysql.svg",
    },
    {
      nombre: "PostgreSQL",
      img: "img/portafolio/skills/postgres.svg",
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
      nombre: "Sass",
      img: "img/portafolio/skills/sass.svg",
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
      nombre: "Elementor",
      img: "img/portafolio/skills/elementor.svg",
    },
    {
      nombre: "Learndash",
      img: "img/portafolio/skills/learndash.svg",
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

export const TestimonialsData: TestimonialsDataType = {
  etiqueta: "Testimonials",
  titulo: "Personal",
  tituloResaltado: "References",
  parrafo: "These are some of the opinions of professionals I have had the pleasure of collaborating with.",
  testimonios: [
    {
      nombre: "Camilo Pabon",
      cargo: "Backend Java Developer",
      empresa: "Wecall",
      comentario: "Daniel is a very dedicated professional in his work. What he doesn't know, he researches; what he can't find, he invents. He always strives to deliver an impeccable product. He has a great eye for design, is persistent, and with his perseverance, he has come a long way and I know he will continue to excel.",
      img: "img/portafolio/testimonials/camilo.webp",
      linkLinkedIn: "https://www.linkedin.com/in/jcpbo/"
    },
    {
      nombre: "Joseph Guerrero",
      cargo: "Mid-level Frontend Developer",
      empresa: "Globant",
      comentario: "His eagerness to advance and his great talents have taken him far. His principles and soft skills make him stand out, and it is a pleasure to participate in his meetings and review his high-quality code.",
      img: "img/portafolio/testimonials/joseph.webp",
      linkLinkedIn: "https://www.linkedin.com/in/joseth-guerrero-b267975b/"
    },
    {
      nombre: "Sandy Baron",
      cargo: "CEO",
      empresa: "Market Support",
      comentario: "Daniel is an excellent professional, always willing to help and provide creative solutions to problems. His ability to work in a team is exceptional.",
      img: "img/portafolio/testimonials/sandy.webp",
      linkLinkedIn: "https://www.linkedin.com/in/sandy-barón-701a4a129/"
    }
  ],
}

export const EducationData: EducationDataType = {
  etiqueta: "Education",
  titulo: "Academic",
  tituloResaltado: "Training",
  parrafo: "My academic training has been fundamental to my professional development and has been the foundation of my career in the industry.",
  estudios:[
    {
      titulo: "Systems Engineering",
      institucion: "UNIREMINGTON",
      logo: "img/portafolio/education/uniremington.webp",
      fecha: "2015 - 2018",
    },
  ]
}

export const ContactData: ContactDataType = {
  copy: "Do you have a project in mind or want to turn your idea into reality? Don't hesitate to get in touch with me!",
  callToAction: "Let's Talk!",
  email: "daniel.amadove@gmail.com",
};

export const FooterData: FooterDataType = {
  creditos: "Made with ❤️ by Daniel Amado",
  comunidad: "If you like this landing page, you can clone it on my GitHub",
}
