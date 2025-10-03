"use client";

import Link from "next/link";
import { Heart, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Mental Fitness</h3>
                <p className="text-sm text-gray-300">Solutions LLC</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Clarity begins with caring for your emotional and mental well-being. 
              Take the first step toward a balanced, healthier you.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="border-gray-600 hover:bg-purple-600 hover:border-purple-600">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-gray-600 hover:bg-blue-600 hover:border-blue-600">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-gray-600 hover:bg-green-600 hover:border-green-600">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <nav className="space-y-3">
              <Link href="#about" className="block text-gray-300 hover:text-purple-400 transition-colors duration-300">
                About Dr. Deepti
              </Link>
              <Link href="#services" className="block text-gray-300 hover:text-purple-400 transition-colors duration-300">
                Our Services
              </Link>
              <Link href="#contact" className="block text-gray-300 hover:text-purple-400 transition-colors duration-300">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <nav className="space-y-3">
              <div className="text-gray-300">Life Coaching</div>
              <div className="text-gray-300">Behavioral Coaching</div>
              <div className="text-gray-300">Mental Health Support</div>
              <div className="text-gray-300">1-on-1 Sessions</div>
              <div className="text-gray-300">Group Workshops</div>
              <div className="text-gray-300">Masterclasses</div>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-purple-400 mt-0.5" />
                <div>
                  <a href="mailto:deepti@mentalfitnesssolutions.com" className="text-gray-300 hover:text-white transition-colors">
                    deepti@mentalfitnesssolutions.com
                  </a>
                  <p className="text-sm text-gray-400">Email us anytime</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-purple-400 mt-0.5" />
                <div>
                  <a href="tel:+15551234567" className="text-gray-300 hover:text-white transition-colors">
                    (555) 123-4567
                  </a>
                  <p className="text-sm text-gray-400">Call for immediate support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-700" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {/* Loukri AI Branding */}
          <div className="text-center space-y-3">
            <p className="text-xl font-bold bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Website built with ❤️ by Loukri AI Inc.
            </p>
            <p className="text-gray-300">
              Have an idea? We&apos;ll build anything for you.{" "}
              <a 
                href="https://www.loukriai.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 underline font-medium transition-colors duration-300 hover:shadow-lg"
              >
                www.loukriai.com
              </a>
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-gray-400 text-sm">
              © 2024 Mental Fitness Solutions LLC. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Professional mental health coaching by Dr. Deepti Talluri
            </p>
            <p className="text-gray-500 text-sm italic">
              Building mental wellness, one step at a time.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}