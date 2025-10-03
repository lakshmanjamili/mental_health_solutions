"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Clock } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="gradient-bg min-h-screen flex items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-white space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Clarity begins with{" "}
                <span className="text-yellow-300">caring</span> for your{" "}
                <span className="text-yellow-300">Emotional</span> and mental well-being
              </h1>
              <p className="text-xl md:text-2xl text-blue-100">
                Take the first step toward a balanced, healthier you.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
                <Star className="h-5 w-5 text-yellow-300" />
                <span>14+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
                <Users className="h-5 w-5 text-yellow-300" />
                <span>Proven Results</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
                <Clock className="h-5 w-5 text-yellow-300" />
                <span>Flexible Scheduling</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-lg px-8 py-4 rounded-full"
                disabled
              >
                📞 Coming Soon
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-purple-600 font-semibold text-lg px-8 py-4 rounded-full"
                asChild
              >
                <Link href="#about">
                  Contact Dr. Deepti
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Image/Visual */}
          <div className="relative animate-fade-in">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 space-y-6">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-4">Start Your Journey Today</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-white/20 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">💬 Free 30-Min Consultation</h4>
                    <p className="text-sm text-blue-100">Discover your path to healing</p>
                  </div>
                  <div className="bg-white/20 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">🎯 Personalized Approach</h4>
                    <p className="text-sm text-blue-100">Tailored to your unique needs</p>
                  </div>
                  <div className="bg-white/20 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">🌱 Evidence-Based Methods</h4>
                    <p className="text-sm text-blue-100">Proven therapeutic techniques</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
