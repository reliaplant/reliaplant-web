import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InitialUrlTracker from "@/components/InitialUrlTracker";

import { Inter, Source_Serif_4, Literata, Big_Shoulders_Display,Sofia_Sans_Extra_Condensed, Sofia_Sans, Sofia_Sans_Condensed, Sunflower, Zen_Dots, IBM_Plex_Sans } from "next/font/google";
// import "@carbon/styles/css/styles.css";


const sourceSerif4 = Source_Serif_4({ subsets: ["latin"] });
const literata = Literata({ subsets: ["latin"] });
const bigShouldersDisplay = Big_Shoulders_Display({ subsets: ["latin"] }); // Nombre corregido
const SofiaSansExtraCondensed = Sofia_Sans_Extra_Condensed({ subsets: ["latin"] }); // Nombre corregido
const SofiaSans = Sofia_Sans({ subsets: ["latin"] }); // Nombre corregido
const SofiaSansCondensed = Sofia_Sans_Condensed({ subsets: ["latin"] }); // Nombre corregido
const IbmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: "400"
}); // Nombre corregido


const ZenDots = Zen_Dots({
  subsets: ["latin"],
  weight: "400"
}); // Nombre corregido

const Sunflowerr = Sunflower({
  subsets: ["latin"],
  weight: "300"
}); // Nombre corregido

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'ReliaplantWeb',
  description: 'Reliaplant Web Application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en" suppressHydrationWarning>
      <script src={`https://www.google.com/recaptcha/api.js?render=6LchjzgqAAAAANYV88dFOY4uGWoT4_2rF8x9OvCE`} async defer></script>
      <body className={inter.className}>
        <InitialUrlTracker />
        <Header />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
