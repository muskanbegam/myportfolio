// app/layout.tsx
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

// Google Font setup
const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Metadata for SEO, favicons, Open Graph, Twitter cards
export const metadata: Metadata = {
  title: "Muskan Portfolio",
  description: "Portfolio of Muskan Begam - Web Developer & Python Automation",
  icons: {
    icon: "/favicon-96x96.png",        // browser tab favicon
    apple: "/apple-touch-icon.png",     // Apple devices
    shortcut: "/favicon.ico",           // older browsers
    other: [
      { rel: "icon", type: "image/svg+xml", url: "/favicon.svg" },
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
  openGraph: {
    title: "Muskan Portfolio",
    description: "Portfolio of Muskan Begam - Web Developer & Python Automation",
    images: "/images/logo.png",        // large image for social sharing
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muskan Portfolio",
    description: "Portfolio of Muskan Begam - Web Developer & Python Automation",
    images: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={bricolageGrotesque.variable}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}