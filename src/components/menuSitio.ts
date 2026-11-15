// Menú del sitio: una sola fuente para la cabecera de escritorio y la móvil.

export interface ItemMenu { titulo: string; texto?: string; href: string }
export interface GrupoMenu { id: string; titulo: string; items: ItemMenu[]; pie?: ItemMenu }

export const APP_URL = "https://app.reliaplant.com/";

export const MENU: GrupoMenu[] = [
  {
    id: "producto",
    titulo: "Producto",
    items: [
      { titulo: "Registro de activos", texto: "Taxonomía ISO 14224, DTIs, mapa y app de campo", href: "/producto/taxonomia" },
      { titulo: "RCM", texto: "Modos de falla y la tarea correcta para cada uno", href: "/producto/rcm" },
      { titulo: "Análisis de causa raíz", texto: "Árbol lógico, hipótesis y acciones con IA", href: "/producto/rca" },
      { titulo: "Planes de mantenimiento", texto: "Rutinas, plan maestro y horas-hombre", href: "/producto/planes-de-mantenimiento" },
      { titulo: "Integridad (RBI)", texto: "Lazos de corrosión y mecanismos de daño", href: "/producto/integridad-rbi" },
    ],
    pie: { titulo: "Ver la suite completa", href: "/#modulos" },
  },
  {
    id: "servicios",
    titulo: "Servicios",
    items: [
      { titulo: "Levantamiento de activos", texto: "Recorremos tu planta y te entregamos la taxonomía", href: "/servicios/levantamiento-de-activos" },
      { titulo: "Taxonomía ISO 14224", texto: "Jerarquía, clases y codificación para tu CMMS", href: "/servicios/taxonomia-iso-14224" },
      { titulo: "Consultoría en confiabilidad", texto: "RCM, RCA, criticidad, indicadores y asesoría", href: "/consultoria" },
      { titulo: "Industrias", texto: "Petróleo y gas, minería, energía y más", href: "/industrias" },
    ],
  },
  {
    id: "recursos",
    titulo: "Recursos",
    items: [
      { titulo: "Blog", texto: "Guías de confiabilidad y mantenimiento", href: "/blog" },
      { titulo: "Cómo funciona", texto: "De la carga inicial al día a día", href: "/como-funciona" },
    ],
  },
];

export const ENLACES_SUELTOS: ItemMenu[] = [{ titulo: "Precios", href: "/pricing" }];
