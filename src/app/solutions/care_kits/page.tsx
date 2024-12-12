import { FaDumbbell, FaLightbulb } from "react-icons/fa";
import HeroSection from "../_components/HeroSection";
import FAQSection from "../_components/FAQ";
import BenefitsSection from "../_components/keyBenefits";
import TheProblemSection from "../_components/TheProblemSection";

// benefits
const benefits = [
  {
    icon: <FaDumbbell size={75} />,
    heading: "Enhance Safety",
    description: "Reduce the risks of slips and falls",
  },
  {
    icon: <FaLightbulb size={75} />,
    heading: "Simplified Helath Management",
    description: "Organize medications efficiently",
  },
  {
    icon: <FaLightbulb size={75} />,
    heading: "Peace of Mind",
    description: "Ensure Seniors and their families feel secure",
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

const CareKitsPage = () => {
  return (
    <div className="bg-neutral-50 max-w-container p-3 *:py-2">
      <HeroSection
        title="Eldery Care Kits"
        tagline="Safety, Comfort, and Convenience - All in One Kit"
        description="The Edlerly Care Kit is your comprehensive solution for enhancing Senior safety, comfort and independence"
        // heroImage={}
      />
      <TheProblemSection
        problem="Many Seniors face preventable challenges and injurires with daily
          tasks, oftten due to a lack of suitable home aids"
        solution="The Elderlty Care Kit is designed to ensure Seniors' safety, comfort
          and convenience at home"
      />

      <div className="about my-6 p-3">
        <h2 className="text-4xl font-bold my-4 text-center">
          Safety, Comfort, and Convenience - All in One Kit
        </h2>
        <p className="text-lg text-center tracking-wider">
          At <b className="font-bold text-xl">AgeBuddy, </b> we understand that
          truly supporting seniors goes beyond digital tools and caregiving
          connections—it’s about equipping families with practical, everyday
          solutions that ensure safety, comfort, and independence. That’s why we
          developed our Elderly Care Kit—a comprehensive, all-in-one package of
          essential items designed to address the most common challenges seniors
          face at home. The Elderly Care Kit is thoughtfully curated with items
          like anti-slip socks for safety, grabber tools for mobility, pill
          organizers for medication management, and even personal hygiene
          essentials like bath wipes for convenience. By bundling these tools
          into a single package, we eliminate the guesswork for families, making
          it easier for them to provide holistic care for their loved ones. This
          kit doesn’t just offer practicality—it offers peace of mind. It
          empowers seniors to navigate their daily lives with dignity and helps
          families feel confident that their loved ones are supported in every
          way. Together with our digital platform and caregiving connections,
          the Elderly Care Kit completes our mission of redefining senior care
          in Nigeria by addressing emotional, social, and practical needs all at
          once.
        </p>
      </div>

      <BenefitsSection
        heading="Benefits of using the Elderly Care Kit"
        benefits={benefits}
      />
      {/* <HowItWorksSection /> */}
      <FAQSection faqs={faqs} />
    </div>
  );
};

export default CareKitsPage;
