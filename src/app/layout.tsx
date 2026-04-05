import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const instrumentSerif = Instrument_Serif({ 
  weight: "400", 
  subsets: ["latin"], 
  variable: "--font-instrument" 
});

export const metadata: Metadata = {
  title: "Lucas Feliciano | Builder",
  description: "Systems, products, and culture — constructed from first principles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${instrumentSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}
