import Hero from "@/components/ui/homepage/Hero";
import Services from "@/components/ui/homepage/Services";
import About from "@/components/ui/homepage/About";
import Contact from "@/components/ui/homepage/Contact";
import Footer from "@/components/ui/homepage/Footer";
import { Layout } from "lucide-react";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Header from "@/components/ui/homepage/Header";


export default function Home() {
  return (
     <main className="bg-gray-50 text-gray-800">
      <Header/>
      <Hero/>
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
