import Link from "next/link";

export default function PricingCompare() {
  return (
    <div className="min-h-screen bg-white pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8">
        <div className="mb-8 flex items-center">
          <Link href="/pricing" className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-1">
            <span className="text-2xl">←</span> Volver a precios
          </Link>
        </div>
        <div className="text-center mb-2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Pagas según tu escala, no más</h1>
          <div className="text-gray-500 text-base md:text-lg">Licencias de acuerdo al tamaño de tu organización</div>
        </div>
        <div className="mt-10">
          <table className="w-full border-collapse text-sm bg-white">
            <thead>
              <tr>
                <th className="bg-[#f4f4f4] text-gray-700 uppercase tracking-wider text-[11px] font-semibold py-3 px-2 text-left rounded-tl-xl sticky top-0 z-30" style={{ background: '#f4f4f4' }}>Funcionalidad</th>
                <th className="bg-[#f4f4f4] text-gray-700 uppercase tracking-wider text-[11px] font-semibold py-3 px-2 text-center sticky top-0 z-30" style={{ background: '#f4f4f4' }}>Gratuito</th>
                <th className="bg-[#f4f4f4] text-gray-700 uppercase tracking-wider text-[11px] font-semibold py-3 px-2 text-center sticky top-0 z-30" style={{ background: '#f4f4f4' }}>Profesional</th>
                <th className="bg-[#f4f4f4] text-gray-700 uppercase tracking-wider text-[11px] font-semibold py-3 px-2 text-center sticky top-0 z-30" style={{ background: '#f4f4f4' }}>Equipo</th>
                <th className="bg-[#f4f4f4] text-gray-700 uppercase tracking-wider text-[11px] font-semibold py-3 px-2 text-center rounded-tr-xl sticky top-0 z-30" style={{ background: '#f4f4f4' }}>Planta</th>
              </tr>
            </thead>
            <tbody>
              {/* LÍMITES DE CUENTA */}
              <tr className="bg-[#e0f2fe]">
                <td colSpan={5} className="uppercase tracking-widest text-[11px] font-bold text-sky-700 py-2 px-2">Límites de cuenta</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">Usuarios</td>
                <td className="text-center">1</td>
                <td className="text-center">1</td>
                <td className="text-center">Hasta 5</td>
                <td className="text-center">Hasta 15</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">Activos registrados</td>
                <td className="text-center">10</td>
                <td className="text-center">30</td>
                <td className="text-center">100</td>
                <td className="text-center">500</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">Plantas</td>
                <td className="text-center">1</td>
                <td className="text-center">1</td>
                <td className="text-center">1</td>
                <td className="text-center">Hasta 3</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">Bloques de activos adicionales</td>
                <td className="text-center text-gray-400">—</td>
                <td className="text-center text-gray-400">—</td>
                <td className="text-center text-green-600 font-bold">✓ $25/mes por 50 activos</td>
                <td className="text-center text-green-600 font-bold">✓ $25/mes por 50 activos</td>
              </tr>
              {/* MÓDULOS */}
              <tr className="bg-[#e0f2fe]">
                <td colSpan={5} className="uppercase tracking-widest text-[11px] font-bold text-sky-700 py-2 px-2">Módulos</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">Taxonomía de activos</td>
                <td className="text-center text-green-600 font-bold">✓ Completa</td>
                <td className="text-center text-green-600 font-bold">✓ Completa</td>
                <td className="text-center text-green-600 font-bold">✓ Completa</td>
                <td className="text-center text-green-600 font-bold">✓ Completa</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">RCA — Análisis de Causa Raíz</td>
                <td className="text-center">Hasta 5 proyectos</td>
                <td className="text-center text-green-600 font-bold">✓ Ilimitado</td>
                <td className="text-center text-green-600 font-bold">✓ Ilimitado</td>
                <td className="text-center text-green-600 font-bold">✓ Ilimitado</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">RCM — Mantenimiento Centrado en Confiabilidad</td>
                <td className="text-center">Hasta 5 planes</td>
                <td className="text-center text-green-600 font-bold">✓ Ilimitado</td>
                <td className="text-center text-green-600 font-bold">✓ Ilimitado</td>
                <td className="text-center text-green-600 font-bold">✓ Ilimitado</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">Módulos futuros (seguridad, calidad, etc.)</td>
                <td className="text-center">Demo / limitado</td>
                <td className="text-center">Podrían incluirse*</td>
                <td className="text-center">Podrían incluirse*</td>
                <td className="text-center">Podrían incluirse*</td>
              </tr>
              {/* ASISTENTE DE INTELIGENCIA ARTIFICIAL */}
              <tr className="bg-[#e0f2fe]">
                <td colSpan={5} className="uppercase tracking-widest text-[11px] font-bold text-sky-700 py-2 px-2">Asistente de inteligencia artificial</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">Generación de hipótesis (RCA)</td>
                <td className="text-center text-green-600 font-bold">✓</td>
                <td className="text-center text-green-600 font-bold">✓</td>
                <td className="text-center text-green-600 font-bold">✓</td>
                <td className="text-center text-green-600 font-bold">✓</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">Análisis de modos de falla (RCA)</td>
                <td className="text-center text-green-600 font-bold">✓</td>
                <td className="text-center text-green-600 font-bold">✓</td>
                <td className="text-center text-green-600 font-bold">✓</td>
                <td className="text-center text-green-600 font-bold">✓</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">Asistente IA para RCM</td>
                <td className="text-center text-green-600 font-bold">✓</td>
                <td className="text-center text-green-600 font-bold">✓</td>
                <td className="text-center text-green-600 font-bold">✓</td>
                <td className="text-center text-green-600 font-bold">✓</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">IA en módulos futuros</td>
                <td className="text-center">Por definir</td>
                <td className="text-center">Por definir</td>
                <td className="text-center">Por definir</td>
                <td className="text-center">Por definir</td>
              </tr>
              {/* COLABORACIÓN Y GESTIÓN */}
              <tr className="bg-[#e0f2fe]">
                <td colSpan={5} className="uppercase tracking-widest text-[11px] font-bold text-sky-700 py-2 px-2">Colaboración y gestión</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">Asignación de ENT (Equipo Natural de Trabajo)</td>
                <td className="text-center text-gray-400">—</td>
                <td className="text-center text-gray-400">—</td>
                <td className="text-center text-green-600 font-bold">✓</td>
                <td className="text-center text-green-600 font-bold">✓</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">Asignación de responsables en recomendaciones</td>
                <td className="text-center text-gray-400">—</td>
                <td className="text-center text-gray-400">—</td>
                <td className="text-center text-green-600 font-bold">✓</td>
                <td className="text-center text-green-600 font-bold">✓</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">Permisos y roles configurables</td>
                <td className="text-center text-gray-400">—</td>
                <td className="text-center text-gray-400">—</td>
                <td className="text-center text-green-600 font-bold">✓</td>
                <td className="text-center text-green-600 font-bold">✓</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">Dashboard compartido</td>
                <td className="text-center text-gray-400">—</td>
                <td className="text-center text-gray-400">—</td>
                <td className="text-center text-green-600 font-bold">✓</td>
                <td className="text-center text-green-600 font-bold">✓</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">Crear proyectos para otros usuarios</td>
                <td className="text-center text-gray-400">—</td>
                <td className="text-center text-gray-400">—</td>
                <td className="text-center text-blue-600 font-bold">✓ Configurable</td>
                <td className="text-center text-blue-600 font-bold">✓ Configurable</td>
              </tr>
              {/* REPORTES Y EXPORTACIÓN */}
              <tr className="bg-[#e0f2fe]">
                <td colSpan={5} className="uppercase tracking-widest text-[11px] font-bold text-sky-700 py-2 px-2">Reportes y exportación</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">Exportar reportes (PDF, Excel)</td>
                <td className="text-center text-gray-400">—</td>
                <td className="text-center text-green-600 font-bold">✓</td>
                <td className="text-center text-green-600 font-bold">✓</td>
                <td className="text-center text-green-600 font-bold">✓</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">Dashboard de indicadores (KPIs)</td>
                <td className="text-center">Básico</td>
                <td className="text-center text-green-600 font-bold">✓ Completo</td>
                <td className="text-center text-green-600 font-bold">✓ Completo</td>
                <td className="text-center text-green-600 font-bold">✓ Completo</td>
              </tr>
              {/* INFRAESTRUCTURA Y SOPORTE */}
              <tr className="bg-[#e0f2fe]">
                <td colSpan={5} className="uppercase tracking-widest text-[11px] font-bold text-sky-700 py-2 px-2">Infraestructura y soporte</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">Multi-planta</td>
                <td className="text-center text-gray-400">—</td>
                <td className="text-center text-gray-400">—</td>
                <td className="text-center text-gray-400">—</td>
                <td className="text-center text-green-600 font-bold">✓ Hasta 3</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">Soporte por correo electrónico</td>
                <td className="text-center text-green-600 font-bold">✓ Estándar</td>
                <td className="text-center text-green-600 font-bold">✓ Estándar</td>
                <td className="text-center text-green-600 font-bold">✓ Estándar</td>
                <td className="text-center text-green-600 font-bold">✓ Prioritario</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">Tiempo de respuesta de soporte</td>
                <td className="text-center">72 horas hábiles</td>
                <td className="text-center">48 horas hábiles</td>
                <td className="text-center">48 horas hábiles</td>
                <td className="text-center">24 horas hábiles</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">Facturación por orden de compra</td>
                <td className="text-center text-gray-400">—</td>
                <td className="text-center text-gray-400">—</td>
                <td className="text-center text-gray-400">—</td>
                <td className="text-center text-green-600 font-bold">✓</td>
              </tr>
              <tr className="hover:bg-[#f9f9f9]">
                <td className="py-2 px-2">Almacenamiento de archivos adjuntos</td>
                <td className="text-center">500 MB</td>
                <td className="text-center">2 GB</td>
                <td className="text-center">10 GB</td>
                <td className="text-center">50 GB</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
