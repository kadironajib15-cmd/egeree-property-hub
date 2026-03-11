import React, { useState } from 'react';
import { Property } from '../../types';
import { MOCK_PROPERTIES } from '../../data/mock-data';
import PropertyCard from '../property/PropertyCard';
import { Filter, Search, Map, X } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Slider } from "../ui/slider";
import InteractiveMap from './InteractiveMap';

const PropertyGrid = ({ 
  onView, 
  onCompare, 
  comparisonList 
}: { 
  onView: (id: string) => void,
  onCompare: (p: Property) => void,
  comparisonList: Property[]
}) => {
  const [filterType, setFilterType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 2000000]);
  const [showMap, setShowMap] = useState(false);

  const filteredProperties = MOCK_PROPERTIES.filter(p => {
    const matchesType = filterType === 'All' || p.type === filterType;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
    return matchesType && matchesSearch && matchesPrice;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h2 className="text-4xl font-black text-gray-900 tracking-tight">Luxury Properties</h2>
          <p className="text-gray-500 mt-2 font-medium">{filteredProperties.length} hand-picked listings found</p>
        </div>
        <div className="flex gap-4">
          <Button 
            variant={showMap ? "default" : "outline"} 
            onClick={() => setShowMap(!showMap)}
            className="rounded-xl px-6 h-12 border-2"
          >
            {showMap ? <X className="w-4 h-4 mr-2" /> : <Map className="w-4 h-4 mr-2" />}
            {showMap ? "Show Grid" : "Map View"}
          </Button>
          <Select defaultValue="newest">
            <SelectTrigger className="w-[200px] h-12 rounded-xl border-2">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {showMap ? (
        <div className="animate-in slide-in-from-top-5 duration-500">
           <InteractiveMap onSelect={onView} />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1 space-y-10 bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 h-fit sticky top-24">
            <div className="space-y-4">
              <h3 className="font-black text-xs uppercase tracking-widest text-gray-400">Keywords</h3>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input 
                  placeholder="Address, city..." 
                  className="pl-11 h-12 rounded-xl border-gray-100 bg-gray-50 focus:bg-white transition-colors"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-black text-xs uppercase tracking-widest text-gray-400">Property Type</h3>
              <div className="grid grid-cols-2 gap-2">
                {['All', 'House', 'Apartment', 'Villa', 'Condo'].map(type => (
                  <button
                    key={type}
                    onClick={() => setFilterType(type)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      filterType === type 
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="font-black text-xs uppercase tracking-widest text-gray-400">Budget</h3>
                <span className="text-xs text-blue-600 font-black">${(priceRange[0]/1000)}k - ${(priceRange[1]/1000)}k</span>
              </div>
              <Slider 
                defaultValue={[0, 2000000]} 
                max={2000000} 
                step={50000} 
                onValueChange={setPriceRange}
                className="py-4"
              />
            </div>

            <div className="space-y-4">
               <h3 className="font-black text-xs uppercase tracking-widest text-gray-400">Bedrooms</h3>
               <div className="flex gap-2">
                 {[1, 2, 3, 4, '5+'].map(n => (
                   <button key={n} className="flex-1 aspect-square border-2 border-gray-50 rounded-xl hover:border-blue-500 hover:text-blue-600 font-bold transition-all text-sm flex items-center justify-center">
                     {n}
                   </button>
                 ))}
               </div>
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700 py-7 rounded-2xl font-bold shadow-xl shadow-blue-600/10">Apply Filters</Button>
          </div>

          {/* Listings Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProperties.map(property => (
                <PropertyCard 
                  key={property.id} 
                  property={property} 
                  onView={onView}
                  onCompare={onCompare}
                  isComparing={comparisonList.some(p => p.id === property.id)}
                />
              ))}
            </div>
            {filteredProperties.length === 0 && (
              <div className="text-center py-32 bg-gray-50 rounded-[3rem] border-4 border-dashed border-gray-100">
                 <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <Search className="text-gray-300 w-10 h-10" />
                 </div>
                 <h4 className="text-xl font-bold text-gray-900 mb-2">No Properties Found</h4>
                 <p className="text-gray-500 mb-8 max-w-xs mx-auto">Try adjusting your filters to find more luxury options.</p>
                 <Button variant="link" onClick={() => {setFilterType('All'); setSearchQuery(''); setPriceRange([0, 2000000]);}} className="font-bold text-blue-600">Clear all filters</Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyGrid;