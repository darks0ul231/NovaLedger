import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 relative bg-gradient-to-t from-white to-blue-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:items-center lg:gap-16">
        <div className="lg:w-1/2">
          <div className="relative w-full h-96 ">
            <Image
              src="https://images.unsplash.com/photo-1521790797524-b2497295b8a0"
              alt="Team meeting"
              fill
              className="rounded-xl shadow-lg object-cover relative w-full h-auto transform hover:scale-[1.02] transition-transform duration-300"
            />
          </div>

        </div>
        <div className="mt-10 lg:mt-0 lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900">About NovaLedger</h2>
          <p className="mt-4 text-gray-600">
            At NovaLedger, we believe accounting should be clear, accessible, and
            stress-free. With years of expertise, our team ensures that you have
            the insights and support you need to succeed.
          </p>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li>✔ Experienced accountants</li>
            <li>✔ Transparent pricing</li>
            <li>✔ Modern cloud-based tools</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
