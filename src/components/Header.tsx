"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart, Phone } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full group-hover:scale-110 transition-transform duration-300">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">Mental Fitness</h1>
              <p className="text-sm text-gray-600">Solutions LLC</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">
              About
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">
              Services
            </Link>
            <Link href="#booking" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">
              Booking
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">
              Contact
            </Link>
        <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white" asChild>
          <a href="tel:+15551234567">
            <Phone className="h-4 w-4 mr-2" />
            Call Now
          </a>
        </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="#about" 
                className="text-gray-700 hover:text-purple-600 transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="#services" 
                className="text-gray-700 hover:text-purple-600 transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="#booking" 
                className="text-gray-700 hover:text-purple-600 transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Booking
              </Link>
              <Link 
                href="#contact" 
                className="text-gray-700 hover:text-purple-600 transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white w-full" asChild>
                <a href="tel:+15551234567">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}