"use client";
import Hero from "@/components/ui/homepage/Hero";
import Services from "@/components/ui/homepage/Services";
import About from "@/components/ui/homepage/About";
import Contact from "@/components/ui/homepage/Contact";
import Footer from "@/components/ui/homepage/Footer";
import Header from "@/components/ui/homepage/Header";
import RequestConsultation from "@/components/ui/homepage/RequestConsultation";



export default function Home() {
  return (
     <main className="bg-gray-100 dark:bg-gray-900">
      <RequestConsultation />
      <Header/>
      <Hero/>
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
