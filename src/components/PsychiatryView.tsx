import React, { useState } from 'react';
import { PSYCHIATRY_AREAS } from '../data';
import { Brain, Smile, HeartHandshake, ShieldCheck, Sparkles, Search, Activity, UserCheck, ChevronDown, ChevronUp } from 'lucide-react';

interface PsychiatryViewProps {
  onOpenBooking: (doctorId: string) => void;
}

const PSYCHIATRY_TREATMENTS: string[] = [
  "Psychology Consultation",
  "Suicidal behaviour",
  "adult counseling",
  "Depression Counseling",
  "cognitive behavior therapy (CBT)",
  "Attention Deficit Hyperactivity Disorder (ADHD)",
  "Strange Behavior",
  "Schizophrenia",
  "Panic Disorders",
  "Drugs De-Addiction Therapy",
  "DEMENTIA",
  "Counseling Services",
  "Bipolar Affective Disorder",
  "Behavior Management",
  "Alcohol De-Addiction",
  "Addiction Counseling",
  "Abnormal Behavior",
  "Psychiatry Consultation",
  "Electroencephalogram (EEG)",
  "Electroconvulsive Therapy (ECT)",
  "Nicotine/Tobacco (Smoking) De-addiction Treatment",
  "Alcohol De-addiction Treatment",
  "Drug Abuse & DeAddiction Therapy",
  "DeAddiction Counselling",
  "Adult Counselling",
  "Grief Counselling",
  "Dementia Treatment",
  "Bipolar Disorder Treatment",
  "Anxiety Disorders Treatment",
  "Panic Disorder Treatment",
  "Individual psychotherapy",
  "Psychological Problems",
  "Psychotherapy Adult",
  "Psychometric testing",
  "Psychosexual Problems",
  "Sleep Disturbance",
  "Sleep Disorder Treatment",
  "Affective and Emotional Difficulties",
  "Emotional Outbursts",
  "Emotions & Stress Related Conditions",
  "Post Traumatic Stress Disorder (PTSD)",
  "Suicidal Behavior",
  "Abnormal, Unusual, Strange Behavior",
  "Cognitive Behavioral Therapy (CBT)",
  "Behaviour & Thought Problems",
  "Autism",
  "Autism Spectrum disorders Treatment",
  "Attention Deficit Hyperactivity Disorder (ADHD) Treatment",
  "Schizophrenia Treatment",
  "Obsessive Compulsive Disorder (OCD) Counselling",
  "anxiety",
  "Anxiety Disorder Counselling",
  "Depression Treatment",
  "Depression Counselling",
  "Sexologist",
  "Psychopharmacology",
  "Medications",
  "Psychotherapy",
  "Women Counselling",
  "De-Addiction Psychiatry",
  "Adult Psychiatry",
  "Adolescent And Child Psychiatrist",
  "Geriatric Psychiatry",
  "Psychiatry"
];

const getTreatmentStyle = (name: string) => {
  const lower = name.toLowerCase();
  if (lower.includes('addiction') || lower.includes('alcohol') || lower.includes('drugs') || lower.includes('smoking') || lower.includes('tobacco') || lower.includes('nicotine')) {
    return {
      Icon: Activity,
      badgeColor: 'bg-[#fef3c7] text-[#92400e]'
    };
  }
  if (lower.includes('counseling') || lower.includes('counselling') || lower.includes('psychotherapy') || lower.includes('cbt') || lower.includes('grief')) {
    return {
      Icon: HeartHandshake,
      badgeColor: 'bg-[#e0e7ff] text-[#3730a3]'
    };
  }
  if (lower.includes('eeg') || lower.includes('ect') || lower.includes('medication') || lower.includes('pharmacology') || lower.includes('testing')) {
    return {
      Icon: UserCheck,
      badgeColor: 'bg-[#dbeafe] text-[#1e40af]'
    };
  }
  return {
    Icon: Brain,
    badgeColor: 'bg-[#fce7f3] text-[#9d174d]'
  };
};

