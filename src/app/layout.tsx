import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InitialUrlTracker from "@/components/InitialUrlTracker";
import { headers } from "next/headers";

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
  // Get the nonce from headers
  const nonce = (await headers()).get("x-nonce") || "";

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          src="https://www.google.com/recaptcha/api.js?render=6LchjzgqAAAAANYV88dFOY4uGWoT4_2rF8x9OvCE"
          async
          defer
          nonce={nonce}
        ></script>
        {/* Add the nonce to Next.js style tag attribute */}
        <meta name="next-style-nonce" content={nonce} />
        {/* Add the nonce to Next.js script tag attribute */}
        <meta name="next-script-nonce" content={nonce} />
      </head>
      <body className={IbmPlexSans.className}>
        <InitialUrlTracker />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
