import React from 'react';
import { MOCK_PROPERTIES } from '../data/mock-data';
import PropertyCard from '../components/property/PropertyCard';
import { Hero } from '../components/home/Hero';
import { MarketTrends } from '../components/home/MarketTrends';
import { Button } from '../components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HomePage() {
  return (
    <div className="bg-white">
      <Hero />
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-5xl font-black text-gray-900 tracking-tight">Featured Properties</h2>
          <Button variant="outline" className="rounded-2xl px-8 py-6 font-black border-2">View Portfolio</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {MOCK_PROPERTIES.map(p => <PropertyCard key={p.id} property={p} />)}
        </div>
      </section>
      <MarketTrends />
    </div>
  );
}

export default HomePage;