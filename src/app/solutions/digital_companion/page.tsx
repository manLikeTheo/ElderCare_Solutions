import React from "react";
import HeroSection from "../_components/HeroSection";
import BenefitsSection from "../_components/keyBenefits";
import FAQSection from "../_components/FAQ";
import digital_companion from "../../../../public/Startup Website/digital-companion.png";
import { FaDumbbell, FaLightbulb } from "react-icons/fa";
import HowItWorksSection from "../_components/howItWorks";
import WhyChooseUsSection from "../_components/WhyChooseUsSection";

// benefits
const benefits = [
  {
    icon: <FaDumbbell size={75} />,
    heading: "Enhance Digital Confidence",
    description:
      "Interactive tutorials and guided steps built into the app empower seniors to improve their digital literacy, building confidence in navigating technology.",
  },
  {
    icon: <FaLightbulb size={75} />,
    heading: "User-Friendly Design",
    description:
      "Interactive tutorials and guided steps built into the app empower seniors to improve their digital literacy, building confidence in navigating technology.",
  },
  {
    icon: <FaLightbulb size={75} />,
    heading: "Boost Wellness",
    description:
      "AgeBuddy provides tailored wellness tips, medication reminders, and activity prompts to help seniors maintain a healthy, active lifestyle. With interactive health tracking, it empowers seniors to take charge of their well-being.",
  },
  {
    icon: <FaLightbulb size={75} />,
    heading: "Senior-Friendly UserExperience",
    description:
      "Built with seniors in mind, AgeBuddy offers a straightforward layout with large icons, intuitive navigation, and accessibility features, ensuring it’s usable by seniors with varying tech comfort levels.",
  },
];

// FAQs
const faqs = [
  {
    question: "What is AgeBuddy?",
    answer:
      "AgeBuddy is a digital solution designed to help seniors stay connected and engaged.",
  },
  {
    question: "How does AgeBuddy work?",
    answer:
      "AgeBuddy uses a user-friendly interface to connect seniors with the support and services they need.",
  },
  {
    question: "Is AgeBuddy easy to use?",
    answer:
      "Yes, AgeBuddy is designed to be simple and intuitive for seniors, with large buttons and clear navigation.",
  },
];

const AgebuddyDigitalCompanion = () => {
  return (
    <div className="bg-stone-50 max-w-container p-3 *:py-2">
      <HeroSection
        title="Agebuddy Digital Companion"
        tagline="Stay Connected, Informed, and Supported!"
        description="Aging shouldn’t mean losing connection with the world.  AgeBuddy is your ultimate digital companion, designed to help seniors stay informed, organized, and socially connected."
        heroImage={digital_companion}
      />

      <WhyChooseUsSection />

      <BenefitsSection benefits={benefits} />
      {/* <HowItWorksSection /> */}
      <FAQSection faqs={faqs} />
    </div>
  );
};

export default AgebuddyDigitalCompanion;
