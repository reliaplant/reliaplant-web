import Image from "next/image";
import AbrirFormContacto from "@/components/AbrirFormContacto";
import "@/app/home.css";

// Plantilla común de las páginas de producto y de servicio (mismo estilo que la home: clases .rph de app/home.css).
// Cada página solo llena estos datos; el diseño vive aquí para que todo el sitio quede parejo.

export interface DatosPagina {
  /** "producto" muestra "Prueba gratis" primero; "servicio" muestra "Cotizar" primero. */
  tipo: "producto" | "servicio";
  /** Etiqueta pequeña sobre el título, p. ej. "Producto · RCM". */
  etiqueta: string;
  /** Título en negro + continuación en gris (como la home). */
  titulo: string;
  tituloGris: string;
  bajada: string;
  foto: { src: string; alt: string };
  /** Tarjeta flotante sobre la foto (opcional): título en mono + 2–3 filas dato/valor. */
  tarjeta?: { titulo: string; subtitulo: string; filas: [string, string][] };
  /** Réplica HTML de la pantalla real de la app (de components/home/piezas.ts o propia, solo con clases existentes). */
  pantalla?: string;
  pantallaPie?: string;
  /** Sección opcional destacada (foto + pantalla HTML al lado), p. ej. la app de campo en Levantamiento. */
  destacado?: {
    etiqueta: string; titulo: string; tituloGris: string; texto: string; puntos: string[];
    foto: { src: string; alt: string }; pantalla: string;
  };
  problema: { titulo: string; tituloGris: string; puntos: { titulo: string; texto: string }[] };
  pasos: { titulo: string; texto: string }[];
  capacidades: { titulo: string; texto: string }[];
  /** Bloque "Hazlo tú o lo hacemos por ti". */
  modos: {
    plataforma: { titulo: string; texto: string; incluye: string[] };
    servicio: { titulo: string; texto: string; incluye: string[] };
  };
  faq: { pregunta: string; respuesta: string }[];
  siguiente?: { etiqueta: string; titulo: string; href: string };
  /** Texto para el formulario de contacto (origen del lead). */
  origen: string;
}

const APP = "https://app.reliaplant.com";

