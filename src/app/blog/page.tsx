import { Indice, metadataIndice } from "../blog-vistas";

// Prerenderizado al compilar; se regenera cada hora para recoger artículos nuevos sin redesplegar.
export const revalidate = 3600;

export const metadata = metadataIndice("es");

export default function Blog() {
  return <Indice idioma="es" />;
}
