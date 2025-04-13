import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Políticas AECM",
  },
  description: "Desc Politicas",
}

export default function Politicas() {
  return (

    <div className="flex flex-col items-center">
      <div className="mt-20 flex max-w-screen-xl gap-12">

        <div className="w-1/4  h-fit flex flex-col bg-gray-100  p-2 sticky top-[140px]">
          <a className="font-light hover:bg-gray-200 p-2 border-b-2" href="#codigo-etica">Código de ética</a>
          <a className="font-light hover:bg-gray-200 p-2 border-b-2" href="#declaracion-imparcialidad">Declaración de imparcialidad</a>
          <a className="font-light hover:bg-gray-200 p-2 border-b-2" href="#politica-imparcialidad">Política de imparcialidad</a>
          <a className="font-light hover:bg-gray-200 p-2 border-b-2" href="#politica-quejas">Política de quejas y apelaciones</a>
          <a className="font-light hover:bg-gray-200 p-2 border-b-2" href="#politica-seguridad">Política de seguridad</a>
          <a className="font-light hover:bg-gray-200 p-2 " href="#politica-evaluacion">Política de evaluación</a>
        </div>

        <div className="mt20 w-3/4 pb-48">
          <div className="">
            <h2 className="bg-gray-100 w-full p-4 pb-2 border-b-2 scroll-mt-48" id="codigo-etica" >Código de Ética de la Asociación de Expertos en Confiabilidad y Mantenimiento (AECM)</h2>
          </div>

          <p>
            La Asociación de Expertos en Confiabilidad y Mantenimiento (AECM) se rige por los más altos principios éticos y de profesionalismo en todas sus operaciones. Este Código de Ética establece los valores y principios fundamentales que guían a todos los miembros de la AECM, incluidos evaluadores, instructores, personal administrativo, comités, y a todos los candidatos a certificación. La adhesión a estos principios es esencial para preservar la integridad, transparencia y prestigio de nuestras certificaciones.
          </p>

          <h2>1. Definiciones</h2>
          <ul>
            <li><strong>Imparcialidad:</strong> La capacidad de realizar evaluaciones y certificaciones sin sesgos o favoritismos.</li>
            <li><strong>Conflicto de interés:</strong> Cualquier situación en la que los intereses personales, financieros o profesionales de una persona puedan afectar su juicio o decisiones profesionales.</li>
            <li><strong>Sanciones:</strong> Medidas disciplinarias que pueden incluir advertencias, suspensión o revocación de certificaciones o la expulsión de la organización.</li>
          </ul>

          <h2>2. Alcance</h2>
          <p>Este Código de Ética se aplica a:</p>
          <ul>
            <li>Miembros de la organización: evaluadores, instructores, personal administrativo, comités y cualquier persona relacionada con las actividades de la AECM.</li>
            <li>Candidatos a certificación: todas las personas que participan en los procesos de evaluación y certificación.</li>
          </ul>

          <h2>Principios del Código de Ética</h2>

          <h4>1. Integridad y Transparencia</h4>
          <p>
            La AECM y todos sus colaboradores actuarán siempre con honestidad y responsabilidad. Todas las actividades y comunicaciones deben ser claras, precisas y accesibles. Cualquier forma de engaño, fraude o tergiversación será sancionada según la gravedad de la infracción.
          </p>

          <h4>2. Imparcialidad y Objetividad</h4>
          <p>
            Los procesos de evaluación y certificación de la AECM se basan exclusivamente en los méritos, habilidades y conocimientos demostrados por los candidatos. Se eliminará cualquier forma de sesgo o favoritismo, y todos los evaluadores deben declarar conflictos de interés antes de participar en cualquier proceso de evaluación.
          </p>

          <h4>3. Confidencialidad y Protección de Datos</h4>
          <p>
            Toda la información proporcionada durante el proceso de certificación será tratada con la máxima confidencialidad. Solo se compartirá información cuando sea legalmente requerido o con el consentimiento explícito del titular. La AECM cumple con todas las normativas internacionales de protección de datos.
          </p>

          <h4>4. Competencia Profesional y Excelencia</h4>
          <p>
            Todos los miembros de la AECM, incluidos evaluadores, instructores y personal administrativo, se comprometen a mantener altos niveles de competencia profesional. Se fomenta la mejora continua de habilidades y el aprendizaje técnico para asegurar la calidad de los procesos de certificación.
          </p>

          <h4>5. Responsabilidad Ética y Profesional</h4>
          <p>
            Todos los miembros deben actuar de manera ética y responsable en todas sus interacciones. Es responsabilidad de cada miembro reportar cualquier violación del Código de Ética. Los reportes serán investigados por el Comité de Imparcialidad, garantizando la confidencialidad y un proceso justo.
          </p>

          <h4>6. Igualdad y No Discriminación</h4>
          <p>
            Todos los candidatos son tratados con dignidad y respeto, sin discriminación por motivos de raza, género, edad, discapacidad, religión, orientación sexual o nacionalidad. La igualdad de oportunidades es un principio fundamental que rige todos nuestros procesos de certificación.
          </p>

          <h4>7. Cumplimiento de Normas Internacionales y Regulaciones</h4>
          <p>
            La AECM está alineado con las normativas internacionales, incluidas las establecidas por la ISO 17024, para asegurar que nuestras certificaciones sean reconocidas y respetadas a nivel global.
          </p>

          <h4>8. Independencia entre Formación y Certificación</h4>
          <p>
            La formación y la certificación son procesos completamente independientes en la AECM. La participación en programas de formación no garantiza la certificación; los candidatos son evaluados exclusivamente en función de su desempeño y competencias.
          </p>

          <h4>9. Mejora Continua y Retroalimentación</h4>
          <p>
            La AECM se compromete a revisar y mejorar constantemente sus procesos. Se alienta a todos los miembros y candidatos a proporcionar retroalimentación, garantizando que todas las sugerencias sean tomadas en cuenta para mejorar los procesos.
          </p>

          <h4>10. Sanciones por Violación del Código de Ética</h4>
          <p>
            El incumplimiento de cualquiera de las disposiciones de este Código será investigado por el Comité de Imparcialidad. Las sanciones pueden incluir advertencias, suspensión o revocación de certificaciones, o la expulsión de la AECM, dependiendo de la gravedad de la infracción. Las partes afectadas serán informadas del proceso y las decisiones serán comunicadas por escrito.
          </p>

          <h4>11. Responsabilidad Social y Sostenibilidad</h4>
          <p>
            La AECM se compromete a fomentar prácticas sostenibles dentro de sus operaciones y a contribuir positivamente a la sociedad. Los miembros y colaboradores deben actuar con conciencia social y ambiental, promoviendo prácticas responsables en su ejercicio profesional.
          </p>

          <h4>12. Revisión Periódica del Código de Ética</h4>
          <p>
            Este Código de Ética será revisado anualmente para asegurar su vigencia y alineación con las mejores prácticas internacionales y las necesidades de la AECM.
          </p>

          <h4>13. Integridad en las Evaluaciones</h4>
          <p>
            Los candidatos a certificación deben actuar con honestidad y responsabilidad durante todas las evaluaciones. Cualquier intento de fraude, copia o comportamiento deshonesto será sancionado con la anulación de los resultados de la evaluación, y dependiendo de la gravedad, podría resultar en la descalificación del proceso de certificación. La AECM se compromete a investigar cualquier sospecha de mala conducta y a aplicar las sanciones correspondientes.
          </p>









          <h2 className="bg-gray-100 w-full p-4 pb-2 border-b-2 mt-10 w-fit scroll-mt-48" id="declaracion-imparcialidad" >Declaración de Imparcialidad</h2>
          <p>
            La Asociación de Expertos en Confiabilidad y Mantenimiento (AECM) está comprometida con los principios de imparcialidad, independencia y objetividad en todos sus procesos de certificación. Reconocemos que la imparcialidad es esencial para preservar la credibilidad y confianza en nuestras certificaciones, y por ello, hemos implementado medidas estrictas para garantizar que nuestros procedimientos de evaluación sean justos y equitativos.
          </p>

          <h3>Compromiso con la Transparencia y Equidad</h3>
          <p>
            AECM asegura que todos los candidatos tienen acceso a un proceso de certificación justo, donde las evaluaciones se basan exclusivamente en la competencia demostrada y no están influenciadas por factores externos, como el origen, sexo, religión, afiliación política, situación económica o cualquier otro aspecto personal. La evaluación de las competencias se lleva a cabo de manera objetiva, bajo criterios técnicos claros y preestablecidos que siguen las mejores prácticas del sector.
          </p>

          <h3>Gestión de Conflictos de Interés</h3>
          <p>
            Para salvaguardar la imparcialidad en nuestras decisiones, AECM ha implementado mecanismos de identificación y gestión de posibles conflictos de interés. Todos los involucrados en el proceso de certificación, incluyendo evaluadores, revisores y miembros del comité de certificación, están obligados a declarar cualquier conflicto de interés potencial antes de participar en cualquier actividad de certificación. Esto nos permite garantizar que ningún interés personal, financiero o comercial influencie el resultado de las certificaciones.
          </p>

          <h3>Independencia en el Proceso de Certificación</h3>
          <p>
            La AECM mantiene la independencia total entre sus actividades de formación y las de certificación, asegurando que la capacitación ofrecida no influya en la obtención de la certificación. La certificación se emite únicamente en función de la capacidad demostrada por los candidatos durante las evaluaciones, y no en función de la participación en cursos o programas específicos. Esto refuerza la confianza en el valor y la autenticidad de nuestras credenciales.
          </p>

          <h3>Revisión Continua de Imparcialidad</h3>
          <p>
            Como parte de nuestro compromiso con la mejora continua, AECM realiza revisiones periódicas de sus políticas y procedimientos para asegurar que se mantenga la imparcialidad en todas las fases del proceso de certificación. Además, el Comité de Certificación está dedicado a supervisar y garantizar que cualquier queja o inquietud relacionada con la imparcialidad sea atendida de manera diligente y transparente.
          </p>

          <h3>Garantía de Confidencialidad y Ética</h3>
          <p>
            Todos los datos e información proporcionados por los candidatos durante el proceso de certificación son tratados con la más estricta confidencialidad. AECM sigue un código ético que asegura que las decisiones tomadas estén libres de favoritismos y que los resultados reflejen únicamente el desempeño del candidato en los exámenes y evaluaciones correspondientes.
          </p>

          <p>
            En AECM, estamos profundamente comprometidos con mantener la confianza de nuestros candidatos y la industria en general, ofreciendo certificaciones de alta calidad que se basan en principios sólidos de imparcialidad y excelencia.
          </p>










          <h2 className="bg-gray-100 w-full p-4 pb-2 border-b-2 mt-10 w-fit scroll-mt-48" id="politica-imparcialidad" >Política de Imparcialidad</h2>
          <p>
            Esta política tiene como objetivo garantizar la imparcialidad en todas las actividades de certificación de la Asociación de Expertos en Confiabilidad y Mantenimiento (AECM), protegiendo la integridad del proceso y asegurando que todas las decisiones sean tomadas sin influencias indebidas. Además, esta política busca establecer procedimientos claros para la identificación, evaluación y gestión de conflictos de interés, así como para proteger el proceso de certificación de influencias externas.
          </p>

          <h3>1. Compromiso con la Imparcialidad</h3>
          <p>
            La Asociación de Expertos en Confiabilidad y Mantenimiento (AECM) se compromete a realizar todas las actividades de certificación de manera imparcial, sin permitir que intereses personales, financieros o de otro tipo influyan en las decisiones de certificación.
          </p>

          <h3>2. Procedimientos para la Declaración, Evaluación y Gestión de Conflictos de Interés</h3>

          <h4>2.1 Declaración de Conflictos de Interés</h4>
          <p>
            Todos los miembros del Comité de Certificación, el Comité de Imparcialidad, los evaluadores y el personal involucrado deben completar una declaración de conflicto de interés antes de participar en cualquier actividad de certificación. Las declaraciones serán revisadas antes del inicio de cada ciclo de certificación y deberán ser actualizadas en caso de cambios en las circunstancias personales o profesionales.
          </p>

          <h4>2.2 Evaluación y Acción sobre los Conflictos</h4>
          <p>
            El Comité de Imparcialidad evaluará cada declaración y decidirá si existe un conflicto de interés. Si se identifica un conflicto, el miembro afectado será excluido del proceso de certificación relacionado y sus tareas serán reasignadas a otro miembro sin conflictos. Esta decisión será comunicada dentro de los 15 días hábiles posteriores a la identificación del conflicto.
          </p>

          <h3>3. Autoridad y Responsabilidad del Comité de Imparcialidad</h3>

          <h4>3.1 Independencia y Autoridad del Comité</h4>
          <p>
            El Comité de Imparcialidad tiene la autoridad para detener cualquier proceso de certificación si se sospecha que la imparcialidad está comprometida. El Comité opera de manera independiente del Comité de Certificación y reporta directamente al Director General sobre todas las cuestiones relacionadas con la imparcialidad.
          </p>

          <h4>3.2 Revisión de Quejas y Apelaciones</h4>
          <p>
            El Comité de Imparcialidad revisará cualquier queja o apelación relacionada con la imparcialidad de las decisiones de certificación. Todas las decisiones tomadas por el Comité serán documentadas y comunicadas a las partes involucradas dentro de los 10 días hábiles.
          </p>

          <h3>4. Protección de la Imparcialidad Contra Influencias Externas</h3>

          <h4>4.1 Procedimientos de Protección</h4>
          <p>
            Cualquier intento de influir en el proceso de certificación por parte de partes interesadas externas debe ser reportado inmediatamente al Comité de Imparcialidad. El Comité investigará el intento de influencia y tomará las medidas necesarias para proteger la imparcialidad, lo que incluye la exclusión de la parte interesada del proceso.
          </p>

          <h3>5. Transparencia y Comunicación con los Candidatos</h3>

          <h4>5.1 Proceso de Información a los Candidatos</h4>
          <p>
            Los candidatos a la certificación recibirán una explicación clara de los criterios de certificación, los procedimientos de evaluación y las razones de las decisiones tomadas. Toda la documentación relevante estará disponible para los candidatos y partes interesadas a través de un portal en línea seguro.
          </p>

          <h4>5.2 Actualización de Criterios</h4>
          <p>
            Cualquier cambio en los criterios de certificación será comunicado a los candidatos y partes interesadas con al menos 30 días de anticipación.
          </p>

          <h3>6. Revisiones y Auditorías Internas</h3>

          <h4>6.1 Auditorías Anuales</h4>
          <p>
            La Asociación de Expertos en Confiabilidad y Mantenimiento (AECM) llevará a cabo auditorías internas anuales para revisar la efectividad de las políticas de imparcialidad. Estas auditorías incluirán la revisión de todos los casos de conflictos de interés declarados y las acciones correctivas tomadas.
          </p>

          <h4>6.2 Revisión y Actualización de Políticas</h4>
          <p>
            Las políticas de imparcialidad se revisarán y actualizarán anualmente o cuando se identifiquen problemas durante las auditorías internas.
          </p>

          <h3>7. Capacitación Obligatoria en Imparcialidad</h3>

          <h4>7.1 Programas de Capacitación</h4>
          <p>
            Todos los miembros del personal, evaluadores y comités recibirán capacitación anual obligatoria sobre la importancia de la imparcialidad y cómo evitar conflictos de interés. La capacitación incluirá sesiones prácticas sobre cómo identificar posibles conflictos de interés en escenarios específicos y cómo reportarlos de manera oportuna.
          </p>

          <h3>8. Mecanismo de Reporte de Incidencias</h3>

          <h4>8.1 Canal de Reporte Confidencial</h4>
          <p>
            Se establecerá un correo electrónico confidencial (<a href="mailto:imparcialidad@aecm.com">imparcialidad@aecm.com</a>) a través del cual cualquier miembro del personal, evaluador o candidato podrá reportar sospechas de parcialidad. Este correo será monitoreado exclusivamente por el Comité de Imparcialidad. Todos los reportes serán investigados dentro de un plazo de 10 días hábiles, y las acciones correctivas serán documentadas y comunicadas a las partes relevantes.
          </p>








          <h2 className="bg-gray-100 w-full p-4 pb-2 border-b-2 mt-10 w-fit scroll-mt-48" id="politica-quejas" >Política de Quejas y Apelaciones</h2>
          <p>
            La Asociación de Expertos en Confiabilidad y Mantenimiento (AECM) está comprometida con la equidad, la transparencia y la integridad en todos sus procesos de certificación. Reconocemos la importancia de ofrecer a los candidatos y otras partes interesadas un mecanismo claro y accesible para expresar sus inquietudes, ya sea en relación con el proceso de evaluación, el comportamiento de nuestros evaluadores o cualquier otro aspecto relacionado con la certificación. A través de esta Política de Quejas y Apelaciones, nos aseguramos de que todas las preocupaciones sean tratadas con seriedad, imparcialidad y confidencialidad.
          </p>

          <h3>1. Procedimiento para la Presentación de Quejas</h3>
          <p>
            Las quejas pueden surgir por diversas razones, como problemas relacionados con el servicio, la conducta de evaluadores o la administración del proceso de certificación. AECM ofrece un proceso estructurado para garantizar un tratamiento eficaz:
          </p>
          <ul>
            <li><strong>Presentación Formal de la Queja:</strong> Cualquier persona o entidad que desee presentar una queja puede hacerlo completando el formulario de quejas disponible en nuestra página web o enviando un correo electrónico a <a href="mailto:quejas@aecm.com">quejas@aecm.com</a>. La queja debe incluir una descripción detallada del incidente o problema, fechas, personas involucradas y cualquier prueba o documento de apoyo.</li>
            <li><strong>Recepción y Registro de Quejas:</strong> La Unidad de Documentación y Cumplimiento será responsable de recibir las quejas y de confirmar su recepción dentro de los cinco días hábiles. Esta unidad será responsable de registrar cada queja en un sistema de seguimiento y garantizar que toda la información relevante se conserve de manera confidencial.</li>
            <li><strong>Revisión de Quejas:</strong> Una vez recibida la queja, el Comité de Imparcialidad llevará a cabo una revisión inicial. Este comité será responsable de investigar la queja, entrevistando a las partes involucradas si es necesario, y recopilando cualquier prueba o documento adicional que pueda ayudar en la resolución del caso.</li>
            <li><strong>Resolución de Quejas:</strong> El Comité de Imparcialidad será responsable de emitir una resolución sobre la queja dentro de un plazo de 30 días, a menos que la complejidad del caso requiera más tiempo, en cuyo caso se notificará a las partes afectadas. La resolución será comunicada por escrito y se archivará junto con el registro de la queja para futuros análisis.</li>
          </ul>

          <h3>2. Proceso de Apelaciones</h3>
          <p>
            Los candidatos que no estén de acuerdo con el resultado de su evaluación o que consideren que no se les ha evaluado de manera justa tienen derecho a presentar una apelación. El proceso de apelación ofrece una vía formal para solicitar una revisión de la decisión, asegurando que todos los candidatos tengan la oportunidad de expresar sus preocupaciones de manera justa.
          </p>
          <ul>
            <li><strong>Presentación de Apelaciones:</strong> Las apelaciones deben presentarse por escrito dentro de los 30 días posteriores a la notificación de los resultados de la evaluación. La solicitud de apelación debe enviarse a <a href="mailto:apelaciones@aecm.com">apelaciones@aecm.com</a> e incluir los motivos específicos por los cuales el candidato considera que la evaluación fue injusta o incorrecta, junto con cualquier documentación o evidencia adicional que apoye su caso.</li>
            <li><strong>Revisión Independiente:</strong> El Comité de Certificación será el encargado de revisar las apelaciones de manera independiente, garantizando que ningún miembro del comité haya estado involucrado en la evaluación original del candidato. Este comité analizará todas las pruebas y testimonios proporcionados para garantizar que el proceso de evaluación se haya llevado a cabo de acuerdo con los procedimientos establecidos y los criterios de certificación de la AECM.</li>
            <li><strong>Decisión Final sobre la Apelación:</strong> La decisión del Comité de Certificación será considerada definitiva y vinculante. AECM se compromete a comunicar la decisión final al apelante dentro de un plazo de 60 días. Si la apelación es exitosa, la Unidad de Evaluación tomará las medidas necesarias, que podrían incluir la reevaluación o la corrección de los resultados del examen.</li>
          </ul>

          <h3>3. Principios de Confidencialidad y Equidad</h3>
          <p>
            La AECM garantiza que todos los procesos de quejas y apelaciones se llevarán a cabo con estricta confidencialidad. La Unidad de Documentación y Cumplimiento será responsable de proteger la identidad de los involucrados y de asegurar que toda la información se maneje con discreción. Además, todos los candidatos tendrán la certeza de que la presentación de una queja o apelación no dará lugar a represalias ni afectará de manera negativa su certificación o su relación con la AECM.
          </p>

          <h3>4. Compromiso con la Mejora Continua</h3>
          <p>
            AECM ve las quejas y apelaciones no solo como mecanismos de resolución de disputas, sino también como oportunidades para la mejora continua. Cada queja o apelación recibida será analizada no solo para resolver el caso en cuestión, sino también para identificar áreas donde los procesos de certificación o los servicios ofrecidos puedan mejorarse. La Unidad de Documentación y Cumplimiento recopilará y analizará datos de quejas y apelaciones como parte del proceso de auditoría interna anual para asegurar la calidad y transparencia en todas las operaciones.
          </p>














          <h2 className="bg-gray-100 w-full p-4 pb-2 border-b-2 mt-10 w-fit scroll-mt-48" id="politica-seguridad" >Políticas de Seguridad de la Asociación de Expertos en Confiabilidad y Mantenimiento (AECM)</h2>

          <h3>1. Introducción</h3>
          <p>
            La Asociación de Expertos en Confiabilidad y Mantenimiento (AECM) se compromete a proteger la integridad, disponibilidad y confidencialidad de todos los documentos y datos relacionados con los procesos de certificación. Esta política establece las directrices y medidas de seguridad necesarias para prevenir accesos no autorizados, proteger la información frente a amenazas internas y externas, y asegurar que todos los datos críticos estén adecuadamente protegidos.
          </p>

          <h3>2. Protección de Documentos Electrónicos</h3>
          <h4>2.1 Almacenamiento Seguro</h4>
          <ul>
            <li><strong>Servidores Seguros:</strong> Todos los documentos electrónicos relacionados con la certificación deben almacenarse en servidores seguros que cumplan con los estándares de seguridad más recientes. Estos servidores deben estar protegidos por firewalls, antivirus y software de detección de intrusiones.</li>
            <li><strong>Cifrado:</strong> Todos los datos almacenados en los servidores deben estar cifrados, utilizando algoritmos de cifrado robustos como AES-256 para prevenir accesos no autorizados en caso de una violación de seguridad.</li>
          </ul>

          <h4>2.2 Acceso Controlado</h4>
          <ul>
            <li><strong>Gestión de Contraseñas:</strong> El acceso a los documentos electrónicos estará restringido a través de un sistema de gestión de contraseñas, que requiere autenticación de dos factores para aumentar la seguridad. Las contraseñas deben tener al menos 12 caracteres, incluir letras mayúsculas, minúsculas, números y símbolos, y deben cambiarse cada 90 días. La reutilización de contraseñas está prohibida.</li>
            <li><strong>Control de Acceso Basado en Roles (RBAC):</strong> Los permisos de acceso a los documentos electrónicos serán otorgados utilizando un modelo de control de acceso basado en roles, donde los permisos son asignados según el rol que desempeña el empleado. Los permisos estarán limitados estrictamente a lo necesario para el desempeño de sus funciones.</li>
          </ul>

          <h3>3. Protección de Documentos Físicos</h3>
          <h4>3.1 Almacenamiento Seguro</h4>
          <ul>
            <li><strong>Archivadores Cerrados:</strong> Todos los documentos físicos que contengan información sensible o relacionada con la certificación deben ser almacenados en archivadores cerrados con llave, ubicados en áreas de acceso restringido.</li>
            <li><strong>Control de Acceso Físico:</strong> El acceso a las áreas donde se almacenan los documentos físicos estará controlado mediante tarjetas de acceso, códigos PIN o cerraduras biométricas, limitando la entrada solo al personal autorizado.</li>
          </ul>

          <h4>3.2 Seguridad en la Manipulación</h4>
          <ul>
            <li><strong>Supervisión de Acceso:</strong> Todo acceso a los documentos físicos debe ser registrado, y cualquier manipulación de estos documentos debe ser supervisada por personal autorizado para asegurar que no se produzcan pérdidas o manipulaciones indebidas.</li>
          </ul>

          <h3>4. Protección de Datos en Tránsito</h3>
          <h4>4.1 Cifrado de Transmisiones</h4>
          <ul>
            <li><strong>Correo Electrónico Seguro:</strong> Cualquier documento sensible enviado por correo electrónico debe ser cifrado utilizando estándares de cifrado de extremo a extremo. Se debe utilizar una plataforma de correo electrónico segura que soporte este tipo de cifrado.</li>
            <li><strong>Transferencias Seguras:</strong> Los documentos electrónicos que se transfieran a través de redes deben ser enviados utilizando protocolos seguros como HTTPS, SFTP o VPNs, para proteger los datos durante la transmisión.</li>
          </ul>

          <h4>4.2 Supervisión de Transferencias</h4>
          <ul>
            <li><strong>Registro de Transferencias:</strong> Se mantendrá un registro de todas las transferencias de documentos electrónicos confidenciales, incluyendo la fecha, hora, destinatario y medio de transmisión, para asegurar la trazabilidad y seguridad de los datos.</li>
          </ul>

          <h3>5. Eliminación Segura de Documentos</h3>
          <h4>5.1 Documentos Físicos</h4>
          <ul>
            <li><strong>Trituración:</strong> Los documentos físicos que ya no sean necesarios deben ser destruidos utilizando una trituradora de alta seguridad que cumpla con los estándares de seguridad para destrucción de documentos confidenciales.</li>
          </ul>

          <h4>5.2 Documentos Electrónicos</h4>
          <ul>
            <li><strong>Software de Borrado Seguro:</strong> Los archivos digitales que contengan información sensible deben ser eliminados utilizando software de borrado seguro, que sobrescriba los datos de manera irreversible, asegurando que no puedan ser recuperados.</li>
          </ul>

          <h3>6. Gestión de Dispositivos Móviles y Almacenamiento Externo</h3>
          <ul>
            <li><strong>Restricciones de Uso:</strong> El uso de dispositivos móviles personales (teléfonos, tabletas) para acceder a información confidencial está prohibido, salvo que el dispositivo esté autorizado y sujeto a las políticas de seguridad de la AECM.</li>
            <li><strong>Uso de Almacenamiento Externo:</strong> Los dispositivos de almacenamiento externo, como memorias USB o discos duros portátiles, solo podrán ser utilizados en situaciones de extrema necesidad y deben estar cifrados para proteger la información contenida. Cualquier transferencia de datos a estos dispositivos debe ser aprobada por la alta dirección.</li>
          </ul>

          <h3>7. Protección Contra Amenazas Internas</h3>
          <ul>
            <li><strong>Monitoreo del Personal Autorizado:</strong> El acceso a documentos sensibles será monitoreado regularmente para detectar posibles accesos indebidos. Cualquier acceso sospechoso será investigado.</li>
            <li><strong>Política de Reporte de Incidentes Internos:</strong> Los empleados tienen la responsabilidad de reportar cualquier actividad inusual o potencial violación de seguridad. El incumplimiento de esta responsabilidad puede llevar a sanciones disciplinarias.</li>
          </ul>

          <h3>8. Monitoreo y Respuesta a Incidentes de Seguridad</h3>
          <h4>8.1 Monitoreo Continuo</h4>
          <ul>
            <li><strong>Software de Monitoreo:</strong> Todos los servidores y sistemas de almacenamiento donde se alojen documentos confidenciales serán monitoreados continuamente mediante software especializado, capaz de detectar intentos de acceso no autorizado o actividades sospechosas.</li>
            <li><strong>Alertas Automáticas:</strong> El sistema de monitoreo enviará alertas automáticas al equipo de TI en caso de detectar accesos fuera del horario laboral, intentos fallidos de acceso o cualquier otra actividad que pueda indicar una violación de seguridad.</li>
          </ul>

          <h4>8.2 Procedimiento de Respuesta a Incidentes</h4>
          <ul>
            <li><strong>Notificación Inmediata:</strong> Cualquier incidente de seguridad, real o sospechado, debe ser reportado inmediatamente al responsable de TI, quien iniciará una investigación dentro de las 24 horas siguientes.</li>
            <li><strong>Investigación y Mitigación:</strong> Se llevará a cabo una investigación exhaustiva para determinar la causa del incidente y tomar medidas correctivas inmediatas. Las partes afectadas serán notificadas si es necesario.</li>
          </ul>

          <h2>9. Auditorías y Revisión de Políticas</h2>
          <h4>9.1 Auditorías Internas</h4>
          <ul>
            <li><strong>Frecuencia de Auditorías:</strong> Se realizarán auditorías internas semestrales para evaluar el cumplimiento de las políticas de seguridad y detectar cualquier vulnerabilidad que deba ser abordada.</li>
            <li><strong>Informe de Auditoría:</strong> Cada auditoría generará un informe que se presentará a la alta dirección, incluyendo recomendaciones para mejorar la seguridad de la información.</li>
          </ul>

          <h4>9.2 Revisión de Políticas</h4>
          <ul>
            <li><strong>Actualización Anual:</strong> Las políticas de seguridad serán revisadas y actualizadas al menos una vez al año, o antes si se identifican nuevas amenazas o si hay cambios significativos en la tecnología utilizada.</li>
            <li><strong>Capacitación del Personal:</strong> Todos los cambios en las políticas de seguridad serán comunicados al personal autorizado, acompañado de la capacitación necesaria para asegurar la correcta implementación de las nuevas medidas.</li>
          </ul>




          <h2 className="bg-gray-100 w-full p-4 pb-2 border-b-2 mt-10  w-fit scroll-mt-48" id="politica-evaluacion" >Políticas de Evaluación de Certificaciones AECM</h2>

<p>La Asociación de Expertos en Confiabilidad y Mantenimiento (AECM) ha desarrollado estas políticas de evaluación para garantizar que el proceso de certificación sea riguroso, imparcial y transparente. Las siguientes políticas aplican tanto para los exámenes online como presenciales, asegurando que los candidatos sean evaluados de manera justa y con el más alto nivel de integridad.</p>

<h3>1. Objetivo</h3>
<p>Las políticas de evaluación de AECM están diseñadas para garantizar la equidad, transparencia y precisión en todos los exámenes de certificación. Estas políticas buscan medir de manera rigurosa las competencias del candidato, asegurar la imparcialidad y promover la integridad en el proceso de certificación.</p>

<h3>2. Criterios de Evaluación</h3>
<p>Cada certificación tiene áreas de conocimiento definidas, y para aprobar el examen, el candidato deberá haber superado cada una de estas áreas con un puntaje mínimo del 70%. Si alguna área no es aprobada, el candidato no obtendrá la certificación.</p>
<ul>
  <li>Preguntas teóricas</li>
  <li>Preguntas basadas en casos reales</li>
  <li>Preguntas de cálculo</li>
</ul>
<p>Las preguntas serán de selección simple o múltiple, con 4 opciones de respuesta en ambos casos. Es responsabilidad del candidato asegurarse de entender completamente las áreas de conocimiento cubiertas por la certificación.</p>

<h3>3. Duración del Examen</h3>
<p>Cada certificación tiene un tiempo límite definido, que será informado previamente al candidato. Es importante que el candidato gestione su tiempo de manera eficiente, ya que no se otorgarán extensiones salvo en situaciones excepcionales.</p>

<h3>4. Proceso de Evaluación Online</h3>
<p>El proceso de evaluación online está diseñado para llevar a cabo exámenes de forma remota, garantizando el cumplimiento de las reglas establecidas y la integridad de los resultados. A continuación, se detallan los pasos que los candidatos deben seguir durante el examen online:</p>

<h4>4.1. Verificación de Identidad</h4>
<ul>
  <li>Autenticación de Doble Factor: Antes de iniciar el examen, el candidato recibirá un código de verificación en su correo electrónico o teléfono móvil, que deberá ingresar junto con su nombre de usuario y contraseña.</li>
  <li>Verificación Facial: La plataforma utilizará reconocimiento facial para comparar la imagen en tiempo real del candidato con la fotografía registrada en su perfil. Es importante que esta verificación se realice en un entorno bien iluminado y con el rostro despejado.</li>
</ul>

<h4>4.2. Configuración de la Cámara y Supervisión</h4>
<ul>
  <li>Posicionamiento Correcto: La cámara debe estar colocada a la altura de los ojos, capturando el rostro completo, cuello y torso superior. El candidato debe asegurarse de que su entorno esté libre de objetos no autorizados.</li>
  <li>Supervisión Continua en Tiempo Real: Durante el examen, el candidato debe mantener su rostro y manos visibles en todo momento. Cualquier intento de apartarse de la cámara será registrado y evaluado.</li>
</ul>

<h4>4.3. Finalización del Examen</h4>
<ul>
  <li>Al concluir el examen, el sistema enviará las respuestas automáticamente para su evaluación. Se generará un informe de integridad que verificará el comportamiento del candidato durante la evaluación.</li>
</ul>

<h4>4.4. Requisitos Técnicos y Logísticos</h4>
<ul>
  <li>Conexión Estable: El candidato debe contar con una conexión a internet confiable. Las desconexiones deberán ser reportadas inmediatamente.</li>
  <li>Entorno Controlado: El espacio de trabajo debe estar libre de distracciones y personas no autorizadas.</li>
</ul>

<h3>5. Proceso de Evaluación Presencial</h3>
<p>El proceso de evaluación presencial asegura que los candidatos sean evaluados en un entorno controlado, cumpliendo con las normas de supervisión establecidas. A continuación, se describen los pasos que se llevarán a cabo durante el examen presencial:</p>

<h4>5.1. Verificación de Identidad</h4>
<ul>
  <li>Los candidatos deberán presentar una identificación oficial con fotografía (pasaporte, licencia de conducir o documento nacional de identidad) al ingresar al área de examen.</li>
  <li>La identidad será verificada por el personal autorizado antes de acceder a la sala de examen.</li>
</ul>

<h4>5.2. Revisión de Objetos Personales</h4>
<ul>
  <li>No se permitirá el ingreso de dispositivos electrónicos ni materiales de consulta. Los candidatos deberán dejar sus pertenencias en un área de almacenamiento designada.</li>
</ul>

<h4>5.3. Supervisión y Control</h4>
<ul>
  <li>Los candidatos serán ubicados en asientos preasignados y estarán bajo supervisión constante. El personal supervisará cualquier intento de copiar o utilizar dispositivos no autorizados.</li>
</ul>

<h4>5.4. Normas de Conducta</h4>
<ul>
  <li>El examen debe realizarse en silencio absoluto. Cualquier intento de comunicación con otros candidatos será penalizado con la descalificación.</li>
</ul>

<h4>5.5. Finalización del Examen</h4>
<ul>
  <li>Los candidatos deberán entregar sus hojas de respuesta y cualquier material relacionado al supervisor antes de abandonar la sala. Los documentos serán revisados por el personal autorizado.</li>
</ul>

<h4>5.6. Sanciones por Conducta Inapropiada</h4>
<p>Cualquier intento de fraude o violación de las normas resultará en la descalificación inmediata y la prohibición de participar en futuras certificaciones.</p>

<h3>6. Reintentos</h3>
<p>En caso de no aprobar el examen, el candidato tiene una única oportunidad de volver a presentarlo. Deberá esperar un periodo mínimo de dos meses para su preparación y deberá pagar el 50% del valor de la certificación. Si no aprueba en el segundo intento, no podrá optar por la certificación.</p>

<h3>7. Retroalimentación</h3>
<p>Al concluir el examen, los candidatos recibirán un reporte general sobre su desempeño en las áreas evaluadas. Este reporte no incluirá detalles de las preguntas específicas, pero señalará en qué áreas el candidato necesita mejorar para futuras presentaciones.</p>

<h3>8. Renovación de Certificación</h3>
<p>Las certificaciones tienen una validez de tres años. Para renovarlas, el candidato deberá realizar un nuevo examen que asegure que sigue cumpliendo con los estándares requeridos. La AECM podrá exigir la realización de cursos de actualización o pruebas adicionales para garantizar la competencia continua del profesional.</p>

<h3>9. Confidencialidad de las Preguntas del Examen</h3>
<p>Las preguntas del examen son propiedad exclusiva de AECM y están protegidas por derechos de autor. Bajo ninguna circunstancia el candidato puede compartir, divulgar, copiar o distribuir las preguntas del examen, ya sea durante o después de la evaluación. Cualquier intento de compartir el contenido del examen resultará en sanciones severas.</p>

<h3>10. Protección de Datos Personales</h3>
<p>Los datos personales proporcionados por los candidatos durante el proceso de evaluación (nombre, identificación, resultados del examen, etc.) serán tratados de manera confidencial y en conformidad con las leyes de protección de datos aplicables.</p>

<h3>11. Política de Cancelación y Reprogramación de Exámenes</h3>
<p>Los candidatos que deseen cancelar o reprogramar su examen deben notificarlo con al menos 7 días de antelación. Las cancelaciones o reprogramaciones solicitadas con menos de 7 días de aviso estarán sujetas a una tarifa administrativa.</p>

<h3>12. Política de Diversidad e Inclusión</h3>
<p>AECM fomenta un entorno inclusivo donde todos los candidatos tienen las mismas oportunidades de obtener su certificación. Adaptaciones razonables estarán disponibles para personas con discapacidades que lo soliciten previamente.</p>

<h3>13. Compromiso con la Ética y Transparencia</h3>
<p>AECM tiene un firme compromiso con la ética y la transparencia en todos sus procesos de evaluación. Cualquier denuncia de conducta inapropiada o conflicto de intereses será investigada de manera exhaustiva.</p>




        </div>




      </div>






    </div>

  );
}
