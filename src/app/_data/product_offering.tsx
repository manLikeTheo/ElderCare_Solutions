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
    heading: "WellAged Digital Companion",
    details:
      "A Senior-friendly mobile platform designed specifically for Nigerian seniors, that provides age-relevant healtha and wellness guidance, interactive community connections to comabt loneliness and social isolation, and improved digital inclusion",
  },
  {
    icon: faAppleAlt,
    heading: "Senior Care Kits",
    details:
      "A carefully curated package of essential wellness and safety items, in the personal hygiene, safety & mobility, diet & nutrition categories to help familes support their agind loved ones without the stress of buying these items individually.",
  },
  {
    icon: faBrain,
    heading: "Community-Powered Care and Support Network",
    details:
      "A trusted service that connects families - especially non-resident Nigerians - with vetted and trained care and support professionals for caregiving, errands and other daily support needs, on-demand.",
  },

  {
    icon: faPeopleGroup,
    heading: "Social Engagement",
    details:
      "Interactive virtual and local programs designed to combat social isolation, featuring interest-based groups, skill-sharing workshops, post-retirement trainings, and meaningful social interactions for seniors.",
  },
  {
    icon: faWallet,
    heading: "Senior-Focused Care Management",
    details:
      "A comprehensive support system connecting seniors, families, and caregivers through real-time updates, emergency response, and coordinated care management.",
  },
];
