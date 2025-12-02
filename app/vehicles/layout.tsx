import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Vehicle Inventory | Synergy Auto Zone",
  description:
    "Browse our complete inventory of quality vehicles at Synergy Auto Zone. Find your perfect car, truck, or SUV in Georgetown, Guyana. Transparent pricing and exceptional service.",
  keywords: [
    "vehicle inventory",
    "car inventory",
    "used cars",
    "Georgetown",
    "Guyana",
    "car dealership",
    "vehicle listings",
  ],
  openGraph: {
    title: "Our Vehicle Inventory | Synergy Auto Zone",
    description:
      "Browse our complete inventory of quality vehicles. Find your perfect car in Georgetown, Guyana.",
    url: "/vehicles",
    siteName: "Synergy Auto Zone",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Synergy Auto Zone Vehicle Inventory",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Vehicle Inventory | Synergy Auto Zone",
    description:
      "Browse our complete inventory of quality vehicles. Find your perfect car in Georgetown, Guyana.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/vehicles",
  },
};

export default function VehiclesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

