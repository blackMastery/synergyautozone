"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
            <div className="relative w-16 h-16 rounded-full overflow-hidden bg-black shrink-0">
              <Image
                src="/logo.png"
                alt="Synergy Auto Zone Logo"
                width={64}
                height={64}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <span className="text-xl font-bold text-gray-900  sm:block whitespace-nowrap">
              Synergy Auto Zone
            </span>
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
              onClick={toggleMenu}
              className="text-gray-700 hover:text-[#DC2626] transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
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
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                onClick={closeMenu}
                className="block px-3 py-2 text-gray-700 hover:text-[#DC2626] hover:bg-gray-50 rounded-md transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                href="/vehicles"
                onClick={closeMenu}
                className="block px-3 py-2 text-gray-700 hover:text-[#DC2626] hover:bg-gray-50 rounded-md transition-colors font-medium"
              >
                Vehicles
              </Link>
              <Link
                href="/#contact"
                onClick={closeMenu}
                className="block px-3 py-2 text-gray-700 hover:text-[#DC2626] hover:bg-gray-50 rounded-md transition-colors font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

