import React, { useState } from 'react';
import { ActiveTab } from '../types';
import { Menu, X, Stethoscope, Phone } from 'lucide-react';

interface HeaderProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  onOpenBooking: () => void;
}

export default function Header({ activeTab, onTabChange, onOpenBooking }: HeaderProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'doctors', label: 'Doctors' },
    { id: 'orthopedics', label: 'Orthopedics' },
    { id: 'obgyn', label: 'Maternity' },
    { id: 'psychiatry', label: 'Psychiatry' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ] as const;

  const handleNavClick = (tabId: ActiveTab) => {
    onTabChange(tabId);
    setDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-[0px_0px_12px_4px_rgba(69,60,110,0.05)] h-20 flex justify-between items-center px-4 md:px-10 max-w-[1240px] mx-auto border-b border-gray-100 rounded-b-xl">
        <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
          <div className="h-16 md:h-[72px] flex items-center justify-center">
            <img 
              src="https://drive.google.com/thumbnail?id=18tL8VIgolWOnYDgxRxRi90YR3xnLEglQ&sz=w1000" 
              alt="NAMAHA Logo" 
              className="h-full w-auto object-contain" 
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center h-full">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer h-full border-b-2 pt-1 flex items-center ${
                activeTab === item.id
                  ? 'text-primary font-semibold border-primary'
                  : 'text-on-surface-variant font-medium hover:text-primary border-transparent'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Header Action Buttons */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex flex-col items-start text-xs text-primary font-semibold py-1 px-3 border border-primary/15 rounded-2xl bg-primary/5">
            <a href="tel:+919226520500" className="hover:underline flex items-center gap-1.5 py-0.5">
              <Phone className="w-3.5 h-3.5 text-primary" /> +91 92265 20500
            </a>
            <div className="h-[1px] w-full bg-primary/10"></div>
            <a href="tel:+919226510500" className="hover:underline flex items-center gap-1.5 py-0.5">
              <Phone className="w-3.5 h-3.5 text-primary" /> +91 92265 10500
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="md:hidden text-primary p-2 focus:outline-none rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Navigation Drawer for Mobile Backdrop */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-[60] backdrop-blur-xs transition-opacity duration-300"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Navigation Drawer Content */}
      <aside
        className={`fixed inset-y-0 left-0 z-[70] flex flex-col h-full w-80 rounded-r-2xl bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
          drawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 flex justify-between items-center border-b border-gray-100">
          <div className="flex items-center gap-2">
            <Stethoscope className="text-primary w-6 h-6" />
            <h2 className="font-headline-md text-lg font-bold text-primary">Clinic Navigation</h2>
          </div>
          <button
            onClick={() => setDrawerOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex flex-col py-4 flex-1 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-left px-6 py-4 transition-all duration-150 flex items-center justify-between group ${
                activeTab === item.id
                  ? 'bg-primary/5 text-primary font-semibold border-l-4 border-primary'
                  : 'text-on-surface-variant hover:bg-surface-container-high hover:text-primary border-l-4 border-transparent'
              }`}
            >
              <span className="text-base font-medium">{item.label}</span>
              <span className="text-xs text-primary/40 group-hover:translate-x-1 transition-transform">→</span>
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-gray-100 space-y-3">
          <p className="text-center text-xs text-on-surface-variant/70 font-semibold uppercase tracking-wider">
            Emergency Call Lines (24/7)
          </p>
          <a
            href="tel:+919226520500"
            className="flex items-center justify-center gap-3 bg-surface-container-low text-primary py-2.5 px-4 rounded-xl font-semibold text-sm hover:bg-primary/5 transition-all text-center"
          >
            <Phone className="w-4 h-4 text-primary" />
            <span>+91 92265 20500</span>
          </a>
          <a
            href="tel:+919226510500"
            className="flex items-center justify-center gap-3 bg-surface-container-low text-primary py-2.5 px-4 rounded-xl font-semibold text-sm hover:bg-primary/5 transition-all text-center"
          >
            <Phone className="w-4 h-4 text-primary" />
            <span>+91 92265 10500</span>
          </a>
        </div>
      </aside>
    </>
  );
}
