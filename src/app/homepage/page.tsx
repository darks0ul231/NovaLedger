import Hero from "@/components/ui/homepage/Hero";
import Services from "@/components/ui/homepage/Services";
import About from "@/components/ui/homepage/About";
import Contact from "@/components/ui/homepage/Contact";
import Footer from "@/components/ui/homepage/Footer";

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-800">
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
