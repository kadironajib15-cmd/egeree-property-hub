import React from 'react';
import { MapPin, ArrowRight, Star, Coffee, GraduationCap, Train } from 'lucide-react';
import { motion } from 'framer-motion';

const GUIDES = [
  {
    title: 'Beverly Hills Luxury',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d099c8fc-a751-41e4-a464-833f96d3bca0/neighborhood-2-b5a823bf-1773261724330.webp',
    score: 9.8,
    tags: ['Prestigious', 'High-End', 'Safe'],
    amenities: [
      { icon: Coffee, label: 'Boutique Cafes' },
      { icon: GraduationCap, label: 'Top Schools' },
      { icon: Train, label: 'Convenient Access' }
    ]
  },
  {
    title: 'Seattle Waterfront',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d099c8fc-a751-41e4-a464-833f96d3bca0/property-2-b3fe121f-1773261713830.webp',
    score: 9.4,
    tags: ['Tech Hub', 'Views', 'Vibrant'],
    amenities: [
      { icon: Coffee, label: 'Coffee Culture' },
      { icon: Train, label: 'Light Rail' },
      { icon: Star, label: 'Modern Living' }
    ]
  },
  {
    title: 'Austin Innovation',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d099c8fc-a751-41e4-a464-833f96d3bca0/neighborhood-2-b5a823bf-1773261724368.webp',
    score: 9.2,
    tags: ['Growing', 'Nature', 'Tech'],
    amenities: [
      { icon: Coffee, label: 'Great Dining' },
      { icon: GraduationCap, label: 'UT Austin' },
      { icon: Star, label: 'Green Spaces' }
    ]
  }
];

export const Neighborhoods = () => {
  return (
    <section id="neighborhoods" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Neighborhood Guides</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">
            Don't just find a house, find your community. Explore the finest neighborhoods we build in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GUIDES.map((guide, idx) => (
            <motion.div
              key={guide.title}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative h-80 rounded-[2.5rem] overflow-hidden mb-6 shadow-xl shadow-gray-200">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl">
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  <span className="font-black text-gray-900">{guide.score}</span>
                </div>
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-2xl font-black text-white mb-2">{guide.title}</h3>
                  <div className="flex gap-2">
                    {guide.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold text-white/80 uppercase tracking-widest border border-white/20 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="px-4">
                <div className="flex justify-between items-center mb-6">
                  {guide.amenities.map((amenity, i) => (
                    <div key={i} className="flex flex-col items-center gap-2">
                      <div className="p-3 bg-gray-50 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <amenity.icon size={20} />
                      </div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase">{amenity.label}</span>
                    </div>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all">
                  Full Neighborhood Guide
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};