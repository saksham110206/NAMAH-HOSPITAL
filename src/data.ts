import { Doctor, CareArea, FocusArea, HealthArticle } from './types';

export const DOCTORS: Doctor[] = [
  {
    id: 'jignesh',
    name: 'Dr. Jignesh Tandel',
    role: 'Orthopedic Surgeon | DNB (Orthopedics), Diploma in Orthopaedics',
    specialty: 'Orthopedics',
    qualifications: 'DNB Orthopaedics, D Ortho, MBBS, Fellowship in Robotic Joint Replacement , Fellowship in Arthroscopy and sports medicine (South Korea), Fellowship in Traumatology.',
    experience: '15+ Years Exp.',
    avatar: 'https://drive.google.com/thumbnail?id=1qwOC_kvAQtw8jNKF38oWurOXOPGWGi_h&sz=w1000',
    rating: 5,
    tags: ['Joint Replacement', 'Sports Surgery', 'Trauma Care'],
    approach: 'My practice is built on a foundation of warm, ethical clinical judgment. I believe in empowering patients through education and personalized recovery paths, ensuring every surgery is backed by rigorous clinical rigor and human empathy.',
    consultationHours: 'Mon - Sat: 10:00 AM - 01:00 PM\nEvening: 05:00 PM - 08:00 PM',
  },
  {
    id: 'sampa',
    name: 'Dr. Sampa Tandel',
    role: 'Maternity Specialist & Gynecologist | DNB, DGO, MBBS',
    specialty: 'Maternity Care',
    qualifications: 'MBBS, DGO, DNB - Maternity Care & Gynecology | Specialist in High-Risk Pregnancy & Maternal Health.',
    experience: '10+ Years Exp.',
    avatar: 'https://drive.google.com/thumbnail?id=10_EFhOFgbiurnOAG_JD3UqCAME-Tk0GI&sz=w1000',
    rating: 5,
    tags: ['High-Risk Pregnancy', 'Maternal Health', 'Laparoscopy'],
    approach: 'Every patient is a unique story. My goal is to ensure that story is one of health, dignity, and joy. Dedicated to clinical excellence in women\'s health, from adolescence through maternity and menopause.',
    consultationHours: 'Mon - Sat: 10:00 AM - 01:00 PM\nEvening: 05:00 PM - 08:00 PM',
  },
  {
    id: 'kirti',
    name: 'Dr. Kirti Tandel',
    role: 'Psychiatrist | MBBS, DPM',
    specialty: 'Psychiatry & Mental Health',
    qualifications: 'MBBS, DPM (Psychiatry) -Psychiatrist,Neuropsychiatrist,Psychotherapist,Sexologist',
    experience: '12+ Years Exp.',
    avatar: 'https://drive.google.com/thumbnail?id=1BzYHCVq10NIJf1WUFsx47pE6RHdovBLT&sz=w1000',
    rating: 5,
    tags: ['Adult & Child Psychiatry', 'Women\'s Mental Health', 'Adolescent Well-being'],
    approach: 'I provide a safe, confidential space for healing. Specializing in integrated psychiatric care that balances clinical excellence with deep human compassion, respecting strict ethical standards.',
    consultationHours: 'By Appointment Only',
  },
];

export const SPECIALTIES = [
  {
    id: 'orthopedics',
    title: 'Orthopedics',
    icon: 'Bone',
    bgLight: 'bg-primary-fixed',
    description: 'Expert treatment for bone, joint, and spinal conditions including complex fracture management and rehabilitation.',
    doctorName: 'Dr. Jignesh Tandel',
  },
  {
    id: 'obgyn',
    title: 'Maternity Care',
    icon: 'Baby',
    bgLight: 'bg-secondary-fixed',
    description: 'Comprehensive women\'s health services, from maternity care and high-risk pregnancy to advanced gynecological procedures.',
    doctorName: 'Dr. Sampa Tandel',
  },
  {
    id: 'psychiatry',
    title: 'Psychiatry (Mental Health)',
    icon: 'Brain',
    bgLight: 'bg-tertiary-fixed',
    description: 'Empathic mental healthcare focusing on anxiety, depression, bipolar disorder, and child/adolescent psychiatry.',
    doctorName: 'Dr. Kirti Tandel',
  },
];

