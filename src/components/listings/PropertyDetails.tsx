import React from 'react';
import { Property } from '../../types';
import { MOCK_PROPERTIES, MOCK_AGENTS } from '../../data/mock-data';
import { 
  Bed, Bath, Maximize2, MapPin, CheckCircle2, 
  ArrowLeft, Mail, Phone, Box, Calendar, Share2
} from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Input } from '../ui/input';
import { toast } from 'sonner';

const PropertyDetails = ({ id, onBack }: { id: string, onBack: () => void }) => {
  const property = MOCK_PROPERTIES.find(p => p.id === id);
  const agent = MOCK_AGENTS.find(a => a.id === property?.agentId) || MOCK_AGENTS[0];

  if (!property) return <div className="p-20 text-center">Property not found</div>;

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <button 
          onClick={onBack}
          className="flex items-center text-gray-500 hover:text-blue-600 mb-10 transition-colors font-bold group"
        >
          <div className="bg-white p-3 rounded-2xl mr-4 shadow-sm border border-gray-100 group-hover:shadow-md transition-shadow">
            <ArrowLeft className="w-5 h-5" />
          </div>
          <span className="font-black uppercase tracking-widest text-xs">Return to Collection</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <div className="relative rounded-[3.5rem] overflow-hidden aspect-video shadow-2xl group">
              <img src={property.imageUrl} className="w-full h-full object-cover" alt={property.title} />
              <div className="absolute top-10 left-10 flex gap-4">
                <Badge className="bg-white/95 text-blue-600 px-8 py-3 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-2xl backdrop-blur-md border-none">
                  {property.type}
                </Badge>
                <Badge className="bg-blue-600 text-white px-8 py-3 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-2xl backdrop-blur-md border-none">
                  {property.status}
                </Badge>
              </div>
            </div>

            <div className="bg-white rounded-[3.5rem] p-16 shadow-sm border border-gray-50">
              <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-10">
                <div>
                  <h1 className="text-5xl font-black text-gray-900 mb-4 tracking-tighter">{property.title}</h1>
                  <p className="flex items-center text-gray-400 font-bold text-lg">
                    <MapPin className="w-6 h-6 mr-3 text-blue-600" /> {property.location}
                  </p>
                </div>
                <div className="text-right bg-blue-600 p-10 rounded-[2.5rem] text-white shadow-2xl shadow-blue-600/20">
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] mb-2 opacity-60 text-center">Market Valuation</div>
                  <div className="text-4xl font-black">${property.price.toLocaleString()}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                {[
                  { icon: Bed, label: 'Beds', value: property.bedrooms },
                  { icon: Bath, label: 'Baths', value: property.bathrooms },
                  { icon: Maximize2, label: 'Sqft', value: property.sqft },
                  { icon: Calendar, label: 'Year', value: property.yearBuilt },
                ].map((stat, i) => (
                  <div key={i} className="bg-gray-50 p-8 rounded-[2.5rem] text-center border border-gray-100 group hover:bg-white hover:shadow-xl transition-all duration-500">
                    <div className="flex justify-center mb-4 text-blue-600 transition-transform group-hover:scale-125"><stat.icon className="w-8 h-8" /></div>
                    <div className="font-black text-gray-900 text-2xl tracking-tighter">{stat.value}</div>
                    <div className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] mt-2">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-12 bg-gray-50 p-2 rounded-[2rem] h-20 border border-gray-100">
                  <TabsTrigger value="overview" className="rounded-2xl font-black uppercase tracking-widest text-[10px]">Architecture</TabsTrigger>
                  <TabsTrigger value="tour" className="rounded-2xl font-black uppercase tracking-widest text-[10px]">3D Experience</TabsTrigger>
                  <TabsTrigger value="map" className="rounded-2xl font-black uppercase tracking-widest text-[10px]">Satellite</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-12">
                  <div>
                    <h3 className="text-3xl font-black text-gray-900 mb-8 tracking-tight">Project Narrative</h3>
                    <p className="text-gray-500 leading-relaxed text-xl font-medium">{property.description}</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-gray-900 mb-8 tracking-tight">Luxury Specifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {property.features.map(f => (
                        <div key={f} className="flex items-center text-gray-900 font-black text-sm bg-gray-50 p-6 rounded-2xl border border-gray-100 uppercase tracking-widest">
                          <CheckCircle2 className="w-5 h-5 mr-4 text-blue-600" /> {f}
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          <div className="space-y-10">
            <div className="bg-white rounded-[3.5rem] p-12 shadow-sm border border-gray-50 sticky top-24">
              <h3 className="text-[10px] font-black text-gray-400 mb-10 uppercase tracking-[0.2em]">Primary Consultant</h3>
              <div className="flex items-center mb-12 p-8 bg-gray-900 rounded-[2.5rem] text-white">
                <img src={agent.imageUrl} className="w-24 h-24 rounded-3xl object-cover mr-6 border-4 border-white/10 shadow-2xl" alt={agent.name} />
                <div>
                  <div className="font-black text-white text-2xl tracking-tighter">{agent.name}</div>
                  <div className="text-[10px] text-blue-400 font-black uppercase tracking-widest mt-1">{agent.role}</div>
                </div>
              </div>
              
              <div className="space-y-4 mb-12">
                <Button variant="outline" className="w-full justify-start py-8 rounded-[2rem] border-2 border-gray-50 hover:bg-gray-50 transition-all">
                  <Phone className="w-5 h-5 mr-4 text-blue-600" /> <span className="font-black uppercase tracking-widest text-[10px]">{agent.phone}</span>
                </Button>
                <Button variant="outline" className="w-full justify-start py-8 rounded-[2rem] border-2 border-gray-50 hover:bg-gray-50 transition-all">
                  <Mail className="w-5 h-5 mr-4 text-blue-600" /> <span className="font-black uppercase tracking-widest text-[10px]">{agent.email}</span>
                </Button>
              </div>

              <div className="space-y-5">
                <Input placeholder="Full Name" className="h-16 px-8 rounded-[2rem] border-2 border-gray-50 bg-gray-50 focus:bg-white focus:border-blue-500 transition-all font-bold" />
                <textarea placeholder="Tell us about your requirements..." rows={4} className="w-full p-8 bg-gray-50 rounded-[2.5rem] border-2 border-gray-50 focus:bg-white focus:border-blue-500 outline-none transition-all font-bold text-sm" />
                <Button className="w-full bg-blue-600 hover:bg-blue-700 py-10 rounded-[2.5rem] font-black text-xl shadow-2xl shadow-blue-600/20">Send Brief</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;