"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="shadow-md sticky top-0 z-50 text-white rounded-xl " >
        <div className="flex items-center justify-between pl-8 bg-gradient-to-r from-green-800 to-green-400 shadow-md w-full h-20 text-black font-bold">
            <Link href="/" className="flex justify-start mb-3 text-white text-5xl font-bold text-shadow-lg/100">
            NovaLedger
            </Link>    

        <button onClick={() => setIsOpen(!isOpen)} className="fixed top-4 right-4 z-50 flex flex-col space-y-1.5 p-2 focus:outline-none md:hidden">
            <span className={`block h-0.5 w-6 bg-black transition-all ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-black transition-all ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-black transition-all ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>

      {/* Slide-In Menu */}
      <div className={`fixed inset-0 z-40 text-blue-600 backdrop-blur-lg transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <nav className="flex h-full flex-col items-center justify-center space-y-8">
          <a href="/" className="text-3xl font-black hover:text-gray-600">Home</a>
          <a href="/about" className="text-3xl font-black hover:text-gray-600">About</a>
          <a href="/contact" className="text-3xl font-black hover:text-gray-600">Contact</a>
          <a href="/service" className="text-3xl font-black hover:text-gray-600">Service</a>
        </nav>
      </div>
      <div className="hidden md:block pr-5 ">
          <div className="flex items-center">
            <a href="/" className="px-4 py-1 font-extrabold border-x-1 text-xl transition-colors hover:text-blue-200">Home</a>
            <a href="/About" className="px-4 py-1 font-extrabold border-r-1 text-xl transition-colors hover:text-blue-200">About</a>
            <a href="/Contact" className="px-4 py-1 font-extrabold border-r-1 text-xl transition-colors hover:text-blue-200">Contact</a>
            <a href="/Service" className="px-4 py-1 font-extrabold border-r-1 text-xl transition-colors hover:text-blue-200">Service</a>
          </div>
        </div>
      </div>
    </header>
    
  );
}
