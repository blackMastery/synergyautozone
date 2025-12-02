import { MetadataRoute } from "next";
import { getAllVehicles } from "./data/vehicles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://synergyautozone.com";
  const vehicles = getAllVehicles();

  const vehicleUrls: MetadataRoute.Sitemap = vehicles.map((vehicle) => ({
    url: `${baseUrl}/vehicles/${vehicle.slug}`,
    lastModified: vehicle.updatedAt ? new Date(vehicle.updatedAt) : new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/vehicles`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...vehicleUrls,
  ];
}

