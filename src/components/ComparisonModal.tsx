import React from 'react';
import { Property } from '../data/mockData';
import { X, Check, Bed, Bath, Move, DollarSign, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ComparisonModalProps {
  properties: Property[];
  onClose: () => void;
  onRemove: (id: string) => void;
}

export const ComparisonModal: React.FC<ComparisonModalProps> = ({ properties, onClose, onRemove }) => {
  if (properties.length === 0) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 lg:p-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative bg-white w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl"
      >
        <div className="p-6 border-b flex justify-between items-center bg-gray-50">
          <h2 className="text-2xl font-black text-gray-900">Compare Properties</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="overflow-x-auto p-8">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-4 bg-gray-50 border-b border-gray-100 min-w-[200px] text-left">Feature</th>
                {properties.map(p => (
                  <th key={p.id} className="p-4 border-b border-gray-100 min-w-[250px] relative group">
                    <button 
                      onClick={() => onRemove(p.id)}
                      className="absolute top-2 right-2 p-1 bg-red-100 text-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <img src={p.images[0]} className="w-full h-32 object-cover rounded-xl mb-4" alt="" />
                    <div className="text-left">
                      <div className="font-black text-gray-900 truncate">{p.title}</div>
                      <div className="text-blue-600 font-bold">${p.price.toLocaleString()}</div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-gray-50">
                <td className="p-4 font-bold text-gray-500 uppercase text-[10px] tracking-wider">Type</td>
                {properties.map(p => <td key={p.id} className="p-4 text-gray-900 font-medium">{p.type}</td>)}
              </tr>
              <tr className="border-b border-gray-50">
                <td className="p-4 font-bold text-gray-500 uppercase text-[10px] tracking-wider">Bedrooms</td>
                {properties.map(p => <td key={p.id} className="p-4 text-gray-900 font-medium flex items-center"><Bed className="w-4 h-4 mr-2 text-blue-500" /> {p.beds}</td>)}
              </tr>
              <tr className="border-b border-gray-50">
                <td className="p-4 font-bold text-gray-500 uppercase text-[10px] tracking-wider">Bathrooms</td>
                {properties.map(p => <td key={p.id} className="p-4 text-gray-900 font-medium flex items-center"><Bath className="w-4 h-4 mr-2 text-blue-500" /> {p.baths}</td>)}
              </tr>
              <tr className="border-b border-gray-50">
                <td className="p-4 font-bold text-gray-500 uppercase text-[10px] tracking-wider">Living Area</td>
                {properties.map(p => <td key={p.id} className="p-4 text-gray-900 font-medium flex items-center"><Move className="w-4 h-4 mr-2 text-blue-500" /> {p.sqft} sqft</td>)}
              </tr>
              <tr className="border-b border-gray-50">
                <td className="p-4 font-bold text-gray-500 uppercase text-[10px] tracking-wider">Location</td>
                {properties.map(p => <td key={p.id} className="p-4 text-gray-500 text-xs"><MapPin className="w-3 h-3 inline mr-1" /> {p.location}</td>)}
              </tr>
              <tr>
                <td className="p-4 font-bold text-gray-500 uppercase text-[10px] tracking-wider">Key Features</td>
                {properties.map(p => (
                  <td key={p.id} className="p-4 align-top">
                    <ul className="space-y-1">
                      {p.features.map((f, i) => (
                        <li key={i} className="flex items-center text-xs text-gray-600">
                          <Check className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" /> {f}
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-6 bg-gray-50 border-t flex justify-end">
           <button onClick={onClose} className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">
             Close Comparison
           </button>
        </div>
      </motion.div>
    </div>
  );
};