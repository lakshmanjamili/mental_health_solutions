"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Mail,
  Phone
} from "lucide-react";

export function ContactSection() {

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
            Connect With Me
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your journey to better mental health? We&apos;re here to support you every step of the way.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in text-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Let&apos;s Start Your Healing Journey
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
                Whether you&apos;re ready to book a session or have questions about our services, 
                we&apos;re here to help. Reach out today and take the first step toward a healthier, 
                more balanced you.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <Card className="hover-lift border-t-4 border-t-purple-600">
                <CardContent className="p-6 text-center">
                  <a href="mailto:deepti@mentalfitnesssolutions.com" className="block group">
                    <div className="bg-purple-100 p-3 rounded-full group-hover:bg-purple-200 transition-colors w-fit mx-auto mb-4">
                      <Mail className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Email Us</h4>
                      <p className="text-purple-600 font-semibold hover:text-purple-800 mb-1">deepti@mentalfitnesssolutions.com</p>
                      <p className="text-sm text-gray-500">Click to send email</p>
                    </div>
                  </a>
                </CardContent>
              </Card>

              <Card className="hover-lift border-t-4 border-t-blue-600">
                <CardContent className="p-6 text-center">
                  <a href="tel:+15551234567" className="block group">
                    <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors w-fit mx-auto mb-4">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Call Us</h4>
                      <p className="text-blue-600 font-semibold hover:text-blue-800 mb-1">(555) 123-4567</p>
                      <p className="text-sm text-gray-500">Click to call directly</p>
                    </div>
                  </a>
                </CardContent>
              </Card>

            </div>

          </div>

        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-12 animate-fade-in">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Life?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Don&apos;t wait to start your journey to better mental health. 
            Book your free consultation today and discover how we can help you thrive.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-4 rounded-full hover-lift"
            asChild
          >
            <a href="tel:+15551236463">
              <Phone className="h-5 w-5 mr-2" />
              Call Dr. Deepti Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
