import React, { useState } from 'react';
import { 
  Bed, 
  Bath, 
  Square, 
  MapPin, 
  ArrowRight, 
  Heart, 
  Expand, 
  CheckCircle2 
} from 'lucide-react';
import { Property } from '../../types';
import { formatCurrency, cn } from '../../lib/utils';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

interface PropertyCardProps {
  property: Property;
  onCompareToggle?: (id: string) => void;
  isComparing?: boolean;
}

export function PropertyCard({ property, onCompareToggle, isComparing }: PropertyCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={property.imageUrl} 
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-900 shadow-sm">
            {property.status}
          </span>
          <span className="px-3 py-1 bg-blue-600 rounded-full text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
            {property.type}
          </span>
        </div>
        <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-md rounded-full text-slate-400 hover:text-red-500 transition-colors shadow-sm">
          <Heart className="h-4 w-4" />
        </button>
        
        {/* Overlay Action */}
        <div className={cn(
          "absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0"
        )}>
          <Link to={`/properties/${property.id}`}>
            <Button size="sm" className="w-full bg-white text-slate-900 hover:bg-slate-100 font-bold">
              View Details
            </Button>
          </Link>
        </div>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-slate-900 line-clamp-1">{property.title}</h3>
          <span className="text-lg font-bold text-blue-600">{formatCurrency(property.price)}</span>
        </div>
        
        <div className="flex items-center text-slate-500 text-sm mb-4">
          <MapPin className="h-3.5 w-3.5 mr-1" />
          <span className="truncate">{property.location}</span>
        </div>

        <div className="grid grid-cols-3 gap-4 py-4 border-t border-slate-100">
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center text-slate-900 font-bold text-sm">
              <Bed className="h-4 w-4 mr-1 text-slate-400" /> {property.bedrooms}
            </div>
            <span className="text-[10px] uppercase text-slate-400 font-medium">Beds</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center text-slate-900 font-bold text-sm">
              <Bath className="h-4 w-4 mr-1 text-slate-400" /> {property.bathrooms}
            </div>
            <span className="text-[10px] uppercase text-slate-400 font-medium">Baths</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center text-slate-900 font-bold text-sm">
              <Square className="h-4 w-4 mr-1 text-slate-400" /> {property.sqft}
            </div>
            <span className="text-[10px] uppercase text-slate-400 font-medium">Sqft</span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <button 
            onClick={() => onCompareToggle?.(property.id)}
            className={cn(
              "text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors",
              isComparing ? "text-blue-600" : "text-slate-400 hover:text-slate-600"
            )}
          >
            {isComparing ? <CheckCircle2 className="h-4 w-4" /> : <Expand className="h-4 w-4" />}
            {isComparing ? 'Added to Compare' : 'Compare'}
          </button>
          <Link to={`/properties/${property.id}`} className="text-blue-600 hover:text-blue-700">
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}