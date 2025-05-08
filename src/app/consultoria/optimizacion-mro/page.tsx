export const dynamic = "force-static";

import { Metadata } from "next";
import {
  Add,
  Asset,
  Category,
  ChevronDown,
  Close,
  DecisionNode,
  Number_7,
  Query,
  Share,
  Subflow,
  Warning,
  ArrowUpRight,
  Industry,
  Activity,
  EventWarning,
  TransformInstructions,
  ArrowRight,
  RequestQuote,
  SupportVectorMachine,
  DataAnalytics,
  Headset,
  Number_1,
  Number_2,
  Number_3,
  Number_4,
  QuestionAnswering,
  IbmKnowledgeCatalogPremium,
  Tuning,
} from "@carbon/icons-react";
import { PiggyBank, Timer } from "lucide-react";
import BannerPrincipal from "@/components/BannerPrincipal";
import { ServiceCard } from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Optimización de Inventario MRO | Gestión de Repuestos | Reliaplant",
  description:
    "Servicio especializado de optimización de inventario MRO. Mejora la gestión de repuestos industriales con análisis de criticidad, cálculo del número óptimo y políticas eficientes de almacenamiento.",
  keywords: [
    "optimización MRO",
    "gestión de repuestos",
    "inventario industrial",
    "número óptimo de repuestos",
    "NOR",
    "min-max inventario",
    "mantenimiento industrial",
    "reliaplant",
    "confiabilidad",
  ],
  openGraph: {
    title: "Optimización de Inventario MRO | Reliaplant",
    description:
      "Optimización profesional de inventarios industriales: reducción de costos, mayor disponibilidad y gestión eficiente de repuestos críticos.",
    images: [
      {
        url: "https://reliaplant-2c104.web.app/assets/bgMRO.jpg",
        width: 1200,
        height: 630,
        alt: "Optimización de Inventario MRO",
      },
    ],
    type: "website",
    url: "https://reliaplant-2c104.web.app/consultoria/optimizacion-mro",
  },
  twitter: {
    card: "summary_large_image",
    title: "Optimización de Inventario MRO | Reliaplant",
    description:
      "Optimización profesional de inventarios industriales y gestión eficiente de repuestos para mantenimiento.",
    images: [
      {
        url: "https://reliaplant-2c104.web.app/assets/bgMRO.jpg",
        alt: "Optimización de Inventario MRO",
      },
    ],
  },
  alternates: {
    canonical: "https://reliaplant-2c104.web.app/consultoria/optimizacion-mro",
  },
};

