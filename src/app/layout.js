import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
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
  metadataBase: new URL("https://creative-ai-landingpage.vercel.app"),
  title: "Creative AI | AI App Builder for Mobile & Web Application",
  description: "Creative AI is a powerful AI app builder for mobile and web applications. Create fast, scalable apps without writing a single line of code and grow digitally.",
  icons: {
    icon: "https://creative-ai-landingpage.vercel.app/img/c.png",
    shortcut: "https://creative-ai-landingpage.vercel.app/img/c.png",
    apple: "https://creative-ai-landingpage.vercel.app/img/c.png",
  },
  openGraph: {
    title: "Creative AI | AI App Builder for Mobile & Web Application",
    description: "Creative AI is a powerful AI app builder for mobile and web applications. Create fast, scalable apps without writing a single line of code and grow digitally.",
    url: "https://creative-ai-landingpage.vercel.app",
    siteName: "Creative AI",
    images: [
      {
        url: "https://creative-ai-landingpage.vercel.app/img/c.png",
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
    images: ["https://creative-ai-landingpage.vercel.app/img/c.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="https://creative-ai-landingpage.vercel.app/img/c.png" />
      </head>
      <body>
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
