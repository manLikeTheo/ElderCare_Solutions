// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  {
    href: "",
    key: "solutions",
    label: "Solutions",
    dropdown: [
      {
        href: "/solutions/digital_companion",
        label: "AgeBuddy Digital Companion",
      },
      { href: "/solutions/care_kits", label: "Elderly Care Kits" },
      {
        href: "/solutions/support_services",
        label: "Localized Support Services",
      },
    ],
  },
  { href: "/about", key: "about_us", label: "About Us" },
  { href: "/contact", key: "contact_us", label: "Contact Us" },
];
