import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Consultoría y Desarrollo | ConsultansGC",
  description: "Soluciones tecnológicas innovadoras para transformar ideas en realidades digitales impactantes.",
  icons: {
    icon: "/assets/icons/favicon.ico",
  },
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
        className={`${roboto.variable} ${roboto.className} antialiased`}
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
