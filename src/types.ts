export interface HeroDataType {
  estado: string;
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
    verMas?: string[];
  }[];
}
