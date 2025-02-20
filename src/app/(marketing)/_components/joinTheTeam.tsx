"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Brain, Users } from "lucide-react";
import Link from "next/link";

export default function VibrantJoinTeam() {
  return (
    <section className="min-h-[400px] w-full bg-gradient-to-l from-blue-900 via-cyan-700 to-blue-900 p-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dynamic geometric shapes */}
        <motion.div
          className="w-64 h-64 rounded-full bg-cyan-300/70 absolute -right-20 -top-20 blur-lg"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="w-96 h-96 rounded-full bg-cyan-400/40 absolute -left-32 -bottom-32 blur-lg"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Title with enhanced sparkle effect */}
          <motion.div
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Sparkles className="w-8 h-8 text-yellow-300" />
            <h2 className="text-5xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-300">
              Join Our Team
            </h2>
            <Sparkles className="w-8 h-8 text-yellow-300" />
          </motion.div>

          {/* Main text */}
          <motion.p
            className="text-[24px] text-white font-medium max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We are looking for talented and passionate individuals eager to
            collaborate on impactful innovative solutions that enhance the lives
            of senior citizens.
          </motion.p>

          {/* Value propositions with glowing effects */}
          <motion.div
            className="grid grid-cols-3 gap-6 max-w-3xl mx-auto my-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              className="flex flex-col items-center gap-3 text-white p-4 rounded-xl bg-white/10 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
            >
              <Heart className="w-8 h-8 text-pink-300" />
              <span className="font-semibold">Make Impact</span>
            </motion.div>
            <motion.div
              className="flex flex-col items-center gap-3 text-white p-4 rounded-xl bg-white/10 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
            >
              <Brain className="w-8 h-8 text-cyan-300" />
              <span className="font-semibold">Drive Innovation</span>
            </motion.div>
            <motion.div
              className="flex flex-col items-center gap-3 text-white p-4 rounded-xl bg-white/10 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
            >
              <Users className="w-8 h-8 text-yellow-300" />
              <span className="font-semibold">Build Community</span>
            </motion.div>
          </motion.div>

          {/* Enhanced CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-4"
          >
            <Link href="/contact">
              <Button
                className="bg-gradient-to-r from-blue-900 via-cyan-500 to-violet-900 text-white 
                         px-12 py-6 text-xl rounded-xl font-bold
                         transform transition-all duration-300 hover:scale-110 
                         hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]
                         relative overflow-hidden group"
              >
                <span className="relative z-10">Get Onboard</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-violet-700 via-cyan-400 to-violet-900"
                  animate={{
                    x: ["0%", "100%", "0%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
