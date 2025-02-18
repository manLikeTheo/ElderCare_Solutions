"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  ShoppingCartIcon,
  UserPlusIcon,
  DevicePhoneMobileIcon,
  GiftIcon,
} from "@heroicons/react/24/outline";

function GettingStarted() {
  const steps = [
    {
      number: "01",
      title: "Create Your Family Profile",
      description: "2-minute signup to access our care ecosystem",
      icon: <UserPlusIcon className="w-8 h-8 text-purple-600" />,
      image: "/images/digital-companion-signup.jpg",
    },
    {
      number: "02",
      title: "Personalize Your Digital Companion",
      description:
        "Set preferences for health tracking, language, and family connections",
      icon: <DevicePhoneMobileIcon className="w-8 h-8 text-purple-600" />,
      image: "/images/digital-companion-setup.jpg",
    },
    {
      number: "03",
      title: "Choose Care Solutions",
      description: "Activate digital features or order physical Care Kits",
      icon: <GiftIcon className="w-8 h-8 text-purple-600" />,
      image: "/images/care-kit-unboxing.jpg",
    },
    {
      number: "04",
      title: "Connect & Engage",
      description:
        "Start using smart reminders, family chats, and care tracking",
      icon: <ArrowRightIcon className="w-8 h-8 text-purple-600" />,
      image: "/images/digital-companion-dashboard.jpg",
    },
  ];

  return (
    <section className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
            Start Your Care Journey in 4 Steps
          </h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto">
            Seamlessly blend digital care tools with physical wellness solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 xl:gap-12">
          {/* Steps Column */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-purple-100"
              >
                <div className="flex items-start gap-6">
                  {/* Number Badge */}
                  <div className="flex-shrink-0">
                    <span className="text-purple-600 text-xl font-bold bg-purple-50 rounded-lg w-14 h-14 flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="mb-2">{step.icon}</div>
                    <h3 className="text-xl font-semibold text-stone-800 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-stone-600 text-sm">{step.description}</p>
                  </div>
                </div>

                {/* Mobile Image */}
                <div className="mt-4 lg:hidden">
                  <div className="relative rounded-xl overflow-hidden aspect-video">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image Showcase (Desktop) */}
          <div className="hidden lg:block sticky top-24 h-[600px]">
            <div className="relative rounded-3xl shadow-2xl overflow-hidden h-full border-8 border-white">
              <Image
                src="/images/digital-companion-hero.jpg"
                alt="Digital Companion Preview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-purple-900/10 to-transparent" />
            </div>
          </div>
        </div>

        {/* Unified CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <h3 className="text-xl font-semibold text-stone-800 mb-4">
              Ready to Transform Senior Care?
            </h3>
            <Link
              href="/signup"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center gap-2"
            >
              Start Free Digital Trial
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <p className="mt-4 text-stone-600 text-sm">
              Includes 7-day digital companion access + Care Kit ordering
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default GettingStarted;
