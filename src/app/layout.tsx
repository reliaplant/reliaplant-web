import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InitialUrlTracker from "@/components/InitialUrlTracker";

import { IBM_Plex_Sans } from "next/font/google";

const IbmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
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
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Reliaplant - Confiabilidad Industrial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reliaplant | Confiabilidad Industrial y Gestión de Activos",
    description: "Plataforma de confiabilidad industrial: RCA, RCM, registro de activos.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://reliaplant.com",
  },
  verification: {
    google: "google-site-verification-code", // Reemplazar con código real
  },
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
        url: "https://reliaplant.com/logo.png",
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
      </head>
      <body className={`${IbmPlexSans.className} antialiased text-gray-700`}>
        <InitialUrlTracker />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
