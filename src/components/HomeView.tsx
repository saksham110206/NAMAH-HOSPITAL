import React from 'react';
import { ActiveTab } from '../types';
import { DOCTORS } from '../data';
import { Award, Heart, Shield, Sparkles, MapPin, Phone, Clock, MessageSquare, ArrowRight, Stethoscope, PlusCircle } from 'lucide-react';
import regeneratedImage1 from '../assets/images/regenerated_image_1784452710370.jpg';
import regeneratedImage2 from '../assets/images/regenerated_image_1784452712201.jpg';

interface HomeViewProps {
  onTabChange: (tab: ActiveTab) => void;
  onOpenBooking: () => void;
  onSelectDoctor: (doctorId: string) => void;
}

export default function HomeView({ onTabChange, onOpenBooking, onSelectDoctor }: HomeViewProps) {
  const handleSpecialtyClick = (id: ActiveTab) => {
    onTabChange(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDocClick = (tabId: string) => {
    onSelectDoctor(tabId);
    onTabChange('doctors');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="animate-fade-up font-body-md text-on-surface">
      {/* Hero Section */}
      <section className="relative min-h-[640px] flex items-center justify-center overflow-hidden bg-surface py-12 md:py-16">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover opacity-20 scale-105 transition-transform duration-1000" 
            src="https://drive.google.com/thumbnail?id=1xNyUnZ8SjiKFcQVfnUbMdkUaAgV5ycCG&sz=w1000" 
            alt="Warm and inviting modern clinic reception room"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/0 via-surface/60 to-surface"></div>
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 text-center space-y-6 md:space-y-8">
          <h1 className="font-display-lg text-4xl md:text-6xl leading-tight text-primary font-bold tracking-tight">
            Expert Care, <br />
            <span className="text-secondary italic">Trusted Locally.</span>
          </h1>
          <p className="font-body-lg text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            NAMAHA is a premier multi-specialty center in Virar West, dedicated to providing compassionate care across Orthopedics, Women's Health, and Mental Health.
          </p>

          <div className="flex flex-col md:flex-row gap-5 justify-center items-center pt-4">
            <button
              onClick={() => handleSpecialtyClick('orthopedics')}
              className="group flex flex-col items-center bg-white p-6 rounded-2xl border border-gray-100 shadow-[0px_0px_12px_4px_rgba(69,60,110,0.05)] w-full md:w-64 hover:-translate-y-1.5 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 bg-primary-fixed rounded-xl flex items-center justify-center text-primary mb-3 group-hover:scale-105 transition-transform">
                <PlusCircle className="w-6 h-6" />
              </div>
              <span className="font-label-md font-bold text-primary text-sm">Orthopedics</span>
              <span className="text-xs text-on-surface-variant mt-1.5 font-medium">Bone, Spine & Trauma Care</span>
            </button>

            <button
              onClick={() => handleSpecialtyClick('obgyn')}
              className="group flex flex-col items-center bg-white p-6 rounded-2xl border border-gray-100 shadow-[0px_0px_12px_4px_rgba(69,60,110,0.05)] w-full md:w-64 hover:-translate-y-1.5 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 bg-secondary-fixed rounded-xl flex items-center justify-center text-secondary mb-3 group-hover:scale-105 transition-transform">
                <Heart className="w-6 h-6" />
              </div>
              <span className="font-label-md font-bold text-primary text-sm">Maternity Care</span>
              <span className="text-xs text-on-surface-variant mt-1.5 font-medium">Maternal, Pregnancy & Gynecology Care</span>
            </button>

            <button
              onClick={() => handleSpecialtyClick('psychiatry')}
              className="group flex flex-col items-center bg-white p-6 rounded-2xl border border-gray-100 shadow-[0px_0px_12px_4px_rgba(69,60,110,0.05)] w-full md:w-64 hover:-translate-y-1.5 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 bg-tertiary-fixed rounded-xl flex items-center justify-center text-tertiary mb-3 group-hover:scale-105 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="font-label-md font-bold text-primary text-sm">Mental Health</span>
              <span className="text-xs text-on-surface-variant mt-1.5 font-medium">Psychiatry, Therapy & Wellness</span>
            </button>
          </div>
        </div>
      </section>

      {/* Book Appointment CTA Section */}
      <section className="bg-white pt-6 pb-2 flex flex-col items-center justify-center text-center px-4">
        <a
          href="tel:+919226510500"
          className="group inline-flex items-center gap-3 bg-secondary text-white hover:bg-secondary/90 active:scale-95 px-8 py-4 rounded-full font-bold text-base md:text-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer text-center"
          id="book_appointment_call_button"
        >
          <Phone className="w-5 h-5 group-hover:animate-bounce" />
          <span>Book Appointment</span>
        </a>
        <p className="text-xs text-on-surface-variant font-medium mt-2">
          Directly calls NAMAHA Front Desk: <strong className="text-primary hover:underline font-bold">+91 92265 10500</strong>
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="font-label-sm text-secondary uppercase tracking-widest font-bold text-xs">Our Commitment</span>
              <h2 className="font-headline-lg text-3xl md:text-4xl font-bold text-primary leading-tight">Why Patients Trust Us</h2>
              <p className="font-body-md text-on-surface-variant text-base">
                We combine clinical rigor with a human-centric approach to ensure every patient feels heard, respected, and expertly cared for.
              </p>

              <ul className="space-y-6 pt-4">
                <li className="flex gap-4 items-start">
                  <div className="bg-primary-fixed p-3 rounded-full shrink-0 text-primary">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-on-surface">Experienced Specialists</h4>
                    <p className="font-body-md text-on-surface-variant text-sm mt-0.5">Top-tier doctors with years of expertise in their respective medical fields.</p>
                  </div>
                </li>

                <li className="flex gap-4 items-start">
                  <div className="bg-secondary-fixed p-3 rounded-full shrink-0 text-secondary">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-on-surface font-sans">Patient-Focused Care</h4>
                    <p className="font-body-md text-on-surface-variant text-sm mt-0.5">Personalized treatment plans tailored to your specific health journey.</p>
                  </div>
                </li>

                <li className="flex gap-4 items-start">
                  <div className="bg-tertiary-fixed p-3 rounded-full shrink-0 text-tertiary">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-on-surface">Multi-Specialty Convenience</h4>
                    <p className="font-body-md text-on-surface-variant text-sm mt-0.5">Comprehensive medical care for the whole family under one roof.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative mt-8 lg:mt-0 grid grid-cols-2 gap-4 pb-6">
              <div className="aspect-square rounded-[32px] overflow-hidden shadow-xl border border-gray-100">
                <img 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  src={regeneratedImage1} 
                  alt="Modern clinical consultation"
                />
              </div>
              <div className="aspect-square rounded-[32px] overflow-hidden shadow-xl border border-gray-100 translate-y-6">
                <img 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  src={regeneratedImage2} 
                  alt="Compassionate patient care"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Specialties Grid */}
      <section className="py-16 bg-surface">
        <div className="max-w-[1200px] mx-auto px-4 space-y-12">
          <div className="text-center space-y-3">
            <h2 className="font-headline-lg text-3xl font-bold text-primary">Dedicated Specialties</h2>
            <p className="font-body-md text-on-surface-variant max-w-xl mx-auto text-sm md:text-base">
              Explore our range of specialized healthcare services designed for your recovery and well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Orthopedics */}
            <div className="group p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-primary-fixed rounded-xl flex items-center justify-center text-primary mb-6 group-hover:rotate-3 transition-transform">
                  <PlusCircle className="w-6 h-6" />
                </div>
                <h3 className="font-headline-md text-xl font-bold text-primary mb-3">Orthopedics</h3>
                <p className="font-body-md text-on-surface-variant text-sm leading-relaxed mb-6">
                  Expert treatment for bone, joint, and spinal conditions including complex fracture management and rehabilitation.
                </p>
              </div>
              <button 
                onClick={() => handleSpecialtyClick('orthopedics')}
                className="text-primary font-bold text-sm flex items-center gap-2 group-hover:translate-x-1.5 transition-transform cursor-pointer"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* OBGYN */}
            <div className="group p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-secondary-fixed rounded-xl flex items-center justify-center text-secondary mb-6 group-hover:rotate-3 transition-transform">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="font-headline-md text-xl font-bold text-primary mb-3">Maternity Care</h3>
                <p className="font-body-md text-on-surface-variant text-sm leading-relaxed mb-6">
                  Comprehensive women’s health services, from maternity care and high-risk pregnancy to advanced gynecological procedures.
                </p>
              </div>
              <button 
                onClick={() => handleSpecialtyClick('obgyn')}
                className="text-primary font-bold text-sm flex items-center gap-2 group-hover:translate-x-1.5 transition-transform cursor-pointer"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Psychiatry */}
            <div className="group p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-tertiary-fixed rounded-xl flex items-center justify-center text-tertiary mb-6 group-hover:rotate-3 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-headline-md text-xl font-bold text-primary mb-3">Psychiatry</h3>
                <p className="font-body-md text-on-surface-variant text-sm leading-relaxed mb-6">
                  Empathic mental healthcare focusing on anxiety, depression, child psychiatry, and family behavioral guidance in confidentiality.
                </p>
              </div>
              <button 
                onClick={() => handleSpecialtyClick('psychiatry')}
                className="text-primary font-bold text-sm flex items-center gap-2 group-hover:translate-x-1.5 transition-transform cursor-pointer"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Doctors */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 space-y-12">
          <div className="text-center space-y-3">
            <h2 className="font-headline-lg text-3xl font-bold text-primary">Our Specialist Team</h2>
            <p className="font-body-md text-on-surface-variant max-w-xl mx-auto text-sm md:text-base">Dedicated professionals committed to your lifelong health.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DOCTORS.map((doc) => (
              <div 
                key={doc.id}
                onClick={() => handleDocClick(doc.id)}
                className="bg-white rounded-2xl overflow-hidden shadow-[0px_0px_12px_4px_rgba(69,60,110,0.02)] border border-gray-100 hover:shadow-md transition-all duration-300 group cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden bg-gray-50 relative">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" 
                    src={doc.avatar} 
                    alt={doc.name}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                      {doc.specialty}
                    </span>
                  </div>
                </div>
                <div className="p-6 text-center space-y-2">
                  <h4 className="font-headline-md text-lg md:text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                    {doc.name}
                  </h4>
                  <p className="font-label-sm text-secondary text-xs uppercase tracking-wider font-semibold">
                    {doc.id === 'jignesh' ? 'Orthopedic Surgeon' : doc.id === 'sampa' ? 'Maternity Specialist' : 'Psychiatrist'}
                  </p>
                  <p className="font-body-md text-on-surface-variant text-xs leading-relaxed font-medium">
                    {doc.qualifications}
                  </p>
                  <div className="pt-2 text-xs text-primary font-semibold group-hover:underline">
                    View Complete Profile & Timings →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section className="py-16 bg-surface" id="contactSection">
        <div className="max-w-[1240px] mx-auto px-4">
          <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="p-8 md:p-12 text-on-primary md:w-1/2 flex flex-col justify-center space-y-8">
              <h2 className="font-headline-lg text-3xl font-bold">Visit Our Clinic</h2>
              
              <div className="space-y-6">
                <a 
                  href="https://maps.app.goo.gl/nYxBdN1sN2BiJ5XG8"
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-4 items-start p-3 -mx-3 rounded-2xl hover:bg-white/10 transition-all cursor-pointer group"
                >
                  <MapPin className="text-secondary-fixed shrink-0 w-6 h-6 group-hover:scale-110 transition-transform" />
                  <div>
                    <h5 className="font-bold text-base flex items-center gap-2">
                      Clinic Address
                      <span className="text-xs font-normal underline opacity-80 group-hover:opacity-100">(Open Map)</span>
                    </h5>
                    <p className="text-primary-fixed/85 text-sm mt-1 leading-relaxed group-hover:text-white transition-colors">
                      First Floor, NAMAHA, Beside Virar West Bus Depot, Pushpa Nagar, Virar West , 401303
                    </p>
                  </div>
                </a>

                <div className="flex gap-4 items-start">
                  <Phone className="text-secondary-fixed shrink-0 w-6 h-6 mt-1" />
                  <div>
                    <h5 className="font-bold text-base">Call Support</h5>
                    <div className="flex flex-col sm:flex-row gap-3 mt-2.5">
                      <a href="tel:+919226520500" className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-opacity-90 transition-all py-2 px-4 rounded-xl font-bold text-xs shadow-sm cursor-pointer">
                        <Phone className="w-3.5 h-3.5" /> Call +91 92265 20500
                      </a>
                      <a href="tel:+919226510500" className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-opacity-90 transition-all py-2 px-4 rounded-xl font-bold text-xs shadow-sm cursor-pointer">
                        <Phone className="w-3.5 h-3.5" /> Call +91 92265 10500
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Clock className="text-secondary-fixed shrink-0 w-6 h-6 animate-pulse" />
                  <div>
                    <h5 className="font-bold text-base">Consultation Timings</h5>
                    <p className="text-primary-fixed/85 text-sm mt-1">
                      Mon - Sat: 10:00 AM - 08:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 pt-4">
                <a 
                  className="bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold text-sm flex items-center gap-2 hover:opacity-95 transition-all shadow-md outline-none" 
                  href="https://wa.me/919226520500"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageSquare className="w-4.5 h-4.5" /> WhatsApp Inquiry
                </a>
                
                <a 
                  className="bg-white text-primary px-6 py-3 rounded-full font-semibold text-sm hover:bg-opacity-90 transition-all shadow-md text-center" 
                  href="https://maps.app.goo.gl/nYxBdN1sN2BiJ5XG8"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get Directions
                </a>
              </div>
            </div>

            <div className="h-80 md:h-auto md:w-1/2 relative bg-surface-container overflow-hidden min-h-[320px]">
              <iframe
                title="Namaha Hospital Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.360181512879!2d72.8105741!3d19.4616223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9a6cf9e69c3%3A0xcb065ff474581fe4!2sNAMAHA!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 absolute inset-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
