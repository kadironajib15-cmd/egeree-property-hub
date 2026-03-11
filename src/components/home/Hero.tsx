import React from 'react';
import { Search, MapPin, Calendar, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';

export function Hero() {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://storage.googleapis.com/dala-prod-public-storage/generated-images/d099c8fc-a751-41e4-a464-833f96d3bca0/hero-background-d2ddc606-1773260190915.webp")',
        }}
      >
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Building the Future of <br />
            <span className="text-blue-400">Luxury Living</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-100 max-w-2xl mx-auto mb-10">
            EGEREE CONSTRUCTION combines architectural excellence with modern engineering.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-xl p-2 rounded-2xl border border-white/20 max-w-4xl mx-auto shadow-2xl"
        >
          <div className="bg-white rounded-xl p-4 md:p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            <input type="text" placeholder="Location" className="w-full text-slate-900 p-2 border-r border-slate-100 focus:outline-none" />
            <select className="w-full text-slate-900 p-2 border-r border-slate-100 focus:outline-none"><option>Property Type</option></select>
            <select className="w-full text-slate-900 p-2 border-r border-slate-100 focus:outline-none"><option>Budget</option></select>
            <Button className="w-full bg-blue-600">Search</Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}