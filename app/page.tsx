import type { Metadata } from "next";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import FeaturedVehicles from "./components/FeaturedVehicles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Synergy Auto Zone | Premium Car Dealership in Georgetown, Guyana",
  description:
    "Synergy Auto Zone - Your trusted car dealership in Georgetown, Guyana. We simplify the car-buying process with transparent pricing, exceptional customer service, and a seamless purchasing experience. Browse our inventory of quality vehicles including Toyota Vitz and Fielder Wagon.",
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
  openGraph: {
    title: "Synergy Auto Zone | Premium Car Dealership in Georgetown, Guyana",
    description:
      "Your trusted car dealership in Georgetown, Guyana. Transparent pricing, exceptional service, and quality vehicles.",
    url: "https://synergyautozone.vercel.app",
    siteName: "Synergy Auto Zone",
    images: [
      {
        url: "https://synergyautozone.vercel.app/logo.png",
        width: 1200,
        height: 630,
        alt: "Synergy Auto Zone - Premium Car Dealership",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Synergy Auto Zone | Premium Car Dealership in Georgetown, Guyana",
    description:
      "Your trusted car dealership in Georgetown, Guyana. Transparent pricing, exceptional service, and quality vehicles.",
    images: ["https://synergyautozone.vercel.app/logo.png"],
  },
  alternates: {
    canonical: "https://synergyautozone.vercel.app",
  },
};

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Mission />
      <FeaturedVehicles />
      <Contact />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Synergy Auto Zone",
            image: "https://synergyautozone.vercel.app/logo.png",
            "@id": "https://synergyautozone.vercel.app",
            url: "https://synergyautozone.vercel.app",
            telephone: "+5927192959",
            email: "synergyautozone@gmail.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "2 Friendship, East Bank Demerara",
              addressLocality: "Georgetown",
              addressRegion: "Demerara-Mahaica",
              addressCountry: "GY",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "6.8045",
              longitude: "-58.1553",
            },
            priceRange: "$$",
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
            },
            areaServed: {
              "@type": "City",
              name: "Georgetown",
            },
            serviceType: ["Car Dealership", "Car Rental"],
          }),
        }}
      />
    </>
  );
}
