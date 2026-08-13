import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "@/styles/globals.css";
import SiteChrome from "@/components/SiteChrome";
import InitialUrlTracker from "@/components/InitialUrlTracker";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

import { IBM_Plex_Sans, Zen_Dots } from "next/font/google";

const IbmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const ZenDots = Zen_Dots({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-zen-dots",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://reliaplant.com"),
  title: {
    default: "Reliaplant | Confiabilidad Industrial y Gestión de Activos",
    template: "%s | Reliaplant",
  },
  description:
    "Plataforma de confiabilidad industrial: RCA, RCM, registro de activos. Más confiabilidad, mejores decisiones.",
  keywords: [
    "confiabilidad industrial",
    "gestión de activos",
    "RCA",
    "RCM",
    "mantenimiento",
    "análisis causa raíz",
    "mantenimiento centrado en confiabilidad",
    "registro de activos",
    "CMMS",
    "ISO 14224",
  ],
  authors: [{ name: "Reliaplant" }],
  creator: "Reliaplant",
  publisher: "Reliaplant",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://reliaplant.com",
    siteName: "Reliaplant",
    title: "Reliaplant | Confiabilidad Industrial y Gestión de Activos",
    description: "Plataforma de confiabilidad industrial: RCA, RCM, registro de activos. Más confiabilidad, mejores decisiones.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reliaplant | Confiabilidad Industrial y Gestión de Activos",
    description: "Plataforma de confiabilidad industrial: RCA, RCM, registro de activos.",
  },
  alternates: {
    canonical: "https://reliaplant.com",
  },
  // verification: {
  //   google: "REEMPLAZAR-CON-CODIGO-REAL",
  // },
};

export const viewport: Viewport = {
  colorScheme: "light",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://reliaplant.com/#organization",
      name: "Reliaplant",
      url: "https://reliaplant.com",
      logo: {
        "@type": "ImageObject",
        url: "https://reliaplant.com/assets/logo.webp",
      },
      sameAs: [
        "https://www.linkedin.com/company/reliaplant",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: "contacto@reliaplant.com",
        contactType: "customer service",
        availableLanguage: ["Spanish", "English"],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://reliaplant.com/#website",
      url: "https://reliaplant.com",
      name: "Reliaplant",
      publisher: {
        "@id": "https://reliaplant.com/#organization",
      },
      inLanguage: "es",
    },
    {
      "@type": "SoftwareApplication",
      name: "Reliaplant",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "249",
        highPrice: "899",
        priceCurrency: "USD",
        offerCount: "3",
      },
      description: "Plataforma de confiabilidad industrial para gestión de activos, análisis de causa raíz (RCA) y mantenimiento centrado en confiabilidad (RCM).",
    },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {GTM_ID && (
          <Script id="gtm-script" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
        )}
      </head>
      <body className={`${IbmPlexSans.className} ${ZenDots.variable} antialiased text-gray-700 bg-white`}>
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <InitialUrlTracker />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
