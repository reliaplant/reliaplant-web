import type { Metadata } from "next";
import PaginaProducto, { DatosPagina } from "@/components/producto/PaginaProducto";

export const metadata: Metadata = {
  title: { absolute: "Gestión de inventario de repuestos críticos | ReliaPlant" },
  description:
    "Inventario de repuestos ligado a tus equipos: criticidad, tiempo de entrega y MTBF para sugerir stock mínimo y máximo, y la lista de qué comprar.",
  alternates: { canonical: "https://reliaplant.com/producto/inventario" },
};

// Réplica de Inventario → Materiales (columnas, políticas y estatus reales de MaterialesTab.tsx y politica.ts).
const PANTALLA_MATERIALES = `<div class="pantalla" role="img" aria-label="Pantalla de materiales del inventario de repuestos de ReliaPlant"><div class="rp-head"><div class="rp-logo">RELIAPLANT</div><div class="rp-tabs"><span>TAX</span><span>GMAO</span><span class="act">Inventario</span><span>RCA</span><span>RCM</span><span>PM</span><span>RBI</span></div></div><div class="rp-sub"><span class="act">Materiales</span><span>Movimientos</span><span>Reabastecer (3)</span></div><div class="scroll-x"><table class="tabla-app"><thead><tr><th>Código</th><th>Descripción</th><th class="c">Categoría</th><th class="c">Política</th><th class="c">Ubicación</th><th class="c">Stock</th><th class="c">Disponible</th><th class="c">Estatus</th></tr></thead><tbody><tr><td class="mono b">300045812</td><td>Sello mecánico cartucho 1,875"</td><td class="c">Sellos</td><td class="c"><span class="chip-e e-azul">Repuesto de seguro</span></td><td class="c mono">A-03-2</td><td class="c mono">1</td><td class="c mono">0</td><td class="c"><span class="chip-e e-rojo">Agotado</span></td></tr><tr><td class="mono b">300045820</td><td>Rodamiento 6311-C3</td><td class="c">Rodamientos</td><td class="c"><span class="chip-e e-rojo">Reorden crítico</span></td><td class="c mono">A-01-4</td><td class="c mono">6</td><td class="c mono">6</td><td class="c"><span class="chip-e e-cerr">OK</span></td></tr><tr><td class="mono b">300061177</td><td>Kit de válvulas de compresor</td><td class="c">Válvulas</td><td class="c"><span class="chip-e e-azul">Repuesto de seguro</span></td><td class="c mono">B-02-1</td><td class="c mono">1</td><td class="c mono">1</td><td class="c"><span class="chip-e e-rev">Bajo mínimo</span></td></tr><tr><td class="mono b">300038402</td><td>Empaquetadura espiral 6" 300#</td><td class="c">Empaquetaduras</td><td class="c"><span class="chip-e e-rev">Reorden</span></td><td class="c mono">C-04-3</td><td class="c mono">18</td><td class="c mono">14</td><td class="c"><span class="chip-e e-cerr">OK</span></td></tr><tr><td class="mono b">300072215</td><td>Correa de ventilador SPB 2360</td><td class="c">Correas</td><td class="c"><span class="chip-e e-rev">Reorden</span></td><td class="c mono">C-01-2</td><td class="c mono">3</td><td class="c mono">3</td><td class="c"><span class="chip-e e-rev">Bajo mínimo</span></td></tr><tr><td class="mono b">300080931</td><td>Filtro de aire de instrumentos</td><td class="c">Filtros</td><td class="c"><span class="chip-e p-baja">Bajo pedido</span></td><td class="c mono">D-01-3</td><td class="c mono">2</td><td class="c mono">2</td><td class="c"><span class="chip-e e-cerr">OK</span></td></tr><tr><td class="mono b">300091044</td><td>Manómetro 0-160 psi 4"</td><td class="c">Instrumentos</td><td class="c"><span class="chip-e e-nuevo">Faltan datos</span></td><td class="c mono">D-02-1</td><td class="c mono">4</td><td class="c mono">4</td><td class="c"><span class="chip-e e-cerr">OK</span></td></tr></tbody></table></div></div>`;

