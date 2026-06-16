/* ──────────────────────────────────────────────────────────────────────
   AyurSutra — Mock data layer
   All app content (quiz banks, dashboards, clinics, doctors) lives here.
   ────────────────────────────────────────────────────────────────────── */

export type Dosha = "vata" | "pitta" | "kapha";

export const DOSHA_META: Record<
  Dosha,
  { name: string; element: string; sanskrit: string; summary: string; traits: string[] }
> = {
  vata: {
    name: "Vata",
    element: "Air + Ether",
    sanskrit: "वात",
    summary: "The principle of movement — creative, quick, light.",
    traits: ["Energetic", "Creative", "Adaptable", "Quick-thinking"],
  },
  pitta: {
    name: "Pitta",
    element: "Fire + Water",
    sanskrit: "पित्त",
    summary: "The principle of transformation — sharp, focused, warm.",
    traits: ["Driven", "Intelligent", "Courageous", "Digestive"],
  },
  kapha: {
    name: "Kapha",
    element: "Earth + Water",
    sanskrit: "कफ",
    summary: "The principle of cohesion — steady, nurturing, strong.",
    traits: ["Calm", "Loyal", "Patient", "Grounded"],
  },
};

/* ───────────────────────── Quiz question bank ───────────────────────── */

export type QuizOption = { label: string; dosha: Dosha };
export type QuizQuestion = {
  id: string;
  category: string;
  prompt: string;
  options: QuizOption[];
};

// Step 1 — physical constitution
export const PHYSICAL_QUESTIONS: QuizQuestion[] = [
  {
    id: "p1",
    category: "Body Frame",
    prompt: "How would you describe your natural body frame?",
    options: [
      { label: "Slender, light, find it hard to gain weight", dosha: "vata" },
      { label: "Medium build, athletic, well-proportioned", dosha: "pitta" },
      { label: "Solid, sturdy, gain weight easily", dosha: "kapha" },
    ],
  },
  {
    id: "p2",
    category: "Skin",
    prompt: "What is your skin typically like?",
    options: [
      { label: "Dry, thin, cool to the touch", dosha: "vata" },
      { label: "Warm, ruddy, prone to redness", dosha: "pitta" },
      { label: "Thick, oily, cool and smooth", dosha: "kapha" },
    ],
  },
  {
    id: "p3",
    category: "Hair",
    prompt: "How would you describe your hair?",
    options: [
      { label: "Dry, frizzy, brittle", dosha: "vata" },
      { label: "Fine, tends to thin or grey early", dosha: "pitta" },
      { label: "Thick, lustrous, oily", dosha: "kapha" },
    ],
  },
  {
    id: "p4",
    category: "Digestion",
    prompt: "How is your digestion and appetite?",
    options: [
      { label: "Variable — sometimes ravenous, sometimes none", dosha: "vata" },
      { label: "Strong & sharp — I get irritable if I miss a meal", dosha: "pitta" },
      { label: "Steady but slow — I can easily skip meals", dosha: "kapha" },
    ],
  },
  {
    id: "p5",
    category: "Energy",
    prompt: "Describe your natural energy patterns.",
    options: [
      { label: "Bursts of energy, then fatigue", dosha: "vata" },
      { label: "Intense, focused, moderate endurance", dosha: "pitta" },
      { label: "Steady, long-lasting, slow to start", dosha: "kapha" },
    ],
  },
  {
    id: "p6",
    category: "Sleep",
    prompt: "How do you usually sleep?",
    options: [
      { label: "Light, easily disturbed, often wake up", dosha: "vata" },
      { label: "Moderate, sound, wake refreshed", dosha: "pitta" },
      { label: "Deep and long, hard to wake up", dosha: "kapha" },
    ],
  },
];

