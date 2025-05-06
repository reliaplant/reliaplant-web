export interface FormContactData {
  nombre: string;
  email: string;
  telefono: string;
  interes: string;
  cantidadPersonas?: string | null;
  cargo: string;
  empresa: string;
  pais: string;
  date: Date;
  isMobile: boolean;
  origen?: string | null;
  pagina?: string | null;
  type?: string | null;
  campana?: string | null;
  anuncio?: string | null;
}
