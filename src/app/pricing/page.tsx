import Link from "next/link";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/config";

// Refresca desde Firestore cada hora, sin necesitar un deploy nuevo por cada cambio de precio
export const revalidate = 3600;

interface PlanFeatures {
  tax: boolean;
  rca: boolean;
  rcm: boolean;
  ai: boolean;
  export: boolean;
  dashboard: "basic" | "full";
  collaboration: boolean;
  roles: boolean;
  multiPlant: boolean;
  pricedPerPlant?: boolean;
  prioritySupport: boolean;
  purchaseOrders: boolean;
  assetBlocks: boolean;
}

interface PlanLimits {
  maxUsers: number;
  maxActivos: number;
  maxPlants: number; // -1 = ilimitadas
  maxStorage: number; // GB
  maxRCA: number; // -1 = ilimitado
  maxRCM: number; // -1 = ilimitado
}

interface PlanTemplate {
  id: string;
  name: string;
  description: string;
  annualPrice?: number;
  limits: PlanLimits;
  features: PlanFeatures;
  sort: number;
}

// Misma fuente que usa la app (config/planTemplates en Firestore) — una sola
// fuente de verdad para que precios/límites nunca se desalineen entre web y app.
async function getPlans(): Promise<PlanTemplate[]> {
  const snap = await getDoc(doc(db, "config", "planTemplates"));
  const data = snap.data();
  if (!data?.plans) return [];
  return Object.values(data.plans as Record<string, PlanTemplate>).sort((a, b) => a.sort - b.sort);
}

const fmtNum = (n: number) => (n < 0 ? "Ilimitado" : n.toLocaleString("es-MX"));
const fmtPlants = (n: number) => (n < 0 ? "Ilimitadas" : String(n));
const check = (ok: boolean) =>
  ok ? (
    <span className="text-green-600 font-bold">✓</span>
  ) : (
    <span className="text-gray-400">—</span>
  );

