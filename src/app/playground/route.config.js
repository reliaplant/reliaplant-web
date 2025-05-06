// Este archivo configura esta ruta para ser excluida en producción
export default {
  generateStaticParams: process.env.NODE_ENV !== 'production' ? () => [{}] : () => []
}
