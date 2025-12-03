import Link from "next/link";
import Image from "next/image";
import Threads from "./backgrounds/Threads";

export default function Hero() {
  return (
    <section className="relative bg-black text-white py-20 px-4 sm:py-32 overflow-hidden">
      <Threads
        color={[0.86, 0.15, 0.15]}
        amplitude={1.2}
        distance={0.3}
        enableMouseInteraction={true}
        className="absolute inset-0"
      />
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="mb-8 flex justify-center">
          <Image
            src="/logo.png"
            alt="Synergy Auto Zone Logo"
            width={400}
            height={120}
            className="h-auto w-full max-w-md"
            priority
          />
        </div>
        <h1 className="sr-only">Synergy Auto Zone</h1>
        <p className="text-xl sm:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
          Your trusted car dealership in Georgetown, Guyana
        </p>
        <p className="text-lg mb-10 text-gray-400 max-w-2xl mx-auto">
          Simplifying the car-buying process with transparent pricing and exceptional customer service
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/vehicles"
            className="bg-[#DC2626] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#B91C1C] transition-colors shadow-lg"
          >
            View Inventory
          </Link>
          <Link
            href="#contact"
            className="bg-transparent border-2 border-[#DC2626] text-[#DC2626] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#DC2626] hover:text-white transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

