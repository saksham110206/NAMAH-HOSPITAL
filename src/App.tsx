/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ActiveTab } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import AppointmentBooker from './components/AppointmentBooker';
import HomeView from './components/HomeView';
import DoctorsView from './components/DoctorsView';
import OrthopedicsView from './components/OrthopedicsView';
import ObgynView from './components/ObgynView';
import PsychiatryView from './components/PsychiatryView';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedDoctor, setPreselectedDoctor] = useState<string | undefined>(undefined);
  const [preselectedSpecialty, setPreselectedSpecialty] = useState<string | undefined>(undefined);

  // States to toggle doctor detail selections in DoctorsView
  const [selectedDoctorIdInList, setSelectedDoctorIdInList] = useState<string | null>(null);

  const handleOpenBooking = (doctorId?: string, specialty?: string) => {
    setPreselectedDoctor(doctorId);
    setPreselectedSpecialty(specialty);
    setIsBookingOpen(true);
  };

  const handleSelectDoctorAndNavigate = (doctorId: string | null) => {
    setSelectedDoctorIdInList(doctorId);
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case 'home':
        return (
          <HomeView
            onTabChange={setActiveTab}
            onOpenBooking={() => handleOpenBooking()}
            onSelectDoctor={handleSelectDoctorAndNavigate}
          />
        );
      case 'doctors':
        return (
          <DoctorsView
            onOpenBooking={(docId) => handleOpenBooking(docId)}
            selectedDoctorId={selectedDoctorIdInList}
            onSelectDoctor={setSelectedDoctorIdInList}
          />
        );
      case 'orthopedics':
        return (
          <OrthopedicsView
            onOpenBooking={(docId) => handleOpenBooking(docId, 'Orthopedics')}
          />
        );
      case 'obgyn':
        return (
          <ObgynView
            onOpenBooking={(docId) => handleOpenBooking(docId, 'Maternity Care')}
          />
        );
      case 'psychiatry':
        return (
          <PsychiatryView
            onOpenBooking={(docId) => handleOpenBooking(docId, 'Psychiatry')}
          />
        );
      case 'about':
        return (
          <AboutView
            onTabChange={setActiveTab}
          />
        );
      case 'contact':
        return <ContactView />;
      default:
        return (
          <HomeView
            onTabChange={setActiveTab}
            onOpenBooking={() => handleOpenBooking()}
            onSelectDoctor={handleSelectDoctorAndNavigate}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface select-none selection:bg-primary-fixedSelection text-on-surface">
      {/* Clinic Header Section */}
      <Header
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Specialty or Navigation Router */}
      <main className="flex-grow">
        {renderActiveView()}
      </main>

      {/* Global Clinical Footer */}
      <Footer onTabChange={setActiveTab} />

      {/* Active Local Appointment Booking Modal */}
      <AppointmentBooker
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedDoctorId={preselectedDoctor}
        preselectedSpecialty={preselectedSpecialty}
      />
    </div>
  );
}

