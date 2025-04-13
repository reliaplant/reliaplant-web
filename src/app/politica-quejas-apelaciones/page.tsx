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
 <h1>Política de Quejas y Apelaciones</h1>
    <p>
        La Asociación de Expertos en Confiabilidad y Mantenimiento (AECM) está comprometida con la equidad, la transparencia y la integridad en todos sus procesos de certificación. Reconocemos la importancia de ofrecer a los candidatos y otras partes interesadas un mecanismo claro y accesible para expresar sus inquietudes, ya sea en relación con el proceso de evaluación, el comportamiento de nuestros evaluadores o cualquier otro aspecto relacionado con la certificación. A través de esta Política de Quejas y Apelaciones, nos aseguramos de que todas las preocupaciones sean tratadas con seriedad, imparcialidad y confidencialidad.
    </p>

    <h2>1. Procedimiento para la Presentación de Quejas</h2>
    <p>
        Las quejas pueden surgir por diversas razones, como problemas relacionados con el servicio, la conducta de evaluadores o la administración del proceso de certificación. AECM ofrece un proceso estructurado para garantizar un tratamiento eficaz:
    </p>
    <ul>
        <li><strong>Presentación Formal de la Queja:</strong> Cualquier persona o entidad que desee presentar una queja puede hacerlo completando el formulario de quejas disponible en nuestra página web o enviando un correo electrónico a <a href="mailto:quejas@aecm.com">quejas@aecm.com</a>. La queja debe incluir una descripción detallada del incidente o problema, fechas, personas involucradas y cualquier prueba o documento de apoyo.</li>
        <li><strong>Recepción y Registro de Quejas:</strong> La Unidad de Documentación y Cumplimiento será responsable de recibir las quejas y de confirmar su recepción dentro de los cinco días hábiles. Esta unidad será responsable de registrar cada queja en un sistema de seguimiento y garantizar que toda la información relevante se conserve de manera confidencial.</li>
        <li><strong>Revisión de Quejas:</strong> Una vez recibida la queja, el Comité de Imparcialidad llevará a cabo una revisión inicial. Este comité será responsable de investigar la queja, entrevistando a las partes involucradas si es necesario, y recopilando cualquier prueba o documento adicional que pueda ayudar en la resolución del caso.</li>
        <li><strong>Resolución de Quejas:</strong> El Comité de Imparcialidad será responsable de emitir una resolución sobre la queja dentro de un plazo de 30 días, a menos que la complejidad del caso requiera más tiempo, en cuyo caso se notificará a las partes afectadas. La resolución será comunicada por escrito y se archivará junto con el registro de la queja para futuros análisis.</li>
    </ul>

    <h2>2. Proceso de Apelaciones</h2>
    <p>
        Los candidatos que no estén de acuerdo con el resultado de su evaluación o que consideren que no se les ha evaluado de manera justa tienen derecho a presentar una apelación. El proceso de apelación ofrece una vía formal para solicitar una revisión de la decisión, asegurando que todos los candidatos tengan la oportunidad de expresar sus preocupaciones de manera justa.
    </p>
    <ul>
        <li><strong>Presentación de Apelaciones:</strong> Las apelaciones deben presentarse por escrito dentro de los 30 días posteriores a la notificación de los resultados de la evaluación. La solicitud de apelación debe enviarse a <a href="mailto:apelaciones@aecm.com">apelaciones@aecm.com</a> e incluir los motivos específicos por los cuales el candidato considera que la evaluación fue injusta o incorrecta, junto con cualquier documentación o evidencia adicional que apoye su caso.</li>
        <li><strong>Revisión Independiente:</strong> El Comité de Certificación será el encargado de revisar las apelaciones de manera independiente, garantizando que ningún miembro del comité haya estado involucrado en la evaluación original del candidato. Este comité analizará todas las pruebas y testimonios proporcionados para garantizar que el proceso de evaluación se haya llevado a cabo de acuerdo con los procedimientos establecidos y los criterios de certificación de la AECM.</li>
        <li><strong>Decisión Final sobre la Apelación:</strong> La decisión del Comité de Certificación será considerada definitiva y vinculante. AECM se compromete a comunicar la decisión final al apelante dentro de un plazo de 60 días. Si la apelación es exitosa, la Unidad de Evaluación tomará las medidas necesarias, que podrían incluir la reevaluación o la corrección de los resultados del examen.</li>
    </ul>

    <h2>3. Principios de Confidencialidad y Equidad</h2>
    <p>
        La AECM garantiza que todos los procesos de quejas y apelaciones se llevarán a cabo con estricta confidencialidad. La Unidad de Documentación y Cumplimiento será responsable de proteger la identidad de los involucrados y de asegurar que toda la información se maneje con discreción. Además, todos los candidatos tendrán la certeza de que la presentación de una queja o apelación no dará lugar a represalias ni afectará de manera negativa su certificación o su relación con la AECM.
    </p>

    <h2>4. Compromiso con la Mejora Continua</h2>
    <p>
        AECM ve las quejas y apelaciones no solo como mecanismos de resolución de disputas, sino también como oportunidades para la mejora continua. Cada queja o apelación recibida será analizada no solo para resolver el caso en cuestión, sino también para identificar áreas donde los procesos de certificación o los servicios ofrecidos puedan mejorarse. La Unidad de Documentación y Cumplimiento recopilará y analizará datos de quejas y apelaciones como parte del proceso de auditoría interna anual para asegurar la calidad y transparencia en todas las operaciones.
    </p>
    </div>
  );
}
