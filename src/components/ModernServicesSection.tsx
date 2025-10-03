"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  Heart, 
  Brain, 
  Target, 
  Sparkles, 
  ArrowRight,
  Clock,
  CheckCircle
} from "lucide-react";
import Link from "next/link";

export function ModernServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, type: "spring", stiffness: 100, damping: 15 }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0, rotateY: -45 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: { duration: 0.6, type: "spring", stiffness: 120, damping: 20 }
    }
  };

  const services = [
    {
      title: "Life Coaching",
      description: "Fuel growth, one insightful question at a time. Together, we'll journey deeply into your untapped potential with tailored guidance and continuous support.",
      icon: Target,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      hoverColor: "hover:bg-purple-100",
      gradient: "from-purple-500 to-purple-600",
      features: ["Goal setting & motivation", "Career transitions", "Confidence building", "Time management & productivity"]
    },
    {
      title: "Behavioral Coaching",
      description: "Transform your habits and behaviors with evidence-based strategies. Build emotional regulation and develop sustainable positive changes.",
      icon: Brain,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      hoverColor: "hover:bg-blue-100",
      gradient: "from-blue-500 to-blue-600",
      features: ["Habit change & accountability", "Emotional regulation", "Stress management", "Cognitive restructuring"]
    },
    {
      title: "Mental Health Coaching",
      description: "Compassionate support for your mental wellness journey. Navigate challenges with mindfulness and build healthy relationships.",
      icon: Heart,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      hoverColor: "hover:bg-pink-100",
      gradient: "from-pink-500 to-pink-600",
      features: ["Support for anxiety & depression", "Mindfulness & self-compassion", "Navigating trauma & grief", "Building healthy relationships"]
    },
    {
      title: "Personalized 1-on-1 Coaching",
      description: "Together, we'll journey deeply into your untapped potential. With tailored guidance and continuous support, craft a life of purpose and surpass your greatest dreams.",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-50",
      hoverColor: "hover:bg-green-100",
      gradient: "from-green-500 to-green-600",
      features: ["Weekly 1-hour sessions", "Personalized treatment plans", "Progress tracking", "Continuous support"]
    },
    {
      title: "Tailored Workshops for Success",
      description: "Participate in interactive sessions crafted for your team's distinct goals. Our workshops promote collaboration, boost skills, and elevate teamwork to remarkable achievements.",
      icon: Users,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      hoverColor: "hover:bg-indigo-100",
      gradient: "from-indigo-500 to-indigo-600",
      features: ["Interactive group sessions", "Team collaboration", "Skill building", "Goal achievement"]
    },
    {
      title: "Empowering Masterclasses",
      description: "Dive into masterclasses designed to reshape mindset challenges, embrace change, and boost both personal and professional success. Unveil a confident and focused you.",
      icon: Sparkles,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      hoverColor: "hover:bg-yellow-100",
      gradient: "from-yellow-500 to-yellow-600",
      features: ["Mindset transformation", "Change management", "Professional development", "Confidence building"]
    }
  ];

  return (
    <section ref={ref} id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-50"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            type: "spring", stiffness: 50, damping: 10
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-48 h-48 bg-blue-100 rounded-full blur-3xl opacity-40"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            type: "spring", stiffness: 50, damping: 10
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-6 py-3"
              whileHover={{ scale: 1.05 }}
            >
              <Heart className="h-5 w-5 text-purple-600" />
              <span className="text-purple-600 font-semibold">Our Services</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
              <motion.span 
                className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent block"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200% 200%"
                }}
              >
                Comprehensive
              </motion.span>
              <span className="block mt-2">Mental Health Care</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Personalized therapy services designed to meet you where you are and help you thrive
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 50
                }}
                className="group perspective-1000"
              >
                <Card className={`h-full ${service.bgColor} ${service.hoverColor} border-l-4 border-l-${service.color.split('-')[1]}-500 transition-all duration-300 shadow-lg hover:shadow-2xl transform-gpu`}>
                  <CardContent className="p-8 space-y-6">
                    {/* Icon */}
                    <motion.div
                      className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center shadow-lg`}
                      animate={{
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        type: "spring", stiffness: 50, damping: 10,
                        delay: index * 0.5
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <service.icon className={`h-8 w-8 ${service.color}`} />
                      </motion.div>
                    </motion.div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            className="flex items-center space-x-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ delay: (index * 0.1) + (featureIndex * 0.1) + 0.5 }}
                          >
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white font-semibold py-3 rounded-xl shadow-lg`}
                        asChild
                      >
                        <Link href="#contact">
                          <span>Learn More</span>
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div 
            variants={itemVariants}
            className="text-center space-y-8"
          >
            <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-3xl p-12 text-white relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full"
                     style={{
                       backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`
                     }}
                />
              </div>

              <div className="relative z-10 space-y-6">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center"
                >
                  <Heart className="h-8 w-8 text-white" />
                </motion.div>

                <h3 className="text-3xl md:text-4xl font-bold">
                  Ready to Start Your Journey?
                </h3>
                
                <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                  Take the first step towards better mental health. Dr. Deepti is here to support you every step of the way.
                </p>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-white text-purple-600 hover:bg-gray-100 font-bold text-lg px-8 py-4 rounded-full shadow-xl"
                    asChild
                  >
                    <Link href="#contact">
                      <Clock className="mr-2 h-5 w-5" />
                      Get in Touch
                      <Sparkles className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute top-6 right-6 w-4 h-4 bg-yellow-300 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  type: "spring", stiffness: 50, damping: 10
                }}
              />
              <motion.div
                className="absolute bottom-6 left-6 w-6 h-6 bg-pink-300 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  type: "spring", stiffness: 50, damping: 10,
                  delay: 1
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
