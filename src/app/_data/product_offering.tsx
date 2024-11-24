import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import {
  faDumbbell,
  faAppleAlt,
  faBrain,
  faPeopleGroup,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

export interface ProductOffering {
  icon: IconDefinition | string;
  heading: string;
  details: string;
}

export const productOfferings: ProductOffering[] = [
  {
    icon: faDumbbell, // Replace with FontAwesome icon
    heading: "Digital Companion App",
    details:
      "Your one-stop solution for staying healthy, engaged and connected. Our app offers a wide range of features to help you age gracefully.",
  },
  {
    icon: faAppleAlt, // Replace with FontAwesome icon
    heading: "Comprehensive Senior Care Kits",
    details:
      "All-in-one package designed to support physical and mental well-being. Our kits include essential products to support aging seniors.",
  },
  {
    icon: faBrain, // Replace with FontAwesome icon
    heading: "Personalized Assistance",
    details:
      "Verified Helpers: Local trusted Support for everyday needs. Our personalized assistance ensures you receive the care you need, when you need it.",
  },
  //   {
  //     icon: faPeopleGroup, // Replace with FontAwesome icon
  //     heading: "Social Engagement",
  //     details:
  //       "Engage with a community of like-minded individuals. Our social engagement programs help foster connections and reduce feelings of loneliness.",
  //   },
  //   {
  //     icon: faWallet, // Replace with FontAwesome icon
  //     heading: "Financial Literacy",
  //     details:
  //       "Improve your financial knowledge and learn how to manage your finances effectively. Our sessions provide you with the skills to make informed decisions.",
  //   },
];
