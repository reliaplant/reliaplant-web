"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Close } from "@carbon/icons-react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/config";
import FormularioContacto from "@/components/FormularioContacto";
import { VENTANA, DTI, RCM, RCA, TELEFONO, CHAT } from "@/components/home/piezas";
import "./home.css";

const APP = "https://app.reliaplant.com";

// ── Planes: se leen de config/planTemplates (misma fuente que /pricing y la app) ──
interface PlanTemplate {
  id: string;
  name: string;
  description: string;
  annualPrice?: number;
  limits: { maxUsers: number; maxActivos: number; maxPlants: number; maxRCA: number; maxRCM: number };
  features: {
    ai: boolean; export: boolean; collaboration: boolean; multiPlant: boolean;
    pricedPerPlant?: boolean; prioritySupport: boolean; purchaseOrders: boolean;
  };
  sort: number;
}
const fmtNum = (n: number) => (n < 0 ? "Ilimitados" : n.toLocaleString("es-MX"));
const fmtPlantas = (n: number) => (n < 0 ? "A la medida" : String(n));
function incluye(p: PlanTemplate): string[] {
  const items = [`RCA y RCM ${p.limits.maxRCA < 0 ? "ilimitados" : `(hasta ${p.limits.maxRCA})`}`];
  if (p.features.collaboration) items.push("Roles y permisos");
  if (p.features.prioritySupport) items.push("Soporte prioritario");
  if (p.features.purchaseOrders) items.push("Pago por orden de compra");
  return items.slice(0, 3);
}

const MODULOS = [
  {
    id: "tax", nombre: "Taxonomía", sigla: "TAX", foto: "/sitio/skid-etiquetado.jpg",
    alt: "Patín de bombeo con cada componente etiquetado",
    titulo: "Cada equipo con su ubicación, su DTI y sus fotos.",
    texto: "Carga miles de equipos desde Excel con vista previa de cada cambio, y márcalos sobre el PDF original de cada DTI.",
    puntos: ["Jerarquía de ubicaciones técnicas según ISO 14224.", "DTIs vectoriales con los equipos marcados.", "Mapa satelital con equipos y áreas de la planta.", "Exporta a SAP PM o a tu CMMS."],
    pantalla: DTI, enlace: "/modulos/registro-activos",
  },
  {
    id: "rcm", nombre: "Mantenimiento centrado en confiabilidad", sigla: "RCM", foto: "/sitio/planificador-oficina.jpg",
    alt: "Planificador de mantenimiento trabajando en su plan",
    titulo: "Planes de mantenimiento que se justifican solos.",
    texto: "Las 7 preguntas del RCM, del modo de falla a la tarea, con las escalas de riesgo de tu empresa.",
    puntos: ["Cada tarea trazada al modo de falla que ataca.", "Plantillas por familia de equipo: analiza una vez, replica en el resto.", "NPR o matriz de riesgo, con tus umbrales.", "Plan exportable a SAP PM."],
    pantalla: RCM, enlace: "/modulos/rcm",
  },
  {
    id: "rca", nombre: "Análisis de causa raíz", sigla: "RCA", foto: "/sitio/equipo-rca.jpg",
    alt: "Equipo de confiabilidad analizando una causa raíz",
    titulo: "Causa raíz con método, sin burocracia.",
    texto: "Del evento al árbol lógico: modos de falla, hipótesis, verificación y causas raíz, con la IA proponiendo y tú decidiendo.",
    puntos: ["Modos de falla e hipótesis sugeridos por IA.", "Tareas de verificación con responsable y fecha.", "Causas físicas, humanas y de gestión.", "Reporte PDF listo para el comité."],
    pantalla: RCA, enlace: "/modulos/rca",
  },
];

function Pieza({ html }: { html: string }) {
  return <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: html }} />;
}

