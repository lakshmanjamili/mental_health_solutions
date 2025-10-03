"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Brain, 
  Heart, 
  Users, 
  TrendingUp, 
  Shield, 
  MessageCircle,
  Lightbulb,
  Zap,
  BookOpen,
  Award
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Target,
      title: "Life Coaching",
      description: "Fuel growth, one insightful question at a time.",
      features: [
        "Goal setting & motivation",
        "Career transitions", 
        "Confidence building",
        "Time management & productivity"
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Brain,
      title: "Behavioral Coaching", 
      description: "Transform habits and unlock your potential.",
      features: [
        "Habit change & accountability",
        "Emotional regulation",
        "Stress management", 
        "Cognitive restructuring"
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Heart,
      title: "Mental Health Coaching",
      description: "Compassionate support for your mental wellness journey.",
      features: [
        "Support for anxiety & depression",
        "Mindfulness & self-compassion",
        "Navigating trauma & grief",
        "Building healthy relationships"
      ],
      color: "text-pink-600", 
      bgColor: "bg-pink-50"
    }
  ];

  const additionalServices = [
    {
      icon: Users,
      title: "Personalized 1-on-1 coaching",
      description: "Together, we'll journey deeply into your untapped potential. With tailored guidance and continuous support, craft a life of purpose and surpass your greatest dreams.",
      color: "text-emerald-600"
    },
    {
      icon: BookOpen,
      title: "Tailored workshops for success", 
      description: "Participate in interactive sessions crafted for your team's distinct goals. Our workshops promote collaboration, boost skills, and elevate teamwork to remarkable achievements.",
      color: "text-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Transformative team coaching",
      description: "Unlock your team's potential with collaborative coaching. Together, we'll foster synergy and innovation, driving your business beyond your highest expectations.",
      color: "text-purple-600"
    },
    {
      icon: Award,
      title: "Empowering masterclasses",
      description: "Dive into masterclasses designed to reshape mindset challenges, embrace change, and boost both personal and professional success. Unveil a confident and focused you.",
      color: "text-orange-600"
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
            💬 What We Offer
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Mental Health Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            All coaching sessions are confidential, non-judgmental, and tailored to your unique needs.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="hover-lift border-0 shadow-lg">
              <CardHeader className={`${service.bgColor} text-center`}>
                <div className={`mx-auto mb-4 p-4 bg-white rounded-full w-fit`}>
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {service.title}
                </CardTitle>
                <p className="text-gray-600">{service.description}</p>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full ${service.color.replace('text-', 'bg-')} mt-2 flex-shrink-0`}></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full mt-6 ${service.color.replace('text-', 'bg-')} hover:opacity-90`}
                  variant="default"
                  asChild
                >
                  <a href="#contact">
                    Contact Us
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive support designed to meet you wherever you are in your journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover-lift border-0 shadow-md">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 bg-gray-50 rounded-full`}>
                      <service.icon className={`h-6 w-6 ${service.color}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-8 md:p-12 animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Services?</h3>
            <p className="text-lg text-gray-600">Experience the difference of personalized, evidence-based care</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Confidential</h4>
              <p className="text-sm text-gray-600">Complete privacy and discretion</p>
            </div>
            <div className="text-center">
              <MessageCircle className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Non-Judgmental</h4>
              <p className="text-sm text-gray-600">Safe space to express yourself</p>
            </div>
            <div className="text-center">
              <Lightbulb className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Evidence-Based</h4>
              <p className="text-sm text-gray-600">Proven therapeutic approaches</p>
            </div>
            <div className="text-center">
              <Zap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Personalized</h4>
              <p className="text-sm text-gray-600">Tailored to your unique needs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
