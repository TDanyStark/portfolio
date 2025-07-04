
export interface HeaderDataType {
  logoName: string;
  logoURL: string;
  idioma: string;
  navLinks: {
    text: string;
    url: string;
  }[];
}

export interface HeroDataType {
  estado: string;
  saludo: string;
  nombre: string;
  perfil: string;
  LinkedIn: string;
  GitHub: string;
  CV: string;
}

export interface AboutDataType {
  etiqueta: string;
  nombre: string;
  rutaFoto: string;
  titulo: string;
  altImg: string;
  titleImg: string;
  tituloResaltado: string;
  parrafo: string;
}

export interface ExperienceDataType {
  etiqueta: string;
  titulo: string;
  tituloResaltado: string;
  parrafo: string;
  experiencia: {
    cargo: string;
    empresa: string;
    fecha: string;
    descripcion: string;
    verMas?: string;
  }[];
}

export interface ProjectsDataType {
  etiqueta: string;
  titulo: string;
  tituloResaltado: string;
  parrafo: string;
  proyectos: ProjectType[];
}

export type ProjectType = {
  img: string;
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  link?: string;
  LinkGithub?: string;
}

export interface SkillsDataType {
  etiqueta: string;
  titulo: string;
  tituloResaltado: string;
  parrafo: string;
  skills: {
    nombre: string;
    img: string;
  }[];
}

export interface TestimonialsDataType {
  etiqueta: string;
  titulo: string;
  tituloResaltado: string;
  parrafo: string;
  testimonios: {
    nombre: string;
    cargo: string;
    empresa: string;
    comentario: string;
    img: string;
    linkLinkedIn: string;
  }[];
}

export interface EducationDataType {
  etiqueta: string;
  titulo: string;
  tituloResaltado: string;
  parrafo: string;
  estudios: {
    titulo: string;
    institucion: string;
    logo: string;
    fecha: string;
  }[];
}

export interface ContactDataType {
  copy: string;
  callToAction: string;
  email: string;
}

export interface FooterDataType {
  creditos: string;
  comunidad: string;
}
