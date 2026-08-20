import React from 'react';
import { Stethoscope, Mail, Phone, MapPin } from 'lucide-react';
import { ActiveTab } from '../types';

interface FooterProps {
  onTabChange: (tab: ActiveTab) => void;
}

export default function Footer({ onTabChange }: FooterProps) {
  const handleLinkClick = (tabId: ActiveTab) => {
    onTabChange(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface-container-low dark:bg-on-background border-t border-surface-variant w-full pt-12 pb-8 mt-12 rounded-t-[40px]" id="footerComponent">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12 max-w-[1240px] mx-auto text-on-surface">
        <div className="space-y-4">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleLinkClick('home')}>
            <Stethoscope className="text-primary w-6 h-6" />
            <span className="font-fredoka text-2xl font-bold text-primary tracking-wide">namaha</span>
          </div>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Providing trusted, multi-specialty healthcare to the Virar community for over 10 years.
          </p>
          <div className="space-y-2 pt-2 text-sm text-on-surface-variant">
            <a 
              href="https://maps.app.goo.gl/nYxBdN1sN2BiJ5XG8" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors cursor-pointer group"
            >
              <MapPin className="w-4 h-4 text-primary shrink-0 group-hover:scale-110 transition-transform" />
              <span className="group-hover:underline">Virar West, Mumbai suburban, MH</span>
            </a>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+919226520500" className="hover:text-primary hover:underline transition-colors">+91 92265 20500</a>
              </div>
              <div className="flex items-center gap-2 pl-6">
                <a href="tel:+919226510500" className="hover:text-primary hover:underline transition-colors">+91 92265 10500</a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <a href="mailto:drjtnamaha@gmail.com" className="hover:text-primary hover:underline transition-colors">drjtnamaha@gmail.com</a>
            </div>
          </div>
        </div>

        <div>
          <h5 className="font-label-md font-bold text-primary uppercase tracking-wider mb-4">Quick Links</h5>
          <ul className="space-y-2 text-sm">
            <li>
              <button 
                onClick={() => handleLinkClick('contact')} 
                className="text-on-surface-variant hover:text-primary transition-colors hover:underline underline-offset-4 text-left"
              >
                Emergency Care & Location
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleLinkClick('doctors')} 
                className="text-on-surface-variant hover:text-primary transition-colors hover:underline underline-offset-4 text-left"
              >
                Consultation Hours & Doctors
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleLinkClick('about')} 
                className="text-on-surface-variant hover:text-primary transition-colors hover:underline underline-offset-4 text-left"
              >
                About Us & Vision
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleLinkClick('contact')} 
                className="text-on-surface-variant hover:text-primary transition-colors hover:underline underline-offset-4 text-left"
              >
                Clinic Maps & Route
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleLinkClick('orthopedics')} 
                className="text-on-surface-variant hover:text-primary transition-colors hover:underline underline-offset-4 text-left"
              >
                Orthopedics Surgeries & Treatments
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleLinkClick('obgyn')} 
                className="text-on-surface-variant hover:text-primary transition-colors hover:underline underline-offset-4 text-left"
              >
                Maternity Surgeries & Treatments
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleLinkClick('psychiatry')} 
                className="text-on-surface-variant hover:text-primary transition-colors hover:underline underline-offset-4 text-left"
              >
                Psychiatry Surgeries & Treatments
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-label-md font-bold text-primary uppercase tracking-wider mb-4">Specialties</h5>
          <ul className="space-y-2 text-sm">
            <li>
              <button 
                onClick={() => handleLinkClick('orthopedics')} 
                className="text-on-surface-variant hover:text-primary transition-colors hover:underline underline-offset-4 text-left font-medium"
              >
                Orthopedic Surgery & Joints
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleLinkClick('obgyn')} 
                className="text-on-surface-variant hover:text-primary transition-colors hover:underline underline-offset-4 text-left font-medium"
              >
                Maternity Care
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleLinkClick('psychiatry')} 
                className="text-on-surface-variant hover:text-primary transition-colors hover:underline underline-offset-4 text-left font-medium"
              >
                Psychiatry & Therapy
              </button>
            </li>

          </ul>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 md:px-12 mt-12 pt-6 border-t border-surface-variant/40 text-center">
        <p className="text-xs text-on-surface-variant font-medium">
          © by Saksham Raut|9145157108. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
