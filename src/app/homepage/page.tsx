"use client";
import Hero from "@/components/ui/homepage/Hero";
import Services from "@/components/ui/homepage/Services";
import About from "@/components/ui/homepage/About";
import Contact from "@/components/ui/homepage/Contact";
import Footer from "@/components/ui/homepage/Footer";
import Header from "@/components/ui/homepage/Header";
import RequestConsultation from "@/components/ui/homepage/RequestConsultation";
import { Layout } from "lucide-react";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`${darkMode && "dark"}`}>
     <main className="bg-gray-100 dark:bg-gray-900">
      <RequestConsultation />
      <Header/>
      <Hero/>
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  </div>
  );
}
