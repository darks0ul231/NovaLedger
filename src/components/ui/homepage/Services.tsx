export default function Services() {
  const services = [
    {
      title: "Tax Preparation",
      desc: "Accurate and stress-free tax filing for individuals and businesses.",
    },
    {
      title: "Bookkeeping",
      desc: "Stay on top of your finances with our reliable bookkeeping services.",
    },
    {
      title: "Financial Advisory",
      desc: "Expert guidance to help you make informed business decisions.",
    },
    {
      title: "Payroll Services",
      desc: "Ensuring your team gets paid correctly and on time, with all taxes filed.",
    },
    {
      title: "Monthly Financial Reports",
      desc: "Easy-to-understand Profit & Loss statements, Balance Sheets, and Cash Flow forecasts.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Our Services
        </h2>
        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          Comprehensive solutions tailored to meet your financial needs.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl bg-white p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-3 text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
