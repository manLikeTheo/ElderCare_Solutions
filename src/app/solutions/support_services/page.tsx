import { FaDumbbell, FaLightbulb } from "react-icons/fa";
import HeroSection from "../_components/HeroSection";
import FAQSection from "../_components/FAQ";
import BenefitsSection from "../_components/keyBenefits";

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

const SupportServicesPage = () => {
  return (
    <div className="bg-neutral-50 max-w-container p-3 *:py-2">
      <HeroSection
        title="Aceess our dependable Care and Support Network"
        tagline="Community-Driven Support Services - from anywhere in the world"
        description="Trusted Local Care and Support Services for Every Seniors Need"
        // heroImage={}
      />

      <div className="about my-6 p-3">
        <h2 className="text-4xl font-bold my-4 text-center">
          Our Elderly Care Kits
        </h2>
        <p className="text-lg text-center">
          AgeBuddy is the game-changer in senior care, uniquely designed to
          bridge the generational divide by offering a seamless, all-in-one
          digital companion for Nigerian seniors. More than just a platform,
          AgeBuddy is a digital lifeline that brings together wellness,
          connectivity, and daily support in an accessible and intuitive way.
          Developed specifically with the elderly in mind, AgeBuddy transforms
          the digital experience into one that enhances their quality of life.
          Whether it’s staying in touch with family and friends, receiving
          personalized wellness tips, or accessing vital healthcare resources,
          AgeBuddy ensures that seniors are never alone. Our easy-to-use
          interface is designed to keep seniors engaged and connected without
          overwhelming them, allowing for a safe and empowering experience. The
          platform acts as a friendly companion—always just a tap away—offering
          reminders, support, and real-time updates, making it easier than ever
          for seniors to live independently and confidently.
        </p>
      </div>

      <BenefitsSection benefits={benefits} />
      {/* <HowItWorksSection /> */}
      <FAQSection faqs={faqs} />
    </div>
  );
};

export default SupportServicesPage;
