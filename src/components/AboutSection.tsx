"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Heart, Target, Award } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16 animate-slide-up">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
            Who We Are
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Mental Fitness Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Mental Fitness Solutions, we believe that every person has the capacity to thrive. 
            Our sessions blend evidence-based behavioral strategies with compassionate guidance to help you 
            overcome obstacles, build resilience, and create a life aligned with your values.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Column - About Content */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Personalized Sessions for Mental Clarity and Emotional Well-being
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our sessions are designed to support your mental well-being by addressing a wide range of 
                emotional challenges and psychological barriers. Through evidence-based therapeutic approaches, 
                we help you explore unresolved emotions, identify cognitive distortions, and work through 
                internal conflicts that may be limiting your potential.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're struggling with anxiety, depression, trauma, low self-esteem, grief, or chronic stress, 
                we provide a safe, compassionate space for healing and growth. We focus on uncovering emotional blockages, 
                improving emotional regulation, and enhancing self-awareness to empower you to lead a more balanced and fulfilling life.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="hover-lift">
                <CardContent className="p-6 text-center">
                  <Heart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">Compassionate Care</h4>
                  <p className="text-sm text-gray-600">Safe, non-judgmental environment</p>
                </CardContent>
              </Card>
              <Card className="hover-lift">
                <CardContent className="p-6 text-center">
                  <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">Personalized Approach</h4>
                  <p className="text-sm text-gray-600">Tailored to your unique needs</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column - Doctor Profile */}
          <div className="animate-fade-in">
            <Card className="bg-white shadow-xl hover-lift">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <GraduationCap className="h-16 w-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Meet Your Doctor Coach</h3>
                  <h4 className="text-xl gradient-text font-semibold mb-4">Dr. Deepti Talluri</h4>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-purple-600" />
                    <span className="text-gray-700">Medicine and Psychology Background</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Target className="h-5 w-5 text-purple-600" />
                    <span className="text-gray-700">14+ Years of Experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Heart className="h-5 w-5 text-purple-600" />
                    <span className="text-gray-700">Specializes in Anxiety, Burnout & Transitions</span>
                  </div>
                </div>

                <blockquote className="italic text-gray-700 text-center border-l-4 border-purple-600 pl-4">
                  &quot;My mission is to help you reconnect with your inner strength and live with purpose.&quot;
                </blockquote>

                <div className="mt-6 flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Anxiety Specialist</Badge>
                  <Badge variant="secondary">Burnout Recovery</Badge>
                  <Badge variant="secondary">Life Transitions</Badge>
                  <Badge variant="secondary">Relationship Coaching</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-4 gap-8 text-center animate-fade-in">
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">14+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">✓</div>
            <div className="text-gray-600">Proven Methods</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">♥</div>
            <div className="text-gray-600">Compassionate Care</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">🎯</div>
            <div className="text-gray-600">Personalized Approach</div>
          </div>
        </div>
      </div>
    </section>
  );
}
