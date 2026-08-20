import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Image as ImageIcon, Eye, X, Calendar, MessageSquare, 
  Film, Play, Sparkles, LayoutGrid, Pause,
  ChevronLeft, ChevronRight, Volume2, VolumeX, Maximize2, RotateCcw, Info
} from 'lucide-react';

export interface UploadedRecord {
  id: string;
  title: string;
  notes?: string;
  imageData: string;
  uploadedAt: string;
  fileSize: string;
  fileType: 'photo' | 'video';
}

export interface SquarePhoto {
  id: string;
  title: string;
  category?: string;
  imageUrl: string;
  caption: string;
  date: string;
}

// 40 High-Resolution Square Ratio Photos of Namaha Hospital Facilities & Care
const SQUARE_PHOTOS_40: SquarePhoto[] = [
  {
    id: 'sq-1',
    title: 'Advanced Modular Operation Theater',
    imageUrl: 'https://drive.google.com/thumbnail?id=1LZGOuHvnuSUCU4SBcDEr3_sPtRpzqJHv&sz=w1000',
    caption: 'Laminar airflow equipped surgical suite for zero-infection operative care.',
    date: 'Jan 2026'
  },
  {
    id: 'sq-2',
    title: 'Deluxe Patient Recovery Room',
    imageUrl: 'https://drive.google.com/thumbnail?id=1ojd2qLU_zArkCFEZ42FpOG4O8gdJoV6O&sz=w1000',
    caption: 'Private recovery room with ergonomic hospital beds, natural light, and quiet environment.',
    date: 'Jan 2026'
  },
  {
    id: 'sq-3',
    title: 'Pediatric Consultation Wing',
    imageUrl: 'https://drive.google.com/thumbnail?id=1JkX-NlJytwB0XFOTTcMWLWG-H1A7ATwP&sz=w1000',
    caption: 'Child-friendly consultation room designed to keep young patients relaxed.',
    date: 'Feb 2026'
  },
  {
    id: 'sq-4',
    title: 'High-Precision Diagnostic Suite',
    imageUrl: 'https://drive.google.com/thumbnail?id=1-nXe9JT_7zmdJonXW7elLa05Nt4Ri-zX&sz=w1000',
    caption: 'Advanced digital imaging suite for swift and precise clinical diagnosis.',
    date: 'Feb 2026'
  },
  {
    id: 'sq-5',
    title: 'Specialist Medical Consultation',
    imageUrl: 'https://drive.google.com/thumbnail?id=1RYHofe1Wo_nhko7L7RpSK54SDb-u9AtT&sz=w1000',
    caption: 'Comprehensive health evaluation with expert senior doctors and surgeons.',
    date: 'Mar 2026'
  },
  {
    id: 'sq-6',
    title: '24/7 Empathetic Nursing Care',
    imageUrl: 'https://drive.google.com/thumbnail?id=1vMYN1csFGxXUxtFSE0QNWduuKDIyhMe4&sz=w1000',
    caption: 'Dedicated nursing staff providing round-the-clock bedside assistance and support.',
    date: 'Mar 2026'
  },
  {
    id: 'sq-7',
    title: 'Maternity & Birth Suite',
    imageUrl: 'https://drive.google.com/thumbnail?id=1AJkbEtg5y0hWOk0lGD2pAMyWAlJXG-Yf&sz=w1000',
    caption: 'Private delivery room with advanced newborn monitoring equipment.',
    date: 'Apr 2026'
  },
  {
    id: 'sq-8',
    title: 'Automated Pathology Laboratory',
    imageUrl: 'https://drive.google.com/thumbnail?id=1F-FfSZXuOjcbgp_ChgmRzb4ZanTUNRs2&sz=w1000',
    caption: 'State-of-the-art hematology and biochemistry analyzers for accurate reports.',
    date: 'Apr 2026'
  },
  {
    id: 'sq-9',
    title: 'Cardiology ECG & Echo Monitoring',
    imageUrl: 'https://drive.google.com/thumbnail?id=1fkfmDec6YtnpO6j0QD9IjuHQio0Z-zJN&sz=w1000',
    caption: 'Real-time cardiac rhythm screening and comprehensive heart care.',
    date: 'May 2026'
  },
  {
    id: 'sq-10',
    title: 'Surgical Team Action',
    imageUrl: 'https://drive.google.com/thumbnail?id=1jAmRipxDtYWw1XNOvww7pEu-QwxmVX_a&sz=w1000',
    caption: 'Multi-disciplinary surgical team performing laparoscopic and general procedures.',
    date: 'May 2026'
  },
  {
    id: 'sq-11',
    title: 'Sterile Hospital Corridor',
    imageUrl: 'https://drive.google.com/thumbnail?id=1wM_qkH5gss5qZIsOPVDm0oaEG4qwIH1U&sz=w1000',
    caption: 'Spacious, well-lit, and spotlessly maintained hospital corridors.',
    date: 'Jun 2026'
  },
  {
    id: 'sq-12',
    title: 'Intensive Care Unit (ICU)',
    imageUrl: 'https://drive.google.com/thumbnail?id=1TTaPPpyFoCwLUHP6NL_ium_AtNklPPcF&sz=w1000',
    caption: 'Continuous vital monitoring, ventilators, and dedicated critical care doctors.',
    date: 'Jun 2026'
  },
  {
    id: 'sq-13',
    title: 'Physiotherapy & Rehab Center',
    imageUrl: 'https://drive.google.com/thumbnail?id=1D4XR_si1Um8vRupBCBv9RBpfeq_Wo3bK&sz=w1000',
    caption: 'Customized physical therapy programs for joint recovery and pain relief.',
    date: 'Jul 2026'
  },
  {
    id: 'sq-14',
    title: 'Microbiology Research Desk',
    imageUrl: 'https://drive.google.com/thumbnail?id=1sNF9qSfJd-T0OmWQqqoVczfMlLWWVfid&sz=w1000',
    caption: 'High-definition microscopic analysis for infectious disease diagnosis.',
    date: 'Jul 2026'
  },
  {
    id: 'sq-15',
    title: 'Newborn Infant Care Unit',
    imageUrl: 'https://drive.google.com/thumbnail?id=1BzjcbiTrWJp0H5CcoE0naK8xGbaIfVrw&sz=w1000',
    caption: 'Warm cradles and gentle neonatal observation for newborns.',
    date: 'Aug 2026'
  },
  {
    id: 'sq-16',
    title: 'Emergency Trauma Desk',
    imageUrl: 'https://drive.google.com/thumbnail?id=1vGuiCcnjqwIq4SESpGHj1aStADB8JJyS&sz=w1000',
    caption: 'Rapid triage and emergency resuscitation bay open 24 hours daily.',
    date: 'Aug 2026'
  },
  {
    id: 'sq-17',
    title: 'Reception & Helpdesk',
    imageUrl: 'https://drive.google.com/thumbnail?id=1h708Tcj2bIrgH5Wfpk7QUJvO3tk9oGlI&sz=w1000',
    caption: 'Warm reception desk guiding patients through registration and billing.',
    date: 'Sep 2026'
  },
  {
    id: 'sq-18',
    title: 'Digital X-Ray & Radiology',
    imageUrl: 'https://drive.google.com/thumbnail?id=17RusTrbEUVax0HLg63gGvcPSf6pBoUeV&sz=w1000',
    caption: 'Low-radiation digital radiography for quick skeletal and chest imaging.',
    date: 'Sep 2026'
  },
  {
    id: 'sq-19',
    title: 'In-House 24/7 Pharmacy',
    imageUrl: 'https://drive.google.com/thumbnail?id=16UPEZAtaFdmKjgykaiSrl2lW-8fF0Z1o&sz=w1000',
    caption: 'Authentic prescription medicines and emergency medical supplies.',
    date: 'Oct 2026'
  },
  {
    id: 'sq-20',
    title: 'Mother & Child Care Suite',
    imageUrl: 'https://drive.google.com/thumbnail?id=1Ym8gTk-5UXEUVYc4zmstFC5vrRyYwuIM&sz=w1000',
    caption: 'Postnatal care and lactation support in a calm, nurturing setting.',
    date: 'Oct 2026'
  },
  {
    id: 'sq-21',
    title: 'Laparoscopic Surgery Console',
    imageUrl: 'https://drive.google.com/thumbnail?id=1TxEmqqKIOj-UZzBoO3LrrRToPD8028Xv&sz=w1000',
    caption: 'Keyhole surgery technology enabling minimal scarring and faster discharge.',
    date: 'Nov 2026'
  },
  {
    id: 'sq-22',
    title: 'Visitor Lounge & Waiting Area',
    imageUrl: 'https://drive.google.com/thumbnail?id=1Pb_5Bk19gX6z3UnY9qAy8FNtpKVIn2lA&sz=w1000',
    caption: 'Relaxing seating lounge with ambient air filtration and refreshments.',
    date: 'Nov 2026'
  },
  {
    id: 'sq-23',
    title: 'Ultrasound Scan Station',
    imageUrl: 'https://drive.google.com/thumbnail?id=1ZiPw5cjTtOjNKckVQg3VibB4xkAiYmAa&sz=w1000',
    caption: 'High-resolution abdominal and pelvic Doppler ultrasound scans.',
    date: 'Dec 2026'
  },
  {
    id: 'sq-24',
    title: 'Pediatric Vaccination Hub',
    imageUrl: 'https://drive.google.com/thumbnail?id=1qBjDy8iSA-OjMNm8ie3-8xH2srva_n1T&sz=w1000',
    caption: 'Comprehensive immunization schedules managed by experienced pediatricians.',
    date: 'Dec 2026'
  },
  {
    id: 'sq-25',
    title: 'Routine Health Checkups',
    imageUrl: 'https://drive.google.com/thumbnail?id=1W5rJMcrSXU2FuMSU-ldEvSbyfD87xYw2&sz=w1000',
    caption: 'Preventive health screening packages tailored for all age groups.',
    date: 'Jan 2026'
  },
  {
    id: 'sq-26',
    title: 'CSSD Sterilization Unit',
    imageUrl: 'https://drive.google.com/thumbnail?id=1ojUjmse-rjKs6oPT7x3pX_xzRz_mshlk&sz=w1000',
    caption: 'Autoclave sterilizers ensuring 100% surgical tool sanitation.',
    date: 'Jan 2026'
  },
  {
    id: 'sq-27',
    title: 'Centralized Nursing Counter',
    imageUrl: 'https://drive.google.com/thumbnail?id=1cFlqGsXCYrldPwIioPrEb8aPeOYJKVUo&sz=w1000',
    caption: 'Immediate nurse call response system linked to every inpatient room.',
    date: 'Feb 2026'
  },
  {
    id: 'sq-28',
    title: 'Blood Sampling Desk',
    imageUrl: 'https://drive.google.com/thumbnail?id=1otsHlqcUslcelGDNXsXtBxF--G061wuz&sz=w1000',
    caption: 'Quick, painless blood collection with online digital report delivery.',
    date: 'Feb 2026'
  },
  {
    id: 'sq-29',
    title: 'NICU Incubator Care',
    imageUrl: 'https://drive.google.com/thumbnail?id=1iV9_2XjyBwRH1DhqaKOQ4MkgdECRKYv7&sz=w1000',
    caption: 'Specialized care environment for premature and delicate newborns.',
    date: 'Mar 2026'
  },
  {
    id: 'sq-30',
    title: 'Gynecology OPD Consultation',
    imageUrl: 'https://drive.google.com/thumbnail?id=14cjYMtJFk7nKvp78C1KnYdZRs2Mo7g0M&sz=w1000',
    caption: 'Personalized care for adolescent, reproductive, and menopausal health.',
    date: 'Mar 2026'
  },
  {
    id: 'sq-31',
    title: 'Orthopedic Bone & Joint Clinic',
    imageUrl: 'https://drive.google.com/thumbnail?id=1Nc7h3DaKttkBGvh7lFTJK070Gy5Yp_pX&sz=w1000',
    caption: 'Fracture fixation, arthroscopy, and joint replacement consultations.',
    date: 'Apr 2026'
  },
  {
    id: 'sq-32',
    title: 'ENT Examination Room',
    imageUrl: 'https://drive.google.com/thumbnail?id=1tWr9kq8iVUGvZ30slTlpQfiBwyc-W41B&sz=w1000',
    caption: 'Diagnostic endoscopes for ear, nose, and throat evaluation.',
    date: 'Apr 2026'
  },
  {
    id: 'sq-33',
    title: 'Patient Recovery Support',
    imageUrl: 'https://drive.google.com/thumbnail?id=1PyM6JmFdKqRksO5BZjGeXYNshLdG6kOb&sz=w1000',
    caption: 'Encouraging atmosphere helping patients regain strength smoothly.',
    date: 'May 2026'
  },
  {
    id: 'sq-34',
    title: 'Digital Health Records Console',
    imageUrl: 'https://drive.google.com/thumbnail?id=1B0O9OA6730JuiE-IF_m-xVCfyO7Qh2Qr&sz=w1000',
    caption: 'Encrypted patient history for instant access across medical departments.',
    date: 'May 2026'
  },
  {
    id: 'sq-35',
    title: 'Ophthalmology Eye Screening',
    imageUrl: 'https://drive.google.com/thumbnail?id=1U5X8aJWnkSe9RLcY-7RAbwHreZiq3cVb&sz=w1000',
    caption: 'Visual acuity testing, intraocular pressure measurement, and eye care.',
    date: 'Jun 2026'
  },
  {
    id: 'sq-36',
    title: 'Multi-Specialty Doctor Board',
    imageUrl: 'https://drive.google.com/thumbnail?id=1DnwTtRoHVDDINTjr9LvIrcxdmTYbz6MT&sz=w1000',
    caption: 'Collaborative treatment planning for complex medical conditions.',
    date: 'Jun 2026'
  },
  {
    id: 'sq-37',
    title: 'Wellness & Relaxation Corner',
    imageUrl: 'https://drive.google.com/thumbnail?id=1ibd_7TM8yeAUr1EWcPyn3d7SfHXJ5-Nz&sz=w1000',
    caption: 'Serene indoor environments fostering peace and mental well-being.',
    date: 'Jul 2026'
  },
  {
    id: 'sq-38',
    title: 'Pediatric Growth Monitoring',
    imageUrl: 'https://drive.google.com/thumbnail?id=1DH0K1-NRmideC-NKd9U7vGrxhG0ayapV&sz=w1000',
    caption: 'Child development charts and pediatric nutritional guidance.',
    date: 'Jul 2026'
  },
  {
    id: 'sq-39',
    title: 'Anesthesia Monitoring Workstation',
    imageUrl: 'https://drive.google.com/thumbnail?id=1nWqxZeXvNFnUXjG5LKdFgswYq6WWg-hc&sz=w1000',
    caption: 'Precision gas delivery and real-time oxygenation tracking.',
    date: 'Aug 2026'
  },
  {
    id: 'sq-40',
    title: '24/7 Namaha Hospital Main Desk',
    imageUrl: 'https://drive.google.com/thumbnail?id=191vGlwdHXvOJEnSAI44IlkDHhDbpLvJB&sz=w1000',
    caption: 'Serving Virar West with compassionate, affordable healthcare day and night.',
    date: 'Aug 2026'
  }
];

