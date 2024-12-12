import {
  FaDumbbell,
  FaHome,
  FaLaptop,
  FaLightbulb,
  FaShieldAlt,
  FaUserMd,
} from "react-icons/fa";
import HeroSection from "../_components/HeroSection";
import FAQSection from "../_components/FAQ";
import BenefitsSection from "../_components/keyBenefits";
import TheProblemSection from "../_components/TheProblemSection";
import HowItWorks from "../_components/howItWorks";
import { FaHouseMedicalCircleCheck } from "react-icons/fa6";

// benefits
const benefits = [
  {
    icon: <FaUserMd size={75} />,
    heading: "Doctor Visits and Appointments",
    description:
      "Get help scheduling, attending, and navigating medical appointments with ease. No more having to go through the torture of uncomfortable transportation to the doctor's office on your own.",
  },
  {
    icon: <FaShieldAlt size={75} />,
    heading: "Trusted Professionals",
    description:
      "Vetted and trained for senior care, our support services are provided by a network of trusted professionals, ensuring quality and reliability.",
  },
  {
    icon: <FaLaptop size={75} />,
    heading: "Technology Assistance",
    description:
      "Get help in setting up devices, troubleshooting, and digital literacy training.",
  },
  {
    icon: <FaHouseMedicalCircleCheck size={75} />,
    heading: "Home Support",
    description:
      "From light cleaning to home maintenance, our support services cover everything you need to keep your aging parents safe and comfortable.",
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

// How it works Steps
const steps = [
  {
    title: "Request Support",
    description: "Use our platform to book the service you need.",
  },
  {
    title: "Get Matched",
    description:
      "We’ll connect you with a nearby helper who best suits your requirements.",
  },
  {
    title: "Experience Care",
    description:
      "Receive reliable, compassionate assistance whenever you need it.",
  },
];
const SupportServicesPage = () => {
  return (
    <div className="bg-stone-50 max-w-container p-3 *:py-2">
      <HeroSection
        title="Localized Care & Support Service"
        tagline="Community-Driven Support Services - from anywhere in the world"
        description="Navigating the Chalenges of Senior care is easier with our Localized Care and Support Service Network, a community of vetted trusted helpers who provide on-demand care and support for seniors in their communities."
        // heroImage={}
      />

      <TheProblemSection
        problem="Families, especially non-resident Nigerians, face a range of challenges when trying to care for elderly loved ones, often relying on informal care from relatives, which isn’t always sustainable."
        solution="Our Community-Powered Care and Support Services Connects families to vetted and trained professionals for caregiving, errands and other daily support needs."
      />

      <div className="about my-6 p-3">
        <h2 className="text-4xl font-bold my-4 text-center">
          Community-Powered Care and Support Services
        </h2>
        <p className="text-xl text-center text-balance bg-indigo-100 px-5 py-16 rounded-2xl">
          At <b>AgeBuddy, </b> we recognize that the most meaningful care and
          support for the elderly comes from those who understand your
          environment, culture, and unique needs. That’s why our Localized Care
          and Support Services connect seniors with compassionate helpers from
          their own communities. These trained companions are here to make daily
          life easier, offering a human touch that bridges the gap between
          independence and support.
        </p>
      </div>

      <BenefitsSection heading="What we Offer" benefits={benefits} />
      <div className="section">
        <h2 className="text-2xl font-bold my-4 text-center capitalize">
          Why Choose Our Localized Care and Support Services Network?
        </h2>
        <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-2 gap-4 items-center  text-[1.3rem] text-pretty bg-indigo-100 px-5 py-10 rounded-2xl ring-4 ring-indigo-600 hover:scale-95">
          <p className="">
            <b>Community-Centric:</b> Our companions are from the same locality,
            ensuring cultural understanding and relatable interactions.
          </p>
          <p>
            <b>Tailored Assistance:</b> Personalized services designed to suit
            your specific needs and preferences.
          </p>
          <p>
            <b>Affordable and Flexible:</b> Cost-effective plans that fit any
            budget, whether you need occasional help or ongoing support.
          </p>
          <p>
            <b>Trusted Professionals:</b> All companions undergo rigorous
            training and background checks for your peace of mind.
          </p>
        </div>
      </div>
      <HowItWorks heading="How It Works" steps={steps} />
      <FAQSection faqs={faqs} />
    </div>
  );
};

export default SupportServicesPage;
