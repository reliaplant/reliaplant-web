import { notFound } from "next/navigation";
import { articuloPorSlug } from "@/lib/blog-datos";
import { VistaArticulo, metadataArticulo, paramsArticulos } from "../../blog-vistas";
import { VistaAnterior, metadataAnterior, postAnterior } from "../anteriores";

// Los artículos se prerenderizan al compilar; uno nuevo se genera en su primera visita
// y todos se regeneran cada hora.
export const revalidate = 3600;

export function generateStaticParams() {
  return paramsArticulos("es");
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (await articuloPorSlug("es", slug)) ? metadataArticulo("es", slug) : metadataAnterior(slug);
}

export default async function Articulo({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (await articuloPorSlug("es", slug)) return <VistaArticulo idioma="es" slug={slug} />;
  // Post del blog anterior (colección "blogPosts").
  const anterior = await postAnterior(slug);
  if (!anterior) notFound();
  return <VistaAnterior post={anterior.post} posts={anterior.posts} />;
}
