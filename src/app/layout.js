import "./globals.css";
import "lenis/dist/lenis.css";
import "owl.carousel/dist/assets/owl.carousel.css";

import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";
import { AOSInit } from "@/components/PageInitializers";

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
    <html lang="en">
      <head>
        <link rel="icon" href="https://creative-ai-landingpage.vercel.app/img/c.png" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.3/font/bootstrap-icons.min.css" />

        {/* Load libraries sequentially to prevent race conditions */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" defer></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" defer></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" defer></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js" defer></script>
      </head>
      <body>
        <LenisProvider>
          <AOSInit />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
