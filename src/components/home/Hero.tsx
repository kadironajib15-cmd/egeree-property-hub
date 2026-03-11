import React from 'react';
import { Search, Building2, TrendingUp, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';

export const Hero = ({ onSearch }: { onSearch?: () => void }) => {
  return (
    <div className="relative h-[95vh] flex items-center overflow-hidden">
      {/* Background Image with Parallax-like effect */}
      <div className="absolute inset-0 z-0 scale-105">
        <img
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/d099c8fc-a751-41e4-a464-833f96d3bca0/modern-luxury-villa-2bccd16b-1773260528146.webp"
          className="w-full h-full object-cover"
          alt="Luxury Home"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/40 to-transparent" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-blue-400 font-black uppercase tracking-widest text-[10px] mb-8">
            <Sparkles className="w-3 h-3" />
            Leading Luxury Construction
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
            Architecting <br />
            <span className="text-blue-500">Excellence.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed font-medium">
            From visionary blueprints to breathtaking reality, EGEREE CONSTRUCTION defines the future of premium living spaces.
          </p>

          <div className="bg-white/95 backdrop-blur-xl p-3 rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row gap-2 max-w-5xl border border-white/20">
            <div className="flex-[1.5] flex items-center px-6 py-4">
              <MapPin className="text-blue-600 w-5 h-5 mr-4" />
              <div className="flex-1">
                <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Location</div>
                <input 
                  type="text" 
                  placeholder="Where is your dream?"
                  className="w-full outline-none text-gray-900 bg-transparent font-bold placeholder:text-gray-400"
                />
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-100 self-center" />
            <div className="flex-1 flex items-center px-6 py-4">
              <Building2 className="text-blue-600 w-5 h-5 mr-4" />
              <div className="flex-1">
                <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Type</div>
                <select className="w-full outline-none text-gray-900 bg-transparent appearance-none cursor-pointer font-bold">
                  <option>Any Property</option>
                  <option>Villa</option>
                  <option>Apartment</option>
                  <option>House</option>
                </select>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-100 self-center" />
            <div className="flex-1 flex items-center px-6 py-4">
              <TrendingUp className="text-blue-600 w-5 h-5 mr-4" />
              <div className="flex-1">
                <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Budget</div>
                <select className="w-full outline-none text-gray-900 bg-transparent appearance-none cursor-pointer font-bold">
                  <option>$500k - $2M+</option>
                  <option>$500k - $1M</option>
                  <option>$1M - $2M</option>
                  <option>$2M+</option>
                </select>
              </div>
            </div>
            <button 
              onClick={onSearch}
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-[2rem] font-black transition-all transform hover:scale-[1.02] shadow-xl shadow-blue-600/20 text-lg flex items-center justify-center gap-2"
            >
              <Search className="w-5 h-5" />
              Explore
            </button>
          </div>
        </motion.div>
      </div>

      {/* Hero Stats */}
      <div className="absolute bottom-12 right-12 z-10 hidden xl:flex gap-12">
        <div className="text-right">
          <div className="text-4xl font-black text-white">$4.2B+</div>
          <div className="text-[10px] font-black uppercase tracking-widest text-blue-500 mt-1">Total Sales</div>
        </div>
        <div className="text-right">
          <div className="text-4xl font-black text-white">120+</div>
          <div className="text-[10px] font-black uppercase tracking-widest text-blue-500 mt-1">Luxury Projects</div>
        </div>
        <div className="text-right">
          <div className="text-4xl font-black text-white">25</div>
          <div className="text-[10px] font-black uppercase tracking-widest text-blue-500 mt-1">Design Awards</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;