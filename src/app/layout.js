import "@/assets/css/style.css";
import "@/assets/css/pages.css";
import "@/assets/css/responsive.css";
import "./globals.css";
import "lenis/dist/lenis.css";
import "owl.carousel/dist/assets/owl.carousel.css";

import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";
import { AOSInit, StylesheetLoader } from "@/components/PageInitializers";
import Script from "next/script";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL("https://creativethoughts.ai"),
  title: "AI Website & App Builder | No-Code Platform | Creative AI",
  description: "Launch websites and apps faster with an AI-powered no-code builder. Generate designs, publish instantly, and download your source code.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/img/c.png",
  },
  openGraph: {
    title: "AI Website & App Builder | No-Code Platform | Creative AI",
    description: "Launch websites and apps faster with an AI-powered no-code builder. Generate designs, publish instantly, and download your source code.",
    url: "https://creativethoughts.ai/",
    siteName: "Creative AI",
    images: [
      {
        url: "https://creativethoughts.ai/img/c.png",
        width: 512,
        height: 512,
        alt: "Creative AI Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "AI Website & App Builder | No-Code Platform | Creative AI",
    description: "Launch websites and apps faster with an AI-powered no-code builder. Generate designs, publish instantly, and download your source code.",
    images: ["https://creativethoughts.ai/img/c.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PF873KR8');
            `,
          }}
        />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
      </head>
      <body suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PF873KR8"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>

        <LenisProvider>
          <AOSInit />
          <StylesheetLoader />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
