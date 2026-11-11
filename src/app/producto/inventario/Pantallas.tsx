// Réplicas de las pantallas de Inventario de ReliaPlant (rama feat/ram-rbi-inventario de la app):
//   MaterialesTab.tsx, MaterialDetalle.tsx, CalculoStock.tsx, RepuestosEquipo.tsx (ficha del equipo),
//   MaterialesOT.tsx (paso de la OT), MovimientosTab.tsx y ReabastecerTab.tsx.
// Columnas, etiquetas, políticas, estatus y colores salen de politica.ts y models.inventario.ts.
import type { ReactNode } from "react";

/** Número de anotación (callout) sobre una pantalla. */
export function N({ n }: { n: number }) {
  return <span className="iv-n" aria-hidden="true">{n}</span>;
}

function Cabecera({ sub }: { sub?: "materiales" | "movimientos" | "reabastecer" | null }) {
  return (
    <>
      <div className="rp-head">
        <div className="rp-logo">RELIAPLANT</div>
        <div className="rp-tabs">
          <span>TAX</span><span>GMAO</span><span className="act">Inventario</span><span>RCA</span><span>RCM</span><span>PM</span><span>RBI</span>
        </div>
      </div>
      {sub && (
        <div className="rp-sub">
          <span className={sub === "materiales" ? "act" : ""}>Materiales</span>
          <span className={sub === "movimientos" ? "act" : ""}>Movimientos</span>
          <span className={sub === "reabastecer" ? "act" : ""}>Reabastecer <b className="iv-badge">3</b></span>
        </div>
      )}
    </>
  );
}

// Colores reales: COLOR_POLITICA y COLOR_ESTADO_STOCK (politica.ts / models.inventario.ts)
const POL: Record<string, string> = {
  "Reorden crítico": "iv-c-rojo",
  Reorden: "iv-c-sky",
  "Repuesto de seguro": "iv-c-azul",
  "Bajo pedido": "iv-c-gris",
  "Faltan datos": "iv-c-blanco",
};
const EST: Record<string, string> = { OK: "iv-c-verde", "Bajo mínimo": "iv-c-sky", Agotado: "iv-c-rojo", Negativo: "iv-c-rojo" };
const MOV: Record<string, string> = { Entrada: "iv-c-verde", Salida: "iv-c-sky", "Ajuste por conteo": "iv-c-gris", "Consumo OT": "iv-c-azul" };

export const Chip = ({ t, cls }: { t: string; cls?: string }) => (
  <span className={`iv-chip ${cls ?? POL[t] ?? EST[t] ?? MOV[t] ?? "iv-c-gris"}`}>{t}</span>
);

function Barra({ children }: { children: ReactNode }) {
  return <div className="iv-barra">{children}</div>;
}

// ── 1. Materiales ──
const MATERIALES: [string, string, string, string, string, string, string, string, string | null, string, ReactNode?][] = [
  ["300045812", 'Sello mecánico cartucho 1,875"', "Sellos", "Repuesto de seguro", "A-03-2", "1", "1", "1 / 1", "2 / 2", "Bajo mínimo"],
  ["300045820", "Rodamiento 6311-C3", "Rodamientos", "Reorden crítico", "A-01-4", "10", "8", "6 / 12", "10 / 37", "OK"],
  ["300061177", "Kit de válvulas compresor K-201", "Válvulas", "Repuesto de seguro", "B-02-1", "1", "0", "1 / 1", null, "Agotado"],
  ["300038402", 'Empaquetadura espiral 6" 300#', "Empaquetaduras", "Reorden", "C-04-3", "18", "14", "10 / 30", null, "OK"],
  ["300072215", "Correa de ventilador SPB 2360", "Correas", "Reorden", "C-01-2", "3", "3", "4 / 8", null, "Bajo mínimo"],
  ["300080931", "Filtro de aire de instrumentos", "Filtros", "Bajo pedido", "D-01-3", "2", "2", "0 / 0", null, "OK"],
  ["300091044", "Manómetro 0-160 psi 4\"", "Instrumentos", "Faltan datos", "D-02-1", "4", "4", "- / -", null, "OK"],
];