export default function Home() {
  const [plans, setPlans] = useState<PlanTemplate[]>([]);
  const [modulo, setModulo] = useState("tax");
  const [demo, setDemo] = useState(false);

  useEffect(() => {
    let cancelado = false;
    getDoc(doc(db, "config", "planTemplates"))
      .then((snap) => {
        const data = snap.data();
        const lista = data?.plans
          ? Object.values(data.plans as Record<string, PlanTemplate>).sort((a, b) => a.sort - b.sort)
          : [];
        if (!cancelado) setPlans(lista);
      })
      .catch(() => {});
    return () => { cancelado = true; };
  }, []);

  useEffect(() => {
    if (!demo) return;
    const esc = (e: KeyboardEvent) => { if (e.key === "Escape") setDemo(false); };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [demo]);

  const abrirDemo = (e: React.MouseEvent) => { e.preventDefault(); setDemo(true); };
  const recomendado = plans.length > 2 ? plans[plans.length - 2].id : undefined;

  return (
    <div className="rph">
      {/* Portada */}
      <section className="hero">
        <div className="env">
          <div className="hero-txt">
            <span className="chip-sec"><i />Taxonomía ISO 14224 · RCM · RCA</span>
            <h1>Tu planta ordenada, <span className="gris">equipo por equipo.</span></h1>
            <p className="hero-sub">
              ReliaPlant reúne ubicaciones técnicas, equipos, DTIs y fotos de campo en un solo lugar, y sobre eso haces tus análisis RCM y RCA.
            </p>
            <div className="ctas">
              <a className="btn btn-azul" href={APP}>Prueba gratis</a>
              <a className="btn btn-borde" href="#demo" onClick={abrirDemo}>Solicita una demo</a>
            </div>
            <p className="nota"><b>Plan gratuito</b> para siempre · sin tarjeta · en español</p>
          </div>
          <div className="foto-hero">
            <div className="foto">
              <Image src="/sitio/portada-ingeniera.jpg" alt="Ingeniera de confiabilidad revisando una tablet junto a un tren de bombas" fill priority sizes="(max-width: 900px) 100vw, 520px" style={{ objectFit: "cover" }} />
            </div>
            <div className="flota flota-1">
              <div><div className="t">P-211A</div><div className="s">Bomba centrífuga de condensado</div></div>
              <div className="frow"><span>Criticidad</span><span className="crit">A</span></div>
              <div className="frow"><span>UT</span><span style={{ fontFamily: "var(--mono)" }}>CN-210</span></div>
              <div className="frow"><span>DTI</span><span style={{ fontFamily: "var(--mono)" }}>DTI-CN-210-01</span></div>
            </div>
            <div className="flota flota-2">
              <span className="ok">
                <svg viewBox="0 0 16 16"><path d="M3.5 8.5l3 3 6-7" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
              <div><div style={{ fontWeight: 600 }}>6 fotos registradas</div><div className="s">Sin señal · se suben al volver · GPS ±4 m</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* La app tal cual */}
      <section className="vitrina" aria-label="Así se ve ReliaPlant">
        <div className="env"><Pieza html={VENTANA} /></div>
      </section>

      {/* Módulos */}
      <section className="sec suave" id="modulos">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />Módulos</span>
            <h2>Tres módulos, <span className="gris">una sola planta.</span></h2>
            <p>Cada módulo trabaja sobre la misma taxonomía. El modo de falla del RCM y la causa del RCA apuntan al equipo real, con su tag y su ubicación.</p>
          </div>
          <div className="mods" role="tablist" aria-label="Módulos">
            {MODULOS.map((m) => (
              <button key={m.id} type="button" className="mod-btn" role="tab" id={`t-${m.id}`}
                aria-selected={modulo === m.id} aria-controls={`p-${m.id}`} onClick={() => setModulo(m.id)}>
                {m.nombre} <span className="s">{m.sigla}</span>
              </button>
            ))}
          </div>
          {MODULOS.map((m) => (
            <div key={m.id} className="mod-panel" role="tabpanel" id={`p-${m.id}`} aria-labelledby={`t-${m.id}`} hidden={modulo !== m.id}>
              <div className="mod-txt">
                <div className="mod-foto-caja">
                  <Image src={m.foto} alt={m.alt} fill sizes="(max-width: 900px) 100vw, 380px" style={{ objectFit: "cover" }} />
                </div>
                <h3>{m.titulo}</h3>
                <p>{m.texto}</p>
                <ul className="lista">{m.puntos.map((p) => <li key={p}>{p}</li>)}</ul>
                <a className="mas-link" href={m.enlace}>Ver el módulo {m.sigla} →</a>
              </div>
              <Pieza html={m.pantalla} />
            </div>
          ))}
        </div>
      </section>

      {/* App de campo */}
      <section className="sec campo" id="campo">
        <div className="env">
          <div className="sec-cab" style={{ marginBottom: 0 }}>
            <span className="chip-sec"><i />App de campo · Android</span>
            <h2>El levantamiento se hace en planta, <span className="gris">aunque no haya señal.</span></h2>
            <p>Descarga la planta al teléfono antes de bajar. Registra equipos, toma fotos y graba notas de voz. Al recuperar señal, todo se sube solo.</p>
            <ul className="lista">
              <li>Fotos en calidad original, con GPS y fecha.</li>
              <li>Los DTIs de la planta guardados en el teléfono, con zoom.</li>
              <li>Equipos nuevos directo en su ubicación técnica.</li>
              <li>Si la señal se cae a mitad de una subida, no se pierde ni se duplica nada.</li>
            </ul>
          </div>
          <div className="campo-vis">
            <div className="foto">
              <Image src="/sitio/campo-placa-motor.jpg" alt="Técnico fotografiando la placa de un motor con el celular" fill sizes="(max-width: 900px) 100vw, 520px" style={{ objectFit: "cover" }} />
            </div>
            <Pieza html={TELEFONO} />
          </div>
        </div>
      </section>

      {/* IA */}
      <section className="sec suave" id="ia">
        <div className="env ia-grid">
          <div className="sec-cab" style={{ marginBottom: 0 }}>
            <span className="chip-sec"><i />IA conectada a tu planta</span>
            <h2>Pídele los cambios a tu asistente. <span className="gris">Tú los apruebas.</span></h2>
            <p>ReliaPlant se conecta con Claude y otros asistentes compatibles con MCP. El asistente busca equipos, lee DTIs y fotos de placa, y prepara los cambios. Nada se guarda hasta que lo apruebas, y todo se puede deshacer.</p>
          </div>
          <Pieza html={CHAT} />
        </div>
      </section>

      {/* Franja de fotos */}
      <section className="banda" aria-label="Plantas reales" style={{ paddingTop: 96 }}>
        <div className="env">
          <div className="banda-grid">
            <figure className="b-grande">
              <Image src="/sitio/planta-dti-holograma.jpg" alt="Planta de proceso con su DTI superpuesto" fill sizes="(max-width: 760px) 100vw, 760px" style={{ objectFit: "cover" }} />
              <figcaption>Del DTI a la planta: cada línea y cada equipo con su tag.</figcaption>
            </figure>
            <figure>
              <Image src="/sitio/planta-aerea.jpg" alt="Vista aérea de una planta de compresión de gas" fill sizes="(max-width: 760px) 100vw, 380px" style={{ objectFit: "cover" }} />
              <figcaption>Mapa satelital con equipos y áreas.</figcaption>
            </figure>
            <figure>
              <Image src="/sitio/valvula-placa.jpg" alt="Placa de identificación en una válvula de control" fill sizes="(max-width: 760px) 100vw, 380px" style={{ objectFit: "cover" }} />
              <figcaption>Del tag en campo a la ficha del equipo.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Datos */}
      <section className="sec">
        <div className="env">
          <div className="sec-cab" style={{ marginBottom: 8 }}>
            <h2>Hecho por ingenieros de confiabilidad, <span className="gris">probado en plantas reales.</span></h2>
          </div>
          <div className="datos">
            <div className="dato"><b>+5.000</b><span>activos gestionados</span></div>
            <div className="dato"><b>+150</b><span>proyectos RCM</span></div>
            <div className="dato"><b>+250</b><span>proyectos RCA</span></div>
            <div className="dato"><b>ISO 14224</b><span>taxonomía de equipos</span></div>
          </div>
        </div>
      </section>

      {/* Precios */}
      <section className="sec suave" id="precios">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />Precios</span>
            <h2>Empieza gratis. <span className="gris">Paga cuando la planta lo pida.</span></h2>
            <p>Precio anual en dólares. Todos los planes incluyen el asistente de IA y reportes en PDF y Excel.</p>
          </div>
          <div className="planes">
            {plans.map((p) => {
              const rec = p.id === recomendado;
              const gratis = !p.annualPrice;
              const porPlanta = p.features.pricedPerPlant;
              return (
                <div key={p.id} className={`plan${rec ? " rec" : ""}`}>
                  <div className="top"><h3>{p.name}</h3>{rec && <span className="badge">Recomendado</span>}</div>
                  <p className="para">{p.description}</p>
                  <div className="precio">
                    {gratis ? "$0" : `$${p.annualPrice!.toLocaleString("en-US")}`}{" "}
                    <small>{gratis ? "para siempre" : porPlanta ? "/año/planta" : "/año"}</small>
                  </div>
                  <dl>
                    <dt>Usuarios</dt><dd>{p.limits.maxUsers}{porPlanta ? " por planta" : ""}</dd>
                    <dt>Activos</dt><dd>{fmtNum(p.limits.maxActivos)}{porPlanta ? " por planta" : ""}</dd>
                    <dt>Plantas</dt><dd>{fmtPlantas(p.limits.maxPlants)}</dd>
                  </dl>
                  <div className="inc">{incluye(p).map((i) => <span key={i}>{i}</span>)}</div>
                  {porPlanta ? (
                    <a className="btn btn-borde" href="#demo" onClick={abrirDemo}>Hablar con ventas</a>
                  ) : (
                    <a className={`btn ${rec ? "btn-azul" : "btn-borde"}`} href={APP}>{gratis ? "Crear cuenta" : "Comenzar prueba"}</a>
                  )}
                </div>
              );
            })}
          </div>
          <p className="nota" style={{ marginTop: 18 }}><a href="/pricing" style={{ color: "var(--azul)", fontWeight: 600 }}>Ver la comparación completa de planes →</a></p>
        </div>
      </section>

      {/* Cierre */}
      <section className="cierre" id="demo">
        <div className="env">
          <div className="cierre-caja">
            <div>
              <h2>Ve tu planta en ReliaPlant <span className="gris">antes de decidir.</span></h2>
              <p>Mándanos un listado de equipos o un DTI y en la demo lo ves cargado, con tus tags y tus ubicaciones técnicas.</p>
            </div>
            <div className="ctas">
              <a className="btn btn-azul" href="#demo" onClick={abrirDemo}>Solicita una demo</a>
              <a className="btn btn-borde" href={APP}>Prueba gratis</a>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario de demo (el mismo de todo el sitio) */}
      {demo && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) setDemo(false); }} role="dialog" aria-modal="true" aria-label="Solicita una demo">
          <div className="relative bg-white p-8 shadow-2xl md:w-[480px] w-full md:h-fit h-screen md:max-h-[90vh] overflow-y-auto md:rounded-2xl">
            <div className="mb-6 flex flex-row justify-between items-center">
              <span className="font-ZenDots text-gray-900 text-xl">RELIAPLANT</span>
              <button onClick={() => setDemo(false)} className="text-gray-500 hover:text-gray-900" aria-label="Cerrar"><Close size={24} /></button>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Solicita una demo</h2>
            <FormularioContacto type="demo" btnText="Solicitar demo" especial="Contacto - home" />
          </div>
        </div>
      )}
    </div>
  );
}
