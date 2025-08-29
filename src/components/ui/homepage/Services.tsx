import Image from "next/image";
import financial from "../../../../public/financial.png";
import tax from "../../../../public/taxprep.png";
import book from "../../../../public/bookkeeping.png";
export default function Services() {
  const services = [
    {
      icon: <Image src={tax} alt="Bookkeeping" className="w-16 h-16 mb-4" />,
      title: "Tax Preparation",
      desc: "Accurate and stress-free tax filing for individuals and businesses.",
    },
    {
      icon: <Image src={book} alt="Bookkeeping" className="w-16 h-16 mb-4" />,
      title: "Bookkeeping",
      desc: "Stay on top of your finances with our reliable bookkeeping services.",
    },
    {
      icon: <Image src={financial} alt="Bookkeeping" className="w-16 h-16 mb-4" />,
      title: "Financial Advisory",
      desc: "Expert guidance to help you make informed business decisions.",
    },
    
  ];

  return (
    <section id="services" className="py-20 relative bg-gradient-to-b from-white to-green-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mt-5">
          Our Services
        </h2>
        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          Comprehensive solutions tailored to meet your financial needs.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
  
            <div
              key={service.title}
              className="rounded-xl bg-white p-6 shadow hover:shadow-lg hover:scale-[1.02] transition-transform"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-3 text-gray-600">{service.desc}</p>
              <div className="mt-4 flex justify-center items-center ">{service.icon}</div>
        </div>
          ))}
      </div>
      </div>

    </section>
  );
}

