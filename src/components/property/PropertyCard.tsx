import React, { useState } from 'react';
import { Property } from '../../types';
import { Bed, Bath, Maximize2, MapPin, Heart, ArrowRightLeft } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

interface PropertyCardProps {
  property: Property;
  onView?: (id: string) => void;
  onCompare?: (property: Property) => void;
  isComparing?: boolean;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, onView, onCompare, isComparing = false }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
    toast.info(isLiked ? "Removed from favorites" : "Added to favorites");
  };

  const handleCompare = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onCompare) onCompare(property);
  };

  const handleView = () => {
    if (onView) onView(property.id);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="group cursor-pointer"
      onClick={handleView}
    >
      <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 rounded-[2.5rem] bg-white border border-gray-50">
        <div className="relative h-72 overflow-hidden rounded-[2.2rem] m-2">
          <img 
            src={property.imageUrl} 
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <Badge className="bg-white/90 text-blue-600 px-4 py-2 rounded-xl font-black uppercase tracking-widest text-[10px] shadow-xl backdrop-blur-md border-none">
              {property.type}
            </Badge>
          </div>
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <button 
              onClick={handleLike}
              className={`p-3 rounded-2xl backdrop-blur-md transition-all hover:scale-110 ${isLiked ? 'bg-red-500 text-white' : 'bg-white/30 text-white hover:bg-white/50'}`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
            </button>
            {onCompare && (
              <button 
                onClick={handleCompare}
                className={`p-3 rounded-2xl backdrop-blur-md transition-all hover:scale-110 ${isComparing ? 'bg-blue-600 text-white' : 'bg-white/30 text-white hover:bg-white/50'}`}
              >
                <ArrowRightLeft className="w-4 h-4" />
              </button>
            )}
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
            <div className="text-white text-3xl font-black tracking-tighter">
              ${property.price.toLocaleString()}
            </div>
          </div>
        </div>
        <CardContent className="p-8 pt-4">
          <h3 className="text-2xl font-black text-gray-900 mb-2 truncate tracking-tight">{property.title}</h3>
          <div className="flex items-center text-gray-400 font-bold text-sm mb-6">
            <MapPin className="w-4 h-4 mr-2 text-blue-500" />
            {property.location}
          </div>
          <div className="flex justify-between items-center pt-6 border-t border-gray-50">
            <div className="flex items-center gap-6 text-gray-900 font-black text-xs uppercase tracking-widest">
              <span className="flex items-center"><Bed className="w-4 h-4 mr-2 text-blue-500" /> {property.bedrooms}</span>
              <span className="flex items-center"><Bath className="w-4 h-4 mr-2 text-blue-500" /> {property.bathrooms}</span>
              <span className="flex items-center"><Maximize2 className="w-4 h-4 mr-2 text-blue-500" /> {property.sqft}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PropertyCard;