"use client";

import { motion } from "framer-motion";
import { FiSmartphone, FiHeart, FiUsers, FiShield } from "react-icons/fi";
import HeroSection from "../_components/HeroSection";
import digital_companion from "../../../../public/Startup Website/digital-companion.png";
import ValueProposition from "../_components/ValueProposition";
import Features from "../_components/Features";
import SolutionTestimonial from "../_components/SolutionTestimonial";

const value_propositions = [
  {
    icon: <FiSmartphone className="w-12 h-12 text-rose-700" />,
    heading: "Intuitive Design",
    description: "Large buttons, clear navigation, voice commands",
  },
  {
    icon: <FiHeart className="w-12 h-12 text-rose-700" />,
    heading: "Health First",
    description: "Medication tracking & wellness programs",
  },
  {
    icon: <FiUsers className="w-12 h-12 text-rose-700" />,
    heading: "Family Connect",
    description: "Secure family portal for updates & communication",
  },
  {
    icon: <FiShield className="w-12 h-12 text-rose-700" />,
    heading: "Safe & Secure",
    description: "Bank-level encryption & privacy",
  },
];

const features = [
  "Voice-controlled interface in local languages",
  "Daily check-in reminders & emergency alerts",
  "Virtual family reunion scheduling",
  "Curated local community events",
  "Health & wellness programs",
  "Family portal for updates & communication",
  "Secure and private communication",
];

const testimonials = [
  {
    id: 1,
    name: "Adeola Bankole",
    role: "Daughter in Toronto",
    text: "My parents in Lagos finally feel tech-savvy! WellAged's simple interface keeps them connected to our family in Canada.",
    image: "/testimonials/user1.jpg",
  },
  {
    id: 2,
    name: "Chioma Nwosu",
    role: "Daughter in UK",
    text: "The Care Kits are incredibly convenient. No more worrying about sourcing quality products for my grandmother. Delivery is always prompt!",
    image: "/testimonials/user2.jpg",
  },
  {
    id: 3,
    name: "Emeka Okoro",
    role: "Family Caregiver",
    text: "The training and support from WellAged Care have helped me provide better care for my clients. The platform makes coordination with families abroad seamless.",
    image: "/testimonials/user3.jpg",
  },
];

const WellAgedDigitalCompanion = () => {
  return (
    <div className="bg-gradient-to-b from-stone-50 to-white">
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight"
              >
                <span className="bg-gradient-to-r from-rose-700 to-rose-500 bg-clip-text text-transparent">
                  WellAged
                </span>{" "}
                Digital Companion
              </motion.h1>
              <p className="text-xl text-slate-600 md:pr-20">
                Your all-in-one platform for connected, empowered aging.
                Designed specifically for Nigerian seniors to thrive in the
                digital age.
              </p>
              <div className="flex gap-4">
                <button className="bg-rose-700 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-rose-800 transition-colors">
                  Start Free Trial
                </button>
                <button className="border-2 border-rose-700 text-rose-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-rose-50 transition-colors">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src={digital_companion.src}
                alt="Digital Companion Interface"
                className="rounded-3xl shadow-2xl border-8 border-white"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-rose-700">98%</div>
                  <div className="text-slate-600">User Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <ValueProposition valuePropositions={value_propositions} />

      {/* Feature Highlight Section */}
      <Features features={features} />

      {/* Testimonial Section */}
      <SolutionTestimonial testimonials={testimonials} />
    </div>
  );
};

export default WellAgedDigitalCompanion;