export function PantallaMateriales({ notas = false }: { notas?: boolean }) {
  return (
    <div className="pantalla" role="img" aria-label="Pestaña Materiales del inventario de ReliaPlant: política de stock, stock, disponible, mínimo y máximo con el sugerido, y estatus">
      <Cabecera sub="materiales" />
      <Barra>
        <span className="iv-buscar">Buscar código, descripción, n.º parte...</span>
        <span className="iv-tg">Ocultar dados de baja <i /></span>
        <span className="iv-acc">
          <span className="iv-b">Excel</span><span className="iv-b">Parámetros</span><span className="iv-b">Carga masiva</span><span className="iv-b az">+ Nuevo material</span>
        </span>
      </Barra>
      <div className="scroll-x">
        <table className="tabla-app iv-t">
          <thead>
            <tr>
              <th>Código</th><th>Descripción</th><th className="c">Categoría</th>
              <th className="c">Política {notas && <N n={1} />}</th>
              <th className="c">Ubicación</th><th className="r">Stock</th>
              <th className="r">Disponible {notas && <N n={2} />}</th>
              <th className="c">Mín / Máx {notas && <N n={3} />}</th>
              <th className="c">Estatus {notas && <N n={4} />}</th>
            </tr>
          </thead>
          <tbody>
            {MATERIALES.map(([cod, desc, cat, pol, ub, st, disp, mm, sug, est]) => (
              <tr key={cod}>
                <td className="b">{cod}</td>
                <td><span className="iv-sub">{desc}</span></td>
                <td className="c">{cat}</td>
                <td className="c"><Chip t={pol} /></td>
                <td className="c">{ub}</td>
                <td className="r">{st} <span className="iv-g">UN</span></td>
                <td className={`r b ${disp === "0" ? "iv-rojo" : ""}`}>{disp}</td>
                <td className="c">{mm}{sug && <b className="iv-sug"> → {sug}</b>}</td>
                <td className="c"><Chip t={est} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ── 2. Ficha del equipo (sección Repuestos) + detalle del material ──
export function PantallaFichaRepuestos() {
  return (
    <div className="pantalla iv-ficha" role="img" aria-label="Ficha del equipo P-211A en ReliaPlant con su sección Repuestos: materiales del inventario y cantidad instalada">
      <div className="rp-head">
        <div className="rp-logo">RELIAPLANT</div>
        <div className="rp-tabs"><span className="act">TAX</span><span>GMAO</span><span>Inventario</span><span>RCA</span></div>
      </div>
      <div className="iv-ficha-c">
        <div className="iv-ficha-cab">
          <div className="iv-ficha-foto" />
          <div>
            <div className="iv-tag">P-211A</div>
            <div className="iv-desc">Bomba centrífuga de alimentación · CN-210</div>
            <div className="iv-crit">Criticidad <span className="iv-alta">Alta</span></div>
          </div>
        </div>
        <div className="iv-rep">
          <div className="iv-rep-cab"><h4>Repuestos</h4><span>3 materiales</span></div>
          <ul>
            <li><span className="m"><b>300045812</b><span> — Sello mecánico cartucho 1,875&quot;</span></span><span className="st">stock 1</span><span className="q">1</span><span className="u">UN</span></li>
            <li><span className="m"><b>300045820</b><span> — Rodamiento 6311-C3</span></span><span className="st">stock 10</span><span className="q">2</span><span className="u">UN</span></li>
            <li><span className="m"><b>300045833</b><span> — Anillo de desgaste del impulsor</span></span><span className="st">stock 2</span><span className="q">1</span><span className="u">UN</span></li>
          </ul>
          <div className="iv-type">Agregar repuesto del inventario…</div>
        </div>
      </div>
    </div>
  );
}

export function PantallaDetalleMaterial() {
  return (
    <div className="pantalla iv-modal" role="img" aria-label="Detalle del material 300045812 en ReliaPlant: stock, reservado, disponible, política sugerida y equipos que lo usan">
      <div className="iv-modal-cab">
        <div><b>300045812</b> <span>— Sello mecánico cartucho 1,875&quot;</span></div>
        <Chip t="Bajo mínimo" />
      </div>
      <div className="iv-modal-c">
        <div className="iv-tarjetas">
          <div><small>Stock</small><b>1 <i>UN</i></b></div>
          <div><small>Reservado</small><b>0 <i>UN</i></b></div>
          <div><small>Disponible</small><b className="az">1 <i>UN</i></b></div>
        </div>
        <div className="iv-datos">
          <div><small>Unidad</small>UN</div><div><small>Categoría</small>Sellos</div><div><small>Ubicación</small>A-03-2</div><div><small>Precio unitario</small>4.200,00</div>
          <div><small>Fabricante</small><span className="iv-g">—</span></div><div><small>N.º de parte</small>SC-1875-C</div><div><small>Stock mínimo</small>1</div><div><small>Tiempo de entrega</small>70 días</div>
        </div>
        <div className="iv-pol">
          <Chip t="Repuesto de seguro" />
          <span>Sugerido: mín <b>2</b> / máx <b>2</b> <em>(hoy 1 / 1)</em></span>
          <u>Ver cálculo</u>
          <span className="iv-b az">Aplicar</span>
        </div>
        <div className="iv-dos">
          <div><h5>Reservado en OT</h5><p className="vacio">Ninguna orden abierta lo pide.</p></div>
          <div>
            <h5>Equipos que lo usan</h5>
            <p><span><b>P-211A</b> — Bomba centrífuga de alimentación</span><span>1 UN</span></p>
            <p><span><b>P-211B</b> — Bomba centrífuga de alimentación</span><span>1 UN</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── 3. Ver cálculo (CalculoStock.tsx): pasos como la hoja de Excel ──
export function VerCalculo({ pasos, politica, resultado, hoy, metodo, label }: {
  pasos: [string, string, string][]; politica: string; resultado: string; hoy: string; metodo: string; label: string;
}) {
  return (
    <div className="pantalla iv-calc" role="img" aria-label={label}>
      <div className="iv-calc-c">
        <div className="iv-sel"><small>Método</small><div>{metodo}</div></div>
        <div className="scroll-x">
          <table className="iv-pasos">
            <thead><tr><th>Paso</th><th>Fórmula</th><th className="r">Resultado</th></tr></thead>
            <tbody>
              {pasos.map(([a, b, c]) => (
                <tr key={a}><td>{a}</td><td className="f">{b}</td><td className="r">{c}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="iv-res">
          <Chip t={politica} />
          <span>Resultado: {resultado} <em>· hoy {hoy}</em></span>
          <span className="iv-acc"><span className="iv-b">Deshacer</span><span className="iv-b">Guardar datos</span></span>
        </div>
      </div>
    </div>
  );
}

// ── 4. Paso "¿Se necesitan materiales o repuestos?" de la OT (MaterialesOT.tsx) ──
export function PantallaOTMateriales() {
  return (
    <div className="pantalla iv-ot" role="img" aria-label="Planificación de la orden OT-000456 en ReliaPlant: materiales del inventario con su disponible y repuestos sugeridos del equipo">
      <div className="iv-ot-cab"><b>OT-000456</b><span>K-201 · Cambio de válvulas de 2.ª etapa</span><Chip t="Planificada" cls="iv-c-sky" /></div>
      <div className="iv-ot-c">
        <p className="iv-preg">¿Se necesitan materiales o repuestos?</p>
        <div className="iv-ot-fila"><span><b>300061177</b> Kit de válvulas compresor K-201</span><em>disp. 1</em><span className="iv-in">1</span><span className="u">UN</span></div>
        <div className="iv-ot-fila"><span><b>300038402</b> Empaquetadura espiral 6&quot; 300#</span><em>disp. 18</em><span className="iv-in">4</span><span className="u">UN</span></div>
        <div className="iv-ot-sug"><small>Repuestos del equipo:</small><span>+ 300061190 Resorte de válvula de succión</span></div>
        <div className="iv-type">Buscar material del inventario por código o descripción…</div>
        <p className="iv-ayuda">Elige del inventario (reserva el stock hasta cerrar la OT). Lo que no esté en el catálogo, escríbelo abajo.</p>
      </div>
    </div>
  );
}

// ── 5. Movimientos (kardex) ──
const KARDEX: [string, string, string, string, string, string, string, string][] = [
  ["10 nov 16:42", "Consumo OT", "-2", "10", "OT-000449", "J. Pérez", "Cambio de rodamientos P-211B", "300045820"],
  ["07 nov 09:15", "Salida", "-1", "12", "Vale 2231", "L. Gómez", "Taller, banco de pruebas", "300045820"],
  ["03 nov 08:14", "Entrada", "+12", "13", "OC 4500018832", "L. Gómez", "-", "300045820"],
  ["31 oct 17:30", "Ajuste por conteo", "-1", "1", "Conteo cíclico", "L. Gómez", "Faltante en A-01-4", "300045820"],
  ["28 oct 11:05", "Entrada", "+1", "1", "Guía 18774", "L. Gómez", "-", "300061177"],
];

export function PantallaMovimientos() {
  return (
    <div className="pantalla" role="img" aria-label="Pestaña Movimientos del inventario de ReliaPlant: kardex con entradas, salidas, ajustes por conteo y consumos de OT">
      <Cabecera sub="movimientos" />
      <Barra>
        <span className="iv-buscar">Buscar material, OT, referencia...</span>
        <span className="iv-acc"><span className="iv-b">Excel</span></span>
      </Barra>
      <div className="scroll-x">
        <table className="tabla-app iv-t">
          <thead><tr><th>Fecha</th><th>Material</th><th className="c">Tipo</th><th className="r">Cantidad</th><th className="r">Stock resultante</th><th className="c">OT / Referencia</th><th className="c">Usuario</th><th>Nota</th></tr></thead>
          <tbody>
            {KARDEX.map(([f, t, q, s, ref, u, nota, cod]) => (
              <tr key={f}>
                <td>{f}</td>
                <td><b>{cod}</b> <span className="iv-g2">— {cod === "300061177" ? "Kit de válvulas compresor K-201" : "Rodamiento 6311-C3"}</span></td>
                <td className="c"><Chip t={t} /></td>
                <td className={`r b ${q.startsWith("-") ? "iv-rojo" : "iv-verde"}`}>{q} <span className="iv-g">UN</span></td>
                <td className="r">{s}</td>
                <td className="c">{ref}</td>
                <td className="c">{u}</td>
                <td className="iv-g2">{nota}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ── 6. Reabastecer ──
export function PantallaReabastecer() {
  const filas: [string, string, string, string, string, string, string, string, string][] = [
    ["300061177", "Kit de válvulas compresor K-201", "KV-201-2S", "0", "1", "1", "1", "6.850,00", "Agotado"],
    ["300045812", 'Sello mecánico cartucho 1,875"', "SC-1875-C", "1", "2", "2", "1", "4.200,00", "Bajo mínimo"],
    ["300072215", "Correa de ventilador SPB 2360", "SPB2360", "3", "4", "8", "5", "190,00", "Bajo mínimo"],
  ];
  return (
    <div className="pantalla" role="img" aria-label="Pestaña Reabastecer del inventario de ReliaPlant: materiales en o bajo el mínimo, cantidad a pedir hasta el máximo e importe estimado">
      <Cabecera sub="reabastecer" />
      <Barra>
        <span className="iv-resumen"><b>3</b> materiales en o bajo el mínimo · Importe estimado <b>11.240,00</b></span>
        <span className="iv-acc"><span className="iv-b">Excel</span></span>
      </Barra>
      <div className="scroll-x">
        <table className="tabla-app iv-t">
          <thead><tr><th>Código</th><th>Descripción</th><th className="c">N.º parte</th><th className="r">Disponible</th><th className="r">Mínimo</th><th className="r">Máximo</th><th className="r">Pedir</th><th className="r">Importe</th><th className="c">Estatus</th></tr></thead>
          <tbody>
            {filas.map(([c, d, p, di, mi, ma, pe, im, e]) => (
              <tr key={c}>
                <td className="b">{c}</td><td>{d}</td><td className="c">{p}</td>
                <td className={`r b ${di === "0" ? "iv-rojo" : ""}`}>{di}</td><td className="r">{mi}</td><td className="r">{ma}</td>
                <td className="r b iv-azul">{pe}</td><td className="r">{im}</td><td className="c"><Chip t={e} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