// Step 2 — mental & lifestyle
export const LIFESTYLE_QUESTIONS: QuizQuestion[] = [
  {
    id: "l1",
    category: "Mind",
    prompt: "How does your mind tend to work?",
    options: [
      { label: "Quick, restless, full of ideas", dosha: "vata" },
      { label: "Sharp, analytical, decisive", dosha: "pitta" },
      { label: "Calm, steady, excellent memory", dosha: "kapha" },
    ],
  },
  {
    id: "l2",
    category: "Emotions",
    prompt: "Under stress, you tend to feel…",
    options: [
      { label: "Anxious, worried, scattered", dosha: "vata" },
      { label: "Irritable, critical, impatient", dosha: "pitta" },
      { label: "Withdrawn, attached, slow to act", dosha: "kapha" },
    ],
  },
  {
    id: "l3",
    category: "Pace",
    prompt: "What is your natural pace of activity?",
    options: [
      { label: "Fast, multitasking, on the move", dosha: "vata" },
      { label: "Purposeful, goal-driven, efficient", dosha: "pitta" },
      { label: "Deliberate, methodical, unhurried", dosha: "kapha" },
    ],
  },
  {
    id: "l4",
    category: "Climate",
    prompt: "Which weather bothers you most?",
    options: [
      { label: "Cold, dry, windy weather", dosha: "vata" },
      { label: "Hot, humid weather", dosha: "pitta" },
      { label: "Cool, damp, cloudy weather", dosha: "kapha" },
    ],
  },
  {
    id: "l5",
    category: "Learning",
    prompt: "How do you learn and remember new things?",
    options: [
      { label: "Fast to learn, quick to forget", dosha: "vata" },
      { label: "Focused study, good retention", dosha: "pitta" },
      { label: "Slow to learn, never forget", dosha: "kapha" },
    ],
  },
  {
    id: "l6",
    category: "Spending",
    prompt: "What's your relationship with money & belongings?",
    options: [
      { label: "Spend quickly, on impulse", dosha: "vata" },
      { label: "Spend deliberately, on quality", dosha: "pitta" },
      { label: "Save carefully, hold onto things", dosha: "kapha" },
    ],
  },
];

/* ───────────────────────── Sample prakriti result ───────────────────────── */

export const SAMPLE_PRAKRITI = {
  vata: 32,
  pitta: 48,
  kapha: 20,
  dominant: "pitta" as Dosha,
  secondary: "vata" as Dosha,
};

/* ───────────────────────── User profile ───────────────────────── */

export const PATIENT = {
  name: "Ananya Iyer",
  firstName: "Ananya",
  email: "ananya.iyer@example.com",
  initials: "AI",
  prakriti: { vata: 32, pitta: 48, kapha: 20, dominant: "pitta" as Dosha },
  healthScore: 78,
  memberSince: "Mar 2024",
  streak: 12,
};

export const DOCTOR = {
  name: "Dr. Vikram Rao",
  firstName: "Vikram",
  specialty: "Kayachikitsa (Internal Medicine)",
  experience: 18,
  rating: 4.9,
  reviews: 412,
  initials: "VR",
  nextPatient: "Ananya Iyer",
};

/* ───────────────────────── Appointments ───────────────────────── */

export type Appointment = {
  id: string;
  doctor: string;
  specialty: string;
  initials: string;
  date: string; // ISO
  time: string;
  mode: "In-clinic" | "Video" | "Phone";
  status: "upcoming" | "completed" | "cancelled";
};

export const PATIENT_APPOINTMENTS: Appointment[] = [
  {
    id: "a1",
    doctor: "Dr. Vikram Rao",
    specialty: "Kayachikitsa",
    initials: "VR",
    date: "2026-06-18",
    time: "10:30 AM",
    mode: "In-clinic",
    status: "upcoming",
  },
  {
    id: "a2",
    doctor: "Dr. Meera Nair",
    specialty: "Panchakarma",
    initials: "MN",
    date: "2026-06-24",
    time: "4:00 PM",
    mode: "Video",
    status: "upcoming",
  },
  {
    id: "a3",
    doctor: "Dr. Vikram Rao",
    specialty: "Follow-up",
    initials: "VR",
    date: "2026-05-30",
    time: "11:00 AM",
    mode: "In-clinic",
    status: "completed",
  },
];

