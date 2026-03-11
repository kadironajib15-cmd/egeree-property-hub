import React from 'react';
import { MapPin, GraduationCap, Coffee, TreePine, ShoppingBag, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const NEIGHBORHOODS = [
  {
    id: 'n1',
    name: 'Seaside Heights',
    description: 'A luxurious coastal community known for its modern architectural mansions and pristine beaches.',
    stats: { price: '$4.2M', growth: '+15%', safety: 'High' },
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d099c8fc-a751-41e4-a464-833f96d3bca0/luxury-mansion-f7dcae01-1773261267235.webp',
  },
  {
    id: 'n2',
    name: 'Maplewood Park',
    description: 'The ultimate family neighborhood with top-rated schools, abundant parks, and a cozy suburban feel.',
    stats: { price: '$1.1M', growth: '+8%', safety: 'Very High' },
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d099c8fc-a751-41e4-a464-833f96d3bca0/neighborhood-park-56e6f1b6-1773261264929.webp',
  }
];

export const Neighborhoods: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl font-black text-gray-900 mb-6">Area Intelligence</h1>
          <p className="text-gray-500 text-xl leading-relaxed">
            Our neighborhood guides combine proprietary real estate data with local insights to give you a comprehensive view of the community.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-20">
          {NEIGHBORHOODS.map((nh, idx) => (
            <div key={nh.id} className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2 aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl">
                <img src={nh.image} className="w-full h-full object-cover" alt={nh.name} />
              </div>
              <div className="lg:w-1/2">
                <div className="flex items-center gap-2 text-blue-600 font-black mb-4 uppercase tracking-widest text-xs">
                  <MapPin className="w-4 h-4" /> Area Report
                </div>
                <h2 className="text-4xl font-black text-gray-900 mb-6">{nh.name}</h2>
                <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                  {nh.description}
                </p>

                <div className="grid grid-cols-3 gap-6 mb-12">
                  <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <div className="text-[10px] text-gray-400 font-black uppercase mb-1">Avg Price</div>
                    <div className="text-xl font-black text-gray-900">{nh.stats.price}</div>
                  </div>
                  <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <div className="text-[10px] text-gray-400 font-black uppercase mb-1">Growth</div>
                    <div className="text-xl font-black text-green-600">{nh.stats.growth}</div>
                  </div>
                  <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <div className="text-[10px] text-gray-400 font-black uppercase mb-1">Safety</div>
                    <div className="text-xl font-black text-gray-900">{nh.stats.safety}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-8">
                   <div className="flex items-center gap-2 text-sm font-black text-gray-700">
                      <GraduationCap className="w-5 h-5 text-blue-500" /> Schools
                   </div>
                   <div className="flex items-center gap-2 text-sm font-black text-gray-700">
                      <Coffee className="w-5 h-5 text-orange-500" /> Dining
                   </div>
                   <div className="flex items-center gap-2 text-sm font-black text-gray-700">
                      <TreePine className="w-5 h-5 text-green-500" /> Parks
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};