import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InitialUrlTracker from "@/components/InitialUrlTracker";

import {
  Inter,
  Source_Serif_4,
  Literata,
  Big_Shoulders_Display,
  Sofia_Sans_Extra_Condensed,
  Sofia_Sans,
  Sofia_Sans_Condensed,
  Sunflower,
  Zen_Dots,
  IBM_Plex_Sans,
} from "next/font/google";

const IbmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ReliaplantWeb",
  description: "Reliaplant Web Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <script
        src={`https://www.google.com/recaptcha/api.js?render=6LchjzgqAAAAANYV88dFOY4uGWoT4_2rF8x9OvCE`}
        async
        defer
      ></script>
      <body className={IbmPlexSans.className}>
        <InitialUrlTracker />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