const datos: DatosPagina = {
  tipo: "producto",
  etiqueta: "Producto · Inventario de repuestos",
  titulo: "Gestión de inventario de repuestos,",
  tituloGris: "ligada a los equipos que los usan.",
  bajada:
    "Cada material sabe en qué equipos va instalado. Con la criticidad del equipo, el tiempo de entrega, el consumo y el MTBF, ReliaPlant sugiere el stock mínimo y máximo de tus repuestos críticos y te dice qué comprar.",
  foto: { src: "/sitio/inventario-almacen.jpg", alt: "Almacén de repuestos de mantenimiento en una planta industrial" },
  tarjeta: {
    titulo: "300045812",
    subtitulo: "Sello mecánico · P-211A/B",
    filas: [
      ["Política", "Repuesto de seguro"],
      ["Tiempo de entrega", "70 días"],
      ["Mín / máx sugerido", "2 / 2"],
    ],
  },
  pantalla: PANTALLA_MATERIALES,
  pantallaPie:
    "Materiales del almacén de la planta Compresión Norte: política de stock sugerida, stock físico, disponible (descontando lo reservado por OT abiertas) y estatus.",
  problema: {
    titulo: "El repuesto que falta",
    tituloGris: "siempre es el que tarda diez semanas.",
    puntos: [
      {
        titulo: "Mínimos y máximos que nadie recuerda de dónde salieron",
        texto: "Se fijaron hace años, a ojo o copiados de otra planta. Hay rodamientos de sobra y ni un sello para la bomba que para la unidad.",
      },
      {
        titulo: "El almacén no sabe qué es crítico",
        texto: "El catálogo de materiales no dice en qué equipo va cada pieza. Un empaque de un equipo de reserva pesa lo mismo que el kit de válvulas del compresor principal.",
      },
      {
        titulo: "Stock en el sistema que ya está comprometido",
        texto: "El material aparece disponible, pero otra orden de trabajo ya lo pidió. Se entera el técnico cuando va a buscarlo.",
      },
    ],
  },
  pasos: [
    {
      titulo: "Carga tu catálogo de materiales",
      texto: "Uno por uno o con la plantilla de Excel. Antes de aplicar ves qué se crea, qué se actualiza y qué tiene error. Si cambias la existencia, queda como ajuste por conteo en el kardex.",
    },
    {
      titulo: "Asocia los repuestos a cada equipo",
      texto: "En la ficha del equipo, sección Repuestos, indicas qué materiales lleva y cuántos. El material hereda la criticidad del equipo más crítico que lo usa: Vital, Esencial o Deseable.",
    },
    {
      titulo: "Completa entrega, MTBF y costo de parada",
      texto: "Con eso y el consumo de los últimos 12 meses, la app clasifica cada material en una política de stock y sugiere su mínimo y máximo. En Ver cálculo revisas cada fórmula y simulas con otros valores antes de guardar.",
    },
    {
      titulo: "Reserva y consume desde la orden de trabajo",
      texto: "Al planificar una OT, los repuestos del equipo aparecen como sugerencia y quedan reservados. Al cerrarla confirmas lo usado y se descuenta del stock.",
    },
    {
      titulo: "Compra lo que está en el mínimo",
      texto: "La pestaña Reabastecer lista lo que llegó al mínimo, la cantidad a pedir hasta el máximo y el importe estimado. La descargas en Excel para armar la solicitud de compra.",
    },
  ],
  capacidades: [
    {
      titulo: "Repuestos por equipo",
      texto: "Lista de materiales de cada equipo con la cantidad instalada. Desde el material ves todos los equipos que lo usan.",
    },
    {
      titulo: "Política por criticidad y rotación",
      texto: "Cruza criticidad (Vital, Esencial, Deseable) con rotación: Reorden crítico, Reorden, Repuesto de seguro o Bajo pedido. Si falta información, te dice exactamente qué dato completar.",
    },
    {
      titulo: "Mínimo y máximo sugerido",
      texto: "Para lo que rota: punto de pedido con stock de seguridad y lote económico. Para repuestos críticos de baja rotación: Poisson por nivel de servicio o por costo de parada contra costo de almacenarlo.",
    },
    {
      titulo: "Demanda por confiabilidad",
      texto: "Si la planta es nueva y no hay historial, la demanda sale del MTBF de la pieza y las unidades instaladas, o de un consumo anual que tú estimas.",
    },
    {
      titulo: "Stock, reservado y disponible",
      texto: "El reservado se calcula con las órdenes abiertas que piden el material. El estatus (OK, Bajo mínimo, Agotado) se mide sobre lo disponible, no sobre lo físico.",
    },
    {
      titulo: "Kardex de la planta",
      texto: "Entradas, salidas, ajustes por conteo y consumos de OT, con referencia de OC, guía o vale, usuario y stock resultante en cada movimiento.",
    },
  ],
  modos: {
    plataforma: {
      titulo: "Tu equipo administra el almacén",
      texto: "Cargas el catálogo, asocias repuestos a equipos y la app calcula. Tú decides si aplicas el sugerido o fijas el mínimo y el máximo a mano.",
      incluye: [
        "Carga masiva de materiales con plantilla de Excel",
        "Mínimo y máximo sugerido con el cálculo a la vista",
        "Parámetros por empresa: costo de pedido, costo de almacenamiento y niveles de servicio",
        "Reserva y consumo de materiales desde las órdenes de trabajo",
        "Lista de reabastecimiento descargable en Excel",
      ],
    },
    servicio: {
      titulo: "Armamos tu inventario de repuestos críticos",
      texto: "Partimos de tu maestro de materiales y de la taxonomía de la planta. Te entregamos el catálogo depurado, ligado a los equipos y con una política de stock para cada repuesto.",
      incluye: [
        "Depuración del maestro de materiales: duplicados, descripciones y números de parte",
        "Asociación de repuestos a equipos a partir de manuales y planos",
        "Análisis de criticidad de repuestos con tu equipo de mantenimiento",
        "Revisión de tiempos de entrega, MTBF y costos de parada",
        "Carga en ReliaPlant y ajuste de mínimos y máximos",
      ],
    },
  },
  faq: [
    {
      pregunta: "¿Qué es la gestión de inventario de repuestos en mantenimiento?",
      respuesta:
        "Es decidir qué repuestos tener en almacén, cuántos y cuándo reponerlos para que el mantenimiento no se detenga por falta de una pieza. A diferencia del inventario comercial, la demanda depende de las fallas y del plan de mantenimiento, no de las ventas. Por eso conviene ligar cada material a los equipos donde va instalado.",
    },
    {
      pregunta: "¿Qué es un repuesto crítico y cómo se identifica?",
      respuesta:
        "Un repuesto crítico es aquel cuya falta detiene o pone en riesgo un equipo importante. En ReliaPlant el material hereda la criticidad del equipo más crítico que lo usa: los equipos de criticidad alta o muy alta lo vuelven Vital. También puedes fijar la criticidad del material a mano.",
    },
    {
      pregunta: "¿Cómo se calcula el stock mínimo y máximo de repuestos?",
      respuesta:
        "Para materiales que se consumen seguido, el mínimo es la demanda durante el tiempo de entrega más un stock de seguridad, y el máximo suma el lote económico de pedido. Para repuestos críticos que casi no se consumen se usa la distribución de Poisson: el menor número de unidades que cubre el tiempo de entrega con el nivel de servicio elegido.",
    },
    {
      pregunta: "¿Qué es un repuesto de seguro?",
      respuesta:
        "Es una pieza crítica de baja rotación que se guarda aunque pasen años sin usarla, porque su tiempo de entrega es largo y su falta para la planta. Un kit de válvulas de compresor o un sello mecánico importado son casos típicos. Su mínimo y su máximo suelen ser iguales.",
    },
    {
      pregunta: "¿Qué es la clasificación VED y FSN de inventarios?",
      respuesta:
        "VED clasifica por criticidad: Vital, Esencial y Deseable. FSN clasifica por rotación: se mueve seguido, lento o no se mueve. ReliaPlant cruza ambas para elegir la política de cada material.",
    },
    {
      pregunta: "¿Cómo calculo el stock de repuestos si la planta es nueva y no hay historial?",
      respuesta:
        "Sin historial de consumo, la demanda anual puede estimarse con el MTBF de la pieza y las unidades instaladas: unidades × 8760 horas / MTBF. Si no tienes el MTBF, puedes escribir un consumo anual estimado. Cuando se acumulan meses de consumo real, la app pasa a usarlo.",
    },
    {
      pregunta: "¿Puedo cargar mi maestro de materiales desde Excel?",
      respuesta:
        "Sí. Descargas la plantilla, la llenas y la subes. La app reconoce encabezados comunes de exportes de ERP como texto breve o grupo de artículos, y te muestra el resultado de cada fila antes de aplicar la carga.",
    },
  ],
  siguiente: { etiqueta: "El ciclo vuelve a empezar", titulo: "Registro de activos", href: "/producto/taxonomia" },
  origen: "web - /producto/inventario",
};

export default function Page() {
  return <PaginaProducto d={datos} />;
}
