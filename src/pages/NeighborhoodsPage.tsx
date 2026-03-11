import React from 'react';
import { MOCK_NEIGHBORHOODS } from '../data/mock-data';
import { MapPin, TrendingUp, Shield, GraduationCap, Coffee, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { formatCurrency } from '../lib/utils';
import { motion } from 'framer-motion';

export function NeighborhoodsPage() {
  return (
    <div className="pt-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">Neighborhood Guides</h1>
          <p className="text-lg text-slate-600">Explore the vibrant communities where we build excellence.</p>
        </header>

        <div className="space-y-24 pb-24">
          {MOCK_NEIGHBORHOODS.map((neighborhood, idx) => (
            <motion.section 
              key={neighborhood.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              <img src={neighborhood.imageUrl} className="w-full lg:w-1/2 h-[400px] object-cover rounded-3xl" alt={neighborhood.name} />
              <div className="w-full lg:w-1/2 space-y-6">
                <h2 className="text-4xl font-black text-slate-900">{neighborhood.name}</h2>
                <p className="text-xl text-slate-600">{neighborhood.description}</p>
                <div className="text-3xl font-black text-blue-600">Median Price: {formatCurrency(neighborhood.stats.medianPrice)}</div>
                <Button size="lg" className="bg-slate-900">Explore Properties</Button>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}