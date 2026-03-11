import React, { useState } from 'react';
import { PROPERTIES } from '../data/mockData';
import { Bed, Bath, Move, Maximize2, Heart, Compare, MapPin, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

export const Properties = () => {
  const [filter, setFilter] = useState('All');
  const [comparing, setComparing] = useState<string[]>([]);

  const toggleCompare = (id: string) => {
    if (comparing.includes(id)) {
      setComparing(comparing.filter(item => item !== id));
      toast.info('Removed from comparison');
    } else {
      if (comparing.length >= 3) {
        toast.error('You can only compare up to 3 properties');
        return;
      }
      setComparing([...comparing, id]);
      toast.success('Added to comparison');
    }
  };

  const filtered = filter === 'All' ? PROPERTIES : PROPERTIES.filter(p => p.type === filter);

  return (
    <section id="properties" className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Featured Projects</h2>
            <p className="text-gray-500 max-w-md font-medium">Explore our curated selection of luxury developments and residential masterpieces.</p>
          </div>
          <div className="flex bg-white p-1.5 rounded-2xl border border-gray-100 shadow-sm overflow-x-auto max-w-full">
            {['All', 'Villa', 'Apartment', 'Townhouse'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                  filter === type ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'text-gray-500 hover:text-blue-600'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((property) => (
              <motion.div
                key={property.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-white/90 backdrop-blur-md text-gray-900 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                      {property.type}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
                    <button className="p-2.5 bg-white/90 backdrop-blur-md rounded-full text-gray-600 hover:text-red-500 hover:bg-white shadow-lg">
                      <Heart size={18} />
                    </button>
                    <button 
                      onClick={() => toggleCompare(property.id)}
                      className={`p-2.5 rounded-full shadow-lg backdrop-blur-md transition-all ${
                        comparing.includes(property.id) ? 'bg-blue-600 text-white' : 'bg-white/90 text-gray-600 hover:text-blue-600 hover:bg-white'
                      }`}
                    >
                      <Maximize2 size={18} />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 translate-y-20 group-hover:translate-y-0 transition-transform duration-300">
                    <button 
                      onClick={() => window.open(property.virtualTourUrl, '_blank')}
                      className="w-full bg-white/95 backdrop-blur-md text-gray-900 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-white"
                    >
                      <Move size={16} className="animate-pulse" />
                      3D Virtual Tour
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {property.title}
                    </h3>
                    <p className="text-xl font-black text-blue-600">
                      ${(property.price / 1000000).toFixed(1)}M
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400 text-sm mb-6 font-medium">
                    <MapPin size={14} className="text-blue-600" />
                    {property.location}
                  </div>

                  <div className="grid grid-cols-3 gap-4 py-6 border-y border-gray-50 mb-6">
                    <div className="flex flex-col items-center">
                      <span className="text-gray-400 text-[10px] font-bold uppercase mb-1">Beds</span>
                      <div className="flex items-center gap-1.5 font-bold text-gray-900">
                        <Bed size={16} className="text-blue-600" />
                        {property.beds}
                      </div>
                    </div>
                    <div className="flex flex-col items-center border-x border-gray-50">
                      <span className="text-gray-400 text-[10px] font-bold uppercase mb-1">Baths</span>
                      <div className="flex items-center gap-1.5 font-bold text-gray-900">
                        <Bath size={16} className="text-blue-600" />
                        {property.baths}
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-gray-400 text-[10px] font-bold uppercase mb-1">Sqft</span>
                      <div className="flex items-center gap-1.5 font-bold text-gray-900">
                        <Move size={16} className="text-blue-600" />
                        {property.sqft}
                      </div>
                    </div>
                  </div>

                  <button className="w-full py-4 rounded-xl bg-gray-900 text-white font-bold hover:bg-black transition-all flex items-center justify-center gap-2 group/btn">
                    View Details
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Comparison Floating Bar */}
      <AnimatePresence>
        {comparing.length > 0 && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 w-full max-w-2xl px-4"
          >
            <div className="bg-white/80 backdrop-blur-xl border border-gray-100 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] rounded-3xl p-4 flex items-center gap-4">
              <div className="flex -space-x-4">
                {comparing.map(id => {
                  const p = PROPERTIES.find(p => p.id === id);
                  return (
                    <div key={id} className="relative group">
                      <img src={p?.image} className="w-16 h-16 rounded-2xl object-cover border-4 border-white shadow-lg" />
                      <button 
                        onClick={() => toggleCompare(id)}
                        className="absolute -top-2 -right-2 bg-gray-900 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X size={12} />
                      </button>
                    </div>
                  );
                })}
              </div>
              <div className="flex-1">
                <p className="font-black text-gray-900 text-sm">Compare Properties</p>
                <p className="text-gray-400 text-xs font-bold uppercase">{comparing.length} / 3 selected</p>
              </div>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-black text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                Compare Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};