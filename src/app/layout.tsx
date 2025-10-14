import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Vinu Aravindh | Software Developer",
  description: "Portfolio of Vinu Aravindh, a software developer.",
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
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 px-8 md:px-12 lg:px-40">
            <Header />
          {children}
          </div>
        </div>
      </body>
    </html>
  );
}
