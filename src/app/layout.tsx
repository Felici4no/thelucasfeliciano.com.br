import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { siteConfig, jsonLdPerson } from "@/lib/seo";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const instrumentSerif = Instrument_Serif({ 
  weight: "400", 
  subsets: ["latin"], 
  variable: "--font-instrument" 
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

import { LoadingProvider } from "@/components/layout/LoadingProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
      </head>
      <body className={`${inter.variable} ${instrumentSerif.variable}`}>
        <LoadingProvider>
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}
