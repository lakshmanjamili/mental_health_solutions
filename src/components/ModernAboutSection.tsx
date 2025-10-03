"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Heart, Users, Star, Brain, Sparkles } from "lucide-react";
import Link from "next/link";

export function ModernAboutSection() {
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

  const statsVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, type: "spring", stiffness: 120, damping: 20 }
    }
  };

  return (
    <section ref={ref} id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-30"
          animate={{
            scale: [1, 1.2],
            rotate: [0, 180],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-48 h-48 bg-blue-200 rounded-full blur-3xl opacity-30"
          animate={{
            scale: [1, 1.3],
            x: [0, 50],
          }}
          transition={{
            duration: 15,
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
              className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-4 py-2"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="h-4 w-4 text-purple-600" />
              <span className="text-purple-600 font-medium">Meet Your Doctor</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
              About{" "}
              <motion.span 
                className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
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
                Dr. Deepti Talluri
              </motion.span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transforming lives through compassionate mental health care and evidence-based therapeutic approaches
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid md:grid-cols-4 gap-8"
          >
            {[
              { icon: Award, value: "14+", label: "Years Experience", color: "from-purple-500 to-purple-600", bg: "bg-purple-100" },
              { icon: CheckCircle, value: "✓", label: "Proven Methods", color: "from-green-500 to-green-600", bg: "bg-green-100" },
              { icon: Heart, value: "♥", label: "Compassionate Care", color: "from-pink-500 to-pink-600", bg: "bg-pink-100" },
              { icon: Brain, value: "🎯", label: "Personalized Approach", color: "from-blue-500 to-blue-600", bg: "bg-blue-100" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={statsVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100"
              >
                <motion.div
                  className={`w-16 h-16 mx-auto rounded-full ${stat.bg} flex items-center justify-center mb-4`}
                  animate={{
                    rotate: [0, 5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    type: "spring", stiffness: 50, damping: 10,
                    delay: index * 0.5
                  }}
                >
                  <stat.icon className={`h-8 w-8 bg-gradient-to-r ${stat.color} text-transparent bg-clip-text`} />
                </motion.div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image/Visual */}
            <motion.div variants={itemVariants} className="relative">
              <motion.div
                className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 rounded-3xl p-8 text-white relative overflow-hidden"
                whileHover={{
                  scale: 1.02,
                  rotateY: 5,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full"
                       style={{
                         backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='4'/%3E%3Ccircle cx='40' cy='20' r='4'/%3E%3Ccircle cx='20' cy='40' r='4'/%3E%3Ccircle cx='40' cy='40' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
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
                    className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center"
                  >
                    <Brain className="h-10 w-10 text-white" />
                  </motion.div>

                  <h3 className="text-3xl font-bold">Expert Mental Health Care</h3>
                  
                  <div className="space-y-4">
                    {[
                      "Licensed Clinical Therapist",
                      "Specialized in Anxiety & Depression",
                      "Evidence-Based Treatment Methods",
                      "Personalized Therapy Plans"
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.2 + 1 }}
                      >
                        <motion.div
                          animate={{ scale: [1, 1.2] }}
                          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", delay: index * 0.3 }}
                        >
                          <CheckCircle className="h-5 w-5 text-green-300" />
                        </motion.div>
                        <span className="text-white/90">{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20"
                    whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                  >
                    <p className="text-white/90 italic">
                      &quot;Every person deserves to feel understood, supported, and empowered on their journey to mental wellness.&quot;
                    </p>
                    <p className="text-white/70 text-sm mt-2">- Dr. Deepti Talluri</p>
                  </motion.div>
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute top-6 right-6 w-6 h-6 bg-yellow-300 rounded-full"
                  animate={{
                    scale: [1, 1.2],
                    opacity: [0.7, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    type: "spring", stiffness: 50, damping: 10
                  }}
                />
                <motion.div
                  className="absolute bottom-6 left-6 w-4 h-4 bg-pink-300 rounded-full"
                  animate={{
                    scale: [1, 1.3],
                    opacity: [0.5, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    type: "spring", stiffness: 50, damping: 10,
                    delay: 1
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Right - Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Your Journey to{" "}
                  <motion.span 
                    className="text-purple-600"
                    animate={{ opacity: [0.7, 1] }}
                    transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                  >
                    Mental Wellness
                  </motion.span>{" "}
                  Starts Here
                </h3>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Dr. Deepti Talluri brings over 14 years of dedicated experience in mental health care, 
                  combining evidence-based therapeutic approaches with genuine compassion and understanding.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      title: "Personalized Treatment Plans",
                      desc: "Every individual's journey is unique. Our approach is tailored specifically to your needs and goals.",
                      icon: Users
                    },
                    {
                      title: "Evidence-Based Methods",
                      desc: "Utilizing proven therapeutic techniques backed by the latest research in mental health.",
                      icon: Star
                    },
                    {
                      title: "Compassionate Care",
                      desc: "Creating a safe, non-judgmental space where you can feel truly heard and understood.",
                      icon: Heart
                    }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 10px 30px rgba(0,0,0,0.1)" 
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: index * 0.2 + 0.5 }}
                    >
                      <div className="flex items-start space-x-4">
                        <motion.div
                          className="bg-purple-100 rounded-full p-3"
                          animate={{ rotate: [0, 5] }}
                          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: index * 0.5 }}
                        >
                          <feature.icon className="h-6 w-6 text-purple-600" />
                        </motion.div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                          <p className="text-gray-600 text-sm">{feature.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-full shadow-xl"
                  asChild
                >
                  <Link href="#contact">
                    <Heart className="mr-2 h-5 w-5" />
                    Connect with Dr. Deepti
                    <Sparkles className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
