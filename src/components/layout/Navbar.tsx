import React, { useState } from 'react';
import { LOGO_URL } from '../../data/mock-data';
import { Home, Search, Calculator, Users, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'listings', label: 'Listings', icon: Search },
    { id: 'tools', label: 'Calculator', icon: Calculator },
    { id: 'agents', label: 'Agents', icon: Users },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-gray-100 py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div 
              className="flex items-center cursor-pointer group" 
              onClick={() => setActivePage('home')}
            >
              <div className="relative">
                <img className="h-10 w-auto transition-transform group-hover:scale-110" src={LOGO_URL} alt="EGEREE" />
                <div className="absolute -inset-2 bg-blue-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className={`ml-4 text-xl font-black tracking-tighter transition-colors ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}>
                EGEREE <span className="text-blue-500">CONSTRUCTION</span>
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-2 py-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`px-6 py-2.5 rounded-xl text-sm font-black uppercase tracking-widest transition-all ${
                  activePage === item.id 
                    ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20' 
                    : `${scrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white/80 hover:text-white'}`
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
             <button className={`text-sm font-black uppercase tracking-widest px-4 py-2 ${scrolled ? 'text-gray-600' : 'text-white/80'}`}>
                Sign In
             </button>
             <button className="bg-white text-gray-900 px-8 py-3 rounded-xl text-sm font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-xl shadow-white/10">
                Contact
             </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-3 rounded-2xl transition-colors ${
                scrolled ? 'bg-gray-100 text-gray-900' : 'bg-white/10 text-white'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-[110] transition-transform duration-500 ease-expo ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-8 flex flex-col h-full">
          <div className="flex justify-between items-center mb-16">
            <img className="h-10 w-auto" src={LOGO_URL} alt="EGEREE" />
            <button onClick={() => setIsOpen(false)} className="p-3 bg-gray-100 rounded-2xl">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="space-y-4 flex-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActivePage(item.id);
                  setIsOpen(false);
                }}
                className={`w-full text-left p-6 rounded-[2rem] flex items-center justify-between transition-all ${
                  activePage === item.id ? 'bg-blue-600 text-white shadow-2xl shadow-blue-600/20' : 'bg-gray-50 text-gray-900'
                }`}
              >
                <div className="flex items-center gap-4">
                  <item.icon className="w-6 h-6" />
                  <span className="text-2xl font-black">{item.label}</span>
                </div>
                <ArrowRight className="w-5 h-5 opacity-50" />
              </button>
            ))}
          </div>
          <button className="w-full bg-gray-900 text-white py-8 rounded-[2.5rem] font-black text-xl mb-4 shadow-2xl">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;