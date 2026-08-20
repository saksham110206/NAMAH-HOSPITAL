import React, { useState, useEffect } from 'react';
import { DOCTORS } from '../data';
import { Appointment } from '../types';
import { Calendar, Clock, Check, User, Phone, Mail, FileText, Trash2, ShieldCheck, AlertCircle } from 'lucide-react';

interface AppointmentBookerProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedDoctorId?: string;
  preselectedSpecialty?: string;
}

const TIME_SLOTS = [
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '12:00 PM - 01:00 PM',
  '02:00 PM - 03:00 PM',
  '03:00 PM - 04:00 PM',
  '04:00 PM - 05:00 PM',
  '05:00 PM - 06:00 PM',
  '06:00 PM - 07:00 PM',
  '07:00 PM - 08:00 PM',
];

export default function AppointmentBooker({
  isOpen,
  onClose,
  preselectedDoctorId,
  preselectedSpecialty,
}: AppointmentBookerProps) {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [patientName, setPatientName] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [selectedDoctorId, setSelectedDoctorId] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [notes, setNotes] = useState('');

  const [activeTab, setActiveTab] = useState<'new' | 'list'>('new');
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Initial load
  useEffect(() => {
    const saved = localStorage.getItem('namaha_hospital_appointments') || localStorage.getItem('namah_hospital_appointments');
    if (saved) {
      try {
        setAppointments(JSON.parse(saved));
      } catch (err) {
        console.error('Failed to parse saved appointments', err);
      }
    }
  }, []);

  // Update preselected configurations
  useEffect(() => {
    if (preselectedDoctorId) {
      setSelectedDoctorId(preselectedDoctorId);
      const doc = DOCTORS.find(d => d.id === preselectedDoctorId);
      if (doc) {
        setSelectedSpecialty(doc.specialty);
      }
    } else if (preselectedSpecialty) {
      setSelectedSpecialty(preselectedSpecialty);
      const defaultDoc = DOCTORS.find(d => d.specialty.toLowerCase() === preselectedSpecialty.toLowerCase());
      if (defaultDoc) {
        setSelectedDoctorId(defaultDoc.id);
      }
    }
  }, [preselectedDoctorId, preselectedSpecialty, isOpen]);

  // Sync state with localstorage
  const saveAppointments = (updated: Appointment[]) => {
    setAppointments(updated);
    localStorage.setItem('namaha_hospital_appointments', JSON.stringify(updated));
  };

  const handleDoctorChange = (docId: string) => {
    setSelectedDoctorId(docId);
    const doc = DOCTORS.find(d => d.id === docId);
    if (doc) {
      setSelectedSpecialty(doc.specialty);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim()) {
      setErrorMessage('Please enter the patient name.');
      return;
    }
    if (!patientPhone.trim() || patientPhone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!selectedDoctorId) {
      setErrorMessage('Please select a healthcare specialist.');
      return;
    }
    if (!bookingDate) {
      setErrorMessage('Please select a calendar date for consultation.');
      return;
    }
    if (!timeSlot) {
      setErrorMessage('Please select a clinical time slot.');
      return;
    }

    setErrorMessage('');
    const targetDoctor = DOCTORS.find(d => d.id === selectedDoctorId);

    const newAppointment: Appointment = {
      id: 'apt-' + Math.random().toString(36).substr(2, 9),
      patientName,
      patientEmail: patientEmail || 'no-email@drjtnamaha.com',
      patientPhone,
      specialty: selectedSpecialty || (targetDoctor ? targetDoctor.specialty : 'General Consult'),
      doctorName: targetDoctor ? targetDoctor.name : 'NAMAHA Specialist Office',
      date: bookingDate,
      timeSlot,
      status: 'Confirmed', // We auto-approve for high visual delight
      notes,
      createdAt: new Date().toISOString(),
    };

    const updated = [newAppointment, ...appointments];
    saveAppointments(updated);
    setSuccess(true);
    setStep(3);

    // Reset fields
    setPatientName('');
    setPatientEmail('');
    setPatientPhone('');
    setSelectedDoctorId('');
    setSelectedSpecialty('');
    setBookingDate('');
    setTimeSlot('');
    setNotes('');
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to cancel this appointment session?')) {
      const filtered = appointments.filter(apt => apt.id !== id);
      saveAppointments(filtered);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Main Panel */}
      <div className="relative bg-white rounded-[32px] shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col border border-gray-100 animate-fade-up z-10 font-body-md text-on-surface">
        
        {/* Header */}
        <div className="p-6 md:p-8 bg-primary text-on-primary flex justify-between items-center shrink-0">
          <div>
            <h3 className="font-headline-lg text-2xl font-bold">Clinical Appointments</h3>
            <p className="text-xs text-primary-fixed/80 font-medium mt-1">
              Connect with Virar's leading medical experts.
            </p>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center cursor-pointer text-white font-bold text-lg"
          >
            ×
          </button>
        </div>

        {/* Tab navigation */}
        <div className="flex border-b border-gray-100 text-sm font-semibold text-center shrink-0">
          <button
            onClick={() => { setActiveTab('new'); setStep(1); setSuccess(false); }}
            className={`flex-1 py-4 border-b-2 transition-all ${
              activeTab === 'new'
                ? 'border-primary text-primary bg-primary/5'
                : 'border-transparent text-on-surface-variant hover:text-primary hover:bg-gray-50'
            }`}
          >
            Book New Session
          </button>
          <button
            onClick={() => setActiveTab('list')}
            className={`flex-1 py-4 border-b-2 transition-all flex justify-center items-center gap-2 ${
              activeTab === 'list'
                ? 'border-primary text-primary bg-primary/5'
                : 'border-transparent text-on-surface-variant hover:text-primary hover:bg-gray-50'
            }`}
          >
            My Appointments
            <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full font-bold">
              {appointments.length}
            </span>
          </button>
        </div>

        {/* Scrolleable Content */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1">
          {activeTab === 'new' && (
            <div>
              {step === 1 && (
                <div className="space-y-6">
                  <div className="bg-primary/5 rounded-2xl p-5 border border-primary/10 flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-primary text-sm">Secure Booking System</h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed mt-1">
                        All patient health records, contact information and appointment metadata are stored locally inside the sandbox to safeguard your medical privacy.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-3 uppercase tracking-wider">Step 1: Patient Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-on-surface-variant flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-primary" /> Patient Full Name *
                        </label>
                        <input
                          type="text"
                          value={patientName}
                          onChange={e => setPatientName(e.target.value)}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none"
                          id="patient_name_input"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-on-surface-variant flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-primary" /> Contact Phone *
                        </label>
                        <input
                          type="tel"
                          value={patientPhone}
                          onChange={e => setPatientPhone(e.target.value)}
                          placeholder="e.g. 9812345670"
                          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none"
                          id="patient_phone_input"
                        />
                      </div>
                    </div>
                    <div className="mt-4 space-y-1">
                      <label className="text-xs font-semibold text-on-surface-variant flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-primary" /> Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={patientEmail}
                        onChange={e => setPatientEmail(e.target.value)}
                        placeholder="e.g. rahul.sharma@example.com"
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none"
                        id="patient_email_input"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        if (!patientName.trim() || !patientPhone.trim()) {
                          setErrorMessage('Patient Name and Phone Number are required fields.');
                          return;
                        }
                        setErrorMessage('');
                        setStep(2);
                      }}
                      className="w-full py-3 bg-primary text-on-primary rounded-xl font-semibold text-sm hover:opacity-95 transition-all shadow-md active:scale-[0.98] cursor-pointer"
                    >
                      Continue to Appointment Details
                    </button>
                    {errorMessage && (
                      <p className="mt-3 text-center text-xs text-red-600 font-bold flex items-center justify-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errorMessage}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {step === 2 && (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex justify-between items-center border-b border-gray-100 pb-3 mb-2 shrink-0">
                    <h4 className="font-semibold text-sm text-primary uppercase tracking-wider">Step 2: Specialty & Timings</h4>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs font-semibold text-primary/60 hover:text-primary hover:underline"
                    >
                      ← Back
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-on-surface-variant">Select Doctor</label>
                      <select
                        value={selectedDoctorId}
                        onChange={e => handleDoctorChange(e.target.value)}
                        className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none"
                        id="doctor_select"
                      >
                        <option value="">-- Choose Specialist Dr. --</option>
                        {DOCTORS.map(doc => (
                          <option key={doc.id} value={doc.id}>
                            {doc.name} ({doc.specialty})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-on-surface-variant">Current Specialty</label>
                      <input
                        type="text"
                        value={selectedSpecialty}
                        readOnly
                        placeholder="N/A"
                        className="w-full border border-gray-100 bg-gray-50 rounded-xl px-3 py-2.5 text-sm text-gray-500 font-medium outline-none"
                      />
                    </div>
                  </div>

                  {/* Consultation Mode Enforced */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-on-surface-variant flex items-center gap-1">
                      Consultation Method *
                    </label>
                    <div className="border border-green-200 bg-green-50/50 rounded-xl p-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                        <span className="text-sm font-semibold text-green-800">WhatsApp Call (Video/Voice Only)</span>
                      </div>
                      <span className="text-[10px] bg-[#25D366] text-white px-2 py-0.5 rounded font-bold uppercase shrink-0">default secure mode</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-on-surface-variant flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-primary" /> Consultation Date *
                      </label>
                      <input
                        type="date"
                        value={bookingDate}
                        onChange={e => setBookingDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none"
                        id="date_select_input"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-on-surface-variant flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-primary" /> Time Slot *
                      </label>
                      <select
                        value={timeSlot}
                        onChange={e => setTimeSlot(e.target.value)}
                        className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none"
                        id="time_slot_select"
                      >
                        <option value="">-- Choose Time Slot --</option>
                        {TIME_SLOTS.map(slot => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-on-surface-variant flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-primary" /> Reason for Visit & Medical Notes (Optional)
                    </label>
                    <textarea
                      value={notes}
                      onChange={e => setNotes(e.target.value)}
                      placeholder="e.g. routine maternity check, child psychological counseling appointment, fracture joint checkup"
                      rows={3}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none resize-none"
                      id="visit_notes_input"
                    />
                  </div>

                  <div className="pt-3">
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-primary text-on-primary rounded-xl font-semibold text-sm hover:opacity-95 transition-all shadow-md active:scale-[0.98] cursor-pointer flex justify-center items-center gap-2"
                    >
                      <Check className="w-4 h-4 ml-1" /> Complete Verified Booking
                    </button>
                    {errorMessage && (
                      <p className="mt-3 text-center text-xs text-red-600 font-bold flex items-center justify-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errorMessage}
                      </p>
                    )}
                  </div>
                </form>
              )}

              {step === 3 && success && (
                <div className="text-center py-8 space-y-6 animate-fade-up">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto">
                    <Check className="w-10 h-10" />
                  </div>
                  <div>
                    <h4 className="font-headline-lg text-2xl font-bold text-green-600">Appointment Confirmed!</h4>
                    <p className="text-sm text-on-surface-variant max-w-md mx-auto mt-2">
                      An orthopedic / obstetric / psychological counseling slot has been securely registered in NAMAHA. Your booking details are cached locally. Our specialists will connect with you via WhatsApp Call.
                    </p>
                  </div>

                  <div className="bg-surface-container rounded-2xl p-5 border border-surface-variant max-w-md mx-auto text-left space-y-2 text-sm text-on-surface">
                    <div className="flex justify-between font-semibold text-primary py-1 border-b border-gray-200">
                      <span>Ref Code:</span>
                      <span className="font-mono">TC-APT-{Math.floor(1000 + Math.random() * 9000)}</span>
                    </div>
                    <div className="flex justify-between py-0.5">
                      <span className="text-on-surface-variant">Speciality:</span>
                      <span className="font-semibold">{selectedSpecialty || 'General Care'}</span>
                    </div>
                    <div className="flex justify-between py-0.5">
                      <span className="text-on-surface-variant">Doctor:</span>
                      <span className="font-semibold">{DOCTORS.find(d => d.id === selectedDoctorId)?.name || 'NAMAHA Specialist'}</span>
                    </div>
                    <div className="flex justify-between py-0.5">
                      <span className="text-on-surface-variant">Scheduled Date:</span>
                      <span className="font-semibold">{bookingDate}</span>
                    </div>
                    <div className="flex justify-between py-0.5">
                      <span className="text-on-surface-variant">Consultation Slot:</span>
                      <span className="font-semibold">{timeSlot}</span>
                    </div>
                    <div className="flex justify-between py-0.5">
                      <span className="text-on-surface-variant">Consultation Method:</span>
                      <span className="font-semibold text-green-700 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
                        WhatsApp Call
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-4 max-w-md mx-auto pt-4">
                    <button
                      onClick={() => {
                        setActiveTab('list');
                        setStep(1);
                        setSuccess(false);
                      }}
                      className="flex-1 py-3 bg-primary text-on-primary rounded-xl font-semibold text-sm hover:opacity-95 shadow"
                    >
                      View All Slots
                    </button>
                    <button
                      onClick={onClose}
                      className="flex-1 py-3 border border-outline text-primary rounded-xl font-semibold text-sm hover:bg-gray-50"
                    >
                      Close Panel
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'list' && (
            <div className="space-y-4">
              {appointments.length === 0 ? (
                <div className="text-center py-12 text-on-surface-variant space-y-3">
                  <Calendar className="w-12 h-12 mx-auto opacity-30 text-primary" />
                  <p className="font-medium text-sm">No scheduled clinic appointments found from your device.</p>
                  <button
                    onClick={() => setActiveTab('new')}
                    className="text-xs font-bold text-primary hover:underline"
                  >
                    Click here to schedule a consultation with our hospital specialists →
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-xs text-on-surface-variant font-bold uppercase tracking-wider mb-2">
                    Current Active Consultation Sessions
                  </p>
                  {appointments.map((apt) => (
                    <div 
                      key={apt.id}
                      className="border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md transition-all p-5 rounded-2xl flex flex-col sm:flex-row gap-4 justify-between items-start"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs bg-primary-fixed text-on-primary-fixed font-bold px-2.5 py-0.5 rounded-full select-none">
                            {apt.specialty}
                          </span>
                          <span className="text-xs bg-green-100 text-green-700 font-bold px-2.5 py-0.5 rounded-full select-none flex items-center gap-1">
                            <Check className="w-3 h-3" /> {apt.status}
                          </span>
                        </div>
                        <h5 className="font-bold text-sm text-primary">{apt.doctorName}</h5>
                        
                        <div className="text-xs text-on-surface-variant font-medium space-y-1">
                          <p><span className="font-semibold text-gray-700">Patient:</span> {apt.patientName} ({apt.patientPhone})</p>
                          <p className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-primary" /> {apt.date}</p>
                          <p className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-primary" /> {apt.timeSlot}</p>
                          <p className="flex items-center gap-1"><span className="font-semibold text-gray-700">Method:</span> <span className="text-green-700 font-bold">WhatsApp Call</span></p>
                          {apt.notes && <p className="italic text-gray-500 mt-1">"{apt.notes}"</p>}
                        </div>
                      </div>

                      <button
                        onClick={() => handleDelete(apt.id)}
                        className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-xl transition-colors self-end sm:self-center"
                        title="Cancel Appointment"
                      >
                        <Trash2 className="w-4.5 h-4.5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
