import React, { useState } from 'react';
import { Search, MapPin, SlidersHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/d099c8fc-a751-41e4-a464-833f96d3bca0/hero-image-ff008107-1773261724330.webp"
          alt="Luxury Construction"
          className="w-full h-full object-cover brightness-[0.4]"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30 text-xs font-bold uppercase tracking-widest mb-6"
        >
          Excellence in Every Build
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight"
        >
          Elevating Your Living <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Experience.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-2 md:p-3 rounded-2xl shadow-2xl max-w-4xl mx-auto flex flex-col md:flex-row gap-2"
        >
          <div className="flex-1 flex items-center px-4 gap-3 bg-gray-50 rounded-xl border border-transparent focus-within:border-blue-200 transition-all">
            <Search className="text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by neighborhood, city, or address..."
              className="bg-transparent w-full py-4 text-gray-700 focus:outline-none font-medium"
            />
          </div>
          <div className="hidden md:flex items-center gap-4 px-4 border-l border-gray-100">
            <div className="text-left min-w-[120px]">
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Property Type</p>
              <select className="bg-transparent font-semibold text-gray-700 cursor-pointer focus:outline-none">
                <option>All Types</option>
                <option>Villa</option>
                <option>Apartment</option>
                <option>Townhouse</option>
              </select>
            </div>
            <div className="text-left min-w-[120px]">
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Price Range</p>
              <select className="bg-transparent font-semibold text-gray-700 cursor-pointer focus:outline-none">
                <option>Any Price</option>
                <option>$500k - $1M</option>
                <option>$1M - $3M</option>
                <option>$3M+</option>
              </select>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
            <SlidersHorizontal size={18} />
            Search
          </button>
        </motion.div>
      </div>
    </section>
  );
};