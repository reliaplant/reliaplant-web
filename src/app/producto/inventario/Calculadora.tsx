"use client";
// Calculadora de mínimo y máximo con las MISMAS fórmulas que la app (services/inventario/politica.ts):
//   Reorden: SS = z·σ·√(Tr/30.4) · mín = Dd·Tr + SS · LEP = √(2·D·Cp/(Ca·Cu)) · máx = mín + LEP
//   Seguro:  λ = D·Tr/365 · menor s con P(X ≤ s) ≥ nivel (mín. 1) · costo(s) = s·Cu·Ca + D·P(X ≥ s)·Cparada
import { useMemo, useState } from "react";

function poissonCDF(s: number, l: number) {
  if (s < 0) return 0;
  let t = Math.exp(-l), suma = t;
  for (let k = 1; k <= s; k++) { t *= l / k; suma += t; }
  return Math.min(1, suma);
}
// Inversa de la normal (Acklam), una cola, igual que zUnaCola de la app.
function z(p: number): number {
  const a = [-3.969683028665376e1, 2.209460984245205e2, -2.759285104469687e2, 1.38357751867269e2, -3.066479806614716e1, 2.506628277459239];
  const b = [-5.447609879822406e1, 1.615858368580409e2, -1.556989798598866e2, 6.680131188771972e1, -1.328068155288572e1];
  const c = [-7.784894002430293e-3, -3.223964580411365e-1, -2.400758277161838, -2.549732539343734, 4.374664141464968, 2.938163982698783];
  const d = [7.784695709041462e-3, 3.224671290700398e-1, 2.445134137142996, 3.754408661907416];
  const q = Math.min(Math.max(p, 1e-9), 1 - 1e-9);
  if (q < 0.02425) { const r = Math.sqrt(-2 * Math.log(q)); return (((((c[0] * r + c[1]) * r + c[2]) * r + c[3]) * r + c[4]) * r + c[5]) / ((((d[0] * r + d[1]) * r + d[2]) * r + d[3]) * r + 1); }
  if (q > 1 - 0.02425) return -z(1 - q);
  const r = q - 0.5, t = r * r;
  return (((((a[0] * t + a[1]) * t + a[2]) * t + a[3]) * t + a[4]) * t + a[5]) * r / (((((b[0] * t + b[1]) * t + b[2]) * t + b[3]) * t + b[4]) * t + 1);
}
const fmt = (n: number, dec = 2) => n.toLocaleString("es", { maximumFractionDigits: dec });
const num = (v: string) => { const n = Number(v.replace(",", ".")); return Number.isFinite(n) ? n : NaN; };

type Modo = "reorden" | "seguro";
type Fuente = "consumo" | "mtbf";

const INICIAL = {
  reorden: { fuente: "consumo" as Fuente, consumo: "48", instaladas: "8", mtbf: "8760", sigma: "1.13", lt: "45", nivel: "99", precio: "160", cp: "300", ca: "25", parada: "" },
  seguro: { fuente: "mtbf" as Fuente, consumo: "0.5", instaladas: "2", mtbf: "26280", sigma: "", lt: "70", nivel: "99", precio: "4200", cp: "300", ca: "25", parada: "85000" },
};

