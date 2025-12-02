import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Vehicle Not Found</h1>
        <p className="text-gray-600 mb-8">
          The vehicle you're looking for doesn't exist or has been removed.
        </p>
        <Link
          href="/vehicles"
          className="inline-block bg-[#DC2626] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#B91C1C] transition-colors"
        >
          View All Vehicles
        </Link>
      </div>
    </div>
  );
}

