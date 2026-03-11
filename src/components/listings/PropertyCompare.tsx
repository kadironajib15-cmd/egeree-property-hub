import React from 'react';
import { Property } from '../../types';
import { X, Check, ShieldCheck, Zap, ArrowRight, Layers } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

const PropertyCompare = ({ list, onRemove }: { list: Property[], onRemove: (id: string) => void }) => {
  if (list.length === 0) {
    return (
      <div className="max-w-4xl mx-auto py-48 px-4 text-center">
        <div className="bg-blue-50 w-24 h-24 rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-xl shadow-blue-600/5">
           <Layers className="text-blue-600 w-10 h-10" />
        </div>
        <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Property Comparison</h2>
        <p className="text-gray-500 mb-12 max-w-md mx-auto text-lg font-medium">Select up to 3 properties from our listings to see a detailed side-by-side comparison of features.</p>
        <Button onClick={() => window.location.href='/listings'} className="rounded-2xl px-12 py-8 bg-blue-600 hover:bg-blue-700 font-black text-lg shadow-2xl shadow-blue-600/20">Browse Listings</Button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-24 px-4 overflow-x-auto">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-4xl font-black text-gray-900 tracking-tight flex items-center">
            <ShieldCheck className="mr-4 text-blue-600 w-10 h-10" />
            Listing Comparison
          </h2>
          <p className="text-gray-500 mt-2 text-lg font-medium">Detailed breakdown of your selected luxury properties.</p>
        </div>
        <Button variant="outline" onClick={() => onRemove('all')} className="rounded-xl border-2 border-gray-100 font-bold px-8 h-14">Clear All</Button>
      </div>

      <div className="min-w-[1000px]">
        <table className="w-full border-collapse bg-white rounded-[3rem] overflow-hidden shadow-sm border border-gray-100">
          <thead>
            <tr className="bg-gray-50/50">
              <th className="p-10 text-left text-gray-400 font-black uppercase tracking-widest text-[10px] border-b border-gray-100 w-1/4">Feature Analysis</th>
              {list.map(p => (
                <th key={p.id} className="p-10 border-b border-gray-100">
                  <div className="relative group text-left">
                    <button 
                      onClick={() => onRemove(p.id)}
                      className="absolute -top-4 -right-4 bg-white text-gray-400 hover:text-red-500 p-3 rounded-2xl shadow-xl border border-gray-100 transition-all opacity-0 group-hover:opacity-100 z-10"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <div className="rounded-[2rem] overflow-hidden aspect-square mb-6 shadow-xl shadow-gray-200">
                      <img src={p.imageUrl} className="w-full h-full object-cover" alt={p.title} />
                    </div>
                    <h4 className="font-black text-gray-900 text-xl mb-1 truncate">{p.title}</h4>
                    <p className="text-blue-600 font-black text-2xl">${p.price.toLocaleString()}</p>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-sm font-bold">
            {[
              { label: 'Location', key: 'location' },
              { label: 'Property Type', key: 'type' },
              { label: 'Bedrooms', key: 'bedrooms' },
              { label: 'Bathrooms', key: 'bathrooms' },
              { label: 'Living Area', key: 'sqft', suffix: ' sqft' },
              { label: 'Year Built', key: 'yearBuilt' },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-gray-50/30 transition-colors">
                <td className="p-8 text-gray-400 font-black uppercase tracking-widest text-[10px] bg-gray-50/20 border-b border-gray-50">{row.label}</td>
                {list.map(p => (
                  <td key={p.id} className="p-8 border-b border-gray-50 text-gray-900 text-lg">
                    {/* @ts-ignore */}
                    {p[row.key]}{row.suffix || ''}
                  </td>
                ))}
              </tr>
            ))}
            <tr>
              <td className="p-8 text-gray-400 font-black uppercase tracking-widest text-[10px] bg-gray-50/20 border-b border-gray-50">3D Tour</td>
              {list.map(p => (
                <td key={p.id} className="p-8 border-b border-gray-50">
                  {p.virtualTourUrl ? 
                    <div className="bg-green-50 text-green-600 w-10 h-10 rounded-xl flex items-center justify-center shadow-sm"><Check className="w-6 h-6" /></div> : 
                    <div className="bg-gray-50 text-gray-300 w-10 h-10 rounded-xl flex items-center justify-center"><X className="w-6 h-6" /></div>
                  }
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-8 text-gray-400 font-black uppercase tracking-widest text-[10px] bg-gray-50/20">Actions</td>
              {list.map(p => (
                <td key={p.id} className="p-8">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 py-6 rounded-2xl font-black shadow-xl shadow-blue-600/10">View Property</Button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PropertyCompare;