export interface VerticalVideo {
  id: string;
  title: string;
  videoUrl: string;
  posterUrl: string;
  duration?: string;
}

// Helper functions for video URL format detection
function isEmbedVideoUrl(url: string): boolean {
  if (!url) return false;
  return url.includes('drive.google.com') || url.includes('youtube.com') || url.includes('vimeo.com') || url.includes('embed');
}

function getEmbedVideoUrl(url: string): string {
  if (!url) return '';
  if (url.includes('drive.google.com')) {
    if (url.endsWith('/view') || url.endsWith('/view?usp=sharing')) {
      return url.replace(/\/view(\?usp=sharing)?$/, '/preview');
    }
    if (!url.includes('/preview')) {
      return url.endsWith('/') ? `${url}preview` : `${url}/preview`;
    }
  }
  return url;
}

/**
 * Healthcare & Clinical Videos List
 * 
 * TO MANUALLY UPLOAD YOUR OWN VIDEOS:
 * 1. Place your video files (.mp4, .webm, .mov) into the `/public/videos/` folder (e.g. `/public/videos/my_video.mp4`).
 * 2. Set `videoUrl` to `/videos/my_video.mp4` below (e.g. '/videos/video1.mp4').
 * 3. Or use Google Drive / YouTube / Web video URLs directly.
 */
