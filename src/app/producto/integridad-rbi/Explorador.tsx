"use client";

// Esquemas de inspección A–D por subgrupo, resumidos de la base de ReliaPlant
// (texto_inspeccion_api_581 + tecnicas_nde_por_efectividad + codigo_task_list_hr).
import { useState } from "react";

type Letra = "A" | "B" | "C" | "D";
type Esq = { txt: string; nde: string[] };
type Sub = { cod: string; titulo: string; ref: string; corta: string; esq: Record<Letra, Esq> };

const SUBS: Sub[] = [
  {
    cod: "THI-02-NI", titulo: "Adelgazamiento general · no intrusivo", ref: "API 581 Tabla 2.F.7.1", corta: "INSP INT GEN THIN D PARED NO INTR",
    esq: {
      A: { txt: "100 % UT/RT de los CMLs, o 10 % de UT scanning, o 10 % de radiografía de perfil.", nde: ["UT spot 100 % CMLs", "UT scan 10 %", "RT perfil 10 %"] },
      B: { txt: "Más de 75 % spot UT, o más de 5 % de UT scanning, o más de 5 % de RT de perfil en las áreas seleccionadas.", nde: ["UT spot >75 %", "UT scan >5 %", "RT perfil >5 %"] },
      C: { txt: "Más de 50 % spot UT o UT scans aleatorios, o RT de perfil aleatoria.", nde: ["UT spot >50 %", "RT perfil aleatoria"] },
      D: { txt: "Más de 25 % spot UT.", nde: ["UT spot >25 %"] },
    },
  },
  {
    cod: "THI-04-NI", titulo: "Adelgazamiento local · no intrusivo", ref: "API 581 Tabla 2.F.7.2", corta: "INSP INT LOC THIN D PARED NO INTR",
    esq: {
      A: { txt: "100 % de cobertura de los CMLs del área sospechosa con UT scanning o RT de perfil.", nde: ["UT scan 100 % CMLs", "RT perfil 100 % CMLs"] },
      B: { txt: "Más de 75 % de cobertura de los CMLs.", nde: ["UT scan >75 %", "RT perfil >75 %"] },
      C: { txt: "Más de 50 % de cobertura de los CMLs.", nde: ["UT scan >50 %", "RT perfil >50 %"] },
      D: { txt: "Más de 20 % de cobertura de los CMLs.", nde: ["UT scan >20 %", "RT perfil >20 %"] },
    },
  },
  {
    cod: "THI-04-I", titulo: "Adelgazamiento local · intrusivo", ref: "API 581 Tabla 2.F.7.2", corta: "INSP INT LOC THINAL D PARED INTRUS",
    esq: {
      A: { txt: "100 % VT interna, retirando empaques y platos, y seguimiento UT del 100 % de las zonas adelgazadas.", nde: ["VT 100 %", "UT seguimiento"] },
      B: { txt: "Más de 75 % VT y seguimiento UT del 100 % de las zonas adelgazadas.", nde: ["VT >75 %", "UT seguimiento"] },
      C: { txt: "Más de 50 % VT y seguimiento UT.", nde: ["VT >50 %", "UT seguimiento"] },
      D: { txt: "Más de 20 % VT y seguimiento UT.", nde: ["VT >20 %", "UT seguimiento"] },
    },
  },
  {
    cod: "EXT-03", titulo: "CUI · corrosión bajo aislamiento", ref: "API 581 Tabla 2.F.9.3", corta: "INSP EXT BAJO AISLAM CUI",
    esq: {
      A: { txt: "100 % VT externa. Retirar el 100 % del aislamiento en zonas dañadas o sospechosas, o RT de perfil del 100 % sin retirarlo. Seguimiento con UT, RT o pit gauge.", nde: ["VT 100 %", "RT perfil 100 %", "Pit gauge"] },
      B: { txt: "100 % VT externa. Retirar más de 50 % de las zonas sospechosas, o RT de perfil de más de 65 %.", nde: ["VT 100 %", "RT perfil >65 %", "Pit gauge"] },
      C: { txt: "100 % VT externa. Retirar más de 25 % de las zonas sospechosas, o RT de perfil de más de 35 %.", nde: ["VT 100 %", "RT perfil >35 %", "Pit gauge"] },
      D: { txt: "100 % VT externa. Retirar más de 5 % del área aislada, o RT de perfil de más de 5 %.", nde: ["VT 100 %", "RT perfil >5 %", "Pit gauge"] },
    },
  },
  {
    cod: "EXT-02", titulo: "ClSCC externo · superficie expuesta", ref: "API 581 Tabla 2.F.9.2", corta: "INSP EXT SCC CLSCC EXPUESTO",
    esq: {
      A: { txt: "100 % del área sospechosa con líquidos penetrantes o eddy current, y seguimiento UT de las indicaciones.", nde: ["PT 100 %", "ECT 100 %"] },
      B: { txt: "Más de 60 % del área sospechosa con PT o eddy current.", nde: ["PT >60 %", "ECT >60 %"] },
      C: { txt: "Más de 30 % del área sospechosa.", nde: ["PT >30 %", "ECT >30 %"] },
      D: { txt: "Más de 5 % del área sospechosa.", nde: ["PT >5 %", "ECT >5 %"] },
    },
  },
  {
    cod: "SCC-06-I", titulo: "SSC por H₂S · intrusivo", ref: "API 581 Tabla 2.F.8.6", corta: "INSP INT SCC AGRIE X SULF INTRUS",
    esq: {
      A: { txt: "100 % del área de soldadura con WFMT/ACFM y seguimiento UT de las indicaciones relevantes.", nde: ["WFMT/ACFM 100 %"] },
      B: { txt: "Más de 75 % de las soldaduras seleccionadas con WFMT/ACFM y seguimiento UT.", nde: ["WFMT/ACFM >75 %"] },
      C: { txt: "Más de 35 % de las soldaduras seleccionadas.", nde: ["WFMT/ACFM >35 %"] },
      D: { txt: "Más de 10 % de las soldaduras seleccionadas.", nde: ["WFMT/ACFM >10 %"] },
    },
  },
  {
    cod: "SCC-07-NI", titulo: "HIC/SOHIC por H₂S · no intrusivo", ref: "API 581 Tabla 2.F.8.7", corta: "INSP INT SCC HIC SOHIC H2S NO INTR",
    esq: {
      A: { txt: "Más de 90 % de C-scan del metal base con UT avanzado y 100 % de onda de corte y TOFD en soldadura y ZAC.", nde: ["C-scan >90 %", "TOFD / onda de corte 100 %"] },
      B: { txt: "Más de 65 % de C-scan del metal base con UT avanzado.", nde: ["C-scan >65 %"] },
      C: { txt: "Más de 35 % de C-scan del metal base.", nde: ["C-scan >35 %"] },
      D: { txt: "Más de 5 % de C-scan del metal base.", nde: ["C-scan >5 %"] },
    },
  },
  {
    cod: "TB-01-FM", titulo: "Haz con aletas de aluminio · pérdida de metal, tubo ferromagnético", ref: "API 596 (borrador) Tabla 1-1", corta: "INSP TUBOS ML FIN AL FERR",
    esq: {
      A: { txt: "VT y IRIS al 100 % de los tubos.", nde: ["VT", "IRIS 100 %"] },
      B: { txt: "VT, MFL al 100 % e IRIS en tubos seleccionados.", nde: ["VT", "MFL 100 %", "IRIS selectivo"] },
      C: { txt: "VT y eddy current de saturación parcial (PSEC) al 100 %.", nde: ["VT", "PSEC 100 %"] },
      D: { txt: "Solo VT.", nde: ["VT"] },
    },
  },
];

