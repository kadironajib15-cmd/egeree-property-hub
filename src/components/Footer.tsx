import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Send, MapPin, Phone, Mail } from 'lucide-react';

const LOGO_URL = 'https://storage.googleapis.com/dala-prod-public-storage/attachments/11007e86-66bf-437e-969a-429a955a44b0/1773259194029_IMG_20251224_004455_653.jpg';

export const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <img src={LOGO_URL} alt="EGEREE" className="h-14 w-auto brightness-200" />
              <div>
                <h2 className="text-2xl font-black tracking-tight leading-none">EGEREE</h2>
                <p className="text-[10px] uppercase tracking-[0.3em] text-blue-500 font-black">Construction</p>
              </div>
            </div>
            <p className="text-gray-400 font-medium leading-relaxed mb-8">
              Leading the future of luxury residential construction through innovation, sustainable practices, and unparalleled craftsmanship.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="p-3 rounded-2xl bg-white/5 text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-black mb-8">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#properties" className="hover:text-blue-400 transition-colors">Featured Listings</a></li>
              <li><a href="#trends" className="hover:text-blue-400 transition-colors">Market Analysis</a></li>
              <li><a href="#neighborhoods" className="hover:text-blue-400 transition-colors">Neighborhood Guides</a></li>
              <li><a href="#calculator" className="hover:text-blue-400 transition-colors">Mortgage Calculator</a></li>
              <li><a href="#agents" className="hover:text-blue-400 transition-colors">Our Team</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black mb-8">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li className="flex gap-3">
                <MapPin size={20} className="text-blue-500 shrink-0" />
                <span>722 Construction Way, <br />Suite 100, Los Angeles, CA</span>
              </li>
              <li className="flex gap-3">
                <Phone size={20} className="text-blue-500 shrink-0" />
                <span>+1 (800) EGEREE-CON</span>
              </li>
              <li className="flex gap-3">
                <Mail size={20} className="text-blue-500 shrink-0" />
                <span>info@egereeconstruction.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black mb-8">Newsletter</h4>
            <p className="text-gray-400 font-medium mb-6">Stay updated with our latest luxury developments and market reports.</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-14 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
              <button className="absolute right-2 top-2 p-3 bg-blue-600 rounded-xl text-white hover:bg-blue-700 transition-colors">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm font-medium">
          <p>© 2025 EGEREE CONSTRUCTION. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};