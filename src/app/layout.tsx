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
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head></head>
      <body className={`${IbmPlexSans.className} antialiased text-gray-700`}>
        <InitialUrlTracker />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