const PORTRAIT_VIDEOS_9_16: VerticalVideo[] = [
  {
    id: 'vid-916-1',
    title: 'Advanced ICU Vital Monitoring & Critical Care',
    videoUrl: '/videos/video1.mp4', // To replace with local uploaded video in /public/videos/ or keep Drive URL
    posterUrl: '/videoposter.png',
    duration: '0:30'
  },
  {
    id: 'vid-916-2',
    title: 'Maternity Suite & Newborn Care Walkthrough',
    videoUrl: '/videos/video2.mp4',
    posterUrl: '/videoposter.png',
    duration: '0:45'
  },
  {
    id: 'vid-916-3',
    title: 'Precision Surgical Procedures in Modular OT',
    videoUrl: '/videos/video3.mp4',
    posterUrl: '/videoposter.png',
    duration: '0:25'
  },
  {
    id: 'vid-916-4',
    title: 'Compassionate Nursing Care & Patient Comfort',
    videoUrl: '/videos/video4.mp4',
    posterUrl: '/videoposter.png',
    duration: '0:35'
  },
  {
    id: 'vid-916-5',
    title: 'Emergency Resuscitation & Clinical Response',
    videoUrl: '/videos/video5.mp4',
    posterUrl: '/videoposter.png',
    duration: '0:40'
  },
  {
    id: 'vid-916-6',
    title: 'State-of-the-Art Pathology & Lab Analysis',
    videoUrl: '/videos/video6.mp4',
    posterUrl: '/videoposter.png',
    duration: '0:28'
  },
  {
    id: 'vid-916-7',
    title: 'Pediatric Health Evaluation & Vaccination',
    videoUrl: '/videos/video7.mp4',
    posterUrl: '/videoposter.png',
    duration: '0:32'
  },
  {
    id: 'vid-916-8',
    title: 'Advanced Digital Radiology & Diagnostic Suite',
    videoUrl: '/videos/video8.mp4',
    posterUrl: '/videoposter.png',
    duration: '0:38'
  },
  {
    id: 'vid-916-9',
    title: '24/7 In-House Pharmacy & Medical Dispensing',
    videoUrl: '/videos/video9.mp4',
    posterUrl: '/videoposter.png',
    duration: '0:22'
  },
  {
    id: 'vid-916-10',
    title: 'Cardiology Heart Monitoring & Echo Screening',
    videoUrl: '/videos/video10.mp4',
    posterUrl: '/videoposter.png',
    duration: '0:42'
  },
  {
    id: 'vid-916-11',
    title: 'Physiotherapy & Physical Rehabilitation Unit',
    videoUrl: '/videos/video11.mp4',
    posterUrl: '/videoposter.png',
    duration: '0:36'
  }
];

