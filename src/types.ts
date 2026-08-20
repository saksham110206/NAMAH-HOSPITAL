export type ActiveTab = 'home' | 'doctors' | 'orthopedics' | 'obgyn' | 'psychiatry' | 'about' | 'contact';

export interface Doctor {
  id: string;
  name: string;
  role: string;
  specialty: string;
  qualifications: string;
  experience: string;
  avatar: string;
  rating?: number;
  tags: string[];
  approach: string;
  consultationHours: string;
}

export interface CareArea {
  title: string;
  icon: string;
  description: string;
  points?: string[];
  badge?: string;
  image?: string;
}

export interface FocusArea {
  title: string;
  icon: string;
  description: string;
  tags?: string[];
  spanClasses?: string;
}

export interface HealthArticle {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  readTime: string;
}

export interface Appointment {
  id: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  specialty: string;
  doctorName: string;
  date: string;
  timeSlot: string;
  status: 'Pending' | 'Confirmed' | 'Completed';
  notes?: string;
  createdAt: string;
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}
