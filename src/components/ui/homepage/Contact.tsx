export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100 md:py-24">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Get in Touch</h2>
        <p className="mt-4 text-gray-600">
          Ready to simplify your accounting? Contact us today.
        </p>
        <form className="mt-4 text-lg text-gray-600 text-center">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-600 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-600 focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-600 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-6 py-3 text-white shadow hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