export default function OptimizacionMRO() {
  return (
    <div>
      <BannerPrincipal
        title="Optimización de Inventario"
        description="La gestión del inventario de partes y repuestos es un pilar esencial para la rentabilidad de tu negocio. Nuestros expertos, respaldados por herramientas informáticas y metodologías probadas, están listos para acompañarte en el diseño de soluciones personalizadas que se ajusten a tus necesidades específicas."
        currentPath="Optimización de Inventario"
        image="/assets/bgMRO.jpg"
      />

      <div className="contentSection px-[8vw]">
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="w-full md:w-1/2">
            <h2>Menos Down Time</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mt-4">
              <ServiceCard
                Icon={Timer}
                title="Evita paradas prolongadas"
                description="Reducción del down time al tener las partes de repuesto identificadas y en almacén."
                variant="default"
              />
              <ServiceCard
                Icon={PiggyBank}
                title="Reduce costos innecesarios"
                description="Eliminación de sobrecostos de almacenamiento, partes innecesarias, stock excesivo y obsolescencia."
                variant="default"
              />
              <ServiceCard
                Icon={IbmKnowledgeCatalogPremium}
                title="Alinea tu política de inventarios"
                description="Definición de procedimientos y reglas claras para la gestión y auditabilidad del manejo de inventario."
                variant="default"
              />
              <ServiceCard
                Icon={Tuning}
                title="Define la cantidad óptima"
                description="Máximo, mínimo, punto de seguridad, cantidad óptima de partes en inventario para el menor costo riesgo beneficio."
                variant="default"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div>
              <h2>Lograrás:</h2>
              <p className="leading-relaxed">
                Revisar el inventario de forma integral, clasificando e
                identificando ítems críticos con base en datos de demanda,
                criticidad y disponibilidad financiera.
              </p>
              <p className="leading-relaxed mt-4">
                Diseñar estrategias específicas para equipos críticos (Clase A)
                mediante el método del Número Óptimo de Repuestos (NOR),
                equilibrando la inversión en stock contra el riesgo de paradas.
              </p>
              <p className="leading-relaxed mt-4">
                Aumentar la disponibilidad y confiabilidad de la planta, al
                asegurar que los repuestos más esenciales se encuentren siempre
                a mano.
              </p>
              <p className="leading-relaxed mt-4">
                Identificar cuellos de botella logísticos y de abastecimiento, y
                formular recomendaciones realistas de acuerdo a los lead times y
                convenios con proveedores.
              </p>
              <p className="leading-relaxed mt-4">
                Reducir costos de almacenamiento, liberando capital y evitando
                la obsolescencia de repuestos que realmente no justifican su
                permanencia en bodega.
              </p>
              <p className="leading-relaxed mt-4">
                Ofrecer lineamientos claros para la gestión de inventarios,
                fáciles de actualizar con el paso del tiempo y los cambios en la
                operación (por ejemplo, si se adquiere equipo nuevo o se
                modifica el régimen de producción).
              </p>
              <p className="leading-relaxed mt-4">
                Proveer reportes y capacitaciones que facilitan la comunicación
                de resultados y el empoderamiento del equipo interno para
                mantener y ajustar el modelo a futuro.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 bg-gray80 p-8">
          <div className="flex flex-col">
            <h2 className="bg-gradient-to-r from-blue60 to-blue20 text-transparent bg-clip-text">
              40%
            </h2>
            <p className="mt-4 text-gray20">
              de la pérdida de tiempo en el mantenimiento se atribuye a
              problemas relacionados con los repuestos.
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="bg-gradient-to-r from-blue60 to-blue20 text-transparent bg-clip-text">
              68%
            </h2>
            <p className="mt-4 text-gray20">
              de las empresas controlan sus stocks de mantenimiento, pero solo
              el 20% cumple con el 95% de las órdenes de compra internas,
              indicando un bajo nivel de confianza en el suministro.
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="bg-gradient-to-r from-blue60 to-blue20 text-transparent bg-clip-text">
              37%
            </h2>
            <p className="mt-4 text-gray20">
              de las empresas tiene más del 90% de los repuestos catalogados.
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="bg-gradient-to-r from-blue60 to-blue20 text-transparent bg-clip-text">
              31%
            </h2>
            <p className="mt-4 text-gray20">
              de las empresas tienen especificados los niveles Max-Min para más
              del 95% de sus repuestos.
            </p>
          </div>
        </div>
      </div>

      <div className="contentSection px-[8vw]">
        <div className="flex flex-row gap-4 justify-between border-b mb-16">
          <div className="flex flex-col justify-end">
            <h2 className="border-blue60 border-b-4 w-fit">
              Proceso de Optimización de Inventario
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-16">
          {/* Primer paso */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-24">
            <div className="w-full">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center p-2 bg-gray10">
                  <Number_1 size={40} className="text-black" />
                </div>
                <h3 className="mb-0">
                  Revisión de la información y definición de criterios
                </h3>
              </div>

              <div className="mt-8"></div>
              <div className="mt-8"></div>
              <p className="leading-relaxed">
                En este primer paso, recopilamos y validamos la información
                básica necesaria para el estudio:
              </p>
              <div className="mt-4 leading-relaxed">
                <strong>Datos del activo</strong>
                <br /> <br />
                <ul className="list-disc ml-6">
                  <li>
                    Estructura taxonómica de equipos: Lista completa de activos,
                    su jerarquía y estados de operación (activo, standby, etc.).
                  </li>
                  <li>
                    Número de unidades instaladas y de respaldo: Incluye la
                    filosofía de operación (standby en frío, standby en
                    caliente, etc.) y factor de utilización de cada unidad.
                  </li>
                  <li>
                    Edad del activo o historial de uso del repuesto: Tiempo
                    transcurrido desde la última reparación mayor en que se
                    utilizó la pieza o repuesto.
                  </li>
                  <li>
                    Tasa de falla de los equipos: Información asociada a la
                    probabilidad de demanda del ítem o repuesto, según
                    estadísticas o data histórica de fallas.
                  </li>
                  <li>
                    BOMs y listados de repuestos: Verificación de que las piezas
                    asociadas a cada equipo estén actualizadas en el sistema de
                    gestión (por ejemplo, SAP PM).
                  </li>
                </ul>
              </div>
              <div className="mt-4 leading-relaxed">
                <strong>Tiempo para disponer del ítem en sitio</strong>
                <br /> <br />
                <ul className="list-disc ml-6">
                  <li>
                    Gestión interna de procura: Tiempos involucrados en la
                    preparación de la solicitud de cotización (RFQ), análisis
                    técnico-económico, aprobaciones internas y generación de la
                    orden de compra (ODC).
                  </li>
                  <li>
                    Fabricación o suministro del OEM/Suplidor: Tiempo normal
                    (promedio, mínimo, máximo o bajo distribución
                    probabilística) y tiempo “premium” en caso de entregas
                    urgentes.
                  </li>
                  <li>
                    Inspección y certificación: Tiempos que pueda requerir el
                    CLIENTE para verificar calidad del ítem en las instalaciones
                    del fabricante o en almacenes propios.
                  </li>
                  <li>
                    Logística de transporte: Incluye trámites de aduana,
                    transporte nacional o internacional (marítimo, aéreo,
                    terrestre), así como posibles seguros y tiempos de
                    liberación en puerto o fronteras.
                  </li>
                  <li>
                    Reparación o recuperación local: En caso de que el ítem sea
                    reparable y requiera estimar tiempos de intervención en
                    talleres internos o de terceros.
                  </li>
                </ul>
              </div>
              <div className="mt-4 leading-relaxed">
                <strong>Costos</strong>
                <br /> <br />
                <ul className="list-disc ml-6">
                  <li>
                    Costos de procura: Gastos administrativos y de gestión
                    (preparación de RFQ, análisis técnico-económico, aprobación
                    y colocación de ODC).
                  </li>
                  <li>
                    Costo del ítem: Precio unitario en condiciones FOB, EXWORK o
                    “premium” (cuando se busca reducir el lead time).
                  </li>
                  <li>
                    Inspección y certificación: Costos asociados a revisiones
                    que el CLIENTE realice en las instalaciones del fabricante o
                    en los propios almacenes.
                  </li>
                  <li>
                    Costo de importación: Incluye transporte internacional,
                    gestión de aduana, seguros y cualquier gasto logístico hasta
                    el sitio de operación.
                  </li>
                  <li>
                    Costo de almacenamiento y preservación: Gastos generados por
                    mantener los ítems en condiciones óptimas (sistemas de
                    climatización, embalaje especial, etc.).
                  </li>
                  <li>
                    Impuestos o gravámenes: Cualquier arancel aplicable a los
                    activos en inventario, según la legislación local o
                    nacional.
                  </li>
                </ul>
              </div>
              <div className="mt-4 leading-relaxed">
                <strong>Datos del ítem</strong>
                <br /> <br />
                <ul className="list-disc ml-6">
                  <li>
                    Vida útil estimada: Considerar el envejecimiento en almacén
                    y el riesgo de obsolescencia.
                  </li>
                  <li>
                    Posibilidad de reparación o reacondicionamiento: Costos y
                    tiempos relacionados, en caso de que el repuesto pueda
                    recuperarse localmente.
                  </li>
                  <li>
                    Impacto de la no disponibilidad: Valor de la producción
                    perdida, multas contractuales o lucro cesante por no contar
                    con el ítem a tiempo.
                  </li>
                </ul>
              </div>
              <div className="mt-4 leading-relaxed">
                <strong>Parámetros de la evaluación</strong>
                <br /> <br />
                <ul className="list-disc ml-6">
                  <li>
                    Horizonte de estudio: Periodo de tiempo para el análisis
                    económico y operacional (por ejemplo, 1 a 5 años).
                  </li>
                  <li>
                    Tasa de descuento o costo del dinero: Factor financiero para
                    calcular los costos equivalentes en el tiempo.
                  </li>
                </ul>
              </div>
              <div className="mt-4 leading-relaxed">
                <strong>Historial de consumo y registros de fallas</strong>
                <br /> <br />
                <ul className="list-disc ml-6">
                  <li>
                    Historial de consumo de repuestos: Datos de demanda anual,
                    tasa de rotación, costos, tiempos de entrega y situaciones
                    de obsolescencia.
                  </li>
                  <li>
                    Información logística en SAP MM: Precios, proveedores,
                    codificación y datos adicionales del repuesto.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Segundo paso */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-24 border-t pt-16">
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center p-2 bg-gray10">
                  <Number_2 size={40} className="text-black" />
                </div>
                <h3 className="mb-0">
                  Análisis de criticidad y clasificación de los repuestos
                </h3>
              </div>
              <div className="mt-8"></div>
              <p className="leading-relaxed">
                Con la información recopilada, el siguiente paso es clasificar
                los repuestos con base en su impacto en la operación, su costo y
                su frecuencia de utilización. A menudo utilizamos metodologías
                como:
              </p>
              <div className="mt-4 leading-relaxed">
                <strong>Análisis ABC</strong>
                <br /> <br />
                <ul className="list-disc ml-6">
                  <li>
                    <strong>Clase A (estratégicos):</strong> Generalmente,
                    repuestos de baja rotación, alto costo y tiempos de entrega
                    prolongados. Suele tratarse de ítems que si no están
                    disponibles cuando se necesitan, generan un impacto
                    sustancial en la producción.
                  </li>
                  <li>
                    <strong>Clase B:</strong> Repuestos de rotación media, con
                    una mezcla moderada de costo e impacto.
                  </li>
                  <li>
                    <strong>Clase C:</strong> Ítems de alta rotación y bajo
                    costo unitario, cuyo impacto en la producción puede ser
                    menor o cuyo lead time es muy corto.
                  </li>
                </ul>
              </div>
              <div className="mt-4 leading-relaxed">
                <strong>Criterios de costo-riesgo</strong>
                <br /> <br />
                <ul className="list-disc ml-6">
                  <li>
                    Costo de la indisponibilidad (impacto económico por
                    detención de equipos o pérdida de producción).
                  </li>
                  <li>
                    Costo del repuesto (adquisición, almacenamiento, transporte
                    y posibles sobrecostos en caso de entregas urgentes).
                  </li>
                  <li>
                    Probabilidad de falla y frecuencia de demanda del repuesto.
                  </li>
                </ul>
              </div>
              <div className="bg-gray10 p-4 mt-4">
                <p className="leading-relaxed mt-4">
                  Este esfuerzo de categorización ayuda a enfocar los esfuerzos
                  de optimización, de modo que primero se atiendan los repuestos
                  que realmente son críticos o representan un riesgo económico
                  elevado.
                </p>
                <p className="leading-relaxed mt-4">
                  Para los repuestos Clase A se aplican metodologías más
                  avanzadas, como el Número Óptimo de Repuestos (NOR). Para los
                  ítems Clases B y C, con mayor rotación, se ajustan frecuencias
                  de pedido y se establecen niveles de Mínimos y Máximos
                  tradicionales (o sistemas de Punto de Reorden).
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="h-[45vh] bg-[url('/assets/optimizacionMRO1.png')] bg-cover bg-center"></div>
            </div>
          </div>

          {/* Tercer paso */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-24 border-t pt-16">
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center p-2 bg-gray10">
                  <Number_3 size={40} className="text-black" />
                </div>
                <h3 className="mb-0">
                  Cálculo del Número Óptimo de Repuestos (NOR) y métodos de
                  Mínimos y Máximos
                </h3>
              </div>
              <div className="mt-8"></div>
              <p className="leading-relaxed">
                En esta fase, se realiza el cálculo del Número Óptimo de
                Repuestos (NOR) y se aplican métodos de Mínimos y Máximos para
                la gestión de inventarios:
              </p>
              <div className="mt-4 leading-relaxed">
                <strong>Repuestos de baja rotación (Clase A)</strong>
                <br /> <br />
                <ul className="list-disc ml-6">
                  <li>Tasa de falla de los equipos que demandan el ítem.</li>
                  <li>
                    Tiempo de entrega (lead time) normal y urgente (en caso de
                    órdenes expeditas con sobrecosto).
                  </li>
                  <li>
                    Costo de oportunidad o costo de indisponibilidad: Pérdida de
                    producción o lucro cesante si el equipo no puede operar por
                    falta de repuesto.
                  </li>
                  <li>
                    Costo de capital: Se evalúa la inversión que significa cada
                    repuesto en almacén versus la probabilidad de necesitarlo en
                    un horizonte de tiempo definido (ej. 1, 2, 5 años).
                  </li>
                  <li>
                    Posibilidad de reparación o recuperación del ítem (si se
                    trata de repuestos que pueden reacondicionarse localmente).
                  </li>
                </ul>
                <p className="mt-4">
                  Mediante fórmulas o simulaciones (por ejemplo, en Excel con
                  macros de Visual Basic, o con software especializado), se
                  calcula el NOR para cada ítem crítico, comparando escenarios
                  de costos y disponibilidad. El resultado indica:
                </p>
                <ul className="list-disc ml-6 mt-4">
                  <li>Cuántas unidades es “óptimo” tener en stock.</li>
                  <li>
                    Cuál es el riesgo asumido si se decide mantener menos piezas
                    o el costo extra si se almacena más de lo recomendado.
                  </li>
                </ul>
              </div>
              <div className="mt-4 leading-relaxed">
                <strong>Repuestos de alta rotación (Clases B y C)</strong>
                <br /> <br />
                <ul className="list-disc ml-6">
                  <li>
                    Stock Mínimo (safety stock): La cantidad de seguridad que
                    cubre la variabilidad de la demanda y el tiempo de
                    reposición.
                  </li>
                  <li>
                    Stock Máximo: El límite de inventario tras una orden de
                    reabastecimiento.
                  </li>
                  <li>
                    ROP (Punto de Reorden): El nivel de inventario en el que se
                    emite la orden de compra para reponer existencias,
                    asegurando no caer bajo el stock mínimo.
                  </li>
                </ul>
                <p className="mt-4 p-4 bg-gray10">
                  El objetivo es mantener una cantidad óptima: ni excesiva ni
                  insuficiente, reduciendo costos de almacenamiento y riesgos de
                  falta de material.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="h-[45vh] bg-[url('/assets/optimizacionMRO2.png')] bg-cover bg-center"></div>
            </div>
          </div>

          {/* Cuarto paso */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-24 border-t pt-16">
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center p-2 bg-gray10">
                  <Number_4 size={40} className="text-black" />
                </div>
                <h3 className="mb-0">
                  Actualización de políticas de inventario e implementación
                </h3>
              </div>
              <div className="mt-8"></div>
              <div className="mt-8"></div>
              <p className="leading-relaxed">
                Tras el cálculo y la clasificación de los repuestos en su número
                óptimo o en sus niveles de Mínimos y Máximos, documentamos los
                resultados y proponemos una revisión formal de las políticas de
                inventario. Esto incluye:
              </p>
              <div className="mt-4 leading-relaxed">
                <strong>
                  Revisión y actualización de la filosofía de inventario
                </strong>
                <br /> <br />
                <ul className="list-disc ml-6">
                  <li>
                    Ajuste en los umbrales de criticidad, rediseño de flujos de
                    aprobación, integración con planes de mantenimiento, etc.
                  </li>
                </ul>
              </div>
              <div className="mt-4 leading-relaxed">
                <strong>Reglas de obsolescencia</strong>
                <br /> <br />
                <ul className="list-disc ml-6">
                  <li>
                    Identificación de ítems en desuso o con riesgo de
                    convertirse en obsoletos, proponiendo acciones preventivas
                    (por ejemplo, buscar equivalencias o planes de
                    reingeniería).
                  </li>
                </ul>
              </div>
              <div className="mt-4 leading-relaxed">
                <strong>Guía de preservación de repuestos</strong>
                <br /> <br />
                <ul className="list-disc ml-6">
                  <li>
                    Recomendaciones para almacenar de manera adecuada aquellos
                    equipos o piezas que, por su alto valor, ameritan
                    condiciones especiales de protección contra humedad,
                    corrosión u otras variables ambientales.
                  </li>
                </ul>
              </div>
              <div className="mt-4 leading-relaxed">
                <strong>
                  Procesos de carga masiva en CMMS (SAP MM, MAXIMO, u otros)
                </strong>
                <br /> <br />
                <ul className="list-disc ml-6">
                  <li>
                    Definición de formatos y guías para que la data calculada
                    (NOR, stock mínimo, stock máximo, ROP, EOQ) se integre de
                    forma eficiente con el sistema de gestión empresarial.
                  </li>
                </ul>
              </div>
              <p className="leading-relaxed mt-4 p-4 bg-gray10">
                La implementación de estas políticas puede requerir también
                capacitaciones al personal de planificación, logística y
                mantenimiento, de manera que comprendan la lógica detrás de los
                nuevos parámetros y puedan realizar ajustes periódicos en caso
                de cambios en la demanda o en la criticidad de los activos.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="h-[45vh] bg-[url('/assets/optimizacionMRO3.png')] bg-cover bg-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
