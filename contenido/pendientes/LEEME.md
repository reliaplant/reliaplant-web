# Pendientes de aprobación

Versiones nuevas de artículos que YA están publicados (reescrituras y ajustes de enlaces).
No se suben a Firestore todavía: si se guardaran allí, el siguiente deploy de cualquier sesión las publicaría.

Al aprobarlas, cada carpeta se guarda con el MCP `contenido` → `guardar_articulo` (publicado: true),
igual que las de contenido/articulos/, y se borra de aquí.

- taxonomia-iso-14224, analisis-criticidad-activos, mantenimiento-predictivo-curva-pf, gmao-cmms: reescritas a fondo.

Publicar en el mismo deploy: estas reescrituras + los borradores codificacion-equipos, jerarquia-activos-cmms y
software-gmao-cmms-2026 (se enlazan entre sí) + las páginas /producto/* y /servicios/* (hoy 404 en producción).
Cuando el GMAO de ReliaPlant salga: buscar el comentario <!-- Cuando el módulo GMAO … --> en gmao-cmms y software-gmao-cmms-2026.
- catalogo-fallas-oil-gas, tipos-de-mantenimiento, kpis-mantenimiento: enlaces internos nuevos.
- El resto: solo /modulos/* → /producto/* (evita la redirección 301).
