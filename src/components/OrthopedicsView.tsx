import React, { useState } from 'react';
import { Bone, Landmark, Sparkles, CheckCircle2, ShieldAlert, ArrowRight, UserCheck, Activity, ChevronDown, ChevronUp, HelpCircle, Search, Crosshair } from 'lucide-react';

interface OrthopedicsViewProps {
  onOpenBooking: (doctorId: string) => void;
}

const ORTHOPEDIC_TREATMENTS: string[] = [
  "Sports Injury Prevention Counseling",
  "Bankarts Repair",
  "Cruciate Ligament Reconstruction",
  "Lower Back Pain (Lumbago)",
  "Bone Tumor (Neoplasm)",
  "Paediatric Orthopaedic Consultations",
  "Spondylitis",
  "Rotator Cuff Injury",
  "Neck Pain",
  "Joint Replacement",
  "Joint Dislocation",
  "Hip Pain",
  "External Fixation",
  "Lipoma Removal",
  "Unstable Shoulder",
  "Elbow Pain Management",
  "Lumbago",
  "Reconstruction and Bone Lengthening",
  "Functional Orthopedics",
  "Arthroplasty",
  "Spine Surgery",
  "Revision Hip and Knee Arthroplasty",
  "Childhood Bone and Soft Tissue Tumors",
  "Musculoskeletal Infections",
  "Limb Lengthening",
  "Knee Replacement",
  "Knee Braces For Osteoarthritis",
  "Hip Replacement",
  "Hip Resurfacing",
  "Arthroscopy",
  "Musculoskeletal Pain Management",
  "Ligament Reconstruction",
  "Joint and Muscle Problems",
  "Ligament and Tendon Repair",
  "Bone Trauma",
  "Elbow Replacement",
  "Shoulder Replacement",
  "Limb Deformities",
  "Correction of Deformities",
  "Shoulder SLAP (Tear) Lesions",
  "Foot Injury Treatment",
  "Achilles Tendon Rupture Treatment",
  "Tuberculosis (TB) Treatment",
  "Frozen Shoulder Treatment",
  "ACL & PCL Reconstruction",
  "Fracture Treatment",
  "Knee Pain Treatment",
  "Hand Pain Treatment",
  "Neck Pain Treatment",
  "Joint Pain Treatment",
  "Back Pain Treatment",
  "Hip and Knee Joint Replacement Surgery",
  "Spine",
  "Treatment for Back Ache",
  "Orthopedic Consultation",
  "Orthopaedic Surgery",
  "Knee Pain",
  "Ankle Swelling",
  "Arthralgia",
  "Wrist Ache",
  "Elbow Ache",
  "Shoulder Movement Restricted",
  "Ankle Pain",
  "Arthritis",
  "Arthritis Occurring after Infection",
  "Orthopedician",
  "Orthopedist",
  "General Physician"
];

const getTreatmentStyle = (name: string) => {
  const lower = name.toLowerCase();
  if (lower.includes('replacement') || lower.includes('arthroplasty') || lower.includes('hip') || lower.includes('knee') || lower.includes('bone')) {
    return {
      Icon: Bone,
      badgeColor: 'bg-[#dbeafe] text-[#1e40af]'
    };
  }
  if (lower.includes('surgery') || lower.includes('arthroscopy') || lower.includes('reconstruction') || lower.includes('repair') || lower.includes('fixation') || lower.includes('acl') || lower.includes('pcl') || lower.includes('bunkart')) {
    return {
      Icon: Crosshair,
      badgeColor: 'bg-[#fce7f3] text-[#9d174d]'
    };
  }
  if (lower.includes('consultation') || lower.includes('counseling') || lower.includes('orthopedician') || lower.includes('orthopedist') || lower.includes('physician')) {
    return {
      Icon: UserCheck,
      badgeColor: 'bg-[#e0e7ff] text-[#3730a3]'
    };
  }
  return {
    Icon: Activity,
    badgeColor: 'bg-[#fef3c7] text-[#92400e]'
  };
};

