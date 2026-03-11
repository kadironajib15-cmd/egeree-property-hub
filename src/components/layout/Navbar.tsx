import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Button } from '../ui/button';

const LOGO_URL = 'https://storage.googleapis.com/dala-prod-public-storage/attachments/11007e86-66bf-437e-969a-429a955a44b0/1773259194029_IMG_20251224_004455_653.jpg';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Listings', href: '/listings' },
    { name: 'Agents', href: '/agents' },
    { name: 'Neighborhoods', href: '/neighborhoods' },
  ];

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src={LOGO_URL} alt="EGEREE CONSTRUCTION" className="h-10 w-auto rounded-sm" />
            <span className={cn(
              'font-bold text-xl tracking-tight hidden sm:block',
              isScrolled ? 'text-slate-900' : 'text-white'
            )}>
              EGEREE
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-blue-600',
                  location.pathname === link.href 
                    ? 'text-blue-600' 
                    : isScrolled ? 'text-slate-600' : 'text-white/90'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                'p-2 rounded-md',
                isScrolled ? 'text-slate-900' : 'text-white'
              )}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={cn(
        'md:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out',
        isOpen ? 'translate-x-0' : 'translate-x-full'
      )}>
        <div className="flex flex-col h-full pt-20 px-6 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold text-slate-900 hover:text-blue-600"
            >
              {link.name}
            </Link>
          ))}
          <Button size="lg" className="w-full bg-blue-600">
            Contact Us
          </Button>
        </div>
      </div>
    </nav>
  );
}