export default function PsychiatryView({ onOpenBooking }: PsychiatryViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllTreatments, setShowAllTreatments] = useState(false);

  const filteredTreatments = PSYCHIATRY_TREATMENTS.filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );

  const INITIAL_LIMIT = 6;
  const isSearching = searchQuery.trim().length > 0;
  const visibleTreatments = (showAllTreatments || isSearching)
    ? filteredTreatments
    : filteredTreatments.slice(0, INITIAL_LIMIT);
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-8 md:py-12 space-y-16 animate-fade-up text-on-surface">
      
      {/* Intro Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-tertiary-container text-on-tertiary-container p-8 md:p-12 rounded-[40px] border border-gray-100">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs bg-tertiary/10 text-tertiary px-3 py-1 font-bold rounded-full uppercase tracking-wider">
            Mental Health & Emotional Well-being
          </span>
          <h2 className="font-display-md text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            Comprehensive Psychiatric Services
          </h2>
          <p className="font-body-md text-on-surface-variant text-base md:text-lg leading-relaxed">
            Led by Dr. Kirti Tandel, our mental health practice delivers compassionate, evidence-based psychiatric evaluations, counseling, and recovery therapy in an atmosphere of strict confidentiality.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => onOpenBooking('kirti')}
              className="bg-primary text-on-primary px-8 py-3.5 rounded-full font-semibold text-sm hover:opacity-95 transition-all shadow-md cursor-pointer"
            >
              Consult Dr. Kirti Tandel
            </button>
            <div className="flex items-center gap-2 text-xs font-semibold text-tertiary">
              <ShieldCheck className="w-4.5 h-4.5 text-green-600" /> 100% HIPAA and Confidentiality Standards Meta
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] rounded-[32px] overflow-hidden shadow-xl border border-tertiary/20 bg-gray-50">
            <img 
              className="w-full h-full object-cover" 
              src="https://drive.google.com/thumbnail?id=1BzYHCVq10NIJf1WUFsx47pE6RHdovBLT&sz=w1000" 
              alt="Dr. Kirti Tandel, a friendly male professional psychiatrist smiling warmly" 
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Specialty Focus Areas list */}
      <div className="space-y-8">
        <div className="text-center md:text-left">
          <h3 className="font-headline-lg text-2xl font-bold text-primary">Key Mental Health Focus Areas</h3>
          <p className="text-xs text-on-surface-variant font-medium mt-1">Providing safe spaces and expert therapy schedules for child, adult, and emotional recuperations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {PSYCHIATRY_AREAS.map((area, idx) => (
            <div 
              key={idx}
              className={`p-6 md:p-8 rounded-[32px] flex flex-col justify-between space-y-4 transition-all duration-300 ${area.spanClasses}`}
            >
              <div className="space-y-4">
                <div className="w-10 h-10 bg-white/60 text-primary rounded-xl flex items-center justify-center shrink-0">
                  {area.icon === 'Brain' && <Brain className="w-5 h-5 text-primary" />}
                  {area.icon === 'Smile' && <Smile className="w-5 h-5 text-primary" />}
                  {area.icon === 'HeartHandshake' && <HeartHandshake className="w-5 h-5 text-primary" />}
                  {area.icon === 'Sparkles' && <Sparkles className="w-5 h-5 text-primary" />}
                </div>
                <h4 className="font-bold text-base">{area.title}</h4>
                <p className="text-xs leading-relaxed opacity-90">{area.description}</p>
              </div>

              {area.tags && (
                <div className="flex gap-1.5 flex-wrap pt-3">
                  {area.tags.map(t => (
                    <span key={t} className="bg-white/40 text-primary text-[9px] font-extrabold px-2.5 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Radical Empathy Healing Philosophy Grid */}
      <div className="max-w-3xl mx-auto bg-surface p-8 md:p-12 rounded-[40px] border border-outline-variant space-y-6">
        <h3 className="font-headline-lg text-2xl font-bold text-primary leading-tight text-center md:text-left">
          Our Psychiatric Philosophy
        </h3>
        <p className="text-sm text-on-surface-variant leading-relaxed text-center md:text-left">
          We believe mental healthcare isn’t merely the absence of distress; it represents the dynamic active alignment of physical biology, stress management mechanisms, and supportive surroundings.
        </p>

        <div className="space-y-4 pt-2">
          <div className="flex gap-4 items-start">
            <div className="bg-primary/10 text-primary p-2.5 rounded-xl shrink-0">
              <ShieldCheck className="w-4.5 h-4.5" />
            </div>
            <div>
              <h5 className="font-bold text-sm text-primary">Radical Confidentiality</h5>
              <p className="text-xs text-on-surface-variant leading-relaxed mt-0.5">
                All clinical logs, psychiatric evaluations, prescriptions, and therapy protocols are kept under absolute lockdown. Our consultation spaces are structurally layout private.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="bg-primary/10 text-primary p-2.5 rounded-xl shrink-0">
              <Smile className="w-4.5 h-4.5" />
            </div>
            <div>
              <h5 className="font-bold text-sm text-primary">Ethical Pharmacotherapy</h5>
              <p className="text-xs text-on-surface-variant leading-relaxed mt-0.5">
                Medicines are recommended conservative and deliberate, targeting balance with maximum relief and minimal systemic footprints.
              </p>
            </div>
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
            <p className="text-xs text-slate-500">Try searching for terms like "Counseling", "Depression", "Addiction", or "ADHD".</p>
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

    </div>
  );
}
