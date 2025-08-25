"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="dark bg-gradient-to-r from-blue-800 to-blue-400 shadow-md sticky top-0 z-50 dark:bg-black rounded-xl" >
        <div className="flex items-center justify-between pl-4 bg-gradient-to-r from-blue-800 to-blue-400 shadow-md w-full h-17 text-black text-3xl font-bold">
            <Link href="/" className="flex justify-start dark:bg-black">
            NovaLedger
            </Link>    

        <button onClick={() => setIsOpen(!isOpen)} className="fixed top-4 right-4 z-50 flex flex-col space-y-1.5 p-2 focus:outline-none sm:hidden">
            <span className={`block h-0.5 w-6 bg-black transition-all ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-black transition-all ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-black transition-all ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>

      {/* Slide-In Menu */}
      <div className={`fixed inset-0 z-40 text-blue-600 backdrop-blur-lg transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <nav className="flex h-full flex-col items-center justify-center space-y-8">
          <a href="/" className="text-2xl font-black hover:text-gray-600">Home</a>
          <a href="/about" className="text-2xl font-black hover:text-gray-600">About</a>
          <a href="/contact" className="text-2xl font-black hover:text-gray-600">Contact</a>
          <a href="/service" className="text-2xl font-black hover:text-gray-600">Service</a>
        </nav>
      </div>
      <div className="hidden sm:block pr-5">
          <div className="flex space-x-8">
            <a href="/" className="px-2 py-1 text-lg transition-colors hover:text-blue-300">Home</a>
            <a href="/About" className="px-2 py-1 text-lg transition-colors hover:text-blue-300">About</a>
            <a href="/Contact" className="px-2 py-1 text-lg transition-colors hover:text-blue-300">Contact</a>
            <a href="/Service" className="px-2 py-1 text-lg transition-colors hover:text-blue-300">Service</a>
          </div>
        </div>
      </div>
    </header>
    
  );
}
