import React, { useState } from 'react';
import { MapPin, ZoomIn, ZoomOut, Layers, Target } from 'lucide-react';
import { PROPERTIES } from '../data/mockData';
import { motion, AnimatePresence } from 'framer-motion';

export const PropertyMap = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedProperty = PROPERTIES.find(p => p.id === selectedId);

  return (
    <section id="map" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Interactive Map</h2>
          <p className="text-gray-500 font-medium">Explore our developments across the region. Click on markers to see property details.</p>
        </div>

        <div className="relative h-[600px] bg-gray-100 rounded-[3rem] overflow-hidden border border-gray-100 shadow-2xl">
          {/* Mock Map Background */}
          <div className="absolute inset-0 bg-[#f8f9fa] opacity-50" style={{ backgroundImage: 'radial-gradient(#e5e7eb 2px, transparent 2px)', backgroundSize: '40px 40px' }} />
          
          {/* Mock Grid Lines */}
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 pointer-events-none opacity-20">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border-[0.5px] border-gray-300" />
            ))}
          </div>

          {/* Interactive Markers */}
          <div className="absolute inset-0">
            {PROPERTIES.map((p, i) => (
              <motion.button
                key={p.id}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedId(p.id)}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                style={{ 
                  left: `${20 + (i * 15)}%`, 
                  top: `${30 + (i * 12)}%` 
                }}
              >
                <div className={`p-3 rounded-full shadow-lg transition-all ${selectedId === p.id ? 'bg-blue-600 text-white scale-125' : 'bg-white text-blue-600 hover:bg-blue-50'}`}>
                  <MapPin size={24} />
                </div>
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-[10px] font-bold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  ${(p.price / 1000000).toFixed(1)}M
                </div>
              </motion.button>
            ))}
          </div>

          {/* Map Controls */}
          <div className="absolute top-6 right-6 flex flex-col gap-2">
            {[ZoomIn, ZoomOut, Layers, Target].map((Icon, i) => (
              <button key={i} className="p-3 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl text-gray-600 hover:text-blue-600 transition-all border border-gray-100">
                <Icon size={20} />
              </button>
            ))}
          </div>

          {/* Property Overlay */}
          <AnimatePresence>
            {selectedProperty && (
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className="absolute bottom-6 left-6 right-6 md:right-auto md:w-96 bg-white rounded-[2rem] p-4 shadow-2xl border border-gray-100 flex gap-4"
              >
                <img src={selectedProperty.image} className="w-24 h-24 rounded-2xl object-cover" />
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-black text-gray-900 leading-tight">{selectedProperty.title}</h4>
                    <button onClick={() => setSelectedId(null)} className="text-gray-400 hover:text-gray-600">✕</button>
                  </div>
                  <p className="text-blue-600 font-black text-lg mb-2">${(selectedProperty.price/1000000).toFixed(1)}M</p>
                  <div className="flex gap-3 text-[10px] font-bold text-gray-400 uppercase">
                    <span>{selectedProperty.beds} Beds</span>
                    <span>•</span>
                    <span>{selectedProperty.sqft} Sqft</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};