"use client";

import { useState } from "react";
import Image from "next/image";

interface VehicleImageGalleryProps {
  images: string[];
  alt: string;
}

export default function VehicleImageGallery({
  images,
  alt,
}: VehicleImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const goToPrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Main Image Display */}
      <div className="relative h-96 md:h-[500px] bg-gray-200 group">
        <Image
          src={images[selectedIndex] || "/placeholder-vehicle.jpg"}
          alt={`${alt} - Image ${selectedIndex + 1}`}
          fill
          className="object-contain"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={selectedIndex === 0}
        />
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {selectedIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="p-4 bg-gray-50">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`relative h-20 sm:h-24 bg-gray-200 rounded overflow-hidden border-2 transition-all ${
                  selectedIndex === index
                    ? "border-[#DC2626] ring-2 ring-[#DC2626] ring-offset-2"
                    : "border-transparent hover:border-gray-400"
                }`}
                aria-label={`View image ${index + 1}`}
              >
                <Image
                  src={image}
                  alt={`${alt} thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, 150px"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

