/**
 * Central site configuration for Sarvam Sankalp Foundation.
 * Values marked PLACEHOLDER must be replaced with verified SSF details before launch.
 */
export const siteConfig = {
  name: "Sarvam Sankalp Foundation",
  shortName: "SSF",
  tagline: "Education • Empowerment • Health • Sustainable Development",
  motto: "Seva · Shiksha · Sashaktikaran",
  copyrightYear: 2026,
  description:
    "Sarvam Sankalp Foundation (SSF) is a community-driven NGO working on education, women empowerment, healthcare and sustainable development across India.",
  // Configure via NEXT_PUBLIC_DONATION_URL in .env.local once a real payment page exists.
  donationUrl: process.env.NEXT_PUBLIC_DONATION_URL || "#donate",
  partnerUrl: process.env.NEXT_PUBLIC_PARTNER_URL || "#join",
  // PLACEHOLDER contact details
  phone: "+91 00000 00000",
  email: "contact@sarvamsankalp.org",
  address: "Registered Office Address (Placeholder), India",
  socials: [
    { label: "facebook", href: "https://facebook.com/" },
    { label: "twitter", href: "https://x.com/" },
    { label: "instagram", href: "https://instagram.com/" },
    { label: "linkedin", href: "https://linkedin.com/" },
    { label: "youtube", href: "https://youtube.com/" },
  ],
  // PLACEHOLDER statutory details — never publish until verified.
  legal: [
    { label: "CIN", value: "To be updated" },
    { label: "12A", value: "Registration details pending" },
    { label: "80G", value: "Approval details pending" },
    { label: "CSR-1", value: "Registration details pending" },
    { label: "NGO Darpan", value: "To be updated" },
  ],
} as const;

export const isPlaceholderDonation = siteConfig.donationUrl.startsWith("#");
