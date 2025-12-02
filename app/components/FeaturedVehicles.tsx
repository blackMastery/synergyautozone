import Link from "next/link";
import Image from "next/image";
import { getFeaturedVehicles } from "../data/vehicles";

export default function FeaturedVehicles() {
  const featuredVehicles = getFeaturedVehicles();

  const formatPrice = (price: number, currency: string = "GYD") => {
    return new Intl.NumberFormat("en-GY", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
          Featured Vehicles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {featuredVehicles.map((vehicle) => (
            <article
              key={vehicle.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 bg-gray-200">
                <Image
                  src={vehicle.images[0] || "/placeholder-vehicle.jpg"}
                  alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {vehicle.year} {vehicle.make} {vehicle.model}
                </h3>
                <p className="text-3xl font-bold text-[#DC2626] mb-4">
                  {formatPrice(vehicle.price, vehicle.currency)}
                </p>
                <ul className="list-disc list-inside mb-6 text-gray-700 space-y-1">
                  {vehicle.features.slice(0, 3).map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/vehicles/${vehicle.slug}`}
                    className="bg-[#DC2626] text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-[#B91C1C] transition-colors"
                  >
                    View Details
                  </Link>
                  <Link
                    href={`/vehicles/${vehicle.slug}#test-drive`}
                    className="bg-transparent border-2 border-[#DC2626] text-[#DC2626] px-6 py-3 rounded-lg font-semibold text-center hover:bg-[#DC2626] hover:text-white transition-colors"
                  >
                    Book Test Drive
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/vehicles"
            className="inline-block bg-[#DC2626] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#B91C1C] transition-colors"
          >
            View All Vehicles
          </Link>
        </div>
      </div>
    </section>
  );
}

