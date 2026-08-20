import React, { useState } from 'react';
import { OBGYN_AREAS } from '../data';
import { Quote, Search, Stethoscope, Baby, Crosshair, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

interface ObgynViewProps {
  onOpenBooking: (doctorId: string) => void;
}

const SURGERIES_AND_TREATMENTS: string[] = [
  "Abdominal Myomectomy",
  "D&C (Dilation and Curettage)",
  "Antenatal and Postnatal Exercise/ Physiotherapy",
  "Obstetrics / Antenatal Care",
  "Uterus Removal Surgery",
  "Uterus/ Uterine Prolapse Treatment",
  "Uterine Bleeding",
  "Prenatal Checkup",
  "Maternal Care/ Checkup",
  "Fertilization",
  "Pregnancy Exercise",
  "Colposcopy Examination",
  "Child Birth Education",
  "Caesarean Section (C Section)",
  "Female Sexual Problems",
  "Intra-Uterine Insemination (IUI)",
  "Amenorrhoea Treatment",
  "Mirena (Hormonal Iud)",
  "Family Planning",
  "Tubectomy/Tubal Ligation",
  "Natural Cycle IVF",
  "Pre and Post Delivery Care",
  "Maternal Fetal Medicine",
  "Normal Vaginal Delivery (NVD)",
  "Menstrual Disorders in Adolescent Girls",
  "Endometriosis Treatment",
  "menopause advice",
  "Vaginal Infection Treatment",
  "Artificial Insemination",
  "Cervical Cerclage",
  "Unilateral Salpingo-Oophorectomy",
  "Vaginal Birth After Cesarean (VBAC)",
  "family planning and full contraceptive services",
  "Pregnant Women Counseling",
  "Premarital Counseling",
  "Contraception Advice",
  "Vaginoplasty",
  "HPV Vaccination",
  "Polycystic Ovary Syndrome in Adolescence",
  "Vaginal Prolapse",
  "Vaginal Hysterectomy",
  "Hysteroscopic Myomectomy",
  "Laparoscopy Hysterectomy",
  "Abdominal Hysterectomy",
  "Hysteroscopy",
  "Infertility Evaluation / Treatment",
  "Fertility Treatment",
  "Female Infertility Treatment",
  "Ovary Removal Surgery",
  "Laparoscopic Sterilization",
  "Reproduction",
  "Ovarian Cyst Removal",
  "Fibroids Removal Surgery",
  "Breast Examination",
  "Uterine Fibroid Treatment",
  "Fibroidectomy",
  "Diseases in Pregnancy",
  "High-Risk Pregnancy Care",
  "Pregnancy with PCOD",
  "Laparoscopic Gynaecology",
  "Fertility Conserving Procedures",
  "Gynaec Laparoscopy",
  "Complicated Pregnancy Treatment",
  "Abortion / Medical Termination of Pregnancy (MTP)"
];

const getTreatmentStyle = (name: string) => {
  const lower = name.toLowerCase();
  if (lower.includes('pregnant') || lower.includes('pregnancy') || lower.includes('antenatal') || lower.includes('delivery') || lower.includes('birth') || lower.includes('maternal') || lower.includes('prenatal') || lower.includes('vbac') || lower.includes('c section')) {
    return {
      Icon: Baby,
      badgeColor: 'bg-[#dbeafe] text-[#1e40af]'
    };
  }
  if (lower.includes('surgery') || lower.includes('myomectomy') || lower.includes('hysterectomy') || lower.includes('laparoscop') || lower.includes('removal') || lower.includes('cerclage') || lower.includes('curettage') || lower.includes('fibroid')) {
    return {
      Icon: Crosshair,
      badgeColor: 'bg-[#fce7f3] text-[#9d174d]'
    };
  }
  if (lower.includes('fertility') || lower.includes('fertilization') || lower.includes('ivf') || lower.includes('iui') || lower.includes('insemination') || lower.includes('reproduction')) {
    return {
      Icon: Sparkles,
      badgeColor: 'bg-[#fef3c7] text-[#92400e]'
    };
  }
  return {
    Icon: Stethoscope,
    badgeColor: 'bg-[#e0e7ff] text-[#3730a3]'
  };
};

export default function ObgynView({ onOpenBooking }: ObgynViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllTreatments, setShowAllTreatments] = useState(false);

  const filteredTreatments = SURGERIES_AND_TREATMENTS.filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );

  const INITIAL_LIMIT = 6;
  const isSearching = searchQuery.trim().length > 0;
  const visibleTreatments = (showAllTreatments || isSearching)
    ? filteredTreatments
    : filteredTreatments.slice(0, INITIAL_LIMIT);

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-8 md:py-12 space-y-16 animate-fade-up text-on-surface">
      
      {/* Introduction Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-secondary-container text-on-secondary-container p-8 md:p-12 rounded-[40px]">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs bg-secondary/15 text-secondary font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Maternity Care & Gynecology Excellence
          </span>
          <h2 className="font-display-md text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Comprehensive Women's Care
          </h2>
          <p className="font-body-md text-on-surface-variant text-base md:text-lg leading-relaxed">
            Dr. Sampa Tandel provides advanced obstetric care, expert gynecological diagnostics, and compassionate family planning to the women of Virar.
          </p>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] rounded-[32px] overflow-hidden shadow-xl border border-secondary/20 bg-gray-50">
            <img 
              className="w-full h-full object-cover" 
              src="https://drive.google.com/thumbnail?id=10_EFhOFgbiurnOAG_JD3UqCAME-Tk0GI&sz=w1000" 
              alt="Dr. Sampa Tandel, a gentle female Maternity specialist posing with warmth" 
            />
          </div>
        </div>
      </div>

      {/* Maternal Performance Indicators */}
      <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-[0px_0px_12px_4px_rgba(69,60,110,0.01)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
          <div className="py-2">
            <p className="font-display-lg text-primary text-4xl font-bold">5,000+</p>
            <p className="font-label-md text-on-surface-variant text-xs font-semibold mt-1">Healthy Deliveries Assisted</p>
          </div>
          <div className="py-2 md:px-4">
            <p className="font-display-lg text-primary text-4xl font-bold">10+ Years</p>
            <p className="font-label-md text-on-surface-variant text-xs font-semibold mt-1">Clinical Gynecology Experience</p>
          </div>
          <div className="py-2 md:px-4">
            <p className="font-display-lg text-primary text-4xl font-bold">100%</p>
            <p className="font-label-md text-on-surface-variant text-xs font-semibold mt-1">Confidential & Empathetic Care</p>
          </div>
        </div>
      </div>

      {/* Specialty Care Areas (OBGYN) */}
      <div className="space-y-8">
        <div className="text-center md:text-left">
          <h3 className="font-headline-lg text-2xl font-bold text-primary">Specialized Maternity & Gynec Care</h3>
          <p className="text-xs text-on-surface-variant font-medium mt-1">Nurturing comfort and excellence across every phase of life.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {OBGYN_AREAS.map((area, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-[32px] border border-gray-100 hover:border-secondary/20 shadow-xs flex flex-col md:flex-row gap-6 items-start"
            >
              {area.image && (
                <div className="w-full md:w-36 h-36 rounded-2xl overflow-hidden bg-gray-50 flex-shrink-0">
                  <img src={area.image} className="w-full h-full object-cover" alt={area.title} />
                </div>
              )}
              <div className="space-y-3 flex-1 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-bold text-base text-primary">{area.title}</h4>
                    {area.badge && (
                      <span className="bg-secondary-fixed text-on-secondary-fixed text-[10px] font-bold px-2 py-0.5 rounded-full select-none">
                        {area.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed mt-1.5">{area.description}</p>
                </div>
                {area.points && (
                  <div className="flex gap-2 flex-wrap pt-2">
                    {area.points.map(p => (
                      <span key={p} className="bg-gray-50 border text-[10px] font-semibold text-gray-600 px-2.5 py-1 rounded-md">
                        {p}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
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
            <p className="text-xs text-slate-500">Try searching for terms like "Maternity", "Hysterectomy", "Ultrasound", or "Infertility".</p>
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
              {visibleTreatments.map((treatment) => {
                const { Icon, badgeColor } = getTreatmentStyle(treatment);
                return (
                  <div
                    key={treatment}
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

      {/* Legacy Compassion Quote */}
      <div className="bg-gradient-to-r from-primary to-primary-container text-white rounded-[32px] p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row gap-6 items-center">
        <Quote className="w-16 h-16 opacity-10 shrink-0 self-start md:self-center text-white" />
        <div className="space-y-2">
          <p className="font-serif text-lg md:text-xl italic leading-relaxed">
            "Bringing a new life into this world is an honor. But making sure every mother is respected, safe, carefully monitored, and supported is my clinical duty and lifelong pledge."
          </p>
          <span className="block font-bold text-xs uppercase tracking-wide text-secondary-fixed-dim">
            — Dr. Sampa Tandel, DNB, DGO (Maternity Specialist & Gynecologist)
          </span>
        </div>
      </div>

    </div>
  );
}
