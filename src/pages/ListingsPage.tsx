import React, { useState, useMemo } from 'react';
import { MOCK_PROPERTIES } from '../data/mock-data';
import PropertyCard from '../components/property/PropertyCard';
import { LayoutGrid, Map as MapIcon, SlidersHorizontal, Search } from 'lucide-react';
import { Button } from '../components/ui/button';
import { motion } from 'framer-motion';

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
    <div className="pt-32 pb-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16 gap-8">
          <div>
            <div className="text-blue-600 font-black uppercase tracking-[0.2em] text-[10px] mb-4">Inventory</div>
            <h1 className="text-6xl font-black text-gray-900 tracking-tighter">Luxury Collection</h1>
          </div>
          <div className="flex gap-4">
            <Button 
              onClick={() => setView('grid')} 
              variant={view === 'grid' ? 'default' : 'outline'}
              className="rounded-xl px-6 h-14 font-black border-2"
            >
              <LayoutGrid className="w-4 h-4 mr-2" /> Grid
            </Button>
            <Button 
              onClick={() => setView('map')} 
              variant={view === 'map' ? 'default' : 'outline'}
              className="rounded-xl px-6 h-14 font-black border-2"
            >
              <MapIcon className="w-4 h-4 mr-2" /> Map
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <aside className="space-y-10">
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Search Assets</label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Asset name, location..." 
                  className="w-full h-14 pl-12 pr-6 rounded-2xl border-2 border-gray-50 bg-gray-50 focus:bg-white focus:border-blue-500 transition-all font-bold outline-none"
                  onChange={(e) => setFilters({...filters, search: e.target.value})}
                />
              </div>
            </div>
          </aside>
          
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredProperties.map(p => <PropertyCard key={p.id} property={p} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListingsPage;