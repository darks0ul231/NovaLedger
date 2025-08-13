import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            NovaLedger – Accounting Made Simple
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Professional accounting services for businesses of all sizes. We help
            you save time, reduce stress, and focus on what matters most — growing
            your business.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#services"
              className="rounded-lg bg-blue-600 px-6 py-3 text-white shadow hover:bg-blue-700 transition"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-blue-600 px-6 py-3 text-blue-600 hover:bg-blue-50 transition"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md h-80 flex-shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Accounting workspace"
              fill
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
