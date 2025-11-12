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
  manifest: "/manifest.json",
  keywords: ["consultoría", "desarrollo web", "tecnología", "soluciones digitales", "ConsultansGC"],
  authors: [{ name: "ConsultansGC" }],
  creator: "ConsultansGC",
  publisher: "ConsultansGC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/assets/icons/favicon.ico", sizes: "any" },
      { url: "/assets/icons/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/assets/icons/apple-touch-icon.png", sizes: "180x180" },
    ],
    other: [
      { rel: "icon", type: "image/png", sizes: "32x32", url: "/assets/icons/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", url: "/assets/icons/favicon-16x16.png" },
    ],
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
