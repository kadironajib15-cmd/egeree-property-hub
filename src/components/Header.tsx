import React, { useState } from 'react';
import { Search, Menu, X, Phone, User, Home, Building, Calculator, TrendingUp, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LOGO_URL = 'https://storage.googleapis.com/dala-prod-public-storage/attachments/11007e86-66bf-437e-969a-429a955a44b0/1773259194029_IMG_20251224_004455_653.jpg';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Properties', href: '#properties', icon: Home },
    { name: 'Market Trends', href: '#trends', icon: TrendingUp },
    { name: 'Neighborhoods', href: '#neighborhoods', icon: MapPin },
    { name: 'Calculators', href: '#calculator', icon: Calculator },
    { name: 'Agents', href: '#agents', icon: User },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={LOGO_URL} alt="EGEREE CONSTRUCTION" className="h-12 w-auto object-contain" />
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold tracking-tight text-gray-900 leading-none">EGEREE</h1>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-semibold">Construction</p>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
            Get Started
          </button>
        </nav>

        <button className="lg:hidden p-2 text-gray-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-white border-b border-gray-100 p-4 absolute w-full"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 text-gray-700 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  <link.icon size={20} className="text-blue-600" />
                  {link.name}
                </a>
              ))}
              <button className="w-full bg-blue-600 text-white p-4 rounded-xl font-bold mt-2">
                Contact Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};