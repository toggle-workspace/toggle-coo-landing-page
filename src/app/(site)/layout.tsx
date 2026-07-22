import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "../globals.css";

const inter = Inter({ variable: "--font-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const SITE_URL = "https://toggle-coo.toggle.solutions";
const SITE_DESCRIPTION =
  "From brand positioning to digital campaigns, we deliver practical marketing solutions designed to increase visibility, engagement, and long-term growth.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Toggle | Performance Marketing Made Clear & Effective",
    template: "%s | Toggle",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Toggle",
    title: "Toggle | Performance Marketing Made Clear & Effective",
    description: SITE_DESCRIPTION,
    images: ["/marketing/hero-video-bg.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Toggle | Performance Marketing Made Clear & Effective",
    description: SITE_DESCRIPTION,
    images: ["/marketing/hero-video-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
