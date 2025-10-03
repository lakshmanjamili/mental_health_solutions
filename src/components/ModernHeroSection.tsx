"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Clock, Heart, Brain, Sparkles } from "lucide-react";
import Link from "next/link";
import { AnimatedBackground } from "./AnimatedBackground";

export function ModernHeroSection() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

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
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Glowing orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-purple-400 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-pink-400 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-48 h-48 bg-blue-400 rounded-full blur-3xl opacity-15"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Floating medical icons */}
      <motion.div
        className="absolute top-32 right-32 text-white/20"
        variants={floatingVariants}
        animate="animate"
      >
        <Heart className="h-16 w-16" />
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-32 text-white/20"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
      >
        <Brain className="h-12 w-12" />
      </motion.div>
      <motion.div
        className="absolute top-1/3 left-16 text-white/20"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      >
        <Sparkles className="h-10 w-10" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Left Column - Content */}
          <div className="text-white space-y-8">
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Animated badge */}
              <motion.div 
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 border border-white/20"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Sparkles className="h-4 w-4 text-yellow-300" />
                <span className="text-sm font-medium">Mental Fitness Solutions LLC</span>
              </motion.div>

              {/* Main headline with typing effect */}
              <motion.h1 
                className="text-5xl md:text-7xl font-bold leading-tight"
                variants={itemVariants}
              >
                <motion.span
                  className="block bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: "200% 200%"
                  }}
                >
                  Clarity begins
                </motion.span>
                <span className="block">with{" "}
                  <motion.span 
                    className="text-yellow-300 inline-block"
                    animate={{ 
                      textShadow: [
                        "0 0 20px rgba(253, 224, 71, 0.5)",
                        "0 0 40px rgba(253, 224, 71, 0.8)",
                        "0 0 20px rgba(253, 224, 71, 0.5)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    caring
                  </motion.span>
                </span>
                <span className="block text-blue-100">for your mind</span>
              </motion.h1>

              <motion.p 
                className="text-xl md:text-2xl text-blue-100 leading-relaxed"
                variants={itemVariants}
              >
                Take the first step toward a balanced, healthier you with 
                <motion.span 
                  className="text-yellow-300 font-semibold"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {" "}Dr. Deepti Talluri
                </motion.span>
              </motion.p>
            </motion.div>

            {/* Animated stats */}
            <motion.div 
              className="flex flex-wrap gap-6"
              variants={itemVariants}
            >
              {[
                { icon: Star, text: "14+ Years Experience", color: "text-yellow-300" },
                { icon: Users, text: "Proven Results", color: "text-green-300" },
                { icon: Clock, text: "Flexible Scheduling", color: "text-blue-300" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                  }}
                  variants={pulseVariants}
                  animate="animate"
                  transition={{ delay: index * 0.5 }}
                >
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  <span className="font-medium">{stat.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold text-lg px-8 py-4 rounded-full shadow-2xl"
                  asChild
                >
                  <a href="tel:+15551234567">
                    <motion.span
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      📞
                    </motion.span>
                    <span className="ml-2">Call for FREE Consultation</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-purple-600 backdrop-blur-lg font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300"
                  asChild
                >
                  <Link href="#about">
                    <Heart className="mr-2 h-5 w-5" />
                    Meet Dr. Deepti
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - 3D Card Effect */}
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <motion.div
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl"
              whileHover={{
                rotateY: 5,
                rotateX: 5,
                scale: 1.02
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-center text-white space-y-6">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="w-20 h-20 mx-auto bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center"
                >
                  <Brain className="h-10 w-10 text-white" />
                </motion.div>
                
                <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                  Transform Your Mind
                </h3>
                
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { icon: "💎", title: "Premium Care", desc: "Personalized approach" },
                    { icon: "🌟", title: "Proven Methods", desc: "Evidence-based healing" },
                    { icon: "❤️", title: "Compassionate Support", desc: "Safe, caring environment" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/5 rounded-xl p-4 border border-white/10"
                      whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 + 1 }}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <h4 className="font-semibold">{item.title}</h4>
                          <p className="text-sm text-blue-100">{item.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating elements around the card */}
            <motion.div
              className="absolute -top-6 -right-6 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Sparkles className="h-6 w-6 text-black" />
            </motion.div>
            
            <motion.div
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center"
              animate={{
                y: [0, 15, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart className="h-8 w-8 text-white" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator with animation */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-lg">
          <motion.div 
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{
              y: [0, 16, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