/* ───────────────────────── Health metrics ───────────────────────── */

export const HEALTH_TREND = [
  { month: "Jan", score: 62 },
  { month: "Feb", score: 65 },
  { month: "Mar", score: 68 },
  { month: "Apr", score: 71 },
  { month: "May", score: 74 },
  { month: "Jun", score: 78 },
];

export const DOSHA_BALANCE = [
  { dosha: "Vata", value: 32, fill: "hsl(var(--vata))" },
  { dosha: "Pitta", value: 48, fill: "hsl(var(--pitta))" },
  { dosha: "Kapha", value: 20, fill: "hsl(var(--kapha))" },
];

/* ───────────────────────── Recommendations ───────────────────────── */

export type Recommendation = {
  id: string;
  title: string;
  category: "Diet" | "Routine" | "Herbs" | "Yoga" | "Mind";
  detail: string;
  dosha: Dosha;
};

export const RECOMMENDATIONS: Recommendation[] = [
  {
    id: "r1",
    title: "Cooling, light evening meals",
    category: "Diet",
    detail:
      "Favour sweet, bitter and astringent tastes. Avoid excess spice, salt and fried foods which aggravate Pitta.",
    dosha: "pitta",
  },
  {
    id: "r2",
    title: "Abhyanga with coconut oil",
    category: "Routine",
    detail:
      "A 10-minute warm oil massage before your shower cools the system and grounds fiery energy.",
    dosha: "pitta",
  },
  {
    id: "r3",
    title: "Brahmi & Shatavari infusion",
    category: "Herbs",
    detail:
      "A morning decoction of Brahmi calms the mind while Shatavari restores fluid balance.",
    dosha: "pitta",
  },
  {
    id: "r4",
    title: "Moonlight walks & gentle yoga",
    category: "Yoga",
    detail:
      "Replace intense workouts with restorative asanas — Sheetali pranayama is especially soothing.",
    dosha: "pitta",
  },
];

/* ───────────────────────── Reports ───────────────────────── */

export type Report = {
  id: string;
  name: string;
  type: string;
  date: string;
  size: string;
  status: "reviewed" | "pending";
};

export const REPORTS: Report[] = [
  { id: "rp1", name: "Complete Blood Count", type: "Lab", date: "2026-06-02", size: "248 KB", status: "reviewed" },
  { id: "rp2", name: "Thyroid Panel (T3/T4/TSH)", type: "Lab", date: "2026-05-21", size: "182 KB", status: "reviewed" },
  { id: "rp3", name: "Lipid Profile", type: "Lab", date: "2026-05-21", size: "156 KB", status: "pending" },
  { id: "rp4", name: "Pulse & Prakriti Notes", type: "Consult", date: "2026-05-30", size: "64 KB", status: "reviewed" },
];

export const REPORT_TYPES = [
  "Blood Test",
  "Thyroid Panel",
  "Lipid Profile",
  "Vitamin Panel",
  "Imaging (X-Ray/MRI)",
  "Consultation Notes",
  "Other",
];

/* ───────────────────────── Clinics ───────────────────────── */

export type Clinic = {
  id: string;
  name: string;
  area: string;
  city: string;
  rating: number;
  reviews: number;
  distanceKm: number;
  specialties: string[];
  open: string;
  accepting: boolean;
  image: string;
};

