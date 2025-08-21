import Hero from "@/components/ui/homepage/Hero";
import Services from "@/components/ui/homepage/Services";
import About from "@/components/ui/homepage/About";
import Contact from "@/components/ui/homepage/Contact";
import Footer from "@/components/ui/homepage/Footer";
import { ReactNode } from "react";
interface LayoutWrapperProps {
  children: ReactNode;
}

export default function LayoutWrapper({children}: LayoutWrapperProps) {
  return (
    <main className="bg-gray-50 text-gray-800">
      <Hero />
      <Services />
      {/* <About /> */}
        {children}
      <Contact />
      <Footer />
    </main>
  );
}
