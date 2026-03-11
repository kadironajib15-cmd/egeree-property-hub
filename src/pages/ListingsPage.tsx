import React, { useState, useMemo } from 'react';
import { MOCK_PROPERTIES } from '../data/mock-data';
import { PropertyCard } from '../components/property/PropertyCard';
import { LayoutGrid, Map as MapIcon, SlidersHorizontal, Search, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { formatCurrency } from '../lib/utils';

export function ListingsPage() {
  const [view, setView] = useState<'grid' | 'map'>('grid');
  const [filters, setFilters] = useState({ search: '', type: 'All' });

  const filteredProperties = useMemo(() => {
    return MOCK_PROPERTIES.filter(p => {
      const matchSearch = p.title.toLowerCase().includes(filters.search.toLowerCase());
      const matchType = filters.type === 'All' || p.type === filters.type;
      return matchSearch && matchType;
    });
  }, [filters]);

  return (
    <div className="pt-24 pb-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-black">Available Properties</h1>
          <div className="flex gap-2">
            <Button onClick={() => setView('grid')} variant={view === 'grid' ? 'default' : 'outline'}>Grid</Button>
            <Button onClick={() => setView('map')} variant={view === 'map' ? 'default' : 'outline'}>Map</Button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="space-y-6">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full p-3 rounded-xl border"
              onChange={(e) => setFilters({...filters, search: e.target.value})}
            />
          </aside>
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProperties.map(p => <PropertyCard key={p.id} property={p} />)}
          </div>
        </div>
      </div>
    </div>
  );
}