export const CLINICS: Clinic[] = [
  {
    id: "dhanvantari",
    name: "Dhanvantari Ayurveda Clinic",
    area: "Indiranagar",
    city: "Bengaluru",
    rating: 4.8,
    reviews: 326,
    distanceKm: 1.2,
    specialties: ["Panchakarma", "Kayachikitsa"],
    open: "9:00 AM – 7:00 PM",
    accepting: true,
    image: "",
  },
  {
    id: "sushruta",
    name: "Sushruta Wellness Centre",
    area: "Koramangala",
    city: "Bengaluru",
    rating: 4.7,
    reviews: 218,
    distanceKm: 2.8,
    specialties: ["Shalya", "Ksharasutra"],
    open: "8:30 AM – 6:30 PM",
    accepting: true,
    image: "",
  },
  {
    id: "charaka",
    name: "Charaka Heritage Ayurveda",
    area: "Jayanagar",
    city: "Bengaluru",
    rating: 4.9,
    reviews: 504,
    distanceKm: 4.1,
    specialties: ["Kayachikitsa", "Rasayana"],
    open: "9:00 AM – 8:00 PM",
    accepting: false,
    image: "",
  },
  {
    id: "arnava",
    name: "Arnava Holistic Healing",
    area: "HSR Layout",
    city: "Bengaluru",
    rating: 4.6,
    reviews: 142,
    distanceKm: 5.5,
    specialties: ["Panchakarma", "Yoga Therapy"],
    open: "10:00 AM – 6:00 PM",
    accepting: true,
    image: "",
  },
];

/* Clinic dashboard (single) ── reuses Dhanvantari */
export const CLINIC_KPI = {
  patientsToday: 38,
  patientsTrend: 12,
  revenue: 84200,
  revenueTrend: 8,
  occupancy: 84,
  occupancyTrend: 4,
  rating: 4.8,
};

export const CLINIC_REVENUE = [
  { day: "Mon", revenue: 62000 },
  { day: "Tue", revenue: 71000 },
  { day: "Wed", revenue: 58000 },
  { day: "Thu", revenue: 79000 },
  { day: "Fri", revenue: 88000 },
  { day: "Sat", revenue: 94000 },
  { day: "Sun", revenue: 84200 },
];

export const CLINIC_STAFF = [
  { name: "Dr. Vikram Rao", role: "Chief Physician", initials: "VR", dosha: "pitta" as Dosha, patients: 9 },
  { name: "Dr. Meera Nair", role: "Panchakarma Specialist", initials: "MN", dosha: "kapha" as Dosha, patients: 7 },
  { name: "Dr. Arjun Pillai", role: "Shalya Surgeon", initials: "AP", dosha: "pitta" as Dosha, patients: 5 },
  { name: "Dr. Lakshmi Menon", role: "Rasayana Consultant", initials: "LM", dosha: "vata" as Dosha, patients: 4 },
];

export const CLINIC_SCHEDULE = [
  { time: "09:00", patient: "Rohit Sharma", doctor: "Dr. Vikram Rao", reason: "Consultation", status: "Done" as const },
  { time: "10:30", patient: "Ananya Iyer", doctor: "Dr. Vikram Rao", reason: "Follow-up", status: "Now" as const },
  { time: "11:15", patient: "Priya Desai", doctor: "Dr. Meera Nair", reason: "Panchakarma", status: "Next" as const },
  { time: "12:00", patient: "Karthik Reddy", doctor: "Dr. Arjun Pillai", reason: "Ksharasutra", status: "Queued" as const },
  { time: "03:00", patient: "Sneha Gupta", doctor: "Dr. Lakshmi Menon", reason: "Rasayana", status: "Queued" as const },
];

/* ───────────────────────── Doctor dashboard ───────────────────────── */

export const DOCTOR_PATIENTS = [
  { name: "Ananya Iyer", initials: "AI", prakriti: "Pitta-Vata", time: "10:30 AM", reason: "Follow-up · Digestive", status: "Now" as const },
  { name: "Priya Desai", initials: "PD", prakriti: "Kapha", time: "11:15 AM", reason: "Panchakarma review", status: "Next" as const },
  { name: "Karthik Reddy", initials: "KR", prakriti: "Pitta", time: "12:00 PM", reason: "Skin condition", status: "Queued" as const },
  { name: "Sneha Gupta", initials: "SG", prakriti: "Vata-Pitta", time: "01:30 PM", reason: "Stress & sleep", status: "Queued" as const },
  { name: "Rohit Sharma", initials: "RS", prakriti: "Vata", time: "03:00 PM", reason: "Joint pain", status: "Queued" as const },
];

