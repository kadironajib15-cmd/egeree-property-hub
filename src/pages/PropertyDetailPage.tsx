import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_PROPERTIES, MOCK_AGENTS } from '../data/mock-data';
import { Bed, Bath, Square, MapPin, ChevronLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { MortgageCalculator } from '../components/property/MortgageCalculator';
import { formatCurrency } from '../lib/utils';

export function PropertyDetailPage() {
  const { id } = useParams();
  const property = MOCK_PROPERTIES.find(p => p.id === id);
  const agent = MOCK_AGENTS.find(a => a.id === property?.agentId);

  if (!property) return <div className="pt-24 text-center">Property not found</div>;

  return (
    <div className="bg-slate-50 min-h-screen pb-20 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/listings" className="text-blue-600 font-bold mb-4 inline-block">Back to Listings</Link>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <img src={property.imageUrl} className="w-full h-[500px] object-cover rounded-3xl" />
            <h1 className="text-4xl font-black">{property.title}</h1>
            <p className="text-lg text-slate-600">{property.description}</p>
          </div>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
              <div className="text-4xl font-black mb-6">{formatCurrency(property.price)}</div>
              <Button className="w-full bg-blue-600">Contact Agent</Button>
            </div>
            <MortgageCalculator propertyPrice={property.price} />
          </div>
        </div>
      </div>
    </div>
  );
}