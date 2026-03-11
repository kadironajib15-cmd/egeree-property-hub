import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROPERTIES, AGENTS } from '../data/mockData';
import { 
  Bed, Bath, Move, MapPin, Share2, Heart, 
  ChevronRight, Calendar, User, CheckCircle2, 
  ArrowLeft, Eye, Download, Info
} from 'lucide-react';
import { MortgageCalculator } from '../components/MortgageCalculator';
import { motion } from 'framer-motion';

export const PropertyDetails: React.FC = () => {
  const { id } = useParams();
  const property = PROPERTIES.find(p => p.id === id);
  const agent = AGENTS.find(a => a.id === property?.agentId);

  if (!property) return <div className="pt-40 text-center">Property not found</div>;

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-24 px-6 container mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <Link to="/properties" className="flex items-center text-sm font-bold text-gray-500 hover:text-blue-600">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Listings
          </Link>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm font-bold hover:bg-gray-50">
              <Share2 className="w-4 h-4" /> Share
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm font-bold hover:bg-gray-50">
              <Heart className="w-4 h-4" /> Save
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[500px] md:h-[600px] rounded-3xl overflow-hidden mb-12 shadow-2xl">
          <div className="md:col-span-2 md:row-span-2 relative group">
            <img src={property.images[0]} className="w-full h-full object-cover" alt={property.title} />
          </div>
          <div className="hidden md:block">
            <img src={property.images[1] || property.images[0]} className="w-full h-full object-cover" alt="" />
          </div>
          <div className="hidden md:block">
            <img src={property.images[0]} className="w-full h-full object-cover" alt="" />
          </div>
          <div className="hidden md:block">
            <img src={property.images[1] || property.images[0]} className="w-full h-full object-cover" alt="" />
          </div>
          <div className="hidden md:block relative">
            <img src={property.images[0]} className="w-full h-full object-cover" alt="" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-black cursor-pointer hover:bg-black/30 text-lg">
              + 12 Photos
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <div className="mb-12">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">{property.type}</span>
                <span className="bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">Available</span>
              </div>
              <h1 className="text-5xl font-black text-gray-900 mb-4 tracking-tight">{property.title}</h1>
              <p className="flex items-center text-gray-400 text-lg font-medium mb-10">
                <MapPin className="w-5 h-5 mr-2 text-blue-600" /> {property.location}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-10 bg-gray-50 rounded-3xl border border-gray-100">
                <div>
                  <div className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-2">Price</div>
                  <div className="text-3xl font-black text-blue-600">${property.price.toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-2">Beds</div>
                  <div className="flex items-center text-2xl font-black">
                    <Bed className="w-6 h-6 mr-2 text-gray-400" /> {property.beds}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-2">Baths</div>
                  <div className="flex items-center text-2xl font-black">
                    <Bath className="w-6 h-6 mr-2 text-gray-400" /> {property.baths}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-2">Living Area</div>
                  <div className="flex items-center text-2xl font-black">
                    <Move className="w-6 h-6 mr-2 text-gray-400" /> {property.sqft}
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-3xl font-black mb-8">Description</h3>
              <p className="text-gray-600 leading-relaxed text-xl">
                {property.description} This home has been meticulously crafted by Egeree Construction, ensuring the highest standards of structural integrity and aesthetic appeal. Located in the highly sought-after {property.neighborhood} neighborhood.
              </p>
            </div>

            <div className="mb-16">
              <h3 className="text-3xl font-black mb-8">Amenities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {property.features.map((feature, i) => (
                  <div key={i} className="flex items-center p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 mr-4" />
                    <span className="font-bold text-gray-800">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-black">Virtual Tour</h3>
                <span className="flex items-center text-blue-600 text-xs font-black bg-blue-50 px-4 py-2 rounded-full uppercase tracking-widest">
                  <Eye className="w-4 h-4 mr-2" /> 3D Walkthrough
                </span>
              </div>
              <div className="aspect-video bg-gray-900 rounded-3xl overflow-hidden shadow-2xl relative">
                {property.virtualTourUrl ? (
                  <iframe src={property.virtualTourUrl} className="w-full h-full border-0" title="3D Tour" allowFullScreen />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-gray-500">
                    <Eye className="w-16 h-16 mb-4" />
                    <p className="font-black">Tour Initializing...</p>
                  </div>
                )}
              </div>
            </div>

            <MortgageCalculator />
          </div>

          <div className="space-y-10">
            <div className="sticky top-32 space-y-10">
              <div className="bg-white border-2 border-gray-50 rounded-3xl p-8 shadow-xl">
                <h4 className="font-black text-xl mb-8 flex items-center">
                  <User className="w-6 h-6 mr-3 text-blue-600" /> Advisor
                </h4>
                <Link to={`/agents/${agent?.id}`} className="flex items-center gap-4 mb-8 group">
                  <img src={agent?.photo} className="w-20 h-20 rounded-2xl object-cover shadow-lg group-hover:scale-105 transition-transform" alt="" />
                  <div>
                    <div className="font-black text-gray-900 group-hover:text-blue-600 transition-colors">{agent?.name}</div>
                    <div className="text-xs text-gray-400 font-bold uppercase">{agent?.role}</div>
                  </div>
                </Link>
                <div className="space-y-4 mb-8">
                  <input type="text" placeholder="Full Name" className="w-full p-4 rounded-xl bg-gray-50 border-none text-sm font-bold focus:ring-2 focus:ring-blue-500" />
                  <input type="email" placeholder="Email Address" className="w-full p-4 rounded-xl bg-gray-50 border-none text-sm font-bold focus:ring-2 focus:ring-blue-500" />
                  <textarea placeholder="Message..." className="w-full p-4 rounded-xl bg-gray-50 border-none text-sm font-bold h-32 focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                <button className="w-full bg-blue-600 text-white font-black py-4 rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 active:scale-[0.98]">
                  Contact Agent
                </button>
              </div>

              <div className="bg-gray-950 rounded-3xl p-8 text-white">
                <h4 className="font-black text-xl mb-6">Investment Highlights</h4>
                <div className="space-y-4">
                   <div className="flex justify-between border-b border-white/10 pb-4">
                      <span className="text-gray-400 text-sm">Potential Yield</span>
                      <span className="font-black text-green-400">4.8%</span>
                   </div>
                   <div className="flex justify-between border-b border-white/10 pb-4">
                      <span className="text-gray-400 text-sm">Price Appreciation</span>
                      <span className="font-black text-blue-400">+12% YoY</span>
                   </div>
                   <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">Property Tax</span>
                      <span className="font-black text-gray-100">1.2%</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};