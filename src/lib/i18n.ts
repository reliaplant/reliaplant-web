// Idiomas de la web. Por ahora solo español (ruta "/"); para sumar uno, agrégalo aquí
// con sus textos y crea sus rutas (p. ej. app/en/blog).

export const IDIOMAS = ["es"] as const;
export type Idioma = (typeof IDIOMAS)[number];

export type Textos = {
  lang: string;
  locale: string;
  blog: {
    titulo: string;
    descripcion: string;
    kicker: string;
    encabezado: string;
    leer: string;
    volver: string;
    minutos: string;
    vacio: string;
    relacionados: string;
    cta: string;
    ctaTexto: string;
    ctaBoton: string;
  };
};

export const TEXTOS: Record<Idioma, Textos> = {
  es: {
    lang: "es",
    locale: "es_MX",
    blog: {
      titulo: "Blog de Confiabilidad Industrial",
      descripcion:
        "Artículos especializados sobre confiabilidad, RCM, RCA, gestión de activos y mantenimiento industrial en Latinoamérica.",
      kicker: "Blog",
      encabezado: "Confiabilidad, mantenimiento y gestión de activos",
      leer: "Leer artículo",
      volver: "Volver al blog",
      minutos: "min de lectura",
      vacio: "Pronto publicaremos los primeros artículos.",
      relacionados: "Sigue leyendo",
      cta: "¿Quieres llevar esto a tu planta?",
      ctaTexto: "Organiza tus activos, tus análisis RCM y RCA y tus indicadores de confiabilidad en un solo lugar.",
      ctaBoton: "Probar Reliaplant",
    },
  },
};
