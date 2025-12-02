import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Image
              src="/logo.png"
              alt="Synergy Auto Zone Logo"
              width={200}
              height={60}
              className="h-auto w-48 mb-4"
            />
            <p className="text-gray-400 mb-4">
              Your trusted car dealership in Georgetown, Guyana. Simplifying the car-buying process with transparent pricing and exceptional service.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#DC2626] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/vehicles" className="text-gray-400 hover:text-[#DC2626] transition-colors">
                  View All Vehicles
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-[#DC2626] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.facebook.com/synergyautozone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#DC2626] transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5927192959"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#DC2626] transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:synergyautozone@gmail.com"
                  className="text-gray-400 hover:text-[#DC2626] transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Synergy Auto Zone. All rights reserved.
          </p>
          <p className="mt-2 text-sm">
            2 Friendship, East Bank Demerara, Georgetown, Guyana | Phone: +592 719-2959
          </p>
        </div>
      </div>
    </footer>
  );
}

