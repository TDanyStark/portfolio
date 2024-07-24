import type { HeroDataType, AboutDataType, ExperienceDataType } from "../types";

// Datos exportados
export const HeroData: HeroDataType = {
  estado: "¡Abierto a nuevas oportunidades!",
  nombre: "Daniel",
  perfil: "Desarrollador Fullstack",
  LinkedIn: "https://www.linkedin.com/in/danielamadov/",
  GitHub: "https://github.com/TDanyStark",
  CV: "cv/CV_DANIEL_AMADO.pdf",
};

export const AboutData: AboutDataType = {
  etiqueta: "Acerca de mi",
  titulo: "¿Quién es",
  tituloResaltado: "Daniel?",
  nombre: "Daniel Amado",
  rutaFoto: "img/Team-01.jpg",
  parrafo: "Un apasionado por la tecnología y siempre al día con las últimas tendencias. Me encanta resolver problemas y encontrar soluciones creativas. Tengo <strong>1 año de experiencia como docente</strong> y <strong>3 años en el sector IT y de programación</strong>, donde he podido interactuar en todas las etapas de un desarrollo web, desde el <strong>frontend, que es mi pasión</strong>, hasta el backend y el despliegue. Siempre busco <strong>automatizar procesos a través de la programación</strong>, optimizando operaciones y mejorando la productividad. Me encanta <strong>colaborar y aprender continuamente</strong>, enfrentando desafíos que me permitan aplicar y expandir mis habilidades para impulsar la <strong>eficiencia y el rendimiento</strong> en cada proyecto que emprendo."
};


// organizar experiencia de mayor a menor
export const ExperienceData: ExperienceDataType = {
  etiqueta: "Experiencia",
  titulo: "Trayectoria",
  tituloResaltado: "Profesional",
  parrafo: "Mi experiencia laboral ha sido muy variada, desde la docencia hasta el desarrollo de soluciones digitales innovadoras.",
  experiencia: [
    {
      cargo: "Developer and communications leader",
      empresa: "Market Support",
      fecha: "Feb/2023 - Actualidad",
      descripcion: "Lideré el desarrollo de soluciones digitales innovadoras y la gestión de comunicación para clientes internacionales, optimizando procesos y mejorando la experiencia de usuario.",
      verMas: [
        "Desarrollé páginas web interactivas para un laboratorio muy reconocido a nivel mundial, entre ellas una calculadora para uso médico, una app de pintar mandalas usando svg, entre otras. usando tecnologías como Astro JS y React",
        "Administré el sistema web de una empresa de asesoría migración hacia los estados unidos, en este tiempo, pude crear landings de venta, un sistema de e-learning, un sistema de e-commerce y la integración con un CRM.",
        "Administré el sitio web oficial de un laboratorio reconocido en Colombia, donde lideré a un equipo de 2 expertos de WordPress.",
        "Desarrollé un sistema automatizado para programar reuniones y envío de link a gerentes de producto en formato HTML, usando google script y google sheets.",
        "Desarrollé un dashboard en looker studio para ver los KPIs de las conferencias realizadas de laboratorio reconocido en Colombia, este informe lo usa nuestro cliente para tomar decisiones relacionadas a webinars.",
        "Renové completamente 2 páginas web de la organización usando el CMS WordPress, con el fin de agilizar la creación del sitio, y hacerlo de más fácil acceso a personal no técnico para administrarlo (market-support.com, yourpartner-yourbusiness.com).",
        "Desarrollé 2 productos para un laboratorio reconocido a nivel mundial, uno es una app web para los visitadores médicos donde estos pueden interactuar con los diferentes casos clínicos, y el otro es un juego web donde los médicos pueden llenar su álbum de pacientes y tratamientos.",
        "Capacité a personal de la organización y a personal nuevo en manejo de herramientas utilizadas en transmisiones.",
        "Desarrollé las firmas de correo corporativas para la organización usando HTML y maquetación por tablas.",
        "Desarrollé un sistema de rastreo de correos de 0 costo, para saber quién de nuestros clientes leía nuestro email marketing. (Google apps script y google sheets)",
        "Formo parte del equipo de innovación, contribuyendo con ideas para nuevos productos que enriquecen el portafolio de la organización. He realizado la mejora en uno de los productos top ventas (Flipbooks interactivos).",
        "Estoy a cargo de desarrollar nuevas funcionalidades al sistema de gestión interna de proyectos de la organización (Made in Casa).",
        "Lidero un equipo de técnicos de sonido y de sistemas, con el fin de darle soporte a un laboratorio reconocido a nivel mundial en la transmisión de sus conferencias de salud a nivel nacional e internacional.",
        "Lidero el desarrollo de una app web que genera sitios HTML estáticos similares a Netflix, esto será un nuevo producto en la organización."
      ]
    },
    {
      cargo: "Instructor de Programación",
      empresa: "SENA",
      fecha: "Nov/2022 - Dic/2022",
      descripcion: "Enseñé programación en Python a jóvenes, fomentando la innovación y el pensamiento disruptivo para completar proyectos de área con éxito."
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
      fecha: "Feb/2019 - Ene/2022",
      descripcion: "Desarrollé un sistema contable con manejo de inventario y ventas, y lideré proyectos de creación de páginas web para clientes de la organización."
    },
  ]
};