export const OBGYN_AREAS: CareArea[] = [
  {
    title: 'Antenatal Care',
    icon: 'Baby',
    description: 'Comprehensive pregnancy journeys from conception to delivery. We provide genetic screening, 4D ultrasounds, and personalized birth planning to ensure safety and peace of mind.',
    points: ['Pre-conception counseling', 'High-risk pregnancy management'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHsy0H36qIZubZtQ2Fjkv1q6yeMvMp4j9AapkHbTIxTVziKXNJaLv9CnxVCd7KWQCpOIa9Yga5C90QJmOhhuhGVPd1pV85syVBPolrtCbcVAxRWBATQ9aGp92PcD4iV6tG1vdpzvPiQaLVznHBIDBkQXiO8pTEMjikhjfxSDcHStNJuepKWXFJ7PYE8vL2HxxXtVKq0vmWpE24-PiT2DAoFXhLKN-QcGjOTZKfpFO3YGk4-n172eUwcjd_hfulUgrdA1lIxbQ4stE',
  },
  {
    title: 'Family Planning',
    icon: 'Users',
    description: 'Empowering your choices with modern contraceptive options and reproductive health education.',
  },
  {
    title: 'Surgical Excellence',
    icon: 'Activity',
    description: 'Minimally invasive laparoscopic surgeries and routine procedures performed with precision and care.',
    points: ['Laparoscopy', 'Hysterectomy'],
    badge: 'Advanced Tech',
  },
  {
    title: 'Adolescent Health',
    icon: 'Heart',
    description: 'Gentle introductions to reproductive health for young women. Building confidence through education and empathetic care.',
    badge: 'Gentle Care',
  },
];

export const PSYCHIATRY_AREAS: FocusArea[] = [
  {
    title: 'Adult Psychiatry',
    icon: 'Brain',
    description: 'Specialized treatment for anxiety, depression, bipolar disorders, and personality management in adults.',
    spanClasses: 'md:col-span-2 bg-primary-container text-on-primary-container',
  },
  {
    title: 'Child & Adolescent',
    icon: 'Smile',
    description: 'Nurturing care for developmental disorders, ADHD, and emotional health in children.',
    spanClasses: 'bg-surface-container border border-outline-variant hover:bg-surface-bright text-on-surface',
  },
  {
    title: 'Geriatric Care',
    icon: 'HeartHandshake',
    description: 'Managing age-related mental health concerns including dementia and late-life depression.',
    spanClasses: 'bg-surface-container border border-outline-variant hover:bg-surface-bright text-on-surface',
  },
  {
    title: 'De-addiction & Recovery',
    icon: 'Sparkles',
    description: 'A science-backed, compassionate approach to overcoming chemical and behavioral dependencies. We focus on long-term relapse prevention and family support.',
    tags: ['Substance Abuse', 'Alcoholism', 'Digital Addiction'],
    spanClasses: 'md:col-span-4 bg-secondary-fixed text-on-secondary-fixed',
  },
];

export const HEALTH_ARTICLES: HealthArticle[] = [
  {
    id: 'article-1',
    category: 'Nutrition',
    title: 'First Trimester Essentials: A Guide',
    description: 'Learn about the vital nutrients and lifestyle shifts needed for a healthy start to your pregnancy journey.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5rSRuCPXuueBHoW91gvmf3fqFRJx264RQ_wJtg5zNUTCT0fWuF9e8LN_Q9gpxuKO6CvzMPYH7KiKncrBj-XLq21L27x4qjYgEEisXN2xEsv5Bu-lKpB6i8PalSUK15L2gtvKdc0830SFncsqeFKuEeh-L373s1O1APS476RQ5uyjlVR7KP-Aw8NfnJNQXExVwlY0G8xb44CFe71Ai4SavyAz9LBwl3Tc4mpiKu3nZ_gwvfHEEj4j4nsM0JUTbWWiykGUWQcUQJHg',
    readTime: '5 min read',
  },
  {
    id: 'article-2',
    category: 'Screening',
    title: 'The Importance of Annual Wellness Checks',
    description: 'Prevention is the cornerstone of lifelong health. Discover what to expect during your routine gynecology checkup.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByV_7a_8DZEFi2fvNZFbR0wv1ZBN2fJOakHoT_898ydBi7cqJsKwBPbTkC6HiEUuQwKMKt9IxeJmeg0SKQVEH-hZClweEG_Rf7UMVMSFrn7RlSz2lcwYw4uFJX0b6bKKOZSIBTpqBgiS4YVyDVrSeOnNIJBiNumTZofZclkTbdaatvsr4F5t9WBn14mJ5ce7j0Aa_ZWPDWQ2lKORSkcv5lOPQ7bhd5ZhSkvWpJBC1vgoE1u7ro7SAMRQxycbk1_yqoWfSoeBVjmhE',
    readTime: '4 min read',
  },
  {
    id: 'article-3',
    category: 'Awareness',
    title: 'Managing PCOS: Lifestyle & Medical Options',
    description: 'Practical advice and medical insights for managing Polycystic Ovary Syndrome effectively.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUhTZexwmCuaA48AmgAK2P2i8LQBzW_wz61BIVTLGpLkmf_81nLd1xVL7xMQ1EGPROH8bFNQYB1El_-ghdJEqMFSc0MZqhor1kfgkEmqnIhPpcwAHUtRi17RnBzST0A0yZEF4FNi4DCnUWaP8u4JfhyMfthVkrPx_OtUiiI45gOO_z86M16Vncr9oagQJ8Lo9r5Og4mNM6Gsb4XPRaQ1Ig-FoZbHO5SPJSFitiGgKp3NX2SB0ZKIpPJBn3Md--Y_C9kdtodUsB-x8',
    readTime: '6 min read',
  },
];
