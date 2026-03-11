import React from 'react';
import { MOCK_PROPERTIES } from '../../data/mock-data';
import { MapPin, Navigation, Info } from 'lucide-react';
import { Card } from '../ui/card';

const InteractiveMap = ({ onSelect }: { onSelect: (id: string) => void }) => {
  return (
    <div className="relative w-full h-[600px] bg-slate-100 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
      {/* Mock Map Background */}
      <div className="absolute inset-0 bg-[#f8fafc] opacity-50" style={{ backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      {/* Interactive Markers */}
      {MOCK_PROPERTIES.map((p, i) => (
        <div 
          key={p.id}
          className="absolute cursor-pointer group"
          style={{ 
            top: `${30 + (i * 15)}%`, 
            left: `${20 + (i * 25)}%`,
            transform: 'translate(-50%, -100%)'
          }}
          onClick={() => onSelect(p.id)}
        >
          <div className="relative">
            <div className="bg-blue-600 text-white px-5 py-3 rounded-2xl text-sm font-black shadow-2xl flex items-center gap-2 group-hover:scale-110 group-hover:bg-blue-700 transition-all">
              <MapPin className="w-4 h-4" />
              ${p.price / 1000}k
            </div>
            <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-blue-600 mx-auto" />
            
            {/* Popover Preview on Hover */}
            <Card className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 w-56 overflow-hidden opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-500 shadow-2xl border-none rounded-3xl translate-y-4 group-hover:translate-y-0">
              <img src={p.imageUrl} className="w-full h-28 object-cover" alt="" />
              <div className="p-4">
                <p className="text-xs font-black text-gray-900 truncate uppercase tracking-widest mb-1">{p.title}</p>
                <p className="text-[10px] text-gray-500 font-bold">{p.location}</p>
              </div>
            </Card>
          </div>
        </div>
      ))}

      {/* Map Controls UI */}
      <div className="absolute top-8 right-8 flex flex-col gap-3">
        <button className="bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl hover:bg-white transition-all hover:scale-105"><Navigation className="w-6 h-6 text-blue-600" /></button>
        <button className="bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl hover:bg-white transition-all hover:scale-105"><Info className="w-6 h-6 text-gray-400" /></button>
      </div>

      <div className="absolute bottom-10 left-10 right-10">
        <div className="bg-white/80 backdrop-blur-2xl p-8 rounded-[2.5rem] border border-white/50 shadow-2xl flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="bg-blue-600 p-4 rounded-2xl text-white shadow-xl shadow-blue-600/20">
              <MapPin className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-black text-gray-900 text-xl tracking-tight">Interactive Map</h4>
              <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] mt-1">Live proximity search active</p>
            </div>
          </div>
          <div className="hidden md:flex gap-12">
             <div className="text-right">
                <div className="text-2xl font-black text-gray-900">{MOCK_PROPERTIES.length}</div>
                <div className="text-[10px] text-blue-600 font-black uppercase tracking-widest mt-1">Active Estates</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;