// [
//   "Desarrollé páginas web interactivas para un laboratorio muy reconocido a nivel mundial, entre ellas una calculadora para uso médico, una app de pintar mandalas usando svg, entre otras. usando tecnologías como Astro JS y React",
//   "Administré el sistema web de una empresa de asesoría migración hacia los estados unidos, en este tiempo, pude crear landings de venta, un sistema de e-learning, un sistema de e-commerce y la integración con un CRM.",
//   "Administré el sitio web oficial de un laboratorio reconocido en Colombia, donde lideré a un equipo de 2 expertos de WordPress.",
//   "Desarrollé un sistema automatizado para programar reuniones y envío de link a gerentes de producto en formato HTML, usando google script y google sheets.",
//   "Desarrollé un dashboard en looker studio para ver los KPIs de las conferencias realizadas de laboratorio reconocido en Colombia, este informe lo usa nuestro cliente para tomar decisiones relacionadas a webinars.",
//   "Renové completamente 2 páginas web de la organización usando el CMS WordPress, con el fin de agilizar la creación del sitio, y hacerlo de más fácil acceso a personal no técnico para administrarlo (market-support.com, yourpartner-yourbusiness.com).",
//   "Desarrollé 2 productos para un laboratorio reconocido a nivel mundial, uno es una app web para los visitadores médicos donde estos pueden interactuar con los diferentes casos clínicos, y el otro es un juego web donde los médicos pueden llenar su álbum de pacientes y tratamientos.",
//   "Capacité a personal de la organización y a personal nuevo en manejo de herramientas utilizadas en transmisiones.",
//   "Desarrollé las firmas de correo corporativas para la organización usando HTML y maquetación por tablas.",
//   "Desarrollé un sistema de rastreo de correos de 0 costo, para saber quién de nuestros clientes leía nuestro email marketing. (Google apps script y google sheets)",
//   "Formo parte del equipo de innovación, contribuyendo con ideas para nuevos productos que enriquecen el portafolio de la organización. He realizado la mejora en uno de los productos top ventas (Flipbooks interactivos).",
//   "Estoy a cargo de desarrollar nuevas funcionalidades al sistema de gestión interna de proyectos de la organización (Made in Casa).",
//   "Lidero un equipo de técnicos de sonido y de sistemas, con el fin de darle soporte a un laboratorio reconocido a nivel mundial en la transmisión de sus conferencias de salud a nivel nacional e internacional.",
//   "Lidero el desarrollo de una app web que genera sitios HTML estáticos similares a Netflix, esto será un nuevo producto en la organización."
// ]