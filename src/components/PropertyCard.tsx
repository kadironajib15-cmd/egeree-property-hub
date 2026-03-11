import React from 'react';
import { Bed, Bath, Move, Heart, BarChart3, User } from 'lucide-react';
import { Property } from '../data/mockData';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface PropertyCardProps {
  property: Property;
  onCompare?: (property: Property) => void;
  isComparing?: boolean;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, onCompare, isComparing }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
    >
      <div className="relative">
        <Link to={`/properties/${property.id}`} className="block relative aspect-[4/3] overflow-hidden">
          <img 
            src={property.images[0]} 
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>
        <div className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-black px-3 py-1.5 rounded-full tracking-wider uppercase">
          {property.type}
        </div>
        <button className="absolute top-4 right-4 p-2.5 bg-white/80 backdrop-blur-md rounded-full text-gray-600 hover:text-red-500 hover:bg-white transition-all shadow-sm">
          <Heart className="w-4 h-4" />
        </button>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-black text-lg text-gray-900 truncate leading-tight">{property.title}</h3>
            <span className="text-blue-600 font-black text-lg ml-2 whitespace-nowrap">
              ${property.price.toLocaleString()}
            </span>
          </div>
          <p className="text-gray-400 text-xs flex items-center font-medium">
            <MapPinIcon className="w-3 h-3 mr-1" />
            {property.location}
          </p>
        </div>
        
        <div className="grid grid-cols-3 gap-2 border-y border-gray-50 py-4 mb-6">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Beds</span>
            <div className="flex items-center text-sm font-black text-gray-700">
              <Bed className="w-3.5 h-3.5 mr-1.5 text-blue-500" /> {property.beds}
            </div>
          </div>
          <div className="flex flex-col border-x border-gray-100 px-2">
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Baths</span>
            <div className="flex items-center text-sm font-black text-gray-700">
              <Bath className="w-3.5 h-3.5 mr-1.5 text-blue-500" /> {property.baths}
            </div>
          </div>
          <div className="flex flex-col pl-2">
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Area</span>
            <div className="flex items-center text-sm font-black text-gray-700">
              <Move className="w-3.5 h-3.5 mr-1.5 text-blue-500" /> {property.sqft}
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <Link 
            to={`/properties/${property.id}`}
            className="flex-[2] text-center bg-gray-900 hover:bg-black text-white py-3 rounded-xl text-xs font-black transition-all transform hover:scale-[1.02]"
          >
            View Listing
          </Link>
          <button 
            onClick={() => onCompare?.(property)}
            className={`flex-1 flex items-center justify-center p-3 rounded-xl border transition-all ${isComparing ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white border-gray-200 text-gray-400 hover:text-blue-600 hover:border-blue-200'}`}
            title="Compare Property"
          >
            <BarChart3 className="w-4 h-4" />
          </button>
          <Link 
            to={`/agents/${property.agentId}`}
            className="flex-1 flex items-center justify-center p-3 bg-gray-50 border border-gray-100 text-gray-400 rounded-xl hover:text-blue-600 transition-all"
            title="Contact Agent"
          >
            <User className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const MapPinIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);