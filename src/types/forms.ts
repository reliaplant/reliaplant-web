export type LeadStatus = "nuevo" | "contactado" | "calificado" | "ganado" | "perdido";

export interface LeadNota {
  id: string;
  texto: string;
  fecha: string; // ISO
  pendiente?: boolean; // true = intento de contacto sin confirmar todavía
}

export type TareaTipo = "tarea" | "seguimiento";

export interface LeadTarea {
  id: string;
  texto: string;
  tipo?: TareaTipo; // sin valor = "tarea", por compatibilidad con tareas creadas antes de este campo
  fechaLimite?: string | null; // ISO date, sin hora
  completada: boolean;
  creada: string; // ISO
}

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
  direccion?: string | null;
  especial?: string | null;
  type?: string | null;
  campana?: string | null;
  anuncio?: string | null;

  // Seguimiento (CRM) - solo lo escribe el panel admin
  status?: LeadStatus;
  proximoSeguimiento?: string | null; // ISO date, sin hora
  notas?: LeadNota[];
  tareas?: LeadTarea[];
}
