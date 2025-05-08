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
  title: "ReliaplantWeb",
  description: "Reliaplant Web Application",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body className={IbmPlexSans.className}>
        <InitialUrlTracker />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
