import React from 'react';
import { MapPin, Phone, Clock, MessageSquare, Compass } from 'lucide-react';

export default function ContactView() {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-8 md:py-12 space-y-16 animate-fade-up text-on-surface font-body-md">
      
      {/* Introduction Header */}
      <div className="text-center space-y-3">
        <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-bold uppercase tracking-wider">
          Reach Our Clinic
        </span>
        <h2 className="font-display-md text-3xl md:text-4xl font-bold text-primary tracking-tight">Contact & Clinic Location</h2>
        <p className="font-body-md text-on-surface-variant max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          Need assistance or scheduling coordination? We represent direct channels. Stop by, dial, text or write securely!
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Info Blocks */}
        <div className="space-y-8">
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-headline-md text-xl md:text-2xl font-bold text-primary">Direct Contact Details</h3>
            <p className="text-xs text-on-surface-variant font-medium">Located strategically beside the Virar West Bus Depot for convenient community accessibility.</p>
          </div>

          <div className="space-y-6">
            <a 
              href="https://maps.app.goo.gl/nYxBdN1sN2BiJ5XG8"
              target="_blank"
              rel="noreferrer"
              className="flex gap-4 items-start bg-primary/5 p-5 rounded-2xl border border-primary/10 hover:bg-primary/10 hover:border-primary/30 transition-all cursor-pointer group"
            >
              <MapPin className="text-primary shrink-0 w-6 h-6 mt-0.5 group-hover:scale-110 transition-transform" />
              <div>
                <h5 className="font-bold text-sm text-primary flex items-center gap-1.5">
                  Clinic Address
                  <Compass className="w-3.5 h-3.5 text-primary opacity-70 group-hover:opacity-100 transition-opacity" />
                </h5>
                <p className="text-on-surface-variant text-xs mt-1 leading-relaxed group-hover:text-primary transition-colors">
                  First Floor, NAMAHA, Beside Virar West Bus Depot, Pushpa Nagar, Virar West , 401303
                </p>
                <span className="text-[11px] font-bold text-primary underline mt-1.5 inline-block">
                  Open in Google Maps →
                </span>
              </div>
            </a>

            <div className="flex gap-4 items-start bg-primary/5 p-5 rounded-2xl border border-primary/10">
              <Phone className="text-primary shrink-0 w-6 h-6 mt-0.5" />
              <div>
                <h5 className="font-bold text-sm text-primary">Phone & Emergency Line</h5>
                <div className="text-on-surface-variant text-xs mt-1.5 space-y-3">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href="tel:+919226520500" className="inline-flex items-center justify-center gap-2 bg-primary text-white hover:opacity-90 transition-all py-2.5 px-4 rounded-xl font-bold text-xs shadow-sm cursor-pointer">
                      <Phone className="w-3.5 h-3.5" /> Call +91 92265 20500
                    </a>
                    <a href="tel:+919226510500" className="inline-flex items-center justify-center gap-2 bg-primary text-white hover:opacity-90 transition-all py-2.5 px-4 rounded-xl font-bold text-xs shadow-sm cursor-pointer">
                      <Phone className="w-3.5 h-3.5" /> Call +91 92265 10500
                    </a>
                  </div>
                  <div className="text-red-600 font-semibold text-xs pt-1">(24/7 Emergency Referral Line Only)</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-primary/5 p-5 rounded-2xl border border-primary/10">
              <Clock className="text-primary shrink-0 w-6 h-6 mt-0.5" />
              <div>
                <h5 className="font-bold text-sm text-primary">In-Clinic Consultation Hours</h5>
                <p className="text-on-surface-variant text-xs mt-1 font-medium">
                  Mon - Sat: 10:00 AM - 08:00 PM <br />
                  Sunday: Closed (Except Medical Emergencies)
                </p>
              </div>
            </div>
          </div>

          {/* Social and instant channels */}
          <div className="pt-4 border-t flex flex-wrap justify-center md:justify-start gap-4">
            <a 
              className="bg-[#25D366] text-white px-5 py-2.5 rounded-full font-bold text-xs flex items-center gap-2 hover:opacity-95 transition-all outline-none" 
              href="https://wa.me/919226520500"
              target="_blank"
              rel="noreferrer"
            >
              <MessageSquare className="w-4 h-4" /> WhatsApp Text Inquiry
            </a>
            
            <a 
              className="bg-primary text-on-primary px-5 py-2.5 rounded-full font-bold text-xs hover:opacity-90 transition-all text-center" 
              href="mailto:drjtnamaha@gmail.com"
            >
              Email Outreach Office
            </a>
          </div>
        </div>
      </div>

      {/* Embedded Maps Section */}
      <div className="space-y-6">
        <div className="text-center md:text-left">
          <h4 className="font-bold text-lg text-primary">In-Clinic Locator Road Map</h4>
          <p className="text-xs text-on-surface-variant">Interact with the map below or zoom in to find direct routes to Namaha Hospital.</p>
        </div>
        <div className="aspect-square max-w-2xl w-full rounded-[32px] overflow-hidden bg-gray-50 border border-gray-200 relative shadow-sm">
          <iframe
            title="Namaha Hospital Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.360181512879!2d72.8105741!3d19.4616223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9a6cf9e69c3%3A0xcb065ff474581fe4!2sNAMAHA!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
            className="w-full h-full border-0 absolute inset-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="flex justify-center md:justify-start">
          <a
            href="https://maps.app.goo.gl/nYxBdN1sN2BiJ5XG8"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white hover:opacity-95 transition-all py-3 px-8 rounded-full font-bold text-sm shadow-md cursor-pointer"
          >
            <Compass className="w-4 h-4" />
            Get Directions
          </a>
        </div>
      </div>

    </div>
  );
}