export default function PaginaProducto({ d }: { d: DatosPagina }) {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: d.faq.map((f) => ({ "@type": "Question", name: f.pregunta, acceptedAnswer: { "@type": "Answer", text: f.respuesta } })),
  };
  const cotizar = (texto: string, variante: "primary" | "white" | "borde" = "primary") => (
    <AbrirFormContacto buttonText={texto} variant={variante} icon={null} modalTitle={texto} btnText="Enviar" especial={d.origen} />
  );

  return (
    <div className="rph pp">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Portada */}
      <section className="hero">
        <div className="env">
          <div className="hero-txt">
            <span className="chip-sec"><i />{d.etiqueta}</span>
            <h1>{d.titulo} <span className="gris">{d.tituloGris}</span></h1>
            <p className="hero-sub">{d.bajada}</p>
            <div className="ctas">
              {d.tipo === "producto" ? (
                <>
                  <a className="btn btn-azul" href={APP}>Prueba gratis</a>
                  {cotizar("Que lo hagan por mí", "borde")}
                </>
              ) : (
                <>
                  {cotizar("Cotizar el servicio")}
                  <a className="btn btn-borde" href={APP}>Probar la plataforma</a>
                </>
              )}
            </div>
          </div>
          <div className="foto-hero">
            <div className="foto">
              <Image src={d.foto.src} alt={d.foto.alt} fill priority sizes="(max-width: 900px) 100vw, 520px" style={{ objectFit: "cover" }} />
            </div>
            {d.tarjeta && (
              <div className="flota flota-1">
                <div><div className="t">{d.tarjeta.titulo}</div><div className="s">{d.tarjeta.subtitulo}</div></div>
                {d.tarjeta.filas.map(([k, v]) => (
                  <div key={k} className="frow"><span>{k}</span><span style={{ fontFamily: "var(--mono)" }}>{v}</span></div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pantalla real */}
      {d.pantalla && (
        <section className="vitrina" aria-label="Pantalla de la plataforma">
          <div className="env">
            <div dangerouslySetInnerHTML={{ __html: d.pantalla }} />
            {d.pantallaPie && <p className="pp-pie">{d.pantallaPie}</p>}
          </div>
        </section>
      )}

      {/* Destacado opcional */}
      {d.destacado && (
        <section className="sec campo">
          <div className="env">
            <div className="sec-cab" style={{ marginBottom: 0 }}>
              <span className="chip-sec"><i />{d.destacado.etiqueta}</span>
              <h2>{d.destacado.titulo} <span className="gris">{d.destacado.tituloGris}</span></h2>
              <p>{d.destacado.texto}</p>
              <ul className="lista">{d.destacado.puntos.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
            <div className="campo-vis">
              <div className="foto">
                <Image src={d.destacado.foto.src} alt={d.destacado.foto.alt} fill sizes="(max-width: 900px) 100vw, 520px" style={{ objectFit: "cover" }} />
              </div>
              <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: d.destacado.pantalla }} />
            </div>
          </div>
        </section>
      )}

      {/* El problema */}
      <section className="sec suave">
        <div className="env">
          <div className="sec-cab"><h2>{d.problema.titulo} <span className="gris">{d.problema.tituloGris}</span></h2></div>
          <div className="pp-grid3">
            {d.problema.puntos.map((p) => (
              <div key={p.titulo} className="pp-item"><h3>{p.titulo}</h3><p>{p.texto}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="sec">
        <div className="env">
          <div className="sec-cab"><span className="chip-sec"><i />Cómo funciona</span><h2>Paso a paso.</h2></div>
          <ol className="pp-pasos">
            {d.pasos.map((p, i) => (
              <li key={p.titulo}><span className="n">{String(i + 1).padStart(2, "0")}</span><h3>{p.titulo}</h3><p>{p.texto}</p></li>
            ))}
          </ol>
        </div>
      </section>

      {/* Capacidades */}
      <section className="sec suave">
        <div className="env">
          <div className="sec-cab"><span className="chip-sec"><i />Lo que incluye</span><h2>Todo lo que necesitas, <span className="gris">nada de relleno.</span></h2></div>
          <div className="pp-grid3">
            {d.capacidades.map((c) => (
              <div key={c.titulo} className="pp-item"><h3>{c.titulo}</h3><p>{c.texto}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* Hazlo tú o lo hacemos por ti */}
      <section className="sec">
        <div className="env">
          <div className="sec-cab"><h2>Hazlo tú, <span className="gris">o lo hacemos por ti.</span></h2></div>
          <div className="pp-modos">
            <div className="pp-modo">
              <span className="pp-modo-eti">En la plataforma</span>
              <h3>{d.modos.plataforma.titulo}</h3>
              <p>{d.modos.plataforma.texto}</p>
              <ul className="lista">{d.modos.plataforma.incluye.map((x) => <li key={x}>{x}</li>)}</ul>
              <a className="btn btn-azul" href={APP}>Prueba gratis</a>
            </div>
            <div className="pp-modo oscuro">
              <span className="pp-modo-eti">Servicio de ReliaPlant</span>
              <h3>{d.modos.servicio.titulo}</h3>
              <p>{d.modos.servicio.texto}</p>
              <ul className="lista">{d.modos.servicio.incluye.map((x) => <li key={x}>{x}</li>)}</ul>
              {cotizar("Cotizar", "white")}
            </div>
          </div>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section className="sec suave">
        <div className="env pp-faq-env">
          <div className="sec-cab"><h2>Preguntas frecuentes</h2></div>
          <div className="pp-faq">
            {d.faq.map((f) => (
              <details key={f.pregunta}><summary>{f.pregunta}</summary><p>{f.respuesta}</p></details>
            ))}
          </div>
        </div>
      </section>

      {/* Siguiente paso del ciclo + cierre */}
      <section className="cierre">
        <div className="env">
          {d.siguiente && (
            <a className="pp-siguiente" href={d.siguiente.href}>
              <span>{d.siguiente.etiqueta}</span>
              <b>{d.siguiente.titulo} →</b>
            </a>
          )}
          <div className="cierre-caja">
            <div>
              <h2>Ve tu planta en ReliaPlant <span className="gris">antes de decidir.</span></h2>
              <p>Mándanos un listado de equipos o un DTI y en la demo lo ves cargado, con tus tags y tus ubicaciones técnicas.</p>
            </div>
            <div className="ctas">
              {cotizar("Solicita una demo")}
              <a className="btn btn-borde" href={APP}>Prueba gratis</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
