"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "../components/Navigation";
import { getAllVehicles } from "../data/vehicles";

const formatPrice = (price: number, currency: string = "GYD") => {
  return new Intl.NumberFormat("en-GY", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
  }).format(price);
};

export default function VehiclesPage() {
  const allVehicles = getAllVehicles();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"price-asc" | "price-desc" | "year-desc" | "newest">("newest");
  const [filterMake, setFilterMake] = useState<string>("all");

  const makes = useMemo(() => {
    const uniqueMakes = new Set(allVehicles.map((v) => v.make));
    return Array.from(uniqueMakes).sort();
  }, [allVehicles]);

  const filteredAndSortedVehicles = useMemo(() => {
    let filtered = allVehicles.filter((vehicle) => {
      const matchesSearch =
        vehicle.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.year.toString().includes(searchTerm);
      
      const matchesMake = filterMake === "all" || vehicle.make === filterMake;

      return matchesSearch && matchesMake;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "year-desc":
          return b.year - a.year;
        case "newest":
        default:
          return 0;
      }
    });

    return filtered;
  }, [allVehicles, searchTerm, sortBy, filterMake]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="bg-black text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Vehicle Inventory</h1>
          <p className="text-xl text-blue-100">
            Browse our selection of quality vehicles
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                Search
              </label>
              <input
                id="search"
                type="text"
                placeholder="Search by make, model, or year..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DC2626] focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="make" className="block text-sm font-medium text-gray-700 mb-2">
                Make
              </label>
              <select
                id="make"
                value={filterMake}
                onChange={(e) => setFilterMake(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DC2626] focus:border-transparent"
              >
                <option value="all">All Makes</option>
                {makes.map((make) => (
                  <option key={make} value={make}>
                    {make}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-2">
                Sort By
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DC2626] focus:border-transparent"
              >
                <option value="newest">Newest First</option>
                <option value="year-desc">Year (Newest)</option>
                <option value="price-asc">Price (Low to High)</option>
                <option value="price-desc">Price (High to Low)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-gray-600">
            Showing {filteredAndSortedVehicles.length} vehicle{filteredAndSortedVehicles.length !== 1 ? "s" : ""}
          </p>
        </div>

        {filteredAndSortedVehicles.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <p className="text-xl text-gray-600 mb-4">No vehicles found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setFilterMake("all");
                setSortBy("newest");
              }}
              className="text-[#DC2626] hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedVehicles.map((vehicle) => (
              <article
                key={vehicle.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <Link href={`/vehicles/${vehicle.slug}`}>
                  <div className="relative h-64 bg-gray-200">
                    <Image
                      src={vehicle.images[0] || "/placeholder-vehicle.jpg"}
                      alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {vehicle.year} {vehicle.make} {vehicle.model}
                    </h2>
                    <p className="text-3xl font-bold text-[#DC2626] mb-4">
                      {formatPrice(vehicle.price, vehicle.currency)}
                    </p>
                    <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1 text-sm">
                      {vehicle.features.slice(0, 3).map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                    <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {vehicle.availability === "available" ? "Available" : "Sold"}
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: filteredAndSortedVehicles.map((vehicle, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Product",
                name: `${vehicle.year} ${vehicle.make} ${vehicle.model}`,
                description: vehicle.description,
                image: vehicle.images[0],
                offers: {
                  "@type": "Offer",
                  price: vehicle.price,
                  priceCurrency: vehicle.currency || "GYD",
                  availability: vehicle.availability === "available" ? "https://schema.org/InStock" : "https://schema.org/SoldOut",
                },
                url: `https://synergyautozone.com/vehicles/${vehicle.slug}`,
              },
            })),
          }),
        }}
      />
    </div>
  );
}

