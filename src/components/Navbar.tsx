import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, User, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const LOGO_URL = "https://storage.googleapis.com/dala-prod-public-storage/attachments/11007e86-66bf-437e-969a-429a955a44b0/1773259194029_IMG_20251224_004455_653.jpg";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'Neighborhoods', path: '/neighborhoods' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={LOGO_URL} alt="Egeree Construction" className="h-10 md:h-12 w-auto object-contain" />
          <div className={`flex flex-col ${scrolled ? 'text-gray-900' : 'text-white'}`}>
            <span className="text-xl font-black tracking-tighter leading-none">EGEREE</span>
            <span className="text-[10px] font-bold tracking-[0.2em] opacity-80">CONSTRUCTION</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-bold transition-colors hover:text-blue-600 ${
                location.pathname === link.path 
                  ? 'text-blue-600' 
                  : scrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/properties" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-200"
          >
            Find a Home
          </Link>
        </div>

        <button 
          className="lg:hidden p-2 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={scrolled ? 'text-gray-900' : 'text-white'} />
          ) : (
            <Menu className={scrolled ? 'text-gray-900' : 'text-white'} />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-white z-50 lg:hidden p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-2">
                <img src={LOGO_URL} alt="Logo" className="h-10 w-auto" />
                <span className="font-black text-xl">EGEREE</span>
              </div>
              <button onClick={() => setIsOpen(false)}><X className="w-8 h-8" /></button>
            </div>
            
            <div className="space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between text-2xl font-black text-gray-900 border-b pb-4"
                >
                  {link.name}
                  <ChevronRight className="text-gray-300" />
                </Link>
              ))}
            </div>

            <div className="mt-auto space-y-4">
              <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-100">
                Book Consultation
              </button>
              <div className="flex justify-center gap-6 pt-4">
                <Phone className="text-gray-400 hover:text-blue-600 cursor-pointer" />
                <Mail className="text-gray-400 hover:text-blue-600 cursor-pointer" />
                <User className="text-gray-400 hover:text-blue-600 cursor-pointer" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};