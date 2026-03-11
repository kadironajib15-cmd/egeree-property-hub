import React from 'react';
import { Card, CardContent } from '../ui/card';
import { MapPin, Coffee, School, TreePine, TrainFront, ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { MOCK_NEIGHBORHOODS } from '../../data/mock-data';

const NeighborhoodGuides = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
          <div className="max-w-3xl">
            <div className="text-blue-600 font-black uppercase tracking-[0.2em] text-[10px] mb-4">Local Life</div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tighter">Neighborhood Guides</h2>
            <p className="text-gray-500 text-xl font-medium mt-6 leading-relaxed">Deep dives into the communities where we build excellence. Discover schools, amenities, and lifestyle metrics.</p>
          </div>
          <button className="mt-8 md:mt-0 flex items-center bg-gray-50 hover:bg-gray-100 text-gray-900 font-black text-xs uppercase tracking-widest px-10 py-6 rounded-2xl transition-all group border border-gray-100">
            View All Districts <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {MOCK_NEIGHBORHOODS.map((n, idx) => (
            <motion.div
              key={n.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group cursor-pointer"
            >
              <Card className="overflow-hidden border-none shadow-[0_48px_80px_-16px_rgba(0,0,0,0.08)] hover:shadow-2xl transition-all duration-700 rounded-[3.5rem] h-full flex flex-col p-4 bg-white border border-gray-50">
                <div className="relative h-96 overflow-hidden rounded-[2.5rem]">
                  <img src={n.imageUrl} alt={n.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-10 left-10">
                    <div className="flex gap-2 mb-4">
                      <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-white border border-white/20">{n.stats.vibe}</span>
                    </div>
                    <h3 className="text-5xl font-black text-white tracking-tighter">{n.name}</h3>
                  </div>
                </div>
                <CardContent className="p-10 flex-1 flex flex-col justify-between">
                  <p className="text-gray-500 text-xl font-medium leading-relaxed mb-12">{n.description}</p>
                  
                  <div className="grid grid-cols-3 gap-8 py-10 border-y border-gray-50 mb-10">
                    <div className="text-center">
                      <div className="text-3xl font-black text-blue-600">${(n.stats.medianPrice / 1000000).toFixed(1)}M</div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black mt-2">Median Sale</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black text-gray-900">{n.stats.schools}</div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black mt-2">Top Schools</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black text-gray-900">{n.stats.crimeRate}</div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black mt-2">Safety</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-8 text-[10px] font-black uppercase tracking-widest text-gray-400">
                    <span className="flex items-center group/icon"><Coffee className="w-4 h-4 mr-3 text-amber-500 group-hover/icon:scale-125 transition-transform" /> Artisan Cafes</span>
                    <span className="flex items-center group/icon"><TreePine className="w-4 h-4 mr-3 text-green-500 group-hover/icon:scale-125 transition-transform" /> Green Parks</span>
                    <span className="flex items-center group/icon"><TrainFront className="w-4 h-4 mr-3 text-purple-500 group-hover/icon:scale-125 transition-transform" /> Transit Hubs</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NeighborhoodGuides;