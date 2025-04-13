import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Conctacto",
    },
    description: "Desc Contacto",
}

export default function Contacto() {
    return (
        <div className="max-w-[1080px] m-auto space-y-3">
            <h1>Políticas de Seguridad de la Asociación de Expertos en Confiabilidad y Mantenimiento (AECM)</h1>

            <h2>1. Introducción</h2>
            <p>
                La Asociación de Expertos en Confiabilidad y Mantenimiento (AECM) se compromete a proteger la integridad, disponibilidad y confidencialidad de todos los documentos y datos relacionados con los procesos de certificación. Esta política establece las directrices y medidas de seguridad necesarias para prevenir accesos no autorizados, proteger la información frente a amenazas internas y externas, y asegurar que todos los datos críticos estén adecuadamente protegidos.
            </p>

            <h2>2. Protección de Documentos Electrónicos</h2>
            <h3>2.1 Almacenamiento Seguro</h3>
            <ul>
                <li><strong>Servidores Seguros:</strong> Todos los documentos electrónicos relacionados con la certificación deben almacenarse en servidores seguros que cumplan con los estándares de seguridad más recientes. Estos servidores deben estar protegidos por firewalls, antivirus y software de detección de intrusiones.</li>
                <li><strong>Cifrado:</strong> Todos los datos almacenados en los servidores deben estar cifrados, utilizando algoritmos de cifrado robustos como AES-256 para prevenir accesos no autorizados en caso de una violación de seguridad.</li>
            </ul>

            <h3>2.2 Acceso Controlado</h3>
            <ul>
                <li><strong>Gestión de Contraseñas:</strong> El acceso a los documentos electrónicos estará restringido a través de un sistema de gestión de contraseñas, que requiere autenticación de dos factores para aumentar la seguridad. Las contraseñas deben tener al menos 12 caracteres, incluir letras mayúsculas, minúsculas, números y símbolos, y deben cambiarse cada 90 días. La reutilización de contraseñas está prohibida.</li>
                <li><strong>Control de Acceso Basado en Roles (RBAC):</strong> Los permisos de acceso a los documentos electrónicos serán otorgados utilizando un modelo de control de acceso basado en roles, donde los permisos son asignados según el rol que desempeña el empleado. Los permisos estarán limitados estrictamente a lo necesario para el desempeño de sus funciones.</li>
            </ul>

            <h2>3. Protección de Documentos Físicos</h2>
            <h3>3.1 Almacenamiento Seguro</h3>
            <ul>
                <li><strong>Archivadores Cerrados:</strong> Todos los documentos físicos que contengan información sensible o relacionada con la certificación deben ser almacenados en archivadores cerrados con llave, ubicados en áreas de acceso restringido.</li>
                <li><strong>Control de Acceso Físico:</strong> El acceso a las áreas donde se almacenan los documentos físicos estará controlado mediante tarjetas de acceso, códigos PIN o cerraduras biométricas, limitando la entrada solo al personal autorizado.</li>
            </ul>

            <h3>3.2 Seguridad en la Manipulación</h3>
            <ul>
                <li><strong>Supervisión de Acceso:</strong> Todo acceso a los documentos físicos debe ser registrado, y cualquier manipulación de estos documentos debe ser supervisada por personal autorizado para asegurar que no se produzcan pérdidas o manipulaciones indebidas.</li>
            </ul>

            <h2>4. Protección de Datos en Tránsito</h2>
            <h3>4.1 Cifrado de Transmisiones</h3>
            <ul>
                <li><strong>Correo Electrónico Seguro:</strong> Cualquier documento sensible enviado por correo electrónico debe ser cifrado utilizando estándares de cifrado de extremo a extremo. Se debe utilizar una plataforma de correo electrónico segura que soporte este tipo de cifrado.</li>
                <li><strong>Transferencias Seguras:</strong> Los documentos electrónicos que se transfieran a través de redes deben ser enviados utilizando protocolos seguros como HTTPS, SFTP o VPNs, para proteger los datos durante la transmisión.</li>
            </ul>

            <h3>4.2 Supervisión de Transferencias</h3>
            <ul>
                <li><strong>Registro de Transferencias:</strong> Se mantendrá un registro de todas las transferencias de documentos electrónicos confidenciales, incluyendo la fecha, hora, destinatario y medio de transmisión, para asegurar la trazabilidad y seguridad de los datos.</li>
            </ul>

            <h2>5. Eliminación Segura de Documentos</h2>
            <h3>5.1 Documentos Físicos</h3>
            <ul>
                <li><strong>Trituración:</strong> Los documentos físicos que ya no sean necesarios deben ser destruidos utilizando una trituradora de alta seguridad que cumpla con los estándares de seguridad para destrucción de documentos confidenciales.</li>
            </ul>

            <h3>5.2 Documentos Electrónicos</h3>
            <ul>
                <li><strong>Software de Borrado Seguro:</strong> Los archivos digitales que contengan información sensible deben ser eliminados utilizando software de borrado seguro, que sobrescriba los datos de manera irreversible, asegurando que no puedan ser recuperados.</li>
            </ul>

            <h2>6. Gestión de Dispositivos Móviles y Almacenamiento Externo</h2>
            <ul>
                <li><strong>Restricciones de Uso:</strong> El uso de dispositivos móviles personales (teléfonos, tabletas) para acceder a información confidencial está prohibido, salvo que el dispositivo esté autorizado y sujeto a las políticas de seguridad de la AECM.</li>
                <li><strong>Uso de Almacenamiento Externo:</strong> Los dispositivos de almacenamiento externo, como memorias USB o discos duros portátiles, solo podrán ser utilizados en situaciones de extrema necesidad y deben estar cifrados para proteger la información contenida. Cualquier transferencia de datos a estos dispositivos debe ser aprobada por la alta dirección.</li>
            </ul>

            <h2>7. Protección Contra Amenazas Internas</h2>
            <ul>
                <li><strong>Monitoreo del Personal Autorizado:</strong> El acceso a documentos sensibles será monitoreado regularmente para detectar posibles accesos indebidos. Cualquier acceso sospechoso será investigado.</li>
                <li><strong>Política de Reporte de Incidentes Internos:</strong> Los empleados tienen la responsabilidad de reportar cualquier actividad inusual o potencial violación de seguridad. El incumplimiento de esta responsabilidad puede llevar a sanciones disciplinarias.</li>
            </ul>

            <h2>8. Monitoreo y Respuesta a Incidentes de Seguridad</h2>
            <h3>8.1 Monitoreo Continuo</h3>
            <ul>
                <li><strong>Software de Monitoreo:</strong> Todos los servidores y sistemas de almacenamiento donde se alojen documentos confidenciales serán monitoreados continuamente mediante software especializado, capaz de detectar intentos de acceso no autorizado o actividades sospechosas.</li>
                <li><strong>Alertas Automáticas:</strong> El sistema de monitoreo enviará alertas automáticas al equipo de TI en caso de detectar accesos fuera del horario laboral, intentos fallidos de acceso o cualquier otra actividad que pueda indicar una violación de seguridad.</li>
            </ul>

            <h3>8.2 Procedimiento de Respuesta a Incidentes</h3>
            <ul>
                <li><strong>Notificación Inmediata:</strong> Cualquier incidente de seguridad, real o sospechado, debe ser reportado inmediatamente al responsable de TI, quien iniciará una investigación dentro de las 24 horas siguientes.</li>
                <li><strong>Investigación y Mitigación:</strong> Se llevará a cabo una investigación exhaustiva para determinar la causa del incidente y tomar medidas correctivas inmediatas. Las partes afectadas serán notificadas si es necesario.</li>
            </ul>

            <h2>9. Auditorías y Revisión de Políticas</h2>
            <h3>9.1 Auditorías Internas</h3>
            <ul>
                <li><strong>Frecuencia de Auditorías:</strong> Se realizarán auditorías internas semestrales para evaluar el cumplimiento de las políticas de seguridad y detectar cualquier vulnerabilidad que deba ser abordada.</li>
                <li><strong>Informe de Auditoría:</strong> Cada auditoría generará un informe que se presentará a la alta dirección, incluyendo recomendaciones para mejorar la seguridad de la información.</li>
            </ul>

            <h3>9.2 Revisión de Políticas</h3>
            <ul>
                <li><strong>Actualización Anual:</strong> Las políticas de seguridad serán revisadas y actualizadas al menos una vez al año, o antes si se identifican nuevas amenazas o si hay cambios significativos en la tecnología utilizada.</li>
                <li><strong>Capacitación del Personal:</strong> Todos los cambios en las políticas de seguridad serán comunicados al personal autorizado, acompañado de la capacitación necesaria para asegurar la correcta implementación de las nuevas medidas.</li>
            </ul>

        </div>
    );
}