export default function OrthopedicsView({ onOpenBooking }: OrthopedicsViewProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllTreatments, setShowAllTreatments] = useState(false);

  const filteredTreatments = ORTHOPEDIC_TREATMENTS.filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );

  const INITIAL_LIMIT = 6;
  const isSearching = searchQuery.trim().length > 0;
  const visibleTreatments = (showAllTreatments || isSearching)
    ? filteredTreatments
    : filteredTreatments.slice(0, INITIAL_LIMIT);

  const faqs = [
    {
      question: "Which area does Dr. Jignesh Yeshwant Tandel practice?",
      answer: "Dr. Jignesh Yeshwant Tandel is a Orthopedician practicing in Virar."
    },
    {
      question: "Why do patients visit Dr. Jignesh Yeshwant Tandel?",
      answer: "Patients consult Dr. Jignesh Yeshwant Tandel for the treatment of Arthritis occurring after infection, Arthritis, Ankle pain, Shoulder movement restricted, Elbow ache, Wrist ache, Arthralgia, Ankle swelling, Knee pain."
    },
    {
      question: "What is Dr. Jignesh Yeshwant Tandel's specialization?",
      answer: "Dr. Jignesh Yeshwant Tandel specializes in the treatment of Arthritis occurring after infection, Arthritis, Ankle pain, Shoulder movement restricted, Elbow ache, Wrist ache, Arthralgia, Ankle swelling, Knee pain."
    },
    {
      question: "What is Dr. Jignesh Yeshwant Tandel education qualification?",
      answer: "Dr. Jignesh Yeshwant Tandel is a Orthopedician by training and has completed his Fellowship from Murup Hospital, Changwon,South Korea in 2023, DNB Orthopaedics from P. D. Hinduja Hospital and MRC, Mahim in 2022, D. Orthopaedics from BJGMC & Sassoon Hospital, Pune in 2019 and MBBS."
    },
    {
      question: "How many years of experince Dr. Jignesh Yeshwant Tandel have?",
      answer: "Dr. Jignesh Yeshwant Tandel has over 9 years of clinical experience."
    }
  ];
  const focusAreas = [
    {
      title: 'Joint Replacement',
      desc: 'Specialized reconstruction of hips and knees using minimally invasive techniques to accelerate postoperative mobilization.',
      icon: 'Bone',
    },
    {
      title: 'Arthroscopy & Sports Medicine',
      desc: 'Advanced keyhole surgeries for knee ligament rectifications and shoulder stabilization with micro-incisions.',
      icon: 'Activity',
    },
    {
      title: 'Pediatric Orthopedics',
      desc: 'Gentle corrective diagnostics for congenital skeletal variations, optimizing growth curves in childhood.',
      icon: 'UserCheck',
    },
    {
      title: 'Trauma & Spine Care',
      desc: 'Responsive, expert fracture stabilization, spinal alignments, and specialized pain redirection management.',
      icon: 'ShieldAlert',
    },
  ];

  const procedures = [
    'Total Hip & Knee Arthroplasty (Joint Replacement)',
    'ACL Reconstruction & Cartilage Meniscus Repair',
    'Rotator Cuff & Keyhole Shoulder Repair',
    'Corrective Osteotomies & Deformity Correction',
    'Minimally Invasive Spine Surgery & Disk Therapy',
    'Complex Trauma & Fracture Stabilization Solutions',
  ];

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-8 md:py-12 space-y-16 animate-fade-up text-on-surface">
      
      {/* Intro Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-surface-container-low p-8 md:p-12 rounded-[40px] border border-gray-100">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs bg-primary/10 text-primary px-3 py-1 font-bold rounded-full uppercase tracking-wider">
            Surgical Excellence & Reconstruction
          </span>
          <h2 className="font-display-md text-3xl md:text-5xl font-bold text-primary tracking-tight leading-tight">
            Comprehensive Orthopedic Services
          </h2>
          <p className="font-body-md text-on-surface-variant text-base md:text-lg leading-relaxed">
            Led by Dr. Jignesh Tandel, our orthopedic practice combines advanced surgical precision with empathetic recovery plans to restore your quality of life and mobility.
          </p>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] rounded-[32px] overflow-hidden shadow-xl border border-gray-200 bg-gray-100">
            <img 
              className="w-full h-full object-cover grayscale-xs hover:grayscale-0 transition-all duration-700 hover:scale-101" 
              src="https://drive.google.com/thumbnail?id=1qwOC_kvAQtw8jNKF38oWurOXOPGWGi_h&sz=w1000" 
              alt="Dr. Jignesh Tandel posing with a detailed mockup of a human knee joint, symbolizing orthopedic surgery" 
            />
          </div>
          <p className="text-center text-xs font-semibold mt-3 text-secondary italic">
            "Surgical accuracy coupled with responsive rehabilitation restores human movement."
          </p>
        </div>
      </div>

      {/* Focus Areas Cards - Bento Light */}
      <div className="space-y-8">
        <div className="text-center md:text-left">
          <h3 className="font-headline-lg text-2xl font-bold text-primary">Our Care Focus Areas</h3>
          <p className="text-xs text-on-surface-variant font-medium mt-1">Specialized musculoskeletal solutions tailored to anatomical recovery.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {focusAreas.map((area, index) => {
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-3xl border border-gray-100 hover:border-primary/20 shadow-[0px_0px_12px_4px_rgba(69,60,110,0.02)] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary-fixed text-primary rounded-xl flex items-center justify-center">
                    {area.icon === 'Bone' && <Bone className="w-5 h-5" />}
                    {area.icon === 'Activity' && <Activity className="w-5 h-5" />}
                    {area.icon === 'UserCheck' && <UserCheck className="w-5 h-5" />}
                    {area.icon === 'ShieldAlert' && <ShieldAlert className="w-5 h-5" />}
                  </div>
                  <h4 className="font-bold text-base text-primary">{area.title}</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">{area.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Common Procedures List & Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-surface p-8 md:p-12 rounded-[40px] border border-outline-variant">
        <div className="space-y-6">
          <h3 className="font-headline-lg text-2xl font-bold text-primary">Therapeutic Procedures</h3>
          <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
            Our surgeries utilize premium materials and implants, with state-of-the-art laminar air-flow theater configurations at local affiliate hospitals in Virar.
          </p>
          <ul className="grid grid-cols-1 gap-3.5 text-sm">
            {procedures.map((proc, index) => (
              <li key={index} className="flex gap-3 items-center">
                <CheckCircle2 className="w-4.5 h-4.5 text-secondary shrink-0" />
                <span className="font-medium text-on-surface-variant">{proc}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-6">
          <h4 className="font-bold text-base text-primary flex items-center gap-1.5 border-b pb-3">
            <Sparkles className="w-5 h-5 text-secondary" /> Rehabilitation Guarantee
          </h4>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Musculoskeletal surgeries are only 50% of the movement dynamic. The subsequent post-discharge physical mobilization, guided regularly by Dr. Tandel's team of therapists, ensures complete return-to-play or return-to-walk state index.
          </p>
          <div className="bg-primary/5 p-4 rounded-2xl border border-primary/10">
            <p className="text-xs text-primary font-bold">
              We monitor recovery pathways weekly. Out-patient physical clinics operate daily at the premises.
            </p>
          </div>
        </div>
      </div>

      {/* Recovery Journey Map */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="font-headline-lg text-2xl font-bold text-primary">Your Journey to Pain-Free Movement</h3>
          <p className="text-xs text-on-surface-variant font-medium mt-1">A structured approach from diagnostic mapping through surgical mobilization.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xs relative space-y-3">
            <div className="w-8 h-8 rounded-full bg-primary text-on-primary font-bold text-xs flex items-center justify-center">
              1
            </div>
            <h4 className="font-bold text-sm text-primary">Phase 1: Preparation</h4>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Musculoskeletal scanning, digital X-rays, load mapping and pre-operative home optimization packages so your body is structurally primed.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xs relative space-y-3">
            <div className="w-8 h-8 rounded-full bg-primary text-on-primary font-bold text-xs flex items-center justify-center">
              2
            </div>
            <h4 className="font-bold text-sm text-primary">Phase 2: Precision Operation</h4>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              At-hospital surgery executed under Dr. Tandel's direct hands, utilizing bio-material implants and precise computer assistance structures.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xs relative space-y-3">
            <div className="w-8 h-8 rounded-full bg-primary text-on-primary font-bold text-xs flex items-center justify-center">
              3
            </div>
            <h4 className="font-bold text-sm text-primary">Phase 3: Tailored Movement</h4>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Targeted outpatient physical exercises, weekly monitoring assessments and functional joint rehabilitation indexes till complete recovery.
            </p>
          </div>
        </div>
      </div>

      {/* Surgeries & Treatments List Section */}
      <div className="bg-white rounded-[36px] p-6 md:p-10 border border-gray-100 shadow-[0px_4px_24px_rgba(0,0,0,0.03)] space-y-8">
        <div className="space-y-6 border-b border-gray-100 pb-6">
          <h3 className="font-headline-lg text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
            {filteredTreatments.length} Surgeries & Treatments
          </h3>

          <div className="relative max-w-full">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search surgeries & treatments"
              className="w-full bg-[#f1f3f7] hover:bg-[#e9ecf2] focus:bg-white text-slate-900 placeholder:text-gray-500 text-sm md:text-base font-medium rounded-full py-3.5 pl-12 pr-4 outline-none border border-transparent focus:border-primary/30 focus:ring-4 focus:ring-primary/10 transition-all"
            />
          </div>
        </div>

        {filteredTreatments.length === 0 ? (
          <div className="text-center py-12 space-y-2">
            <p className="font-bold text-slate-700 text-base">No surgeries or treatments matched your search</p>
            <p className="text-xs text-slate-500">Try searching for terms like "Replacement", "Arthroscopy", "Spine", "Knee", or "Ligament".</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-2 text-xs font-bold text-primary hover:underline cursor-pointer"
            >
              Clear search filter
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
              {visibleTreatments.map((treatment, idx) => {
                const { Icon, badgeColor } = getTreatmentStyle(treatment);
                return (
                  <div
                    key={`${treatment}-${idx}`}
                    className="flex items-center gap-4 group py-1.5 border-b border-gray-100/70 hover:border-primary/20 transition-colors"
                  >
                    <div className={`w-12 h-12 rounded-full ${badgeColor} flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-sm md:text-[15px] text-slate-800 leading-snug group-hover:text-primary transition-colors">
                      {treatment}
                    </span>
                  </div>
                );
              })}
            </div>

            {!isSearching && filteredTreatments.length > INITIAL_LIMIT && (
              <div className="text-center pt-2">
                <button
                  onClick={() => setShowAllTreatments(!showAllTreatments)}
                  className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary font-bold text-sm px-6 py-2.5 rounded-full transition-all cursor-pointer shadow-xs active:scale-95"
                >
                  {showAllTreatments ? (
                    <>
                      <span>Show Less</span>
                      <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      <span>More ({filteredTreatments.length - INITIAL_LIMIT} more surgeries & treatments)</span>
                      <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Frequently Asked Questions (FAQ) Section */}
      <div className="space-y-8 bg-surface-container-low p-8 md:p-12 rounded-[40px] border border-gray-100">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" /> Patient Knowledge Base
          </div>
          <h3 className="font-headline-lg text-2xl md:text-3xl font-bold text-primary">
            Frequently Asked Questions
          </h3>
          <p className="text-xs md:text-sm text-on-surface-variant font-medium">
            Find answers to common questions regarding Dr. Jignesh Yeshwant Tandel's orthopedic practice, qualifications, and patient care.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-xs transition-all duration-200"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50/80 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm md:text-base text-primary leading-snug">
                    {index + 1}. {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-primary/5 text-primary shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-primary text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-on-surface-variant border-t border-gray-100 bg-gray-50/50 leading-relaxed font-medium">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
