import "@/assets/css/style.css";
import "@/assets/css/pages.css";
import "@/assets/css/responsive.css";
import "./globals.css";
import "lenis/dist/lenis.css";
import "owl.carousel/dist/assets/owl.carousel.css";

import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";
import { AOSInit, StylesheetLoader } from "@/components/PageInitializers";
import PwaRegister from "@/components/PwaRegister";
import Script from "next/script";
import { Inter } from "next/font/google";


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,

};

export const metadata = {
  metadataBase: new URL("https://creativethoughts.ai"),
  title: "AI Website Builder & App Builder | Creative AI",
  description: "Build websites and apps with AI using simple prompts. No coding needed. Create, customize, launch, and own your source code.",
  manifest: "/manifest.json",
  icons: {
    icon: "/creative_icon.png",
    shortcut: "/creative_icon.png",
    apple: "/creative_icon.png",
  },
  verification: {
    other: {
      "facebook-domain-verification": "w7o4tut28un74wabdjxdmnnxdbevai",
    },
  },
  openGraph: {
    title: "AI Website Builder & App Builder | Creative AI",
    description: "Build websites and apps with AI using simple prompts. No coding needed. Create, customize, launch, and own your source code.",
    url: "https://creativethoughts.ai/",
    siteName: "Creative AI",
    images: [
      {
        url: "https://creativethoughts.ai/img/image_28.png",
        width: 32,
        height: 32,
        alt: "Creative AI Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "AI Website Builder & App Builder | Creative AI",
    description: "Build websites and apps with AI using simple prompts. No coding needed. Create, customize, launch, and own your source code.",
    images: ["https://creativethoughts.ai/img/image_28.png"],
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

        <link rel="icon" href="/creative_icon.png" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />

        {/* Organization Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://creativethoughts.ai/#organization",
              "name": "Creative AI",
              "alternateName": "Creativethoughts.ai",
              "url": "https://creativethoughts.ai/",
              "logo": "https://creativethoughts.ai/img/cti_white_new_logo.webp",
              "description": "Creative AI is an AI website builder and AI app builder that helps businesses, startups, and entrepreneurs build professional websites and web applications without coding.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "",
                "contactType": "customer service",
                "url": "https://creativethoughts.ai/contact",
                "areaServed": [
                  "US",
                  "GB",
                  "CA",
                  "AU",
                  "IN",
                  "SG"
                ],
                "availableLanguage": "en"
              },
              "sameAs": [
                "https://www.facebook.com/CTInformatics/",
                "https://x.com/CT_informatics",
                "https://www.instagram.com/creative.ai_official/",
                "https://www.youtube.com/@creative.ai_official",
                "https://www.linkedin.com/company/creativethoughtsai/"
              ]
            })
          }}
        />

        {/* Website Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://creativethoughts.ai/#website",
              "name": "Creative AI",
              "url": "https://creativethoughts.ai/",
              "description": "Creative AI is an AI website builder and AI app builder that helps businesses, startups, and entrepreneurs create websites and apps without coding. Build faster, automate workflows, and launch high-quality digital products with AI-powered innovation.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://creativethoughts.ai/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

      </head>
      <body suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PF873KR8"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
        <LenisProvider>
          <AOSInit />
          <PwaRegister />
          <StylesheetLoader />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
