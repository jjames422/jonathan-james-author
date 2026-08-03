import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Libre_Baskerville,
  Manrope,
} from "next/font/google";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const bodyFont = Libre_Baskerville({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const interfaceFont = Manrope({
  variable: "--font-interface",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Jonathan M. James | Dark Historical Fantasy",
    template: "%s | Jonathan M. James",
  },
  description:
    "The official website of Jonathan M. James, author of immersive dark historical fantasy exploring immortality, faith, power, and the monsters history misunderstood.",
  keywords: [
    "Jonathan M. James",
    "dark historical fantasy",
    "gothic fantasy",
    "historical fantasy author",
    "Aurelius Drăculești",
    "The Aurelius Saga",
  ],
  authors: [
    {
      name: "Jonathan M. James",
    },
  ],
  creator: "Jonathan M. James",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Jonathan M. James",
    title: "Jonathan M. James | Dark Historical Fantasy",
    description:
      "Immersive dark historical fantasy about immortality, faith, power, and the monsters history misunderstood.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jonathan M. James | Dark Historical Fantasy",
    description:
      "Immersive dark historical fantasy about immortality, faith, power, and the monsters history misunderstood.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} ${interfaceFont.variable}`}
      >
        {children}
      </body>
    </html>
  );
}