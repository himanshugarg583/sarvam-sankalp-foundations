/**
 * Homepage content for Sarvam Sankalp Foundation (SSF).
 * Anything flagged `placeholder` / "Illustrative" is sample copy that must be replaced
 * with verified SSF information before publishing.
 */

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

export const navItems: NavItem[] = [
  { label: "Home", href: "#hero" },
  {
    label: "About Us",
    href: "#philosophy",
    children: [
      { label: "About SSF (Vision & Journey)", href: "#philosophy" },
      { label: "Leadership & Board", href: "#testimonials" },
      { label: "Legal & Compliance", href: "#accreditations" },
      { label: "Partners & Collaborators", href: "#partners" },
      { label: "Letters of Appreciation", href: "#accreditations" },
    ],
  },
  {
    label: "Our Work",
    href: "#programs",
    children: [
      { label: "Program Areas", href: "#programs" },
      { label: "Impact Goals", href: "#impact" },
      { label: "Our Reach", href: "#reach" },
      { label: "Beneficiary Stories", href: "#voices" },
    ],
  },
  {
    label: "Media & Reports",
    href: "#home-gallery",
    children: [
      { label: "Photo & Video Gallery", href: "#home-gallery" },
      { label: "Newsletters", href: "#newsletter" },
      { label: "Annual Reports & Audits", href: "#accreditations" },
      { label: "Press & Media", href: "#home-gallery" },
    ],
  },
  {
    label: "Get Involved",
    href: "#join",
    children: [
      { label: "Donate Online", href: "#donate" },
      { label: "CSR Partnerships", href: "#partners" },
      { label: "Volunteer With Us", href: "#join" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
];

export const heroSlides = [
  {
    id: "hs1",
    category: "EDUCATION · WOMEN EMPOWERMENT · HEALTHCARE",
    badge: "A Collective Resolve for Every Indian",
    title: "Education & Livelihood are the greatest pathways out of poverty.",
    subtitle:
      "Sarvam Sankalp Foundation works with village schools, women's collectives, volunteers and CSR partners to build learning centres, livelihood skills and healthcare access across India.",
    image: img("1509062522246-3755977927d7", 1600),
    cta: "Support Our Mission",
  },
  {
    id: "hs2",
    category: "ATMANIRBHAR BHARAT · WOMEN LIVELIHOODS",
    badge: "Skills. Dignity. Self-Reliance.",
    title: "Skilling Rural Women to Build Their Own Micro-Enterprises.",
    subtitle:
      "Tailoring, handicraft and digital-skills training with market linkages, so that women can earn with dignity and lead change in their communities.",
    image: "/images/women-sewing.jpg",
    cta: "Explore Women Programs",
  },
  {
    id: "hs3",
    category: "DIGITAL BHARAT · RURAL EDUCATION",
    badge: "Learning Without Limits",
    title: "Digital Classrooms for First-Generation Learners.",
    subtitle:
      "Computer literacy, foundational learning and mentorship that open 21st-century opportunities for children in under-served villages.",
    image: "/images/girls-computer-class.jpg",
    cta: "View Education Labs",
  },
];

export const heroTrustBadges = ["Registered Non-Profit*", "Transparent Governance", "Volunteer Driven"];

export const valuesTicker = [
  { text: "Seva", accent: true },
  { text: "शिक्षा (Education)" },
  { text: "Empower", accent: true },
  { text: "प्रगति (Progress)" },
  { text: "Transform", accent: true },
  { text: "करुणा (Compassion)" },
  { text: "Sustainability", accent: true },
];

export const philosophy = [
  { num: "01", title: "Seva (Compassion)", desc: "Service to the community is our highest duty. We lead with empathy, humility and dedication." },
  { num: "02", title: "Sankalp (Commitment)", desc: "Every promise we make to a community is a resolve we see through — patiently and completely." },
  { num: "03", title: "Transparent & Accountable", desc: "Every rupee and every effort is tracked, reported and open to scrutiny by our donors and partners." },
  { num: "04", title: "Inclusive for All", desc: "‘Sarvam’ means everyone. Our programs reach across caste, gender, religion and geography." },
  { num: "05", title: "Self-Reliance", desc: "We empower women and youth with sustainable skills and livelihoods rather than one-time charity." },
  { num: "06", title: "Innovation & Sustainability", desc: "We use digital tools and green practices to make rural development lasting and efficient." },
  { num: "07", title: "We Make A Difference", desc: "We measure success by the smiles, dignity and prosperity of the families we serve." },
];

/** Targets, not achieved figures. Replace with verified numbers once available. */
export const impactGroups = [
  {
    title: "Education & Digital Empowerment",
    stats: [
      { value: 100000, suffix: "+", label: "Lives to Impact" },
      { value: 250, suffix: "+", label: "Learning Centres Planned" },
      { value: 25000, suffix: "+", label: "Students to Certify" },
      { value: 100, suffix: "+", label: "Districts Targeted" },
    ],
  },
  {
    title: "Women Livelihoods, Health & Environment",
    stats: [
      { value: 10000, suffix: "+", label: "Women to Skill" },
      { value: 500, suffix: "+", label: "Health Camps Planned" },
      { value: 1000, suffix: "+", label: "Volunteers to Mobilise" },
      { value: 20, suffix: "+", label: "States to Reach" },
    ],
  },
];

export const programs = [
  {
    tag: "DIGITAL EDUCATION",
    title: "Smart Learning Centres & Digital Classrooms",
    desc: "Bringing computer literacy, foundational numeracy and English, and mentorship to first-generation learners in under-served villages and urban settlements.",
    image: "/images/girls-computer-class.jpg",
  },
  {
    tag: "WOMEN EMPOWERMENT",
    title: "Skill Training & Women-Led Micro-Enterprises",
    desc: "Tailoring, handicraft and digital-skills training for women, with support to form self-help groups and connect with markets for steady income.",
    image: "/images/women-sewing.jpg",
  },
  {
    tag: "YOUTH EMPLOYABILITY",
    title: "Vocational Skills & Career Readiness",
    desc: "Bridging rural youth talent with industry needs through certified vocational courses, career counselling and placement linkages.",
    image: "/images/computer-class.jpg",
  },
  {
    tag: "COMMUNITY HEALTHCARE",
    title: "Preventive Health Camps & Awareness Drives",
    desc: "Free health check-ups, eye screening, menstrual-hygiene awareness and medicine distribution for families in remote habitations.",
    image: "/images/medical-camp.jpg",
  },
  {
    tag: "ENVIRONMENT & COMMUNITY",
    title: "Clean Water, Plantation & Green Villages",
    desc: "Community-led tree plantation, water conservation and clean-energy awareness to build healthier, more resilient villages.",
    image: img("1542601906990-b4d3fb778b09", 1000),
  },
];

export type ReachStatus = "hq" | "pilot" | "planned";

/** Placeholder footprint — update with SSF's actual registered office and chapters. */
export const reachStates: Record<string, { status: ReachStatus; hindi: string; focus: string[] }> = {
  "Uttar Pradesh": { status: "hq", hindi: "उत्तर प्रदेश", focus: ["Digital Education", "Women Livelihoods", "Health Camps"] },
  Delhi: { status: "pilot", hindi: "दिल्ली", focus: ["Urban Learning Centres", "Volunteer Hub"] },
  Bihar: { status: "pilot", hindi: "बिहार", focus: ["Women SHGs", "Foundational Learning"] },
  Rajasthan: { status: "pilot", hindi: "राजस्थान", focus: ["Clean Water", "Girls' Education"] },
  "Madhya Pradesh": { status: "planned", hindi: "मध्य प्रदेश", focus: ["Health Camps"] },
  Uttarakhand: { status: "planned", hindi: "उत्तराखंड", focus: ["Environment"] },
  Haryana: { status: "planned", hindi: "हरियाणा", focus: ["Youth Skills"] },
  Jharkhand: { status: "planned", hindi: "झारखंड", focus: ["Tribal Education"] },
  Maharashtra: { status: "planned", hindi: "महाराष्ट्र", focus: ["CSR Partnerships"] },
  "West Bengal": { status: "planned", hindi: "पश्चिम बंगाल", focus: ["Women Livelihoods"] },
  Odisha: { status: "planned", hindi: "ओडिशा", focus: ["Health & Nutrition"] },
  Gujarat: { status: "planned", hindi: "गुजरात", focus: ["Youth Skills"] },
};

export const reachSummary = [
  { value: "1", label: "Head Office (Placeholder)", color: "text-red-700" },
  { value: "3", label: "Pilot Regions", color: "text-amber-600" },
  { value: "8", label: "Planned Expansion States", color: "text-emerald-600" },
  { value: "5", label: "Program Areas", color: "text-slate-900" },
];

export const beneficiaryStories = [
  {
    name: "Savitri",
    location: "Rural Uttar Pradesh",
    category: "Women Empowerment",
    metric: "Tailoring Graduate",
    quote: "Learning to stitch gave me more than income — it gave me a voice in my own home.",
    story:
      "Illustrative story: Savitri joins an SSF tailoring batch, forms a self-help group with other women from her village and begins taking orders for school uniforms.",
    image: "/images/women-sewing.jpg",
  },
  {
    name: "Aman",
    location: "Village Learning Centre",
    category: "Digital Education",
    metric: "First-Gen Learner",
    quote: "I touched a computer for the first time at the learning centre. Now I want to become an engineer.",
    story:
      "Illustrative story: Aman attends after-school digital classes at an SSF centre, completes a basic computer course and mentors younger children in his village.",
    image: "/images/computer-class.jpg",
  },
  {
    name: "Kamla",
    location: "Remote Habitation",
    category: "Healthcare",
    metric: "Health Camp Beneficiary",
    quote: "The camp came to our village, so my mother finally got her eyes checked.",
    story:
      "Illustrative story: Kamla brings her family to an SSF preventive health camp where they receive free screening, medicines and referrals to the district hospital.",
    image: "/images/eye-camp.jpg",
  },
];

export const liveUpdates = [
  "✨ Sarvam Sankalp Foundation — a collective resolve for an inclusive India",
  "📚 Digital learning centres for first-generation learners",
  "🌸 Skill training and livelihoods for rural women",
  "🩺 Preventive health camps in under-served villages",
  "🌱 Tree plantation and water conservation drives",
  "🤝 Inviting CSR partners, volunteers and donors to join the Sankalp",
];

export const galleryCategories = [
  "All",
  "Digital Education",
  "Women Empowerment",
  "Healthcare",
  "Environment",
  "Skill Development",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export const galleryItems: { title: string; desc: string; category: Exclude<GalleryCategory, "All">; image: string }[] = [
  { category: "Digital Education", title: "Computer Class for First-Generation Learners", desc: "Girls learning computer basics and digital skills at a community learning centre.", image: "/images/girls-computer-class.jpg" },
  { category: "Women Empowerment", title: "Women's Tailoring & Micro-Enterprise Training", desc: "Women building skills and confidence to earn independently.", image: "/images/women-sewing.jpg" },
  { category: "Healthcare", title: "Free Eye Screening Camp", desc: "Free eye check-ups and spectacles referrals for elders in rural communities.", image: "/images/eye-camp.jpg" },
  { category: "Environment", title: "Green Village & Plantation Drive", desc: "Community volunteers planting saplings for a cleaner, greener future.", image: img("1542601906990-b4d3fb778b09", 1000) },
  { category: "Skill Development", title: "Youth Computer & Career Skills Lab", desc: "Young people learning employable digital skills and preparing for careers.", image: "/images/computer-class.jpg" },
  { category: "Healthcare", title: "Mother & Child Health Camp", desc: "Health workers providing check-ups and counselling for mothers and infants.", image: "/images/medical-camp.jpg" },
  { category: "Digital Education", title: "Early Childhood Learning Support", desc: "Learning kits and school essentials for young children at a village centre.", image: "/images/anganwadi-children.jpg" },
  { category: "Healthcare", title: "Nutrition Support for School Children", desc: "Wholesome meals that keep children healthy and in the classroom.", image: "/images/midday-meal.jpg" },
];

/** Partner categories SSF is seeking — no real partner logos are claimed. */
export const partnerSlots = [
  { name: "Government Bodies", type: "Government", note: "Scheme convergence", icon: "Landmark" },
  { name: "Corporate CSR Partners", type: "Corporate CSR", note: "Sec. 135 projects", icon: "Building2" },
  { name: "Academic Institutions", type: "Academic", note: "Research & interns", icon: "GraduationCap" },
  { name: "Philanthropic Foundations", type: "Foundation", note: "Grant partners", icon: "HandHeart" },
  { name: "Healthcare Providers", type: "Health", note: "Camps & referrals", icon: "Stethoscope" },
  { name: "Technology Partners", type: "Technology", note: "Digital classrooms", icon: "Cpu" },
  { name: "Community Organisations", type: "NGO Partner", note: "Grassroots reach", icon: "Users" },
  { name: "Volunteer Networks", type: "Volunteers", note: "Skills & time", icon: "HeartHandshake" },
  { name: "Media Partners", type: "Media", note: "Awareness drives", icon: "Megaphone" },
  { name: "Panchayats & SHGs", type: "Community", note: "Local ownership", icon: "House" },
] as const;

/** Leadership placeholders — replace names, photos and messages with verified details. */
export const leaders = [
  {
    name: "Founder & Chairperson",
    short: "Founder",
    role: "Name to be updated",
    org: "Sarvam Sankalp Foundation",
    quote:
      "Sarvam Sankalp is a promise — that every child, every woman and every family, wherever they live, deserves the opportunity to learn, earn and live with dignity.",
    image: img("1507003211169-0a1dd7228f2d", 800),
  },
  {
    name: "Director — Programs",
    short: "Programs",
    role: "Name to be updated",
    org: "Education & Livelihoods",
    quote:
      "We design every program with the community, not for it. Measurable outcomes and local ownership are what make change last.",
    image: img("1573496359142-b8d87734a5a2", 800),
  },
  {
    name: "Director — Partnerships",
    short: "Partnerships",
    role: "Name to be updated",
    org: "CSR & Institutional Relations",
    quote:
      "Our partners trust us because we report openly. Every contribution is tracked from commitment to impact on the ground.",
    image: img("1500648767791-00dcc994a43e", 800),
  },
  {
    name: "Head — Health Initiatives",
    short: "Health",
    role: "Name to be updated",
    org: "Community Healthcare",
    quote:
      "Preventive care saves lives. Bringing health camps to the last village is one of the most powerful things we can do.",
    image: img("1580489944761-15a19d654956", 800),
  },
];

/** Compliance placeholders — status shown honestly until documents are verified. */
export const accreditationBadges = [
  { label: "NGO Darpan (NITI Aayog)", value: "Registration No. — TBU", note: "Details to be updated", icon: "Landmark" },
  { label: "Income Tax 12A & 80G", value: "Approval — TBU", note: "Donor tax benefit once approved", icon: "Receipt" },
  { label: "MCA CSR-1", value: "Registration — TBU", note: "Ministry of Corporate Affairs", icon: "Building2" },
  { label: "Legal Entity", value: "Trust / Society / Sec-8", note: "Entity type to be confirmed", icon: "Scale" },
] as const;

export const certificates = [
  {
    issuer: "NITI Aayog, Government of India",
    title: "NGO Darpan Registration Certificate",
    ref: "To be updated",
    desc: "Unique ID on the NGO Darpan portal, enabling partnership with Central & State Government schemes.",
    accent: "from-emerald-600 to-teal-600",
  },
  {
    issuer: "Income Tax Department, Ministry of Finance",
    title: "Section 12A & 80G Registration",
    ref: "To be updated",
    desc: "Registration under Section 12A and approval under Section 80G of the Income Tax Act, 1961 (donor benefits apply only after approval).",
    accent: "from-amber-500 to-orange-600",
  },
  {
    issuer: "Ministry of Corporate Affairs (MCA)",
    title: "CSR-1 Registration",
    ref: "To be updated",
    desc: "Authorisation to implement CSR projects under Section 135 of the Companies Act, 2013.",
    accent: "from-sky-600 to-indigo-600",
  },
];

export const footerColumns = [
  {
    title: "About Us",
    links: [
      { label: "About SSF (Vision & Journey)", href: "#philosophy" },
      { label: "Leadership & Board", href: "#testimonials" },
      { label: "Legal & Compliance", href: "#accreditations" },
      { label: "Partners & Collaborators", href: "#partners" },
      { label: "Letters of Appreciation", href: "#accreditations" },
    ],
  },
  {
    title: "Our Work",
    links: [
      { label: "Program Areas", href: "#programs" },
      { label: "Impact Goals", href: "#impact" },
      { label: "Our Reach", href: "#reach" },
      { label: "Beneficiary Stories", href: "#voices" },
    ],
  },
  {
    title: "Media & Reports",
    links: [
      { label: "Photo & Video Gallery", href: "#home-gallery" },
      { label: "Newsletters", href: "#newsletter" },
      { label: "Annual Reports & Audits", href: "#accreditations" },
      { label: "Press & Media", href: "#home-gallery" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "Donate Online", href: "#donate" },
      { label: "CSR Partnerships", href: "#partners" },
      { label: "Volunteer With Us", href: "#join" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
];

export const policyLinks = [
  "Privacy Policy",
  "Terms & Conditions",
  "Refund Policy",
  "POSH",
  "Child Protection",
  "CSR Policy",
];
