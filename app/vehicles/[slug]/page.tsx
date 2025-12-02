import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Navigation from "../../components/Navigation";
import VehicleImageGallery from "../../components/VehicleImageGallery";
import { getVehicleBySlug, getAllVehicles } from "../../data/vehicles";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const vehicles = getAllVehicles();
  return vehicles.map((vehicle) => ({
    slug: vehicle.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);

  if (!vehicle) {
    return {
      title: "Vehicle Not Found | Synergy Auto Zone",
    };
  }

  const title = `${vehicle.year} ${vehicle.make} ${vehicle.model} - ${new Intl.NumberFormat("en-GY", {
    style: "currency",
    currency: vehicle.currency || "GYD",
    minimumFractionDigits: 0,
  }).format(vehicle.price)} | Synergy Auto Zone`;

  const description = `${vehicle.year} ${vehicle.make} ${vehicle.model} for sale at Synergy Auto Zone. ${vehicle.description} Features: ${vehicle.features.slice(0, 3).join(", ")}. Located in Georgetown, Guyana.`;

  // Use vehicle images for OG tags, fallback to logo only if no vehicle images exist
  const ogImages = vehicle.images.length > 0
    ? vehicle.images.slice(0, 5).map((image) => ({
        url: image,
        width: 1200,
        height: 630,
        alt: `${vehicle.year} ${vehicle.make} ${vehicle.model}`,
      }))
    : [
        {
          url: "/logo.png",
          width: 1200,
          height: 630,
          alt: "Synergy Auto Zone - Premium Car Dealership",
        },
      ];

  return {
    title,
    description,
    keywords: [
      `${vehicle.year} ${vehicle.make} ${vehicle.model}`,
      "car for sale",
      "Georgetown",
      "Guyana",
      vehicle.make,
      vehicle.model,
      "used car",
      "car dealership",
    ],
    openGraph: {
      title,
      description,
      url: `/vehicles/${vehicle.slug}`,
      siteName: "Synergy Auto Zone",
      images: ogImages,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: vehicle.images.length > 0 ? [vehicle.images[0]] : ["/logo.png"],
    },
    alternates: {
      canonical: `/vehicles/${vehicle.slug}`,
    },
    other: {
      "product:price:amount": vehicle.price.toString(),
      "product:price:currency": vehicle.currency || "GYD",
      "product:availability": vehicle.availability === "available" ? "in stock" : "out of stock",
    },
  };
}

export default async function VehicleDetailPage({ params }: Props) {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);

  if (!vehicle) {
    notFound();
  }

  const formatPrice = (price: number, currency: string = "GYD") => {
    return new Intl.NumberFormat("en-GY", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="text-sm text-gray-600" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="hover:text-[#DC2626]">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/vehicles" className="hover:text-[#DC2626]">
                  Vehicles
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-900">{vehicle.year} {vehicle.make} {vehicle.model}</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <VehicleImageGallery
            images={vehicle.images}
            alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
          />

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {vehicle.year} {vehicle.make} {vehicle.model}
            </h1>
            <p className="text-4xl font-bold text-[#DC2626] mb-6">
              {formatPrice(vehicle.price, vehicle.currency)}
            </p>

            <div className="mb-6">
              <span
                className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                  vehicle.availability === "available"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {vehicle.availability === "available" ? "Available" : "Sold"}
              </span>
            </div>

            <div className="space-y-4 mb-8">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Features</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {vehicle.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Specifications</h2>
                <dl className="grid grid-cols-2 gap-3">
                  {Object.entries(vehicle.specifications).map(([key, value]) => (
                    <div key={key}>
                      <dt className="text-sm font-medium text-gray-600 capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </dt>
                      <dd className="text-gray-900">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="space-y-3">
              <Link
                href="#test-drive"
                className="block w-full bg-[#DC2626] text-white px-6 py-4 rounded-lg font-semibold text-center hover:bg-[#B91C1C] transition-colors"
              >
                Book a Test Drive
              </Link>
              <Link
                href="/#contact"
                className="block w-full bg-transparent border-2 border-[#DC2626] text-[#DC2626] px-6 py-4 rounded-lg font-semibold text-center hover:bg-[#DC2626] hover:text-white transition-colors"
              >
                Contact Us
              </Link>
              {vehicle.financing?.available && (
                <Link
                  href="/#contact"
                  className="block w-full bg-gray-100 text-gray-900 px-6 py-4 rounded-lg font-semibold text-center hover:bg-gray-200 transition-colors"
                >
                  Get Financing Info
                </Link>
              )}
            </div>

            {vehicle.financing && (
              <p className="mt-4 text-sm text-gray-600 text-center">
                {vehicle.financing.cashOnly && vehicle.financing.bankFinancing
                  ? "Cash or Bank Financing Available"
                  : vehicle.financing.cashOnly
                  ? "Cash Only"
                  : "Financing Available"}
              </p>
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
          <p className="text-gray-700 leading-relaxed">{vehicle.description}</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8" id="test-drive">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Book a Test Drive</h2>
          <p className="text-gray-700 mb-6">
            Interested in this vehicle? Contact us to schedule a test drive or get more information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+5927192959"
              className="bg-[#DC2626] text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-[#B91C1C] transition-colors"
            >
              Call: +592 719-2959
            </a>
            <a
              href="https://wa.me/5927192959"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-green-600 transition-colors"
            >
              WhatsApp Us
            </a>
            <a
              href="mailto:synergyautozone@gmail.com"
              className="bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-200 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/vehicles"
            className="text-[#DC2626] hover:underline font-semibold"
          >
            ← Back to All Vehicles
          </Link>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: `${vehicle.year} ${vehicle.make} ${vehicle.model}`,
            description: vehicle.description,
            image: vehicle.images,
            brand: {
              "@type": "Brand",
              name: vehicle.make,
            },
            model: vehicle.model,
            productionDate: vehicle.year.toString(),
            offers: {
              "@type": "Offer",
              price: vehicle.price,
              priceCurrency: vehicle.currency || "GYD",
              availability:
                vehicle.availability === "available"
                  ? "https://schema.org/InStock"
                  : "https://schema.org/SoldOut",
              seller: {
                "@type": "LocalBusiness",
                name: "Synergy Auto Zone",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "2 Friendship, East Bank Demerara",
                  addressLocality: "Georgetown",
                  addressCountry: "GY",
                },
                telephone: "+5927192959",
              },
            },
            additionalProperty: vehicle.features.map((feature) => ({
              "@type": "PropertyValue",
              name: "Feature",
              value: feature,
            })),
          }),
        }}
      />
    </div>
  );
}

