import React from 'react';
import { MOCK_PROPERTIES, MOCK_TESTIMONIALS } from '../data/mock-data';
import { PropertyCard } from '../components/property/PropertyCard';
import { Hero } from '../components/home/Hero';
import { MarketTrends } from '../components/home/MarketTrends';
import { Button } from '../components/ui/button';
import { ArrowRight, Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export function HomePage() {
  return (
    <div className="bg-white">
      <Hero />
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-bold text-slate-900">Featured Properties</h2>
          <Button variant="outline">View All</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MOCK_PROPERTIES.map(p => <PropertyCard key={p.id} property={p} />)}
        </div>
      </section>
      <MarketTrends />
    </div>
  );
}