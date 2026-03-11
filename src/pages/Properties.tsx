import React, { useState } from 'react';
import { SearchFilters } from '../components/SearchFilters';
import { PropertyCard } from '../components/PropertyCard';
import { ComparisonModal } from '../components/ComparisonModal';
import { PROPERTIES, Property } from '../data/mockData';
import { Map, Grid, List, X, BarChart3, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Properties: React.FC = () => {
  const [filteredProperties, setFilteredProperties] = useState(PROPERTIES);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [comparing, setComparing] = useState<Property[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (filters: any) => {
    let results = PROPERTIES;
    if (filters.query) {
      results = results.filter(p => p.location.toLowerCase().includes(filters.query.toLowerCase()) || p.title.toLowerCase().includes(filters.query.toLowerCase()));
    }
    if (filters.propertyType) {
      results = results.filter(p => p.type === filters.propertyType);
    }
    if (filters.minPrice) {
      results = results.filter(p => p.price >= Number(filters.minPrice));
    }
    if (filters.maxPrice) {
      results = results.filter(p => p.price <= Number(filters.maxPrice));
    }
    if (filters.beds) {
      results = results.filter(p => p.beds >= Number(filters.beds));
    }
    setFilteredProperties(results);
  };

  const toggleCompare = (property: Property) => {
    setComparing(prev => {
      if (prev.find(p => p.id === property.id)) {
        return prev.filter(p => p.id !== property.id);
      }
      if (prev.length >= 3) return prev;
      return [...prev, property];
    });
  };

  const removeCompare = (id: string) => {
    setComparing(prev => prev.filter(p => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl font-black text-gray-900 mb-4">Discover Your Future Home</h1>
          <p className="text-gray-500 max-w-2xl">
            Browse our extensive collection of luxury real estate listings. Use the filters to find exactly what you're looking for.
          </p>
        </div>

        <SearchFilters onSearch={handleSearch} />

        <div className="flex flex-col md:flex-row justify-between items-center mt-12 mb-8 gap-4">
          <div className="text-sm font-medium text-gray-500">
            Showing <span className="text-gray-900 font-bold">{filteredProperties.length}</span> properties
          </div>
          
          <div className="flex items-center gap-2 bg-white p-1 rounded-lg border shadow-sm">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <List className="w-4 h-4" />
            </button>
            <div className="w-px h-6 bg-gray-200 mx-1" />
            <button className="flex items-center gap-2 px-3 py-2 text-sm font-bold text-gray-700 hover:text-blue-600">
              <Map className="w-4 h-4" /> View Map
            </button>
          </div>
        </div>

        <div className={`grid gap-8 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {filteredProperties.map((property) => (
            <PropertyCard 
              key={property.id} 
              property={property} 
              onCompare={toggleCompare}
              isComparing={comparing.some(p => p.id === property.id)}
            />
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
            <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900">No properties found</h3>
            <p className="text-gray-500">Try adjusting your search filters to find what you're looking for.</p>
          </div>
        )}
      </div>

      {/* Comparison Drawer */}
      <AnimatePresence>
        {comparing.length > 0 && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-40 border-t p-6"
          >
            <div className="container mx-auto flex items-center justify-between gap-8">
              <div className="hidden lg:block">
                <h4 className="font-bold text-lg text-gray-900">Compare Properties</h4>
                <p className="text-xs text-gray-500">Compare up to 3 listings side-by-side</p>
              </div>

              <div className="flex-1 flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {comparing.map((p) => (
                  <div key={p.id} className="flex-shrink-0 flex items-center gap-3 bg-gray-50 pr-2 rounded-lg border group relative">
                    <img src={p.images[0]} className="w-16 h-12 object-cover rounded-l-lg" alt="" />
                    <div className="max-w-[120px]">
                      <div className="text-xs font-bold truncate">{p.title}</div>
                      <div className="text-[10px] text-blue-600 font-bold">${p.price.toLocaleString()}</div>
                    </div>
                    <button 
                      onClick={() => toggleCompare(p)}
                      className="p-1 hover:text-red-500 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={() => setComparing([])}
                  className="px-4 py-2 text-sm font-bold text-gray-500 hover:text-gray-900"
                >
                  Clear
                </button>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold text-sm shadow-md shadow-blue-200 flex items-center gap-2"
                >
                  <BarChart3 className="w-4 h-4" /> Compare Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isModalOpen && (
          <ComparisonModal 
            properties={comparing} 
            onClose={() => setIsModalOpen(false)} 
            onRemove={removeCompare}
          />
        )}
      </AnimatePresence>
    </div>
  );
};