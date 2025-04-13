import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Políticas AECM",
  },
  description: "Desc Politicas",
}

export default function postOEE() {
  return (

    <div>
        <table border={1}>
  <thead>
    <tr>
      <th colSpan={2}>Comportamientos y Procesos</th>
      <th>Ejecución Operacional</th>
      <th>Desempeño de Fabricación</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colSpan={4}><strong>PILAR 1: Gestión Empresarial</strong></td>
    </tr>
    <tr>
      <td colSpan={2}>Margen de Mantenimiento (COGS)</td>
      <td></td>
      <td>Lagging</td>
    </tr>
    <tr>
      <td colSpan={2}>Costo Unitario de Mantenimiento</td>
      <td></td>
      <td>Lagging</td>
    </tr>
    <tr>
      <td colSpan={2}>Costo de Mantenimiento por RAV</td>
      <td></td>
      <td>Lagging</td>
    </tr>

    <tr>
      <td colSpan={4}><strong>PILAR 2: Fiabilidad de Procesos de Fabricación</strong></td>
    </tr>
    <tr>
      <td colSpan={2}>OEE</td>
      <td></td>
      <td>Lagging</td>
    </tr>
    <tr>
      <td colSpan={2}>Disponibilidad</td>
      <td></td>
      <td>Lagging</td>
    </tr>
    <tr>
      <td colSpan={2}>Tiempo Total de Operación</td>
      <td></td>
      <td>Lagging</td>
    </tr>

    <tr>
      <td colSpan={4}><strong>PILAR 3: Fiabilidad de Equipos</strong></td>
    </tr>
    <tr>
      <td colSpan={2}>Sistemas Cubiertos por Análisis de Criticidad</td>
      <td>Lagging</td>
      <td>Leading</td>
    </tr>
    <tr>
      <td colSpan={2}>Tiempo de Inactividad Programado</td>
      <td>Lagging</td>
      <td>Lagging</td>
    </tr>
    <tr>
      <td colSpan={2}>Tiempo de Inactividad No Programado</td>
      <td>Lagging</td>
      <td>Lagging</td>
    </tr>
    <tr>
      <td colSpan={2}>MTBF</td>
      <td>Lagging</td>
      <td>Leading</td>
    </tr>

    <tr>
      <td colSpan={4}><strong>PILAR 4: Organización y Liderazgo</strong></td>
    </tr>
    <tr>
      <td colSpan={2}>Retrabajo</td>
      <td>Lagging</td>
      <td>Leading</td>
    </tr>
    <tr>
      <td colSpan={2}>Capacitación en Mantenimiento - $</td>
      <td>Lagging</td>
      <td>Leading</td>
    </tr>
    <tr>
      <td colSpan={2}>Capacitación en Mantenimiento - Horas Hombre (MHRs)</td>
      <td>Lagging</td>
      <td>Leading</td>
    </tr>

    <tr>
      <td colSpan={4}><strong>PILAR 5: Gestión del Trabajo</strong></td>
    </tr>
    <tr>
      <td colSpan={2}>Horas de Mantenimiento Correctivo</td>
      <td>Lagging</td>
      <td>Leading</td>
    </tr>
    <tr>
      <td colSpan={2}>Horas de Mantenimiento Preventivo</td>
      <td>Lagging</td>
      <td>Leading</td>
    </tr>
    <tr>
      <td colSpan={2}>Horas de Mantenimiento Basado en Condición</td>
      <td>Lagging</td>
      <td>Leading</td>
    </tr>
    <tr>
      <td colSpan={2}>Trabajo Planificado</td>
      <td>Lagging</td>
      <td>Leading</td>
    </tr>
    <tr>
      <td colSpan={2}>Trabajo Reactivo</td>
      <td>Lagging</td>
      <td>Leading</td>
    </tr>
    <tr>
      <td colSpan={2}>Trabajo Proactivo</td>
      <td>Lagging</td>
      <td>Leading</td>
    </tr>
    <tr>
      <td colSpan={2}>Cumplimiento del Horario (Horas)</td>
      <td>Leading</td>
      <td>Leading</td>
    </tr>
    <tr>
      <td colSpan={2}>Cumplimiento del Horario (Órdenes de Trabajo)</td>
      <td>Leading</td>
      <td>Leading</td>
    </tr>
    <tr>
      <td colSpan={2}>Órdenes de Trabajo Recurrentes</td>
      <td>Leading</td>
      <td>Leading</td>
    </tr>
    <tr>
      <td colSpan={2}>Antigüedad de las Órdenes de Trabajo</td>
      <td>Lagging</td>
      <td>Leading</td>
    </tr>
    <tr>
      <td colSpan={2}>Retroceso Planificado</td>
      <td>Lagging</td>
      <td>Leading</td>
    </tr>
  </tbody>
</table>
    </div>

  );
}
