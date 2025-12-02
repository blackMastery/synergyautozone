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
  title: {
    default: "Synergy Auto Zone | Premium Car Dealership in Georgetown, Guyana",
    template: "%s | Synergy Auto Zone",
  },
  description:
    "Synergy Auto Zone - Your trusted car dealership in Georgetown, Guyana. We simplify the car-buying process with transparent pricing, exceptional customer service, and a seamless purchasing experience. Browse our inventory of quality vehicles.",
  keywords: [
    "car dealership",
    "vehicle sales",
    "Georgetown",
    "Guyana",
    "used cars",
    "car rental",
    "Toyota",
    "car financing",
    "test drive",
    "Synergy Auto Zone",
  ],
  authors: [{ name: "Synergy Auto Zone" }],
  creator: "Synergy Auto Zone",
  publisher: "Synergy Auto Zone",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://synergyautozone.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Synergy Auto Zone",
    title: "Synergy Auto Zone | Premium Car Dealership in Georgetown, Guyana",
    description:
      "Your trusted car dealership in Georgetown, Guyana. Transparent pricing, exceptional service, and quality vehicles.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Synergy Auto Zone - Premium Car Dealership",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Synergy Auto Zone | Premium Car Dealership in Georgetown, Guyana",
    description:
      "Your trusted car dealership in Georgetown, Guyana. Transparent pricing, exceptional service, and quality vehicles.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add verification codes when available
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#DC2626" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
