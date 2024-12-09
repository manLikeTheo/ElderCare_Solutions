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
    icon: faDumbbell,
    heading: "Digital Companion App",
    details:
      "A Senior-friendly mobile platform designed specifically for Nigerian seniors, offering wellness tips, community connections, and direct access to essential care services.",
  },
  {
    icon: faAppleAlt,
    heading: "Senior Care Kits",
    details:
      "A carefully curated package of essential safety and comfort items, including anti-slip aids, health trackers, emergency tools, and personalized support resources.",
  },
  {
    icon: faBrain,
    heading: "Localized Support Services",
    details:
      "A vetted network of trusted local helpers providing on-demand assistance for daily living, from home maintenance to personal care, tailored to Nigerian seniors' specific needs.",
  },

  {
    icon: faPeopleGroup,
    heading: "Social Engagement",
    details:
      "Interactive virtual and local programs designed to combat social isolation, featuring interest-based groups, skill-sharing workshops, and meaningful social interactions for seniors.",
  },
  {
    icon: faWallet,
    heading: "Senior-Focused Care Management",
    details:
      "A comprehensive support system connecting seniors, families, and caregivers through real-time updates, emergency response, and coordinated care management.",
  },
];
