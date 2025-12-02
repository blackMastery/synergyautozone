import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Synergy Auto Zone Logo"
              width={200}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-[#DC2626] transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/vehicles"
              className="text-gray-700 hover:text-[#DC2626] transition-colors font-medium"
            >
              Vehicles
            </Link>
            <Link
              href="/#contact"
              className="text-gray-700 hover:text-[#DC2626] transition-colors font-medium"
            >
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-[#DC2626]"
              aria-label="Menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

