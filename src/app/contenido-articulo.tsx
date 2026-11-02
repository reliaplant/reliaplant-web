// Cuerpo de un artículo: Markdown con HTML permitido (iframes, videos, tablas…) y piezas propias
// (ver blog-piezas.tsx). Solo se escribe desde el conector MCP, por eso se acepta HTML.
// Ojo: las etiquetas propias van con cierre (<cta-demo></cta-demo>) y separadas del texto por una línea en blanco.

import Markdown, { type Components } from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import type { Idioma } from "@/lib/i18n";
import { CalculadoraDisponibilidad, CtaDemo, CurvaWeibull } from "./blog-piezas";

/** Etiquetas propias disponibles en los artículos (nombre en minúsculas, como las deja el HTML). */
export const PIEZAS = ["cta-demo", "calculadora-disponibilidad", "curva-weibull"] as const;

type Atributos = Record<string, string | undefined>;
type Nodo = { type: string; tagName?: string; value?: string; children?: Nodo[] };

/** Una pieza escrita en una sola línea llega dentro de un <p>; sus bloques (<figure>, <aside>) no caben ahí. */
const soloPieza = (nodo?: Nodo) => {
  const hijos = (nodo?.children ?? []).filter((h) => !(h.type === "text" && !h.value?.trim()));
  return hijos.length === 1 && (PIEZAS as readonly string[]).includes(hijos[0].tagName ?? "");
};

export function ContenidoArticulo({ texto, idioma }: { texto: string; idioma: Idioma }) {
  const piezas = {
    p: ({ node, children, ...props }: { node?: Nodo; children?: React.ReactNode }) =>
      soloPieza(node) ? <>{children}</> : <p {...props}>{children}</p>,
    "cta-demo": ({ titulo, texto, boton }: Atributos) => <CtaDemo idioma={idioma} titulo={titulo} texto={texto} boton={boton} />,
    "calculadora-disponibilidad": ({ mtbf, mttr }: Atributos) => <CalculadoraDisponibilidad mtbf={mtbf} mttr={mttr} />,
    "curva-weibull": ({ beta, eta }: Atributos) => <CurvaWeibull beta={beta} eta={eta} />,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    iframe: ({ node, ...props }: Atributos & { node?: unknown }) => (
      <span className="not-prose my-8 block aspect-video overflow-hidden border border-gray-200">
        <iframe {...props} className="h-full w-full" loading="lazy" allowFullScreen />
      </span>
    ),
  } as unknown as Components;

  return (
    <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={piezas}>
      {texto}
    </Markdown>
  );
}
