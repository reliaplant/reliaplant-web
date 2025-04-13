import { Metadata } from "next";

export const metadata: Metadata =  {
  title: {
    absolute: "Conctacto",
  },
  description: "Desc Contacto",
}

export default function Contacto() {
  return (
    <div className="max-w-[1080px] m-auto space-y-3">
<h1>Política de Imparcialidad</h1>
    <p>
        Esta política tiene como objetivo garantizar la imparcialidad en todas las actividades de certificación de la Asociación de Expertos en Confiabilidad y Mantenimiento (AECM), protegiendo la integridad del proceso y asegurando que todas las decisiones sean tomadas sin influencias indebidas. Además, esta política busca establecer procedimientos claros para la identificación, evaluación y gestión de conflictos de interés, así como para proteger el proceso de certificación de influencias externas.
    </p>

    <h2>1. Compromiso con la Imparcialidad</h2>
    <p>
        La Asociación de Expertos en Confiabilidad y Mantenimiento (AECM) se compromete a realizar todas las actividades de certificación de manera imparcial, sin permitir que intereses personales, financieros o de otro tipo influyan en las decisiones de certificación.
    </p>

    <h2>2. Procedimientos para la Declaración, Evaluación y Gestión de Conflictos de Interés</h2>

    <h3>2.1 Declaración de Conflictos de Interés</h3>
    <p>
        Todos los miembros del Comité de Certificación, el Comité de Imparcialidad, los evaluadores y el personal involucrado deben completar una declaración de conflicto de interés antes de participar en cualquier actividad de certificación. Las declaraciones serán revisadas antes del inicio de cada ciclo de certificación y deberán ser actualizadas en caso de cambios en las circunstancias personales o profesionales.
    </p>

    <h3>2.2 Evaluación y Acción sobre los Conflictos</h3>
    <p>
        El Comité de Imparcialidad evaluará cada declaración y decidirá si existe un conflicto de interés. Si se identifica un conflicto, el miembro afectado será excluido del proceso de certificación relacionado y sus tareas serán reasignadas a otro miembro sin conflictos. Esta decisión será comunicada dentro de los 15 días hábiles posteriores a la identificación del conflicto.
    </p>

    <h2>3. Autoridad y Responsabilidad del Comité de Imparcialidad</h2>

    <h3>3.1 Independencia y Autoridad del Comité</h3>
    <p>
        El Comité de Imparcialidad tiene la autoridad para detener cualquier proceso de certificación si se sospecha que la imparcialidad está comprometida. El Comité opera de manera independiente del Comité de Certificación y reporta directamente al Director General sobre todas las cuestiones relacionadas con la imparcialidad.
    </p>

    <h3>3.2 Revisión de Quejas y Apelaciones</h3>
    <p>
        El Comité de Imparcialidad revisará cualquier queja o apelación relacionada con la imparcialidad de las decisiones de certificación. Todas las decisiones tomadas por el Comité serán documentadas y comunicadas a las partes involucradas dentro de los 10 días hábiles.
    </p>

    <h2>4. Protección de la Imparcialidad Contra Influencias Externas</h2>

    <h3>4.1 Procedimientos de Protección</h3>
    <p>
        Cualquier intento de influir en el proceso de certificación por parte de partes interesadas externas debe ser reportado inmediatamente al Comité de Imparcialidad. El Comité investigará el intento de influencia y tomará las medidas necesarias para proteger la imparcialidad, lo que incluye la exclusión de la parte interesada del proceso.
    </p>

    <h2>5. Transparencia y Comunicación con los Candidatos</h2>

    <h3>5.1 Proceso de Información a los Candidatos</h3>
    <p>
        Los candidatos a la certificación recibirán una explicación clara de los criterios de certificación, los procedimientos de evaluación y las razones de las decisiones tomadas. Toda la documentación relevante estará disponible para los candidatos y partes interesadas a través de un portal en línea seguro.
    </p>

    <h3>5.2 Actualización de Criterios</h3>
    <p>
        Cualquier cambio en los criterios de certificación será comunicado a los candidatos y partes interesadas con al menos 30 días de anticipación.
    </p>

    <h2>6. Revisiones y Auditorías Internas</h2>

    <h3>6.1 Auditorías Anuales</h3>
    <p>
        La Asociación de Expertos en Confiabilidad y Mantenimiento (AECM) llevará a cabo auditorías internas anuales para revisar la efectividad de las políticas de imparcialidad. Estas auditorías incluirán la revisión de todos los casos de conflictos de interés declarados y las acciones correctivas tomadas.
    </p>

    <h3>6.2 Revisión y Actualización de Políticas</h3>
    <p>
        Las políticas de imparcialidad se revisarán y actualizarán anualmente o cuando se identifiquen problemas durante las auditorías internas.
    </p>

    <h2>7. Capacitación Obligatoria en Imparcialidad</h2>

    <h3>7.1 Programas de Capacitación</h3>
    <p>
        Todos los miembros del personal, evaluadores y comités recibirán capacitación anual obligatoria sobre la importancia de la imparcialidad y cómo evitar conflictos de interés. La capacitación incluirá sesiones prácticas sobre cómo identificar posibles conflictos de interés en escenarios específicos y cómo reportarlos de manera oportuna.
    </p>

    <h2>8. Mecanismo de Reporte de Incidencias</h2>

    <h3>8.1 Canal de Reporte Confidencial</h3>
    <p>
        Se establecerá un correo electrónico confidencial (<a href="mailto:imparcialidad@aecm.com">imparcialidad@aecm.com</a>) a través del cual cualquier miembro del personal, evaluador o candidato podrá reportar sospechas de parcialidad. Este correo será monitoreado exclusivamente por el Comité de Imparcialidad. Todos los reportes serán investigados dentro de un plazo de 10 días hábiles, y las acciones correctivas serán documentadas y comunicadas a las partes relevantes.
    </p>
    </div>
  );
}
