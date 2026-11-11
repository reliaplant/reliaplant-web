"use client";

// Catálogo de mecanismos de daño tal como viene en la base de ReliaPlant
// (reliaplant-app/app/dashboard/pm/data/BDD_HR_RBI_14_04_26.json, API 581 4.ª ed. y API 596 borrador para haces).
import { useState } from "react";

type Mec = { cod: string; nombre: string; ie: string; ref: string; subs: string[]; txt: string };
type Cat = { id: string; nombre: string; mecs: Mec[] };

const CATS: Cat[] = [
  {
    id: "THN", nombre: "Adelgazamiento interno",
    mecs: [
      { cod: "THI-01", nombre: "Internal General Thinning Lined Equip", ie: "Int", ref: "2.F.7.1 · con liner", subs: ["I intrusivo", "NI no intrusivo"], txt: "Pérdida de espesor uniforme en equipos con liner interno no metálico. Sin abrir el equipo no se llega a la máxima efectividad." },
      { cod: "THI-02", nombre: "Internal General Thinning", ie: "Int", ref: "2.F.7.1", subs: ["I intrusivo", "NI no intrusivo"], txt: "Pérdida de espesor uniforme en recipientes y tuberías, con o sin cladding. Es el mecanismo que más se usa del estándar." },
      { cod: "THI-03", nombre: "Internal Local Thinning", ie: "Int", ref: "2.F.7.2 · con liner", subs: ["I intrusivo", "NI no intrusivo"], txt: "Adelgazamiento localizado en equipos con liner interno." },
      { cod: "THI-04", nombre: "Internal Local Thinning", ie: "Int", ref: "2.F.7.2", subs: ["I intrusivo", "NI no intrusivo"], txt: "Pérdida concentrada bajo puntos de inyección, codos y cambios de diámetro. Pide más cobertura que el general porque falla en un punto y sin aviso." },
    ],
  },
  {
    id: "SCC", nombre: "Agrietamiento (SCC)",
    mecs: [
      { cod: "SCC-01", nombre: "Amine Cracking", ie: "Int", ref: "2.F.8.1", subs: ["I intrusivo", "NI no intrusivo"], txt: "Grietas en soldaduras sin PWHT en servicio de aminas (MEA, DEA, MDEA). WFMT/ACFM en soldaduras o UT scanning desde afuera." },
      { cod: "SCC-02", nombre: "ACSCC", ie: "Int", ref: "2.F.8.2", subs: ["I intrusivo", "NI no intrusivo"], txt: "Agrietamiento por carbonatos en servicio de CO₂ húmedo a temperatura elevada. Se inspecciona casi igual que el de aminas." },
      { cod: "SCC-03", nombre: "Caustic Cracking", ie: "Int", ref: "2.F.8.3", subs: ["I intrusivo", "NI no intrusivo"], txt: "Soda o potasa cáustica. Ataca soldaduras y zonas con esfuerzo residual, incluidos los doblados en frío." },
      { cod: "SCC-04", nombre: "ClSCC (Internal)", ie: "Int", ref: "2.F.8.4", subs: ["I intrusivo", "NI no intrusivo"], txt: "Cloruros en aceros inoxidables austeníticos. Grietas ramificadas, difíciles de ver desde afuera." },
      { cod: "SCC-05", nombre: "PTA Cracking", ie: "Int", ref: "2.F.8.5", subs: ["I intrusivo", "NI no intrusivo"], txt: "Ácido politiónico en inoxidables sensibilizados. Aparece en los paros, cuando los sulfuros se oxidan con humedad." },
      { cod: "SCC-06", nombre: "SSC", ie: "Int", ref: "2.F.8.6", subs: ["I intrusivo", "NI no intrusivo"], txt: "Sulfide stress cracking por H₂S en aceros de alta dureza. Falla frágil y rápida." },
      { cod: "SCC-07", nombre: "HIC/SOHIC-H2S Cracking", ie: "Int", ref: "2.F.8.7", subs: ["I intrusivo", "NI no intrusivo"], txt: "El hidrógeno genera ampollas (HIC) o grietas escalonadas junto a soldaduras (SOHIC). Daño subsuperficial: no se ve con VT ni PT, pide C-scan con UT avanzado." },
      { cod: "SCC-08", nombre: "HSC-HF Cracking", ie: "Int", ref: "2.F.8.8", subs: ["I intrusivo", "NI no intrusivo"], txt: "Agrietamiento por hidrógeno en servicio de ácido fluorhídrico. Más exigente en cobertura de RT que el SSC." },
      { cod: "SCC-09", nombre: "HIC/SOHIC-HF Cracking", ie: "Int", ref: "2.F.8.9", subs: ["I intrusivo", "NI no intrusivo"], txt: "Lo mismo que SCC-07, pero con hidrógeno del HF en lugar de H₂S." },
    ],
  },
  {
    id: "EXT", nombre: "Daño externo",
    mecs: [
      { cod: "EXT-01", nombre: "External Thinning (Corrosión)", ie: "Ext", ref: "2.F.9.1", subs: ["esquema único"], txt: "Corrosión atmosférica en superficies sin aislamiento: lluvia, ambiente marino o industrial. VT y UT de seguimiento." },
      { cod: "EXT-02", nombre: "External ClSCC Cracking", ie: "Ext", ref: "2.F.9.2", subs: ["esquema único"], txt: "Cloruros del ambiente (brisa marina, torres de enfriamiento) sobre inoxidables. Las grietas son finas: PT o eddy current." },
      { cod: "EXT-03", nombre: "CUI", ie: "Ext", ref: "2.F.9.3", subs: ["esquema único"], txt: "Corrosión bajo aislamiento. Dos caminos: retirar aislamiento y ver directo, o radiografía de perfil sin retirarlo." },
      { cod: "EXT-04", nombre: "CUI ClSCC", ie: "Ext", ref: "2.F.9.4", subs: ["esquema único"], txt: "Agrietamiento por cloruros debajo del aislamiento. Sin retirarlo, ninguna técnica no intrusiva llega a una efectividad útil." },
    ],
  },
  {
    id: "TNK", nombre: "Tanques",
    mecs: [
      { cod: "TANK-01", nombre: "Internal Corrosion", ie: "Int", ref: "2.F.5.1", subs: ["esquema único"], txt: "Corrosión del lado del producto en las virolas. Para verla bien hay que entrar al tanque; desde afuera solo queda spot UT." },
      { cod: "TANK-02", nombre: "External Corrosion", ie: "Ext", ref: "2.F.5.2", subs: ["I aislado", "NI no aislado"], txt: "Corrosión atmosférica de la pared. En tanques aislados, el porcentaje de aislamiento retirado define la efectividad." },
      { cod: "TANK-03", nombre: "Bottom Corrosion", ie: "Int/Ext", ref: "2.F.5.3", subs: ["SS lado suelo", "PS lado producto"], txt: "Fondos: una fuga va directo al suelo. Lado suelo con floor scan MFL; lado producto con VT y pruebas de recubrimiento." },
    ],
  },
  {
    id: "BUR", nombre: "Enterrados",
    mecs: [
      { cod: "BUR-01", nombre: "Buried Components", ie: "Int/Ext", ref: "2.F.6.1", subs: ["I intrusivo", "NI no intrusivo"], txt: "Tubería y equipos enterrados. Desde pig instrumentado o excavación hasta prueba hidrostática; sin excavar, guided-wave UT o protección catódica bien gestionada." },
    ],
  },
  {
    id: "TB", nombre: "Haces de tubos",
    mecs: [
      { cod: "TB-01", nombre: "Pérdida de metal · aletas de aluminio", ie: "Int", ref: "API 596 · Tabla 1-1", subs: ["FM", "LFM", "NFM"], txt: "La aleta tapa el tubo y no deja hacer UT convencional. Se depende de IRIS o eddy current." },
      { cod: "TB-02", nombre: "Agrietamiento · tubo recto", ie: "Int", ref: "API 596 · Tabla 1-2", subs: ["FM", "LFM", "NFM"], txt: "Acceso limpio por el interior del tubo para eddy current, RFET o IRIS. Lo crítico: placa de tubos y bafles." },
      { cod: "TB-03", nombre: "Agrietamiento · aletas integrales", ie: "Int", ref: "API 596 · Tabla 1-3", subs: ["FM", "LFM", "NFM"], txt: "La raíz de cada aleta concentra esfuerzo. La geometría interfiere con la señal: sondas y frecuencias específicas." },
      { cod: "TB-04", nombre: "Agrietamiento · aletas de aluminio", ie: "Int", ref: "API 596 · Tabla 1-4", subs: ["FM", "LFM", "NFM"], txt: "La aleta enmascara la señal y la interfaz tubo-aleta puede generar corrosión galvánica." },
    ],
  },
];

export default function Catalogo() {
  const [cat, setCat] = useState("THN");
  const actual = CATS.find((c) => c.id === cat)!;
  return (
    <div className="cat">
      <div className="cat-tabs" role="tablist" aria-label="Categorías de mecanismos de daño">
        {CATS.map((c) => (
          <button key={c.id} type="button" role="tab" aria-selected={cat === c.id} onClick={() => setCat(c.id)}>
            {c.nombre} <span>{c.mecs.length}</span>
          </button>
        ))}
      </div>
      <div className="cat-lista" role="tabpanel">
        {actual.mecs.map((m) => (
          <div key={m.cod + m.ref} className="cat-item">
            <div className="cat-cod">
              <b>{m.cod}</b>
              <span className={`ie ie-${m.ie === "Ext" ? "ext" : m.ie === "Int" ? "int" : "ambos"}`}>{m.ie}</span>
            </div>
            <div className="cat-txt">
              <h3>{m.nombre}</h3>
              <p>{m.txt}</p>
            </div>
            <div className="cat-meta">
              <span className="ref">{m.ref.startsWith("API") ? m.ref : `API 581 · ${m.ref}`}</span>
              <span className="subs">{m.subs.map((s) => <i key={s}>{s}</i>)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
