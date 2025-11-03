import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import CursorGlow from "@/components/CursorGlow";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const siteUrl = "https://www.vinuaravindh.cv/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: "Vinu Aravindh | Software Developer",
  description: "I'm a developer who likes bringing ideas to life through clean, functional interfaces.",

  openGraph: {
    title: "Vinu Aravindh | Software Developer",
    description: "I'm a developer who likes bringing ideas to life through clean, functional interfaces.",
    url: siteUrl,
    siteName: "Vinu Aravindh's Portfolio",
    type: "website",
    images: [
      {
        url: "/portfolio-preview.png",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vinu Aravindh | Software Developer",
    description: "I'm a developer who likes bringing ideas to life through clean, functional interfaces.",
    images: ["/portfolio-preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={inter.className}>
        <div className="min-h-screen bg-[#0f172a] text-gray-300 font-sans">
          <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Vinu Aravindh",
            "url": "https://www.vinuaravindh.cv/",
            "sameAs": [
              "https://github.com/vinuaravindh",
              "https://linkedin.com/in/vinuaravindh",
              "https://www.instagram.com/vinuarvndh",
              "https://letterboxd.com/vinuaravindh"
            ],
            "jobTitle": "Software Developer"
            })}}
          />
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 px-8 md:px-12 lg:px-40">
            <Header />
          {children}
          </div>
        </div>
        <CursorGlow />
        <Analytics />
      </body>
    </html>
  );
}