const FRECS = ["1Y", "2Y", "3Y", "4Y", "5Y", "6Y", "8Y", "10Y"];
const NOMBRE: Record<Letra, string> = { A: "Highly Effective", B: "Usually Effective", C: "Fairly Effective", D: "Poorly Effective" };

export default function Explorador() {
  const [cod, setCod] = useState("EXT-03");
  const [frec, setFrec] = useState("4Y");
  const sub = SUBS.find((s) => s.cod === cod)!;
  return (
    <div className="efx">
      <div className="efx-izq" role="listbox" aria-label="Subgrupo de mecanismo de daño">
        {SUBS.map((s) => (
          <button key={s.cod} type="button" role="option" aria-selected={s.cod === cod} onClick={() => setCod(s.cod)}>
            <b>{s.cod}</b><span>{s.titulo}</span>
          </button>
        ))}
      </div>
      <div className="efx-der">
        <div className="efx-cab">
          <div>
            <h3>{sub.titulo}</h3>
            <p>{sub.ref} · descripción corta de la tarea: <span className="mono">{sub.corta}</span></p>
          </div>
          <label className="efx-frec">
            Frecuencia
            <select value={frec} onChange={(e) => setFrec(e.target.value)}>
              {FRECS.map((f) => <option key={f} value={f}>{f}</option>)}
            </select>
          </label>
        </div>
        <div className="efx-filas">
          {(["A", "B", "C", "D"] as Letra[]).map((l) => (
            <div key={l} className="efx-fila">
              <span className={`efx-l ef-${l.toLowerCase()}`}>{l}</span>
              <div className="efx-cont">
                <div className="efx-nom">{NOMBRE[l]}</div>
                <p>{sub.esq[l].txt}</p>
                <div className="efx-nde">{sub.esq[l].nde.map((n) => <i key={n}>{n}</i>)}</div>
              </div>
              <code className="efx-hr">{`${sub.cod}-${l}-${frec}`}</code>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
