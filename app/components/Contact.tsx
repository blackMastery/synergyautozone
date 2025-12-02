import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Visit Us</h3>
            <address className="text-gray-700 not-italic mb-6">
              <p>2 Friendship, East Bank Demerara</p>
              <p>Georgetown, Guyana</p>
            </address>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                <a
                  href="tel:+5927192959"
                  className="text-[#DC2626] hover:underline font-semibold"
                >
                  +592 719-2959
                </a>
                <br />
                <a
                  href="tel:7192959"
                  className="text-[#DC2626] hover:underline font-semibold"
                >
                  719-2959
                </a>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                <a
                  href="mailto:synergyautozone@gmail.com"
                  className="text-[#DC2626] hover:underline"
                >
                  synergyautozone@gmail.com
                </a>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">WhatsApp</h4>
                <Link
                  href="https://wa.me/5927192959"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#DC2626] hover:underline"
                >
                  Message us on WhatsApp
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Hours</h3>
            <div className="text-gray-700 space-y-2">
              <p>
                <span className="font-semibold">Status:</span>{" "}
                <span className="text-red-600">Closed now</span>
              </p>
              <p className="text-sm text-gray-600">
                Please contact us via phone, email, or WhatsApp for inquiries and appointments.
              </p>
            </div>
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Synergy Auto Zone",
              image: "https://synergyautozone.com/og-image.jpg",
              "@id": "https://synergyautozone.com",
              url: "https://synergyautozone.com",
              telephone: "+5927192959",
              email: "synergyautozone@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "2 Friendship, East Bank Demerara",
                addressLocality: "Georgetown",
                addressCountry: "GY",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "6.8045",
                longitude: "-58.1553",
              },
              priceRange: "$$",
            }),
          }}
        />
      </div>
    </section>
  );
}