export default function Calculadora() {
  const [modo, setModo] = useState<Modo>("seguro");
  const [f, setF] = useState(INICIAL.seguro);
  const cambiarModo = (m: Modo) => { setModo(m); setF(INICIAL[m]); };
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement>) => setF(x => ({ ...x, [k]: e.target.value }));

  const r = useMemo(() => {
    const D = f.fuente === "mtbf" ? (num(f.instaladas) * 8760) / num(f.mtbf) : num(f.consumo);
    const lt = num(f.lt), nivel = num(f.nivel) / 100, precio = num(f.precio), cp = num(f.cp), ca = num(f.ca) / 100;
    if (![D, lt, nivel].every(Number.isFinite) || D < 0 || lt <= 0 || nivel < 0.5 || nivel >= 1) return null;
    const pasos: [string, string, string][] = [];
    const fDem = f.fuente === "mtbf" ? `instaladas × 8760 / MTBF = ${f.instaladas} × 8760 / ${f.mtbf}` : "consumo anual";
    if (modo === "reorden") {
      const sigmaIn = num(f.sigma);
      const sigma = f.sigma.trim() && Number.isFinite(sigmaIn) ? sigmaIn : Math.sqrt(D / 12);
      const zz = z(nivel);
      const dLT = (D / 365) * lt;
      const ss = zz * sigma * Math.sqrt(lt / 30.4);
      const min = Math.max(1, Math.ceil(dLT + ss));
      const lep = precio > 0 && ca > 0 && cp > 0 ? Math.sqrt((2 * D * cp) / (ca * precio)) : undefined;
      const lote = Math.max(1, Math.ceil(lep ?? D / 12));
      pasos.push(["D · demanda anual", fDem, fmt(D)]);
      pasos.push(["Dd · demanda diaria", "D / 365", fmt(D / 365, 3)]);
      pasos.push(["σ · desviación mensual", f.sigma.trim() ? "dato (12 meses de consumo)" : "√(D / 12), sin historial", fmt(sigma, 3)]);
      pasos.push(["z · nivel de servicio", `una cola, ${fmt(nivel * 100, 1)} %`, fmt(zz, 3)]);
      pasos.push(["SS · stock de seguridad", "z × σ × √(Tr / 30.4)", fmt(ss)]);
      pasos.push(["Mín · punto de pedido", "Dd × Tr + SS, hacia arriba", String(min)]);
      pasos.push(["LEP · lote económico", lep ? "√(2 × D × Cp / (Ca × Cu))" : "sin precio: un mes de consumo", String(lote)]);
      pasos.push(["Máx", "Mín + LEP", String(min + lote)]);
      return { pasos, min, max: min + lote, nota: `Se esperan ${fmt(dLT)} unidades de consumo mientras llega el pedido. El stock de seguridad cubre la variación.`, costos: null as null | { s: number; c: number }[], sNivel: 0, sCosto: undefined as number | undefined };
    }
    const l = (D / 365) * lt;
    let sNivel = 0;
    while (poissonCDF(sNivel, l) < nivel && sNivel < 1000) sNivel++;
    sNivel = Math.max(1, sNivel);
    pasos.push(["D · demanda anual", fDem, fmt(D, 3)]);
    pasos.push(["λ · fallas mientras llega", "D × Tr / 365", fmt(l, 4)]);
    for (let s = 0; s <= Math.min(sNivel + 1, 6); s++) pasos.push([`P(fallas ≤ ${s})`, s === 0 ? "e^(−λ)" : `Σ e^(−λ) · λ^k / k!, k = 0…${s}`, `${fmt(poissonCDF(s, l) * 100, 2)} %`]);
    pasos.push(["Por nivel de servicio", `menor s con P ≥ ${fmt(nivel * 100, 1)} % (mín. 1)`, String(sNivel)]);
    let sCosto: number | undefined;
    let costos: { s: number; c: number }[] | null = null;
    const parada = num(f.parada);
    if (parada > 0 && precio > 0 && ca > 0 && D > 0) {
      const costo = (s: number) => s * precio * ca + D * (1 - poissonCDF(s - 1, l)) * parada;
      sCosto = 0;
      for (let s = 1; s <= sNivel + 10; s++) if (costo(s) < costo(sCosto)) sCosto = s;
      costos = Array.from({ length: Math.max(5, sCosto + 3) }, (_, s) => ({ s, c: costo(s) }));
      pasos.push(["Por costo-riesgo", "mín. de s × Cu × Ca + D × P(fallas ≥ s) × Cparada", String(sCosto)]);
    }
    const min = sCosto ?? sNivel;
    pasos.push(["Mín = Máx", sCosto !== undefined ? "el de costo-riesgo" : "el de nivel de servicio", String(min)]);
    return { pasos, min, max: min, nota: `Durante ${fmt(lt, 0)} días de entrega se esperan ${fmt(l, 3)} fallas.`, costos, sNivel, sCosto };
  }, [f, modo]);

  const campo = (k: keyof typeof f, label: string, ayuda?: string) => (
    <label className="iv-cf">
      <span>{label}</span>
      <input inputMode="decimal" value={f[k] as string} onChange={set(k)} />
      {ayuda && <small>{ayuda}</small>}
    </label>
  );
  const maxCosto = r?.costos ? Math.max(...r.costos.map(x => x.c)) : 1;

  return (
    <div className="iv-calcu">
      <div className="iv-calcu-in">
        <div className="iv-seg" role="tablist" aria-label="Método">
          <button type="button" role="tab" aria-selected={modo === "seguro"} onClick={() => cambiarModo("seguro")}>Repuesto de seguro <small>Poisson</small></button>
          <button type="button" role="tab" aria-selected={modo === "reorden"} onClick={() => cambiarModo("reorden")}>Reorden <small>LEP</small></button>
        </div>
        <div className="iv-seg chico" role="tablist" aria-label="Fuente de la demanda">
          <button type="button" role="tab" aria-selected={f.fuente === "mtbf"} onClick={() => setF(x => ({ ...x, fuente: "mtbf" }))}>Por MTBF</button>
          <button type="button" role="tab" aria-selected={f.fuente === "consumo"} onClick={() => setF(x => ({ ...x, fuente: "consumo" }))}>Por consumo anual</button>
        </div>
        <div className="iv-cgrid">
          {f.fuente === "mtbf" ? (
            <>
              {campo("instaladas", "Unidades instaladas", "Suma de la cantidad en cada equipo")}
              {campo("mtbf", "MTBF de la pieza (h)", "26280 h = 3 años")}
            </>
          ) : campo("consumo", "Consumo anual (UN)")}
          {campo("lt", "Tiempo de entrega (días)")}
          {campo("nivel", "Nivel de servicio (%)", modo === "seguro" ? "Vital: 99 % por defecto" : "95 % o 99 % si es vital")}
          {campo("precio", "Precio unitario (Cu)")}
          {campo("ca", "Almacenamiento anual (Ca, %)", "Valor típico: 25 %")}
          {modo === "reorden" ? (
            <>
              {campo("cp", "Costo por pedido (Cp)", "Valor típico: 300")}
              {campo("sigma", "Desviación mensual (σ)", "Vacío: √(D/12)")}
            </>
          ) : campo("parada", "Costo de parada por evento", "Vacío: solo nivel de servicio")}
        </div>
      </div>
      <div className="iv-calcu-out" aria-live="polite">
        {!r ? (
          <p className="iv-err">Revisa los datos: números positivos y nivel de servicio entre 50 y 99,9 %.</p>
        ) : (
          <>
            <div className="iv-calcu-res">
              <div><small>Mínimo</small><b>{r.min}</b></div>
              <div><small>Máximo</small><b>{r.max}</b></div>
              <p>{r.nota}{r.sCosto !== undefined && r.sCosto !== r.sNivel ? ` El nivel de servicio pide ${r.sNivel}; el costo-riesgo dice ${r.sCosto}.` : ""}</p>
            </div>
            {r.costos && (
              <div className="iv-barras" aria-label="Costo anual según unidades en stock">
                <small>Costo anual según unidades en stock</small>
                {r.costos.map(x => (
                  <div key={x.s} className={`iv-bar ${x.s === r.sCosto ? "sel" : ""}`}>
                    <span className="s">{x.s}</span>
                    <span className="v"><i style={{ width: `${Math.max(1.5, (x.c / maxCosto) * 100)}%` }} /></span>
                    <span className="c">{fmt(x.c, 0)}</span>
                  </div>
                ))}
              </div>
            )}
            <div className="scroll-x">
              <table className="iv-pasos">
                <thead><tr><th>Paso</th><th>Fórmula</th><th className="r">Resultado</th></tr></thead>
                <tbody>{r.pasos.map(([a, b, c]) => <tr key={a}><td>{a}</td><td className="f">{b}</td><td className="r">{c}</td></tr>)}</tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
