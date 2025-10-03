"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  CheckCircle, 
  Star
} from "lucide-react";

export function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredPackage: "",
    message: ""
  });

  const packages = [
    {
      name: "Clarity Starter",
      duration: "4 weeks",
      price: "$399",
      popular: false,
      includes: [
        "Weekly 1-hour sessions",
        "Email support between sessions",
        "Personalized goal setting",
        "Progress tracking tools"
      ],
      color: "bg-blue-50 border-blue-200"
    },
    {
      name: "Deep Dive",
      duration: "8 weeks", 
      price: "$749",
      popular: true,
      includes: [
        "Bi-weekly intensive sessions",
        "Personalized treatment plan",
        "Custom tools & guides",
        "24/7 emergency support",
        "Follow-up check-ins"
      ],
      color: "bg-purple-50 border-purple-200"
    },
    {
      name: "Thrive Unlimited",
      duration: "Monthly",
      price: "$249/mo",
      popular: false,
      includes: [
        "Unlimited messaging support",
        "2 video calls per month",
        "Access to all resources",
        "Group workshop access",
        "Cancel anytime"
      ],
      color: "bg-emerald-50 border-emerald-200"
    }
  ];

  const handlePackageSelect = (packageName: string) => {
    setFormData(prev => ({ ...prev, preferredPackage: packageName }));
  };

  return (
    <section id="booking" className="section-padding bg-gray-50 -mt-1">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
            📅 Booking Page
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Book Your Free Discovery Session Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Take the first step towards transformation. Schedule your complimentary consultation 
            and discover how we can support your mental wellness journey.
          </p>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                1. Schedule a Free 30-Minute Consultation
              </h4>
              <p className="text-gray-600">
                Book your complimentary discovery session to discuss your goals and challenges.
              </p>
            </div>
            <div className="text-center animate-fade-in">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                2. Choose Your Coaching Package
              </h4>
              <p className="text-gray-600">
                Select the program that best fits your needs and timeline for transformation.
              </p>
            </div>
            <div className="text-center animate-fade-in">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                3. Begin Your Journey to Transformation
              </h4>
              <p className="text-gray-600">
                Start your personalized coaching program and unlock your full potential.
              </p>
            </div>
          </div>
        </div>

        {/* Packages */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">Choose Your Package</h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`hover-lift cursor-pointer transition-all duration-300 ${pkg.color} ${
                  formData.preferredPackage === pkg.name ? 'ring-2 ring-purple-500' : ''
                } ${pkg.popular ? 'relative scale-105 shadow-xl' : 'shadow-md'}`}
                onClick={() => handlePackageSelect(pkg.name)}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </CardTitle>
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    {pkg.price}
                  </div>
                  <Badge variant="outline" className="text-sm">
                    {pkg.duration}
                  </Badge>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {pkg.includes.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${pkg.popular ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700' : 'bg-gray-900 hover:bg-gray-800'} text-white min-h-[50px] touch-manipulation text-lg sm:text-base`}
                    onClick={() => handlePackageSelect(pkg.name)}
                  >
                    {formData.preferredPackage === pkg.name ? 'Selected' : 'Select Package'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
