import React from 'react';
import { DOCTORS } from '../data';
import { ActiveTab, Doctor } from '../types';
import { ShieldCheck, Clock, Award, Phone, CalendarCheck, GitFork, Sparkles, HeartPulse } from 'lucide-react';

interface DoctorsViewProps {
  onOpenBooking: (doctorId?: string) => void;
  selectedDoctorId?: string | null;
  onSelectDoctor: (doctorId: string | null) => void;
}

export default function DoctorsView({ onOpenBooking, selectedDoctorId, onSelectDoctor }: DoctorsViewProps) {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-8 md:py-12 space-y-16 animate-fade-up text-on-surface">
      {/* Intro */}
      <div className="text-center space-y-3">
        <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-bold uppercase tracking-wider">
          Clinicians & Affiliates
        </span>
        <h2 className="font-display-md text-3xl md:text-4xl font-bold text-primary tracking-tight">Our Specialists</h2>
        <p className="font-body-md text-on-surface-variant max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          NAMAHA was built on unified professional ethics. Our specialists work in close consultation to provide unified physical and cognitive care.
        </p>
      </div>

      {/* Main Physicians Grid */}
      <div className="space-y-12">
        {DOCTORS.map((doc: Doctor) => {
          const isExpanded = selectedDoctorId === doc.id;
          return (
            <div 
              key={doc.id}
              className={`bg-white rounded-[32px] border transition-all duration-300 overflow-hidden flex flex-col md:flex-row gap-8 p-6 md:p-10 ${
                isExpanded 
                  ? 'border-primary shadow-lg ring-1 ring-primary' 
                  : 'border-gray-100 shadow-[0px_0px_12px_4px_rgba(69,60,110,0.02)] hover:shadow-md'
              }`}
            >
              {/* Doctor Avatar column */}
              <div className="w-full md:w-1/3 space-y-4 flex flex-col">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 flex items-center justify-center">
                  <img 
                    className="w-full h-full object-cover" 
                    src={doc.avatar} 
                    alt={doc.name}
                  />
                </div>
                <div className="flex gap-2 flex-wrap justify-center">
                  {doc.tags.map(t => (
                    <span key={t} className="bg-primary-fixed text-on-primary-fixed text-[11px] font-bold px-3 py-1 rounded-full select-none shadow-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Doctor Details column */}
              <div className="flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="font-headline-lg text-2xl font-bold text-primary flex items-center gap-2">
                        {doc.name}
                        <ShieldCheck className="w-6 h-6 text-[#25D366] shrink-0" title="Verified Practitioner" />
                      </h3>
                      <p className="font-label-sm text-secondary text-xs uppercase tracking-wider font-semibold mt-1">
                        {doc.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm font-medium text-on-surface-variant bg-surface rounded-2xl p-4 border border-gray-100">
                    <span className="font-bold text-primary block mb-1 text-xs uppercase tracking-wide">Specialty Qualifications:</span>
                    {doc.qualifications}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary text-sm flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-secondary-fixed-dim" /> Clinical Philosophy & Approach
                    </h4>
                    <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
                      {doc.approach}
                    </p>
                  </div>
                </div>

                {/* Consultation Details */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                        <Clock className="w-4 h-4 text-primary" /> Consultation Slots
                      </div>
                      <p className="text-sm text-primary font-bold whitespace-pre-line">{doc.consultationHours}</p>
                    </div>

                    <div className="flex flex-wrap gap-3 w-full sm:w-auto">
                      <button 
                        onClick={() => onSelectDoctor(isExpanded ? null : doc.id)}
                        className="flex-1 sm:flex-none border border-primary text-primary hover:bg-primary/5 px-6 py-2.5 rounded-full font-semibold text-sm transition-all"
                      >
                        {isExpanded ? 'Collapse Profile' : 'Detailed Profile'}
                      </button>

                      <a 
                        href="tel:+919226510500"
                        className="flex-1 sm:flex-none bg-primary text-on-primary hover:opacity-95 px-6 py-2.5 rounded-full font-semibold text-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                      >
                        <CalendarCheck className="w-4 h-4" /> Book Appointment
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Integrative Care Model Bento */}
      <div className="bg-surface rounded-[40px] p-8 md:p-12 border border-outline-variant space-y-10">
        <div className="text-center md:text-left space-y-2">
          <span className="text-xs text-secondary-fixed-dim bg-secondary/10 px-3 py-1 font-bold uppercase tracking-wider rounded-full">
            NAMAHA System
          </span>
          <h3 className="font-headline-lg text-2xl md:text-3xl font-bold text-primary leading-tight">
            Integrative Care Model
          </h3>
          <p className="font-body-md text-on-surface-variant text-sm max-w-xl">
            Physical wellness and psychological comfort are fundamentally interconnected. We structure solutions collaboratively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xs space-y-3">
            <div className="w-10 h-10 bg-primary-fixed text-primary rounded-xl flex items-center justify-center">
              <GitFork className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-base text-primary">Collaborative Diagnostics</h4>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              For complex orthopedic issues or post-traumatic stress recoveries, our orthopedic and psychiatry team integrate diagnoses instantly.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xs space-y-3">
            <div className="w-10 h-10 bg-secondary-fixed text-secondary rounded-xl flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-base text-primary">Holistic Recovery</h4>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              We focus on total bodily healing, nutrition alignment, maternal well-being coaching, and active psychological support strategies.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xs space-y-3">
            <div className="w-10 h-10 bg-tertiary-fixed text-tertiary rounded-xl flex items-center justify-center">
              <HeartPulse className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-base text-primary">Continuous Care</h4>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              No patient is discharged without a complete lifestyle roadmap. Post-surgery or post-partum, we remain actively contactable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
