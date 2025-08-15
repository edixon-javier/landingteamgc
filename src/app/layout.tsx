import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Consultoría y Desarrollo | ConsultansGC",
  description: "Soluciones tecnológicas innovadoras para transformar ideas en realidades digitales impactantes.",
};

import { UIProvider } from "@/contexts/UIContext";
import { AppProvider } from "@/contexts/AppContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <UIProvider>
          <AppProvider>
            {children}
          </AppProvider>
        </UIProvider>
      </body>
    </html>
  );
}