export default async function PricingCompare() {
  const plans = await getPlans();

  return (
    <div className="min-h-screen bg-white pb-16">
      <div className="max-w-7xl mx-4 sm:mx-6 lg:mx-auto pt-8">
        <div className="mb-8 flex items-center">
          <Link href="/#precios" className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-1">
            <span className="text-2xl">←</span> Volver a precios
          </Link>
        </div>
        <div className="text-center mb-2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Pagas según tu escala, no más</h1>
          <div className="text-gray-500 text-base md:text-lg">Licencias de acuerdo al tamaño de tu organización</div>
        </div>

        {/* PRICING CARDS */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((plan) => {
            const isFree = plan.id === "free";
            const isRecommended = plan.id === "team"; // "Planta" en el nombre mostrado — plan intermedio
            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl border p-6 flex flex-col gap-4 ${
                  isRecommended ? "border-blue-600 border-2 shadow-lg" : "border-gray-200"
                }`}
              >
                {isRecommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-4 py-1 rounded-full tracking-widest uppercase">
                    Recomendado
                  </div>
                )}
                <div>
                  <div className="text-lg font-bold text-gray-900">{plan.name}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{plan.description}</div>
                </div>

                {/* Price */}
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-extrabold text-gray-900">
                    {isFree ? "Gratis" : `$${plan.annualPrice?.toLocaleString("es-MX")}`}
                  </span>
                  {!isFree && (
                    <span className="text-sm text-gray-500 mb-1">
                      /año{plan.features.pricedPerPlant ? " + precio por planta" : ""}
                    </span>
                  )}
                </div>

                {/* Limits */}
                <div className="flex justify-between text-center bg-gray-50 rounded-xl px-2 py-3">
                  {[
                    { val: fmtNum(plan.limits.maxUsers), label: plan.features.pricedPerPlant ? "usuarios/planta" : "usuarios" },
                    { val: fmtNum(plan.limits.maxActivos), label: plan.features.pricedPerPlant ? "activos/planta" : "activos" },
                    { val: fmtPlants(plan.limits.maxPlants), label: "plantas" },
                  ].map((item) => (
                    <div key={item.label} className="flex-1">
                      <div className="text-base font-bold text-gray-800">{item.val}</div>
                      <div className="text-[11px] text-gray-500">{item.label}</div>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="flex flex-col gap-2 flex-1">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full bg-green-500 flex items-center justify-center text-white text-[10px] font-bold">✓</span>
                    RCA y RCM {plan.limits.maxRCA < 0 ? "ilimitados" : `(hasta ${plan.limits.maxRCA})`}
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold">✓</span>
                    <span className="text-blue-600 font-medium">Asistente IA incluido</span>
                  </li>
                  {plan.features.collaboration && (
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full bg-green-500 flex items-center justify-center text-white text-[10px] font-bold">✓</span>
                      Colaboración, roles y permisos
                    </li>
                  )}
                  {plan.features.prioritySupport && (
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full bg-green-500 flex items-center justify-center text-white text-[10px] font-bold">✓</span>
                      Soporte prioritario
                    </li>
                  )}
                  {plan.features.multiPlant && (
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full bg-green-500 flex items-center justify-center text-white text-[10px] font-bold">✓</span>
                      Múltiples plantas habilitadas
                    </li>
                  )}
                </ul>

                {/* CTA */}
                <Link
                  href="https://app.reliaplant.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-2 w-full py-2.5 rounded-xl font-semibold text-sm text-center transition-colors ${
                    isFree
                      ? "border border-gray-300 text-gray-800 hover:bg-gray-50"
                      : isRecommended
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "border border-gray-300 text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  {isFree ? "Comenzar gratis" : "Comenzar prueba"}
                </Link>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col items-center mt-8">
          <p className="text-center text-sm text-gray-500">
            ¿Necesitas algo a la medida?{" "}
            <a href="mailto:comercial@reliaplant.com" className="text-blue-600 font-medium hover:underline">
              Contacta con ventas — comercial@reliaplant.com
            </a>
          </p>
        </div>

        {/* COMPARISON TABLE */}
        {plans.length > 0 && (
          <>
            <div className="mt-14">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Comparación detallada</h2>
            </div>
            <div className="mt-2 overflow-x-auto">
              <table className="w-full border-collapse text-sm bg-white">
                <thead>
                  <tr>
                    <th className="uppercase tracking-wider text-[11px] font-semibold py-3 px-2 text-left rounded-tl-xl sticky top-0 z-30 bg-gray-100 text-gray-700">
                      Funcionalidad
                    </th>
                    {plans.map((p, i) => (
                      <th
                        key={p.id}
                        className={`uppercase tracking-wider text-[11px] font-bold py-3 px-2 text-center sticky top-0 z-30 bg-gray-100 text-gray-700 ${i === plans.length - 1 ? "rounded-tr-xl" : ""}`}
                      >
                        {p.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-sky-100">
                    <td colSpan={plans.length + 1} className="uppercase tracking-widest text-[11px] font-bold text-sky-700 py-2 px-2">Límites de cuenta</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-2 px-2">Usuarios{plans.some((p) => p.features.pricedPerPlant) ? " (por planta en Multiplanta)" : ""}</td>
                    {plans.map((p) => <td key={p.id} className="text-center">{fmtNum(p.limits.maxUsers)}</td>)}
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-2 px-2">Activos registrados</td>
                    {plans.map((p) => <td key={p.id} className="text-center">{fmtNum(p.limits.maxActivos)}</td>)}
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-2 px-2">Plantas</td>
                    {plans.map((p) => <td key={p.id} className="text-center">{fmtPlants(p.limits.maxPlants)}</td>)}
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-2 px-2">Almacenamiento de archivos adjuntos</td>
                    {plans.map((p) => <td key={p.id} className="text-center">{p.limits.maxStorage} GB</td>)}
                  </tr>

                  <tr className="bg-sky-100">
                    <td colSpan={plans.length + 1} className="uppercase tracking-widest text-[11px] font-bold text-sky-700 py-2 px-2">Módulos</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-2 px-2">Taxonomía de activos</td>
                    {plans.map((p) => <td key={p.id} className="text-center">{check(p.features.tax)}</td>)}
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-2 px-2">RCA — Análisis de Causa Raíz</td>
                    {plans.map((p) => <td key={p.id} className="text-center">{p.limits.maxRCA < 0 ? <span className="text-green-600 font-bold">✓ Ilimitado</span> : `Hasta ${p.limits.maxRCA} proyectos`}</td>)}
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-2 px-2">RCM — Mantenimiento Centrado en Confiabilidad</td>
                    {plans.map((p) => <td key={p.id} className="text-center">{p.limits.maxRCM < 0 ? <span className="text-green-600 font-bold">✓ Ilimitado</span> : `Hasta ${p.limits.maxRCM} planes`}</td>)}
                  </tr>

                  <tr className="bg-sky-100">
                    <td colSpan={plans.length + 1} className="uppercase tracking-widest text-[11px] font-bold text-sky-700 py-2 px-2">Asistente de inteligencia artificial</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-2 px-2">Asistente IA</td>
                    {plans.map((p) => <td key={p.id} className="text-center">{check(p.features.ai)}</td>)}
                  </tr>

                  <tr className="bg-sky-100">
                    <td colSpan={plans.length + 1} className="uppercase tracking-widest text-[11px] font-bold text-sky-700 py-2 px-2">Colaboración y gestión</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-2 px-2">Colaboración multiusuario</td>
                    {plans.map((p) => <td key={p.id} className="text-center">{check(p.features.collaboration)}</td>)}
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-2 px-2">Permisos y roles configurables</td>
                    {plans.map((p) => <td key={p.id} className="text-center">{check(p.features.roles)}</td>)}
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-2 px-2">Dashboard</td>
                    {plans.map((p) => <td key={p.id} className="text-center">{p.features.dashboard === "full" ? <span className="text-green-600 font-bold">✓ Completo</span> : "Básico"}</td>)}
                  </tr>

                  <tr className="bg-sky-100">
                    <td colSpan={plans.length + 1} className="uppercase tracking-widest text-[11px] font-bold text-sky-700 py-2 px-2">Reportes y exportación</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-2 px-2">Exportar reportes (PDF, Excel)</td>
                    {plans.map((p) => <td key={p.id} className="text-center">{check(p.features.export)}</td>)}
                  </tr>

                  <tr className="bg-sky-100">
                    <td colSpan={plans.length + 1} className="uppercase tracking-widest text-[11px] font-bold text-sky-700 py-2 px-2">Infraestructura y soporte</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-2 px-2">Multi-planta</td>
                    {plans.map((p) => <td key={p.id} className="text-center">{check(p.features.multiPlant)}</td>)}
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-2 px-2">Soporte prioritario</td>
                    {plans.map((p) => <td key={p.id} className="text-center">{check(p.features.prioritySupport)}</td>)}
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-2 px-2">Facturación por orden de compra</td>
                    {plans.map((p) => <td key={p.id} className="text-center">{check(p.features.purchaseOrders)}</td>)}
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-2 px-2">Bloques de activos adicionales</td>
                    {plans.map((p) => <td key={p.id} className="text-center">{check(p.features.assetBlocks)}</td>)}
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}

      </div>
    </div>
  );
}
