# ReliaplantWeb

Sitio web corporativo de Reliaplant construido con Next.js 14, que presenta servicios de consultoría en confiabilidad industrial y comparte conocimiento técnico a través de artículos especializados.

## Tecnologías Principales

- Next.js 14 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Firebase
- Markdown para artículos técnicos

## Requisitos Previos

- Node.js 18.17 o superior
- npm 10 o superior

## Configuración del Entorno

1. Crear archivo `.env.local` en la raíz del proyecto:

```bash
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=tu-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=tu-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=tu-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=tu-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=tu-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=tu-app-id

# Email
NEXT_PUBLIC_EMAIL_SERVICE_ID=tu-service-id
NEXT_PUBLIC_EMAIL_TEMPLATE_ID=tu-template-id
NEXT_PUBLIC_EMAIL_PUBLIC_KEY=tu-public-key
```

2. Obtener las credenciales necesarias:
   - Firebase: Desde la consola de Firebase en la configuración del proyecto
   - Email: Desde tu cuenta de EmailJS

## Inicio Rápido

1. Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/reliaplant-web.git
cd reliaplant-web
```

2. Instalar dependencias:

```bash
npm install
```

3. Iniciar servidor de desarrollo:

```bash
npm run dev
```

4. Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## Scripts Disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Construye la aplicación para producción
npm run start    # Inicia el servidor de producción
npm run lint     # Ejecuta el linter
```

## Estructura del Proyecto

```
reliaplant-web/
├── src/
│   ├── app/            # Rutas y páginas
│   ├── components/     # Componentes React
│   ├── posts/          # Artículos técnicos en Markdown
│   └── styles/         # Estilos globales
├── public/            # Archivos estáticos
└── package.json
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
