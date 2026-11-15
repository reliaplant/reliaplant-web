import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AbrirFormContacto from "@/components/AbrirFormContacto";
import Calculadora from "./Calculadora";
import {
  N, Chip, PantallaMateriales, PantallaFichaRepuestos, PantallaDetalleMaterial, VerCalculo,
  PantallaOTMateriales, PantallaMovimientos, PantallaReabastecer,
} from "./Pantallas";
import "@/app/home.css";
import "./estilos.css";

// Módulo aún no disponible en la app: página fuera del índice y del menú hasta su lanzamiento.
export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: { absolute: "Inventario de repuestos críticos | ReliaPlant" },
  description:
    "Gestión de inventario de repuestos ligada a tus equipos: política por criticidad y rotación, mínimo y máximo con Poisson o lote económico, y qué comprar.",
  alternates: { canonical: "https://reliaplant.com/producto/inventario" },
};

const APP = "https://app.reliaplant.com/";
const ORIGEN = "web - /producto/inventario";

const FAQ = [
  {
    p: "¿Qué es un repuesto crítico en mantenimiento?",
    r: "Es la pieza cuya falta deja detenido o en riesgo un equipo importante. Se identifica por el equipo donde va instalada, no por su precio: un sello de 4.200 USD de una bomba de reserva puede pesar menos que una correa de 38 USD del único ventilador de la torre. En ReliaPlant el material hereda la criticidad del equipo más crítico que lo usa.",
  },
  {
    p: "¿Cómo se calcula el stock mínimo y máximo de repuestos?",
    r: "Depende de cómo se consume. Si rota, el mínimo es el punto de pedido (consumo durante el tiempo de entrega más un stock de seguridad) y el máximo suma el lote económico. Si es crítico y casi no se consume, se usa la distribución de Poisson: el menor número de unidades que cubre las fallas esperadas durante el tiempo de entrega con el nivel de servicio elegido, y el máximo es igual al mínimo.",
  },
  {
    p: "¿Qué es el punto de reorden y el stock de seguridad?",
    r: "El punto de reorden es la existencia a la que hay que lanzar el pedido para que llegue antes de quedarse en cero: demanda diaria × tiempo de entrega + stock de seguridad. El stock de seguridad cubre la variación del consumo: z × σ mensual × √(tiempo de entrega / 30,4), con z = 1,645 para 95 % y 2,326 para 99 %.",
  },
  {
    p: "¿Qué es la clasificación VED y FSN de repuestos?",
    r: "VED ordena por criticidad (Vital, Esencial, Deseable) y FSN por rotación (Fast, Slow, Non moving: se mueve seguido, lento o nada). Cruzadas dan la política de cada material. ReliaPlant cuenta rotación como meses con consumo en los últimos 12: 4 o más es rota, de 1 a 3 es lento, 0 es sin movimiento.",
  },
  {
    p: "¿Cuántos repuestos de seguro (insurance spares) debo tener?",
    r: "Los que cubran las fallas que pueden ocurrir mientras llega el reemplazo. Con λ = demanda anual × días de entrega / 365, se busca el menor s con P(X ≤ s) ≥ nivel de servicio. Si además conoces el costo de una parada, compara lo que cuesta guardar cada unidad contra el riesgo de no tenerla: muchas veces el óptimo es una unidad más que lo que da el nivel de servicio.",
  },
  {
    p: "¿Cómo calculo el inventario de repuestos de una planta nueva sin historial?",
    r: "Con confiabilidad: demanda anual = unidades instaladas × 8760 / MTBF de la pieza. Dos sellos instalados con MTBF de 26.280 horas dan 0,67 cambios al año. Si no tienes el MTBF puedes escribir un consumo anual estimado. Cuando el material cumple 6 meses en el inventario, manda el consumo real.",
  },
  {
    p: "¿Qué es un kardex de inventario?",
    r: "Es el registro de cada movimiento de un material con su saldo: entradas, salidas, ajustes por conteo y consumos. En mantenimiento sirve si cada salida dice para qué orden y equipo fue; sin eso el consumo no se puede ligar a las fallas.",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map(f => ({ "@type": "Question", name: f.p, acceptedAnswer: { "@type": "Answer", text: f.r } })),
};

// Ejemplos resueltos con los números exactos que devuelve analizarPolitica() en la app.
const PASOS_RODAMIENTO: [string, string, string][] = [
  ["D · demanda anual", "consumo de los últimos 12 meses", "48 UN"],
  ["Dd · demanda diaria", "D / 365", "0.132"],
  ["Tr · tiempo de entrega", "dato del material", "45 días"],
  ["σ · desviación mensual", "desv. estándar del consumo mensual (12 meses)", "1.128"],
  ["z · nivel de servicio", "una cola, 99 %", "2.326"],
  ["SS · stock de seguridad", "z × σ × √(Tr / 30.4)", "3.19"],
  ["Mín · punto de pedido", "Dd × Tr + SS (redondeado hacia arriba)", "10"],
  ["LEP · lote económico", "√(2 × D × Cp / (Ca × Cu)) = √(2 × 48 × 300 / (0.25 × 160))", "27"],
  ["Máx", "Mín + LEP", "37"],
];
const PASOS_SELLO: [string, string, string][] = [
  ["D · demanda anual", "instaladas × 8760 / MTBF = 2 × 8760 / 26280", "0.667 UN"],
  ["Tr · tiempo de entrega", "dato del material", "70 días"],
  ["λ · fallas esperadas mientras llega", "D × Tr / 365", "0.1279"],
  ["P(fallas ≤ 0)", "e^(−λ)", "88 %"],
  ["P(fallas ≤ 1)", "Σ e^(−λ) · λ^k / k!, k = 0…1", "99.2 %"],
  ["P(fallas ≤ 2)", "Σ e^(−λ) · λ^k / k!, k = 0…2", "100 %"],
  ["Por nivel de servicio", "menor s con P ≥ 99 % (mín. 1)", "1"],
  ["Por costo-riesgo", "mín. de s × Cu × Ca + D × P(fallas ≥ s) × costo parada", "2"],
  ["Mín = Máx", "el de costo-riesgo", "2"],
];
const COSTOS_SELLO = [
  { s: 0, c: 56667 }, { s: 1, c: 7851 }, { s: 2, c: 2526 }, { s: 3, c: 3168 }, { s: 4, c: 4201 },
];
const fmt = (n: number) => n.toLocaleString("es");

export default function Page() {
  return (
    <div className="rph lp-inv">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* ── Portada: titular + foto del estante anotada con la política de cada pieza ── */}
      <section className="iv-hero">
        <div className="env">
          <div className="iv-hero-grid">
            <div className="iv-hero-tit">
              <span className="chip-sec"><i />Producto · Inventario de repuestos</span>
              <h1>Cuántos repuestos tener y cuándo pedirlos, <span className="gris">calculado desde los equipos que los usan.</span></h1>
            </div>
            <div className="iv-hero-txt">
              <p>Cada material de tu almacén sabe en qué equipos va instalado. Con la criticidad de esos equipos, el consumo, el tiempo de entrega y el MTBF, ReliaPlant le asigna una política de stock, sugiere su mínimo y su máximo y te muestra la fórmula.</p>
              <div className="ctas">
                <a className="btn btn-azul" href={APP}>Prueba gratis</a>
                <AbrirFormContacto buttonText="Solicita una demo" variant="borde" icon={null} modalTitle="Solicita una demo" btnText="Enviar" especial={ORIGEN} />
              </div>
            </div>
          </div>

          <figure className="iv-estante">
            <div className="iv-estante-img">
              <Image
                src="/sitio/landing/inventario-repuestos-criticos.jpg"
                alt="Estante de almacén con un sello mecánico de cartucho, rodamientos, un kit de válvulas y juegos de empaquetaduras"
                fill priority sizes="(max-width: 1180px) 100vw, 1140px"
              />
              <span className="iv-pin" style={{ left: "14%", top: "46%" }}>1</span>
              <span className="iv-pin" style={{ left: "38%", top: "52%" }}>2</span>
              <span className="iv-pin" style={{ left: "63%", top: "36%" }}>3</span>
              <span className="iv-pin" style={{ left: "86%", top: "50%" }}>4</span>
            </div>
            <figcaption className="iv-leyenda">
              <div><span className="iv-pin">1</span><div><b>Sello mecánico</b><small>Vital · 2 instalados · 70 días</small><Chip t="Repuesto de seguro" /><em>mín 2 / máx 2</em></div></div>
              <div><span className="iv-pin">2</span><div><b>Rodamiento 6311-C3</b><small>Vital · 48 al año · 45 días</small><Chip t="Reorden crítico" /><em>mín 10 / máx 37</em></div></div>
              <div><span className="iv-pin">3</span><div><b>Kit de válvulas K-201</b><small>Vital · casi no se consume</small><Chip t="Repuesto de seguro" /><em>mín 1 / máx 1</em></div></div>
              <div><span className="iv-pin">4</span><div><b>Empaquetaduras</b><small>Esencial · rota todos los meses</small><Chip t="Reorden" /><em>mín 10 / máx 30</em></div></div>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ── La matriz: criticidad × rotación ── */}
      <section className="sec suave" id="politicas">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />Criticidad × rotación</span>
            <h2>Cuatro políticas de stock. <span className="gris">Cada material cae en una.</span></h2>
            <p>Un rodamiento que sale cada mes y un kit de válvulas que se usa cada tres años no pueden tener la misma regla. ReliaPlant cruza la clasificación VED (criticidad) con la FSN (rotación) y le asigna a cada material la suya.</p>
          </div>

          <div className="iv-matriz-grid">
            <div className="iv-matriz" role="table" aria-label="Matriz de política de stock por criticidad y rotación">
              <div className="iv-mz-esq" role="columnheader" />
              <div className="iv-mz-col" role="columnheader"><b>Rota</b><small>4 o más meses con consumo de 12</small></div>
              <div className="iv-mz-col" role="columnheader"><b>Lento o sin movimiento</b><small>de 0 a 3 meses con consumo</small></div>

              <div className="iv-mz-fil" role="rowheader"><b>Vital</b><small>equipo de criticidad alta o muy alta</small></div>
              <div className="iv-mz-celda rojo" role="cell">
                <Chip t="Reorden crítico" />
                <p>Reponer al llegar al mínimo, con stock de seguridad al 99 %.</p>
                <code>mín = Dd × Tr + SS · máx = mín + LEP</code>
                <span className="ej">Rodamiento 6311-C3 de P-211A/B</span>
              </div>
              <div className="iv-mz-celda azul" role="cell">
                <Chip t="Repuesto de seguro" />
                <p>Tener siempre lo justo para cubrir el tiempo de entrega. Al menos 1.</p>
                <code>Poisson · mín = máx</code>
                <span className="ej">Sello mecánico, kit de válvulas K-201</span>
              </div>

              <div className="iv-mz-fil" role="rowheader"><b>Esencial o Deseable</b><small>media o baja, o sin criticidad</small></div>
              <div className="iv-mz-celda sky" role="cell">
                <Chip t="Reorden" />
                <p>Reponer al llegar al mínimo, con stock de seguridad al 95 %.</p>
                <code>mín = Dd × Tr + SS · máx = mín + LEP</code>
                <span className="ej">Empaquetadura espiral, correas</span>
              </div>
              <div className="iv-mz-celda gris" role="cell">
                <Chip t="Bajo pedido" />
                <p>No se almacena. Se compra cuando haga falta.</p>
                <code>mín = máx = 0</code>
                <span className="ej">Filtro de aire de instrumentos</span>
              </div>
            </div>

            <div className="iv-matriz-txt">
              <div>
                <h3>De dónde sale la criticidad</h3>
                <p>De los equipos. Si el material está en varios, manda el más crítico.</p>
                <table className="iv-mini">
                  <tbody>
                    <tr><td>Muy alta · Alta</td><td><b>Vital</b></td></tr>
                    <tr><td>Media alta · Media</td><td><b>Esencial</b></td></tr>
                    <tr><td>Media baja · Baja</td><td><b>Deseable</b></td></tr>
                  </tbody>
                </table>
                <p className="nota">Puedes fijarla a mano en el material. Para la política solo Vital cuenta como crítico.</p>
              </div>
              <div>
                <h3>De dónde sale la rotación</h3>
                <p>Del kardex: meses de los últimos 12 con salida o consumo de OT. Para decir que algo no se mueve hacen falta 6 meses de historial.</p>
                <p>Sin historial, con MTBF o un consumo estimado: 4 o más al año es rota; menos, lento.</p>
              </div>
              <div className="iv-faltan">
                <Chip t="Faltan datos" />
                <p>Si no rota, no es vital y no se sabe su criticidad o su consumo, la app no inventa un número. Te dice qué dato falta.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pantalla: Materiales, anotada ── */}
      <section className="sec">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />Pestaña Materiales</span>
            <h2>El almacén de la planta, <span className="gris">con la política al lado del stock.</span></h2>
          </div>
          <PantallaMateriales notas />
          <ol className="iv-notas">
            <li><N n={1} /><div><b>Política.</b> La que resulta de la matriz. Al pasar el cursor dice la criticidad y la rotación que la definieron. Se filtra con el embudo de la columna.</div></li>
            <li><N n={2} /><div><b>Disponible.</b> Stock menos lo que piden las OT abiertas. El kit de válvulas tiene 1 en el estante y 0 disponible: la OT-000456 ya lo reservó.</div></li>
            <li><N n={3} /><div><b>Mín / Máx.</b> El vigente y, en azul, el sugerido cuando es distinto. El filtro &quot;Con sugerencia distinta&quot; te deja ver solo esos.</div></li>
            <li><N n={4} /><div><b>Estatus.</b> OK, Bajo mínimo, Agotado o Negativo, siempre medido sobre el disponible y no sobre el físico.</div></li>
          </ol>
        </div>
      </section>

      {/* ── Lista de materiales por equipo ── */}
      <section className="sec suave">
        <div className="env">
          <div className="iv-bom">
            <div className="iv-bom-txt">
              <span className="chip-sec"><i />Repuestos por equipo</span>
              <h2>La criticidad no se adivina. <span className="gris">Se hereda del equipo.</span></h2>
              <p>En la ficha de cada equipo hay una sección Repuestos: la lista de materiales con la cantidad instalada o por cambio. Esa relación hace tres cosas a la vez.</p>
              <ul className="lista">
                <li>El sello 300045812 está en P-211A y P-211B, ambas de criticidad Alta: el material queda Vital sin que nadie lo marque.</li>
                <li>Las 2 unidades instaladas entran en la demanda por confiabilidad: 2 × 8760 / MTBF.</li>
                <li>Cuando alguien planifica una OT de P-211A, esos repuestos aparecen como sugerencia para reservar.</li>
              </ul>
              <p className="nota">La ficha del equipo es la de <Link href="/producto/taxonomia" className="iv-link">Registro de activos</Link>. Si tu maestro de equipos aún no está ordenado, empieza por ahí.</p>
            </div>
            <div className="iv-bom-vis">
              <PantallaFichaRepuestos />
              <div className="iv-flecha" aria-hidden="true">
                <svg viewBox="0 0 40 60"><path d="M20 4 V48 M8 38 L20 52 L32 38" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span>el material ve sus equipos</span>
              </div>
              <PantallaDetalleMaterial />
            </div>
          </div>
        </div>
      </section>

      {/* ── Dos ejemplos resueltos ── */}
      <section className="sec" id="ejemplos">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />Ejemplos resueltos</span>
            <h2>Dos repuestos de la misma bomba. <span className="gris">Dos cálculos distintos.</span></h2>
            <p>Planta Compresión Norte, bombas P-211A/B en la UT CN-210. Parámetros de la empresa con los valores típicos de la app: costo por pedido 300, almacenamiento 25 % anual, nivel de servicio 99 % para vitales y 95 % para el resto.</p>
          </div>

          <article className="iv-caso">
            <div className="iv-caso-txt">
              <span className="iv-caso-n">A</span>
              <h3>Rodamiento 6311-C3 <span className="gris">· Reorden crítico</span></h3>
              <dl className="iv-dl">
                <div><dt>Consumo 12 meses</dt><dd>4 3 5 4 2 4 6 3 4 5 3 5</dd></div>
                <div><dt>Tiempo de entrega</dt><dd>45 días</dd></div>
                <div><dt>Precio unitario</dt><dd>160</dd></div>
                <div><dt>Equipo más crítico</dt><dd>P-211A · Alta</dd></div>
              </dl>
              <p>Salió en los 12 meses: rota. Es vital: reorden crítico al 99 %.</p>
              <p>En 45 días se consumen en promedio 5,9 rodamientos. La variación mensual (σ = 1,13) escalada al tiempo de entrega y multiplicada por z = 2,326 da 3,2 de seguridad. El mínimo es 10.</p>
              <p>El lote económico equilibra el costo de pedir contra el de guardar: con 300 por pedido y 40 al año por rodamiento guardado, conviene pedir 27 cada vez. El máximo queda en 37.</p>
            </div>
            <VerCalculo
              label="Ver cálculo del rodamiento 6311-C3 en ReliaPlant: pasos del modelo de reorden con lote económico"
              metodo="Automático — lo propone la app (Reorden crítico)"
              pasos={PASOS_RODAMIENTO} politica="Reorden crítico" resultado="mín 10 / máx 37" hoy="6 / 12"
            />
          </article>

          <article className="iv-caso">
            <div className="iv-caso-txt">
              <span className="iv-caso-n">B</span>
              <h3>Sello mecánico de cartucho <span className="gris">· Repuesto de seguro</span></h3>
              <dl className="iv-dl">
                <div><dt>Historial</dt><dd>ninguno, planta nueva</dd></div>
                <div><dt>Instalados</dt><dd>2 (P-211A y P-211B)</dd></div>
                <div><dt>MTBF del sello</dt><dd>26.280 h (3 años)</dd></div>
                <div><dt>Tiempo de entrega</dt><dd>70 días</dd></div>
                <div><dt>Precio unitario</dt><dd>4.200</dd></div>
                <div><dt>Costo de parada</dt><dd>85.000 por evento</dd></div>
              </dl>
              <p>Sin historial, la demanda sale de confiabilidad: 2 × 8760 / 26.280 = 0,67 sellos al año. En 70 días se esperan λ = 0,128 fallas.</p>
              <p>Con 1 sello en el estante la probabilidad de no quedarse sin repuesto es 99,2 %. Pasa el 99 %: por nivel de servicio basta con 1.</p>
              <p>Pero hay costo de parada. Guardar un sello cuesta 1.050 al año; no tenerlo cuando falla cuesta 85.000. El costo anual es mínimo con 2.</p>
            </div>
            <div className="iv-caso-vis">
              <VerCalculo
                label="Ver cálculo del sello mecánico en ReliaPlant: distribución de Poisson por nivel de servicio y por costo-riesgo"
                metodo="Automático — lo propone la app (Repuesto de seguro)"
                pasos={PASOS_SELLO} politica="Repuesto de seguro" resultado="mín 2 / máx 2" hoy="1 / 1"
              />
              <div className="iv-curva" aria-label="Costo anual del sello según unidades en stock">
                <div className="iv-curva-cab"><b>Costo anual según sellos en stock</b><small>s × Cu × Ca + D × P(fallas ≥ s) × costo de parada</small></div>
                {COSTOS_SELLO.map(x => (
                  <div key={x.s} className={`iv-bar ${x.s === 2 ? "sel" : ""}`}>
                    <span className="s">{x.s}</span>
                    <span className="v"><i style={{ width: `${Math.max(1.5, (x.c / 56667) * 100)}%` }} /></span>
                    <span className="c">{fmt(x.c)}</span>
                  </div>
                ))}
                <p>Con 0, cada falla es una parada: 0,67 al año × 85.000. Con 3 o más se paga almacén que ya no reduce el riesgo.</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ── Calculadora ── */}
      <section className="sec suave" id="calculadora">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />Calculadora</span>
            <h2>Pruébalo con tu repuesto. <span className="gris">Mismas fórmulas que la app.</span></h2>
            <p>Cambia los datos y mira cómo se mueve el mínimo. En la app esto mismo está en Ver cálculo de cada material, y lo simulas antes de guardar.</p>
          </div>
          <Calculadora />
        </div>
      </section>

      {/* ── Disponible = stock − reservado ── */}
      <section className="sec">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />Reserva y consumo desde la OT</span>
            <h2>Disponible = stock − reservado. <span className="gris">El técnico no se entera en el almacén.</span></h2>
            <p>El reservado no se escribe a mano. Se calcula con las órdenes abiertas, planificadas o en ejecución que piden el material y todavía no lo consumieron.</p>
          </div>

          <ol className="iv-linea">
            <li>
              <span className="iv-linea-p" />
              <b>Se planifica la OT-000456</b>
              <p>Cambio de válvulas de 2.ª etapa del K-201. Se elige el kit del inventario.</p>
              <div className="iv-cont"><span>Stock <b>1</b></span><span>Reservado <b>1</b></span><span>Disponible <b className="iv-rojo">0</b></span></div>
            </li>
            <li>
              <span className="iv-linea-p" />
              <b>Aparece en Reabastecer</b>
              <p>Disponible 0, mínimo 1: Agotado. Se piden hasta el máximo antes de que se ejecute la orden.</p>
              <div className="iv-cont"><span>Stock <b>1</b></span><span>Reservado <b>1</b></span><span>Disponible <b className="iv-rojo">0</b></span></div>
            </li>
            <li>
              <span className="iv-linea-p" />
              <b>Se cierra la OT</b>
              <p>&quot;¿Cuánto se usó de cada material?&quot; Por defecto lo planificado. Se descuenta del stock.</p>
              <div className="iv-cont"><span>Stock <b>0</b></span><span>Reservado <b>0</b></span><span>Disponible <b className="iv-rojo">0</b></span></div>
            </li>
            <li>
              <span className="iv-linea-p" />
              <b>Queda en el kardex</b>
              <p>Consumo OT con el número de la orden, el usuario y el stock resultante.</p>
              <div className="iv-cont"><span>Tipo <Chip t="Consumo OT" /></span></div>
            </li>
          </ol>

          <div className="iv-ot-grid">
            <div>
              <PantallaOTMateriales />
              <p className="iv-pie">Paso de materiales al planificar la orden en el <Link href="/producto/cmms" className="iv-link">GMAO</Link>. Junto a cada material, el disponible sin contar esta OT; si no alcanza dice &quot;solo hay&quot;. Los repuestos del equipo se ofrecen con un clic.</p>
            </div>
            <div>
              <PantallaMovimientos />
              <p className="iv-pie">Movimientos: entradas con OC o guía, salidas con vale, ajustes por conteo y consumos de OT. Cada línea guarda quién la hizo y el saldo que dejó.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reabastecer ── */}
      <section className="sec suave">
        <div className="env">
          <div className="iv-reab">
            <div className="iv-reab-txt">
              <span className="chip-sec"><i />Pestaña Reabastecer</span>
              <h2>La lista de compras <span className="gris">ya viene hecha.</span></h2>
              <p>Todo lo que está en el mínimo o por debajo, con lo más urgente arriba.</p>
              <ul className="lista">
                <li>Pedir = máximo − disponible. Sin máximo, hasta el doble del mínimo.</li>
                <li>Importe estimado con el precio unitario; avisa cuántos no tienen precio.</li>
                <li>Excel con fabricante, n.º de parte, stock, reservado y precio para armar la solicitud de compra.</li>
              </ul>
              <p className="nota">En el ejemplo el sello ya tiene aplicado el sugerido (2 / 2): con 1 disponible se pide 1.</p>
            </div>
            <div className="iv-reab-vis"><PantallaReabastecer /></div>
          </div>
        </div>
      </section>

      {/* ── Antes / con ReliaPlant ── */}
      <section className="sec">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />Hoja de cálculo vs. ReliaPlant</span>
            <h2>Lo que cambia <span className="gris">cuando el almacén conoce los equipos.</span></h2>
          </div>
          <div className="iv-vs" role="table" aria-label="Comparación entre gestionar repuestos en hoja de cálculo y en ReliaPlant">
            <div className="iv-vs-cab" role="row"><span role="columnheader" /><span role="columnheader">Con la hoja de cálculo</span><span role="columnheader">Con ReliaPlant</span></div>
            {[
              ["Mínimo y máximo", "Se fijaron hace años, a ojo o copiados de otra planta.", "Sugeridos por política, con cada fórmula en Ver cálculo. Tú decides si aplicas."],
              ["Qué es crítico", "Una columna sí/no que nadie actualiza.", "Heredado del equipo más crítico que usa el material."],
              ["Disponible", "El stock físico, aunque otra orden ya lo pidió.", "Stock menos lo reservado por las OT abiertas."],
              ["Consumo", "Salidas sin orden ni equipo.", "Consumo OT con número de orden en el kardex."],
              ["Planta nueva", "Sin historial no hay cálculo.", "Demanda por MTBF × instaladas o consumo estimado."],
              ["Qué comprar", "Revisar fila por fila.", "Reabastecer: cantidad e importe, a Excel."],
            ].map(([t, a, b]) => (
              <div className="iv-vs-fila" role="row" key={t}>
                <b role="rowheader">{t}</b><span role="cell" className="antes">{a}</span><span role="cell" className="desp">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Arranque con el maestro del ERP ── */}
      <section className="sec suave">
        <div className="env">
          <div className="iv-erp">
            <div>
              <span className="chip-sec"><i />Carga masiva</span>
              <h2>Arranca con el maestro <span className="gris">que ya exportas del ERP.</span></h2>
              <p>Descargas la plantilla o subes tu propio exporte: la app reconoce los encabezados más comunes. Antes de aplicar ves fila por fila qué se crea, qué se actualiza y qué tiene error.</p>
              <ul className="lista">
                <li>CÓDIGO es la llave del material en la planta.</li>
                <li>EXISTENCIA vacía no toca el stock. Un número distinto del actual queda como ajuste por conteo en el kardex.</li>
                <li>Una columna faltante, repetida o una fila con error detiene la carga entera. Nada queda a medias.</li>
              </ul>
            </div>
            <div className="scroll-x">
              <table className="iv-xls" aria-label="Columnas de la plantilla de materiales y encabezados que reconoce">
                <thead><tr><th>Columna</th><th>También reconoce</th></tr></thead>
                <tbody>
                  <tr><td>CÓDIGO</td><td>CODIGO MATERIAL · MATERIAL</td></tr>
                  <tr><td>DESCRIPCIÓN</td><td>TEXTO BREVE · DESCRIPCION MATERIAL</td></tr>
                  <tr><td>UNIDAD</td><td>UM · UNIDAD DE MEDIDA</td></tr>
                  <tr><td>CATEGORÍA</td><td>GRUPO · GRUPO DE ARTICULOS</td></tr>
                  <tr><td>N.º PARTE</td><td>NUMERO DE PARTE · PART NUMBER</td></tr>
                  <tr><td>UBICACIÓN</td><td>ESTANTE · UBICACION EN ALMACEN</td></tr>
                  <tr><td>PRECIO UNITARIO</td><td>PRECIO · COSTO UNITARIO</td></tr>
                  <tr><td>STOCK MÍNIMO</td><td>MINIMO · PUNTO DE REORDEN</td></tr>
                  <tr><td>STOCK MÁXIMO</td><td>MAXIMO</td></tr>
                  <tr><td>EXISTENCIA</td><td>STOCK · STOCK ACTUAL · CANTIDAD</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hazlo tú o lo hacemos por ti ── */}
      <section className="sec">
        <div className="env">
          <div className="sec-cab">
            <span className="chip-sec"><i />Hazlo tú o lo hacemos por ti</span>
            <h2>El software calcula. <span className="gris">Los datos de entrada son el trabajo.</span></h2>
            <p>Un mínimo bien calculado sobre un maestro con duplicados y sin equipos asociados sigue siendo un mal mínimo. Puedes armarlo tú en la plataforma o encargarnos el estudio de repuestos críticos.</p>
          </div>
          <div className="iv-estudio">
            <ol className="iv-etapas">
              {[
                ["Maestro de materiales", "Depuramos duplicados, descripciones y números de parte.", "Carga masiva con plantilla y vista previa de errores."],
                ["Repuestos por equipo", "Asociamos repuestos a equipos desde manuales y planos.", "Sección Repuestos en la ficha de cada equipo."],
                ["Criticidad", "Análisis de criticidad de repuestos con tu equipo de mantenimiento.", "Se hereda del equipo o la fijas en el material."],
                ["Entrega, MTBF y costo de parada", "Revisamos tiempos de entrega, MTBF y costos de parada.", "Se completan en Ver cálculo, con simulación."],
                ["Mínimos y máximos", "Cargamos en ReliaPlant y ajustamos mínimos y máximos contigo.", "Aplicas el sugerido o fijas el tuyo."],
              ].map(([t, nos, tu], i) => (
                <li key={t}>
                  <span className="n">{i + 1}</span>
                  <div>
                    <h3>{t}</h3>
                    <p>{nos}</p>
                    <p className="tu"><b>Si lo haces tú:</b> {tu}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="iv-estudio-cta">
              <span className="iv-estudio-eti">Estudio de repuestos críticos</span>
              <p>Los cinco pasos los hace un ingeniero de ReliaPlant con tu almacén y tu equipo de mantenimiento. El resultado queda cargado en tu inventario.</p>
              <AbrirFormContacto buttonText="Cotiza el estudio" variant="white" icon={null} modalTitle="Estudio de repuestos críticos" btnText="Enviar" especial={ORIGEN} />
              <a className="btn btn-borde" href={APP}>Prefiero hacerlo yo: prueba gratis</a>
            </div>
          </div>
          <p className="iv-pie">¿Tus equipos todavía no tienen taxonomía ni criticidad? Eso va primero: <Link href="/servicios/levantamiento-de-activos" className="iv-link">levantamiento de activos</Link> y <Link href="/servicios/taxonomia-iso-14224" className="iv-link">taxonomía ISO 14224</Link>.</p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="sec suave">
        <div className="env iv-faq-env">
          <div className="sec-cab">
            <span className="chip-sec"><i />Preguntas frecuentes</span>
            <h2>Sobre repuestos críticos <span className="gris">y stock de mantenimiento.</span></h2>
          </div>
          <div className="iv-faq">
            {FAQ.map(f => (
              <details key={f.p}>
                <summary>{f.p}</summary>
                <p>{f.r}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cierre ── */}
      <section className="cierre">
        <div className="env">
          <Link href="/producto/taxonomia" className="iv-sig">
            <span>El ciclo vuelve a empezar</span>
            <b>Registro de activos: los equipos donde va cada repuesto →</b>
          </Link>
          <div className="cierre-caja">
            <div>
              <h2>Tu próximo sello, <span className="gris">en el estante antes de la falla.</span></h2>
              <p>Te mostramos el inventario con tus propios materiales y equipos.</p>
            </div>
            <div className="ctas">
              <AbrirFormContacto buttonText="Solicita una demo" variant="white" icon={null} modalTitle="Solicita una demo" btnText="Enviar" especial={ORIGEN} />
              <a className="btn btn-borde" href={APP}>Prueba gratis</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
