"use client";
import { motion } from "framer-motion";
import {
  FiPackage,
  FiShield,
  FiHeart,
  FiStar,
  FiShoppingCart,
} from "react-icons/fi";
import HeroSection from "../_components/HeroSection";
import Image from "next/image";
// import careKitHero from "../../../../public/care-kit-hero.jpg";

const CareKitsPage = () => {
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
                  Senior Care Kits
                </span>
                <br />
                Essentials for Safe, Independent Living
              </h1>
              <p className="text-xl text-slate-600 md:pr-20">
                Curated packages delivering safety, comfort, and peace of mind
                directly to seniors' doorsteps across Nigeria.
              </p>
              <div className="flex gap-4">
                <button className="bg-rose-700 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-rose-800 transition-colors">
                  Order Now
                </button>
                <button className="border-2 border-rose-700 text-rose-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-rose-50 transition-colors">
                  View Contents
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <Image
                // src={careKitHero.src}
                alt="Senior Care Kit"
                className="rounded-3xl shadow-2xl border-8 border-white"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-rose-700">4.8★</div>
                  <div className="text-slate-600">Customer Rating</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Kit Contents Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            What's Inside Every Kit
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            {[
              {
                icon: <FiShield className="w-12 h-12" />,
                title: "Safety Essentials",
                items: [
                  "Non-slip mats",
                  "Emergency alert whistle",
                  "Night lights",
                ],
              },
              {
                icon: <FiHeart className="w-12 h-12" />,
                title: "Health Management",
                items: [
                  "Pill organizer",
                  "Blood pressure monitor",
                  "First aid kit",
                ],
              },
              {
                icon: <FiPackage className="w-12 h-12" />,
                title: "Daily Comfort",
                items: ["Ergonomic utensils", "Compression socks", "Bath seat"],
              },
              {
                icon: <FiStar className="w-12 h-12" />,
                title: "Premium Add-ons",
                items: [
                  "Air purifier",
                  "Smart medication dispenser",
                  "Fall detector",
                ],
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-stone-200/65 p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-rose-700 mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold mb-4 tracking-wide">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-slate-600/90 text-[17px] font-medium"
                    >
                      <div className="w-2 h-2 bg-rose-700 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-rose-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "48h", label: "Delivery Nationwide" },
                { value: "100%", label: "Satisfaction Guarantee" },
                { value: "5K+", label: "Kits Delivered" },
                { value: "24/7", label: "Support Team" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="text-3xl font-bold text-slate-900">
                    {stat.value}
                  </div>
                  <div className="text-slate-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-slate-900">
                Why Our Care Kits Stand Out
              </h2>
              <ul className="space-y-4">
                {[
                  "Curated by geriatric care specialists",
                  "Localized for Nigerian homes",
                  "Flexible subscription options",
                  "Eco-friendly packaging",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-rose-700 rounded-full" />
                    </div>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            Choose Your Plan
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                tier: "Basic",
                price: "₦15,000",
                features: [
                  "Safety essentials",
                  "Monthly refills",
                  "Basic support",
                ],
              },
              {
                tier: "Premium",
                price: "₦25,000",
                features: [
                  "All basic features",
                  "Health monitoring tools",
                  "Priority shipping",
                ],
                popular: true,
              },
              {
                tier: "Custom",
                price: "Custom",
                features: [
                  "Tailored contents",
                  "Bulk discounts",
                  "Dedicated support",
                ],
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className={`p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all ${
                  plan.popular ? "bg-rose-700 text-white" : "bg-white"
                }`}
              >
                {plan.popular && (
                  <div className="bg-white text-rose-700 px-4 py-1 rounded-full text-sm font-bold mb-4 w-fit">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.tier}</h3>
                <div className="text-4xl font-bold mb-6">{plan.price}</div>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          plan.popular ? "bg-white" : "bg-rose-700"
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-6 w-full py-3 rounded-xl font-semibold ${
                    plan.popular
                      ? "bg-white text-rose-700"
                      : "bg-rose-700 text-white"
                  }`}
                >
                  Select Plan
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareKitsPage;
