"use client";
import { motion } from "framer-motion";
import {
  FiUsers,
  FiShield,
  FiHeart,
  FiClock,
  FiDollarSign,
  FiHome,
} from "react-icons/fi";
import HeroSection from "../_components/HeroSection";
// import communityCareImage from "../../../../public/community-care-hero.jpg";
import Image from "next/image";

const SupportServicesPage = () => {
  return (
    <div className="bg-gradient-to-b from-stone-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                <span className="bg-gradient-to-r from-rose-700 to-rose-500 bg-clip-text text-transparent">
                  Community-Powered
                </span>
                <br />
                Care Network
              </h1>
              <p className="text-xl text-slate-600 md:pr-20">
                Connecting families with trusted local caregivers for
                compassionate, culturally-attuned senior support.
              </p>
              <div className="flex gap-4">
                <button className="bg-rose-700 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-rose-800 transition-colors">
                  Find Caregiver
                </button>
                <button className="border-2 border-rose-700 text-rose-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-rose-50 transition-colors">
                  How It Works
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <Image
                // src={communityCareImage.src}
                alt="Community Care Network"
                className="rounded-3xl shadow-2xl border-8 border-white"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-rose-700">4.9★</div>
                  <div className="text-slate-600">Average Rating</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-slate-900">
                Why Our Community Network Works
              </h2>
              <p className="text-lg text-slate-600">
                Traditional senior care often feels impersonal. We bridge the
                gap with:
              </p>
              <ul className="space-y-4">
                {[
                  "Local caregivers who understand cultural nuances",
                  "Same-day service availability",
                  "Transparent pricing & real-time updates",
                  "Rigorous vetting & continuous training",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-rose-700 rounded-full" />
                    </div>
                    <span className="text-xl">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: <FiUsers className="w-12 h-12" />,
                  label: "Active service providers",
                  value: "500+",
                },
                {
                  icon: <FiHeart className="w-12 h-12" />,
                  label: "Families Helped",
                  value: "2K+",
                },
                {
                  icon: <FiClock className="w-12 h-12" />,
                  label: "Avg Response Time",
                  value: "<2hrs",
                },
                {
                  icon: <FiShield className="w-12 h-12" />,
                  label: "Verified Partners",
                  value: "100%",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="p-8 bg-stone-200 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="text-rose-700 mb-4">{item.icon}</div>
                  <div className="text-3xl font-bold text-slate-900">
                    {item.value}
                  </div>
                  <div className="text-slate-500">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-rose-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            Comprehensive Care Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FiHome className="w-12 h-12" />,
                title: "Home Care",
                description: "Daily living assistance & household support",
              },
              {
                icon: <FiUsers className="w-12 h-12" />,
                title: "Companionship",
                description: "Social interaction & activity partners",
              },
              {
                icon: <FiHeart className="w-12 h-12" />,
                title: "Health Support",
                description: "Medication management & wellness checks",
              },
              {
                icon: <FiDollarSign className="w-12 h-12" />,
                title: "Errand Services",
                description: "Groceries, prescriptions & personal tasks",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.25 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-rose-700 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-slate-600 text-lg">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            Simple 3-Step Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Share Your Needs",
                description:
                  "Tell us what help you need through our app or website",
              },
              {
                step: "02",
                title: "Match with Caregiver",
                description: "We connect you with the best local provider",
              },
              {
                step: "03",
                title: "Care Delivered",
                description: "Receive quality care with real-time updates",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-rose-700 text-2xl font-bold mb-2">
                  {step.step}
                </div>
                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportServicesPage;