export const DOCTOR_STATS = {
  todayAppointments: 9,
  completedToday: 3,
  followUps: 14,
  avgRating: 4.9,
};

export const DOCTOR_WEEK = [
  { day: "Mon", patients: 11 },
  { day: "Tue", patients: 8 },
  { day: "Wed", patients: 12 },
  { day: "Thu", patients: 9 },
  { day: "Fri", patients: 13 },
  { day: "Sat", patients: 7 },
  { day: "Sun", patients: 4 },
];

/* ───────────────────────── Landing content ───────────────────────── */

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Discover",
    text: "Take the prakriti quiz to uncover your unique mind-body constitution across Vata, Pitta and Kapha.",
    icon: "sparkles",
  },
  {
    step: "02",
    title: "Consult",
    text: "Connect with certified Ayurvedic vaidyas — in-clinic or over video — for a personalised plan.",
    icon: "stethoscope",
  },
  {
    step: "03",
    title: "Balance",
    text: "Follow daily rhythms, diet and remedies tailored to your dosha, and track your journey to balance.",
    icon: "leaf",
  },
];

export const FEATURES = [
  {
    title: "Prakriti Analysis",
    text: "A scientifically structured quiz maps your constitution with a clear dosha breakdown and radar view.",
    icon: "compass",
  },
  {
    title: "Verified Vaidyas",
    text: "Every practitioner is BAMS-certified and vetted. Read reviews, see specialties, book in seconds.",
    icon: "shield",
  },
  {
    title: "Personalised Path",
    text: "Diet, herbs, yoga and daily routine — all tuned to pacify your aggravated doshas.",
    icon: "route",
  },
  {
    title: "Secure Health Vault",
    text: "Upload lab reports and consultation notes. Your history travels with you, encrypted end to end.",
    icon: "vault",
  },
  {
    title: "Panchakarma Booking",
    text: "Reserve authentic cleansing therapies at partner clinics with transparent pricing.",
    icon: "droplet",
  },
  {
    title: "Mindful Reminders",
    text: "Dinacharya nudges — oil pulling, abhyanga, herbs — woven gently into your day.",
    icon: "bell",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "I finally understand why certain foods never sat well with me. My Pitta plan cooled my digestion within a fortnight.",
    name: "Ananya Iyer",
    role: "Software Engineer, Bengaluru",
    initials: "AI",
  },
  {
    quote:
      "After years of insomnia, the Vata-balancing routine gave me my nights back. The doctors are truly attentive.",
    name: "Rohit Sharma",
    role: "Architect, Pune",
    initials: "RS",
  },
  {
    quote:
      "The prakriti quiz was uncannily accurate. My whole family is now on AyurSutra — even my sceptical husband.",
    name: "Priya Desai",
    role: "Teacher, Mumbai",
    initials: "PD",
  },
];

export const STATS = [
  { value: "50k+", label: "Prakriti mapped" },
  { value: "320+", label: "Certified vaidyas" },
  { value: "4.9★", label: "Average rating" },
  { value: "12 yrs", label: "Combined lineage" },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Quiz", href: "/quiz" },
  { label: "Clinics", href: "/clinics" },
];

export const FOOTER_LINKS = {
  Platform: [
    { label: "Prakriti Quiz", href: "/quiz" },
    { label: "Find a Clinic", href: "/clinics" },
    { label: "Reports", href: "/reports" },
    { label: "Patient Dashboard", href: "/dashboard/patient" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Vaidyas", href: "/about" },
    { label: "Careers", href: "/about" },
    { label: "Press", href: "/about" },
  ],
  Legal: [
    { label: "Terms", href: "/terms" },
    { label: "Privacy", href: "/terms" },
    { label: "Security", href: "/terms" },
    { label: "Refunds", href: "/terms" },
  ],
};