// Fetch all saved records from the shared Express API
async function loadSavedImages(): Promise<UploadedRecord[]> {
  try {
    const response = await fetch('/api/images');
    if (!response.ok) return [];
    return await response.json();
  } catch (err) {
    console.error('Failed to load shared images:', err);
    return [];
  }
}

export default function AboutView() {
  const [records, setRecords] = useState<UploadedRecord[]>([]);
  const [viewMode, setViewMode] = useState<'marquee' | 'grid'>('marquee');
  const [isMarqueePaused, setIsMarqueePaused] = useState<boolean>(false);

  // Desktop Video Player Modal State
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Lightbox state for square photo and backend records
  const [lightboxRecord, setLightboxRecord] = useState<{
    title: string;
    notes?: string;
    imageUrl: string;
    date: string;
    isVideo?: boolean;
  } | null>(null);

  // Video Controls Handlers
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const targetTime = parseFloat(e.target.value);
    videoRef.current.currentTime = targetTime;
    setCurrentTime(targetTime);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);
    if (videoRef.current.duration) {
      setDuration(videoRef.current.duration);
    }
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      videoRef.current.requestFullscreen().catch(() => {});
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds <= 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Keyboard navigation shortcuts for desktop view
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeVideoIndex === null) return;
      if (e.key === 'ArrowRight') {
        setActiveVideoIndex((prev) => (prev !== null ? (prev + 1) % PORTRAIT_VIDEOS_9_16.length : null));
        setIsPlaying(true);
      } else if (e.key === 'ArrowLeft') {
        setActiveVideoIndex((prev) => (prev !== null ? (prev - 1 + PORTRAIT_VIDEOS_9_16.length) % PORTRAIT_VIDEOS_9_16.length : null));
        setIsPlaying(true);
      } else if (e.key === 'Escape') {
        setActiveVideoIndex(null);
      } else if (e.key === ' ') {
        e.preventDefault();
        togglePlay();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeVideoIndex, isPlaying]);

  // Load backend records on component mount
  useEffect(() => {
    loadSavedImages()
      .then((data) => {
        const sorted = data.sort((a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime());
        setRecords(sorted);
      })
      .catch((err) => {
        console.error('Failed to fetch shared records:', err);
      });
  }, []);

  // Split square photos into 2 balanced rows for the marquee
  const marqueeRow1 = SQUARE_PHOTOS_40.slice(0, 20);
  const marqueeRow2 = SQUARE_PHOTOS_40.slice(20, 40);

  // Separate backend videos
  const backendVideos = records.filter((rec) => rec.fileType === 'video');

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8 md:py-16 space-y-12 animate-fade-in">
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="bg-primary/10 text-primary px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" /> Gallery & Memories
        </span>
        <h1 className="font-headline-lg text-3xl md:text-4xl font-extrabold text-primary tracking-tight">
          Healing Journeys & Memories
        </h1>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          A dedicated space showcasing patient photos, recovery moments, treatment experiences, and clinical milestones. Look back on journeys, celebrate healing progress, and explore memories from our care community.
        </p>
      </div>

      {/* View Mode Switcher Header */}
      <div className="flex justify-center">
        <div className="flex items-center gap-1 bg-surface-container p-1.5 rounded-2xl border border-outline-variant/30 shadow-sm">
          <button
            onClick={() => setViewMode('marquee')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
              viewMode === 'marquee' ? 'bg-primary text-white shadow-sm' : 'text-slate-600 hover:text-primary'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" /> Infinite Marquee
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
              viewMode === 'grid' ? 'bg-primary text-white shadow-sm' : 'text-slate-600 hover:text-primary'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" /> Photo Grid
          </button>
        </div>
      </div>

      {/* VIEW MODE 1: ANIMATED INFINITE MARQUEE TICKER (2 OPPOSITE MOVING ROWS) */}
      {viewMode === 'marquee' && (
        <div className="space-y-6 pt-2">
          <div className="flex items-center justify-between px-1">
            <div className="space-y-0.5">
              <h2 className="font-bold text-base text-primary flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-secondary" /> Photos
              </h2>
            </div>
            <button
              onClick={() => setIsMarqueePaused(!isMarqueePaused)}
              className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
            >
              {isMarqueePaused ? <Play className="w-3.5 h-3.5 fill-current" /> : <Pause className="w-3.5 h-3.5" />}
              {isMarqueePaused ? 'Resume Scroll' : 'Pause Scroll'}
            </button>
          </div>

          {/* Row 1: Leftward Smooth Motion */}
          <div className="overflow-hidden relative py-2 rounded-2xl bg-gradient-to-r from-slate-50 via-white to-slate-50 border border-slate-100 shadow-inner">
            <motion.div
              className="flex gap-4 w-max"
              animate={{ x: isMarqueePaused ? 0 : [0, -280 * marqueeRow1.length] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 45,
                  ease: 'linear'
                }
              }}
            >
              {[...marqueeRow1, ...marqueeRow1].map((photo, idx) => (
                <div
                  key={`r1-${photo.id}-${idx}`}
                  onClick={() => setLightboxRecord({
                    title: photo.title,
                    imageUrl: photo.imageUrl,
                  })}
                  className="w-[200px] sm:w-[240px] shrink-0 group cursor-pointer"
                >
                  <div className="aspect-square relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-sm group-hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                    <img
                      src={photo.imageUrl}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end">
                      <h4 className="text-white font-bold text-xs line-clamp-1 leading-snug">
                        {photo.title}
                      </h4>
                    </div> */}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2: Rightward Smooth Motion */}
          <div className="overflow-hidden relative py-2 rounded-2xl bg-gradient-to-r from-slate-50 via-white to-slate-50 border border-slate-100 shadow-inner">
            <motion.div
              className="flex gap-4 w-max"
              animate={{ x: isMarqueePaused ? 0 : [-280 * marqueeRow2.length, 0] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 50,
                  ease: 'linear'
                }
              }}
            >
              {[...marqueeRow2, ...marqueeRow2].map((photo, idx) => (
                <div
                  key={`r2-${photo.id}-${idx}`}
                  onClick={() => setLightboxRecord({
                    title: photo.title,
                    imageUrl: photo.imageUrl,
                  })}
                  className="w-[200px] sm:w-[240px] shrink-0 group cursor-pointer"
                >
                  <div className="aspect-square relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-sm group-hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                    <img
                      src={photo.imageUrl}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end">
                      <h4 className="text-white font-bold text-xs line-clamp-1 leading-snug">
                        {photo.title}
                      </h4>
                    </div> */}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      )}

      {/* VIEW MODE 2: ANIMATED 40-PHOTO GRID WITH STAGGER ANIMATIONS & LIGHTBOX */}
      {viewMode === 'grid' && (
        <div className="space-y-6 pt-2">
          <div className="flex items-center justify-between px-1">
            <h2 className="font-bold text-base text-primary flex items-center gap-2">
              <LayoutGrid className="w-4 h-4 text-secondary" /> Photos
            </h2>
            <span className="text-xs text-on-surface-variant font-medium">
              Click any 1:1 square photo to view full details
            </span>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            <AnimatePresence>
              {SQUARE_PHOTOS_40.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25, delay: index * 0.015 }}
                  onClick={() => setLightboxRecord({
                    title: photo.title,
                    imageUrl: photo.imageUrl,
                  })}
                  className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer flex flex-col"
                >
                  {/* Square Aspect Ratio Image */}
                  <div className="aspect-square relative overflow-hidden bg-slate-100">
                    <img
                      src={photo.imageUrl}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                      <span className="bg-white/90 text-primary p-2.5 rounded-full shadow-lg scale-90 group-hover:scale-100 transition-transform">
                        <Eye className="w-4 h-4" />
                      </span>
                    </div>
                    <span className="absolute top-2 left-2 text-[9px] font-bold bg-white/90 text-primary px-2 py-0.5 rounded-full shadow-sm backdrop-blur-sm">
                      #{index + 1}
                    </span>
                  </div>

                  {/* Card Info - Commented out for now */}
                  {/* <div className="p-3 flex-1 flex flex-col justify-between gap-1.5 bg-white">
                    <div>
                      <h3 className="font-bold text-xs text-primary group-hover:text-secondary transition-colors line-clamp-1 leading-snug">
                        {photo.title}
                      </h3>
                    </div>
                  </div> */}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      )}

      {/* 9:16 PORTRAIT VIDEOS SECTION */}
      <div className="space-y-6 pt-8 border-t border-slate-200/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1">
          <div>
            <h2 className="font-bold text-lg md:text-xl text-primary flex items-center gap-2">
              <Film className="w-5 h-5 text-secondary" /> Videos
            </h2>
          </div>
          <span className="text-xs font-semibold text-slate-500 hidden md:inline-block">
            Click any video for Desktop Theater view
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {PORTRAIT_VIDEOS_9_16.map((video, index) => (
            <div
              key={video.id}
              onClick={() => {
                setActiveVideoIndex(index);
                setIsPlaying(true);
              }}
              className="group cursor-pointer bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 relative aspect-[9/16] border border-slate-200/80 flex flex-col justify-between"
            >
              {/* Background Video Preview */}
              <video
                src={video.videoUrl}
                poster={video.posterUrl}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                muted
                loop
                playsInline
                onMouseEnter={(e) => {
                  const playPromise = e.currentTarget.play();
                  if (playPromise !== undefined) {
                    playPromise.catch(() => {});
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.pause();
                  e.currentTarget.currentTime = 0;
                }}
              />

              {/* Top Badge Overlay */}
              <div className="relative z-10 p-2.5 flex justify-between items-center bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none">
                <span className="text-[9px] font-bold text-white/90 bg-primary/80 px-2 py-0.5 rounded-md backdrop-blur-xs">
                  #{index + 1}
                </span>
                {video.duration && (
                  <span className="text-[9px] font-semibold text-white/90 bg-black/60 px-1.5 py-0.5 rounded backdrop-blur-sm">
                    {video.duration}
                  </span>
                )}
              </div>

              {/* Center Play Icon */}
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <span className="w-10 h-10 rounded-full bg-white/95 text-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-4 h-4 fill-primary ml-0.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BACKEND VIDEOS SECTION (IF PRESENT) */}
      {backendVideos.length > 0 && (
        <div className="space-y-4 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-between pb-2 border-b border-gray-100">
            <h2 className="font-bold text-base text-primary flex items-center gap-2">
              <Film className="w-4 h-4 text-secondary" /> Video Records ({backendVideos.length})
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {backendVideos.map((vid) => (
              <div
                key={vid.id}
                onClick={() => setLightboxRecord({
                  title: vid.title,
                  imageUrl: vid.imageData,
                  notes: vid.notes,
                  date: vid.uploadedAt,
                  isVideo: true
                })}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group cursor-pointer"
              >
                <div className="aspect-video relative overflow-hidden bg-black flex items-center justify-center">
                  <video
                    src={vid.imageData}
                    className="w-full h-full object-cover"
                    preload="metadata"
                    muted
                    playsInline
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                    <span className="bg-white/90 text-primary p-3 rounded-full shadow-md group-hover:scale-105 transition-transform">
                      <Play className="w-4 h-4 fill-primary" />
                    </span>
                  </div>
                </div>
                {/* <div className="p-4 flex-1 flex flex-col justify-between gap-3">
                  <div className="space-y-1">
                    <h3 className="font-bold text-xs text-primary group-hover:text-secondary transition-colors line-clamp-1">
                      {vid.title}
                    </h3>
                    {vid.notes && (
                      <p className="text-[11px] text-on-surface-variant line-clamp-2 leading-relaxed flex items-start gap-1">
                        <MessageSquare className="w-3 h-3 shrink-0 mt-0.5 text-secondary" />
                        <span>{vid.notes}</span>
                      </p>
                    )}
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-100 pt-2.5 text-[10px] text-on-surface-variant font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {vid.uploadedAt?.split(',')[0] || vid.uploadedAt}
                    </span>
                  </div>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* DESKTOP THEATER VIDEO PLAYER MODAL */}
      <AnimatePresence>
        {activeVideoIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[100] backdrop-blur-2xl flex items-center justify-center p-2 sm:p-4 md:p-6"
            onClick={() => setActiveVideoIndex(null)}
          >
            {/* Ambient Blurred Video Background for Desktop Glow Effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25 blur-3xl scale-125">
              <video
                src={PORTRAIT_VIDEOS_9_16[activeVideoIndex].videoUrl}
                muted
                loop
                autoPlay
                className="w-full h-full object-cover"
              />
            </div>

            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="bg-zinc-950/95 border border-white/15 w-full max-w-full md:max-w-5xl lg:max-w-6xl h-full max-h-[96vh] md:h-[86vh] rounded-2xl md:rounded-[32px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden relative flex flex-col md:flex-row z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top-Right Close Button */}
              <button
                onClick={() => setActiveVideoIndex(null)}
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full transition-all border border-white/20 cursor-pointer z-50 shadow-2xl group hover:scale-110"
                aria-label="Close video player"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* LEFT / CENTER: VIDEO PLAYER THEATER FRAME */}
              <div className="flex-1 bg-black/80 relative flex items-center justify-center p-2 md:p-6 overflow-hidden min-h-[350px]">
                {/* Previous Video Desktop Arrow */}
                <button
                  onClick={() => {
                    setActiveVideoIndex((activeVideoIndex - 1 + PORTRAIT_VIDEOS_9_16.length) % PORTRAIT_VIDEOS_9_16.length);
                    setIsPlaying(true);
                  }}
                  className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white p-3 rounded-full border border-white/20 shadow-xl backdrop-blur-md cursor-pointer transition-all hover:scale-110 z-30"
                  title="Previous Video (←)"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Next Video Desktop Arrow */}
                <button
                  onClick={() => {
                    setActiveVideoIndex((activeVideoIndex + 1) % PORTRAIT_VIDEOS_9_16.length);
                    setIsPlaying(true);
                  }}
                  className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white p-3 rounded-full border border-white/20 shadow-xl backdrop-blur-md cursor-pointer transition-all hover:scale-110 z-30"
                  title="Next Video (→)"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Vertical Video Frame Container */}
                <div className="w-full h-full max-h-[78vh] aspect-[9/16] max-w-[400px] relative rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.8)] border border-white/15 bg-black group/controls flex items-center justify-center">
                  <video 
                    ref={videoRef}
                    src={PORTRAIT_VIDEOS_9_16[activeVideoIndex].videoUrl} 
                    poster={PORTRAIT_VIDEOS_9_16[activeVideoIndex].posterUrl}
                    autoPlay 
                    playsInline
                    loop
                    onTimeUpdate={handleTimeUpdate}
                    onClick={togglePlay}
                    className="w-full h-full object-cover cursor-pointer"
                  />

                  {/* Play/Pause Overlay Animation Flash */}
                  {!isPlaying && (
                    <div 
                      onClick={togglePlay}
                      className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer transition-opacity z-20"
                    >
                      <div className="w-16 h-16 rounded-full bg-white/90 text-primary flex items-center justify-center shadow-2xl transform scale-100 transition-transform">
                        <Play className="w-8 h-8 fill-primary ml-1" />
                      </div>
                    </div>
                  )}

                  {/* Custom Bottom Control Bar */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-4 space-y-2 opacity-90 group-hover/controls:opacity-100 transition-opacity z-20">
                    {/* Progress Slider */}
                    <input
                      type="range"
                      min={0}
                      max={duration || 100}
                      value={currentTime}
                      onChange={handleSeek}
                      className="w-full h-1.5 bg-white/30 hover:bg-white/40 accent-primary rounded-lg appearance-none cursor-pointer transition-all"
                    />

                    <div className="flex items-center justify-between text-xs text-white/90 font-medium pt-1">
                      <div className="flex items-center gap-3">
                        <button onClick={togglePlay} className="hover:text-white transition-colors cursor-pointer" aria-label="Play or Pause">
                          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                        </button>
                        <button onClick={toggleMute} className="hover:text-white transition-colors cursor-pointer" aria-label="Mute or Unmute">
                          {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
                        </button>
                        <span className="text-[11px] font-mono text-white/80">
                          {formatTime(currentTime)} / {formatTime(duration)}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button onClick={toggleFullscreen} className="hover:text-white transition-colors cursor-pointer" title="Fullscreen">
                          <Maximize2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDEBAR: DESKTOP DETAILS & VIDEO PLAYLIST QUEUE */}
              <div className="hidden md:flex flex-col w-80 lg:w-96 bg-zinc-900/90 border-l border-white/10 p-6 text-white justify-between space-y-6 overflow-y-auto">
                {/* Header & Meta */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-white/60 font-semibold uppercase tracking-wider">
                    <span className="flex items-center gap-1.5 text-primary-container font-mono">
                      <Film className="w-3.5 h-3.5 text-secondary" /> Video {activeVideoIndex + 1} of {PORTRAIT_VIDEOS_9_16.length}
                    </span>
                    <span className="bg-white/10 px-2 py-0.5 rounded text-[10px] text-white/80">
                      HD 1080p
                    </span>
                  </div>

                  <div className="border-b border-white/10 pb-2">
                  </div>
                </div>

                {/* Up Next Video Playlist */}
                <div className="flex-1 space-y-3 min-h-0 flex flex-col justify-start">
                  <h4 className="text-xs font-bold text-white/80 uppercase tracking-wider flex items-center justify-between">
                    <span>Up Next in Gallery</span>
                    <span className="text-[10px] font-normal text-white/50">{PORTRAIT_VIDEOS_9_16.length} Videos</span>
                  </h4>

                  <div className="space-y-2 overflow-y-auto max-h-[260px] pr-1">
                    {PORTRAIT_VIDEOS_9_16.map((vid, idx) => (
                      <div
                        key={vid.id}
                        onClick={() => {
                          setActiveVideoIndex(idx);
                          setIsPlaying(true);
                        }}
                        className={`flex items-center gap-3 p-2 rounded-xl transition-all cursor-pointer border ${
                          idx === activeVideoIndex 
                            ? 'bg-primary/30 border-primary text-white shadow-sm' 
                            : 'bg-white/5 border-transparent hover:bg-white/10 text-white/80 hover:text-white'
                        }`}
                      >
                        <div className="w-10 h-14 rounded-lg bg-black overflow-hidden relative shrink-0 border border-white/10">
                          <img src={vid.posterUrl} alt={`Video ${idx + 1}`} className="w-full h-full object-cover" />
                          {idx === activeVideoIndex && (
                            <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
                              <Play className="w-3 h-3 fill-white text-white" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold line-clamp-1 leading-snug">Video #{idx + 1}</p>
                          <p className="text-[10px] text-white/50 mt-0.5">{vid.duration || '0:30'}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Desktop Keyboard Hints Footer */}
                <div className="pt-4 border-t border-white/10 text-[11px] text-white/50 space-y-1 bg-white/5 p-3 rounded-xl">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white/70">Keyboard Shortcuts:</span>
                  </div>
                  <div className="flex items-center gap-3 text-[10px] font-mono text-white/60 pt-0.5">
                    <span><kbd className="bg-white/10 px-1 py-0.5 rounded text-white/80">←/→</kbd> Switch</span>
                    <span><kbd className="bg-white/10 px-1 py-0.5 rounded text-white/80">Space</kbd> Pause</span>
                    <span><kbd className="bg-white/10 px-1 py-0.5 rounded text-white/80">Esc</kbd> Close</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LIGHTBOX POPUP MODAL */}
      <AnimatePresence>
        {lightboxRecord && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-[100] backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
            onClick={() => setLightboxRecord(null)}
          >
            {lightboxRecord.isVideo ? (
              /* Full Screen Clean Website Video Player */
              <motion.div 
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.98, opacity: 0 }}
                className="bg-black w-full h-full max-w-full max-h-full sm:max-w-6xl sm:max-h-[96vh] sm:rounded-3xl overflow-hidden shadow-2xl relative flex items-center justify-center border border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setLightboxRecord(null)}
                  className="absolute top-4 right-4 bg-black/80 hover:bg-black text-white p-3 rounded-full transition-all border border-white/30 cursor-pointer z-50 shadow-2xl group"
                  aria-label="Close video"
                >
                  <X className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </button>
                <video 
                  src={lightboxRecord.imageUrl} 
                  controls 
                  autoPlay 
                  playsInline
                  className="w-full h-full max-h-[100vh] sm:max-h-[92vh] object-contain"
                />
              </motion.div>
            ) : (
              /* Full Screen Clean Photo Viewer */
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-black/95 w-full h-full max-w-full max-h-full sm:max-w-6xl sm:max-h-[96vh] sm:rounded-3xl overflow-hidden shadow-2xl relative flex items-center justify-center border border-white/10 p-2 sm:p-4"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setLightboxRecord(null)}
                  className="absolute top-4 right-4 bg-black/80 hover:bg-black text-white p-3 rounded-full transition-all border border-white/30 cursor-pointer z-50 shadow-2xl group"
                  aria-label="Close photo"
                >
                  <X className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </button>
                <img 
                  src={lightboxRecord.imageUrl} 
                  alt="Hospital Gallery Photo" 
                  className="w-full h-full max-h-[92vh] object-contain rounded-xl sm:rounded-2xl"
                />
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
