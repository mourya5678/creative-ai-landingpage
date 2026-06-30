import "@/assets/css/style.css";
import "@/assets/css/pages.css";
import "@/assets/css/responsive.css";
import "./globals.css";
import "lenis/dist/lenis.css";
import "owl.carousel/dist/assets/owl.carousel.css";

import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";
import { AOSInit } from "@/components/PageInitializers";
import Script from "next/script";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL("https://creativethoughts.ai"),
  title: "Creative AI | AI App Builder for Mobile & Web Application",
  description: "Creative AI is a powerful AI app builder for mobile and web applications. Create fast, scalable apps without writing a single line of code and grow digitally.",
  icons: {
    icon: "/img/c.png",
    shortcut: "/img/c.png",
    apple: "/img/c.png",
  },
  openGraph: {
    title: "Creative AI | AI App Builder for Mobile & Web Application",
    description: "Creative AI is a powerful AI app builder for mobile and web applications. Create fast, scalable apps without writing a single line of code and grow digitally.",
    url: "https://creativethoughts.ai",
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
    title: "Creative AI | AI App Builder for Mobile & Web Application",
    description: "Creative AI is a powerful AI app builder for mobile and web applications. Create fast, scalable apps without writing a single line of code and grow digitally.",
    images: ["https://creativethoughts.ai/img/c.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
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

        <link rel="icon" href="/img/c.png" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.3/font/bootstrap-icons.min.css" />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PF873KR8"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>

        <LenisProvider>
          <AOSInit />
          {children}
          <Footer />
        </LenisProvider>

        {/* Load libraries sequentially using Next.js Script component to prevent render-blocking */}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" strategy="afterInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" strategy="afterInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
